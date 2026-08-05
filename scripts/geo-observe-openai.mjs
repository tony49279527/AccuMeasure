#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_DIR = path.join(ROOT, "data");
const REPORT_DIR = path.join(ROOT, "reports", "geo");
const RAW_DIR = path.join(REPORT_DIR, "raw");
const QUERY_SET_PATH = path.join(DATA_DIR, "geo-query-set.csv");
const OBS_LOG_PATH = path.join(DATA_DIR, "geo-observation-log.csv");

const DEFAULT_MODEL = process.env.GEO_OPENAI_MODEL || "gpt-4o-mini-search-preview";
const DEFAULT_MAX_OUTPUT_TOKENS = Number(process.env.GEO_MAX_OUTPUT_TOKENS || 2000);
const DEFAULT_MAX_RETRIES = Number(process.env.GEO_MAX_RETRIES || 2);
const DEFAULT_TIMEOUT_MS = Number(process.env.GEO_TIMEOUT_MS || 120000);
const DEFAULT_DELAY_MS = Number(process.env.GEO_DELAY_MS || 1500);
const TARGET_URL = process.env.GEO_TARGET_URL || "https://www.accumeasuretech.com";
const TARGET_HOST = new URL(TARGET_URL).hostname;
const FATAL_API_STATUSES = [400, 401, 402, 403, 404, 429];

const LOG_HEADER = [
  "run_id",
  "observed_at_utc",
  "engine",
  "engine_mode",
  "locale",
  "query_id",
  "variant_id",
  "brand_mentioned",
  "citation_present",
  "cited_url",
  "citation_position",
  "answer_accuracy_1_to_5",
  "sentiment",
  "competitors",
  "reviewer",
  "notes",
];

const BRAND_TERMS = ["accumeasure", "accumeasuretech", "西安精准测量仪器"];
const REQUIRED_QUERY_FIELDS = [
  "query_id",
  "locale",
  "family",
  "intent",
  "variant_id",
  "query",
  "expected_landing_page",
  "priority",
];

function loadEnvLocal() {
  const envPath = path.join(ROOT, ".env.local");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const match = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    const [, name, rawValue] = match;
    if (process.env[name] !== undefined) continue;
    let value = rawValue.trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    process.env[name] = value;
  }
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"') {
      if (quoted && next === '"') {
        field += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      row.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      if (row.length > 0 || field.length > 0) {
        row.push(field);
        rows.push(row);
      }
      row = [];
      field = "";
    } else {
      field += char;
    }
  }
  if (row.length > 0 || field.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function loadQuerySet() {
  if (!fs.existsSync(QUERY_SET_PATH)) {
    throw new Error(`Missing query set: ${QUERY_SET_PATH}`);
  }
  const rows = parseCsv(fs.readFileSync(QUERY_SET_PATH, "utf8"));
  if (rows.length < 2) {
    throw new Error(`Query set has no data rows: ${QUERY_SET_PATH}`);
  }
  const headers = rows[0].map((value) => value.replace(/^\uFEFF/, ""));
  for (const field of REQUIRED_QUERY_FIELDS) {
    if (!headers.includes(field)) {
      throw new Error(`Query set is missing required column: ${field}`);
    }
  }
  return rows.slice(1).map((row) => {
    const query = {};
    headers.forEach((header, index) => {
      query[header] = row[index] || "";
    });
    return query;
  });
}

function argValue(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function parseIntArg(value, fallback) {
  const parsed = Number.parseInt(value || "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function callOpenAI({ query, apiKey, model, maxOutputTokens, timeoutMs }) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        input: query,
        tools: [{ type: "web_search_preview" }],
        max_output_tokens: maxOutputTokens,
        store: false,
      }),
      signal: controller.signal,
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(`OpenAI API request failed with HTTP ${response.status}`);
      error.status = response.status;
      error.payload = payload;
      throw error;
    }
    return payload;
  } finally {
    clearTimeout(timer);
  }
}

async function callWithRetry(query, { apiKey, model, maxOutputTokens, timeoutMs, maxRetries }) {
  let lastError;
  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    try {
      return await callOpenAI({
        query: query.query,
        apiKey,
        model,
        maxOutputTokens,
        timeoutMs,
      });
    } catch (error) {
      lastError = error;
      if (FATAL_API_STATUSES.includes(error.status)) throw error;
      if (attempt < maxRetries) {
        await sleep(2000 * (attempt + 1));
      }
    }
  }
  throw lastError;
}

function cleanUrl(value) {
  let url = value.trim();
  url = url.replace(/[.,;:!?]+$/, "");
  while (url.endsWith(")")) {
    const opens = (url.match(/\(/g) || []).length;
    const closes = (url.match(/\)/g) || []).length;
    if (closes > opens) url = url.slice(0, -1);
    else break;
  }
  return url;
}

function extractAnswer(payload) {
  const parts = [];
  const push = (value) => {
    if (typeof value === "string" && value.trim()) parts.push(value.trim());
  };
  for (const item of payload.output || []) {
    if (item?.type === "message") {
      for (const content of item.content || []) {
        if (content?.type === "output_text") push(content.text);
        if (typeof content?.text === "string") push(content.text);
        if (typeof content?.value === "string") push(content.value);
      }
    }
    if (typeof item?.text === "string") push(item.text);
  }
  if (typeof payload.output_text === "string") push(payload.output_text);
  return parts.join("\n\n");
}

function extractMessageUrls(payload) {
  const urls = [];
  const seen = new Set();
  const add = (url) => {
    const cleaned = cleanUrl(url);
    if (!cleaned || seen.has(cleaned)) return;
    seen.add(cleaned);
    urls.push(cleaned);
  };
  for (const item of payload.output || []) {
    if (item?.type !== "message") continue;
    for (const content of item.content || []) {
      if (content?.type === "output_text" && typeof content.text === "string") {
        for (const match of content.text.matchAll(/https?:\/\/[^\s<>"'\]\)]+/gi)) {
          add(match[0]);
        }
      }
      for (const annotation of content.annotations || []) {
        add(annotation.url_citation?.url || annotation.url || "");
      }
    }
  }
  if (typeof payload.output_text === "string") {
    for (const match of payload.output_text.matchAll(/https?:\/\/[^\s<>"'\]\)]+/gi)) {
      add(match[0]);
    }
  }
  return urls;
}

function answerCitations(answer) {
  const citations = [];
  const seen = new Set();
  const regex = /https?:\/\/[^\s<>"'\]\)]+/gi;
  let match;
  while ((match = regex.exec(answer)) !== null) {
    const url = cleanUrl(match[0]);
    if (!url || seen.has(url)) continue;
    seen.add(url);
    citations.push({ url, position: match.index });
  }
  return citations;
}

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "";
  }
}

function isTargetUrl(url) {
  return hostOf(url) === TARGET_HOST.replace(/^www\./, "").toLowerCase();
}

function detectBrand(text) {
  const lower = text.toLowerCase();
  return BRAND_TERMS.some((term) => lower.includes(term.toLowerCase()));
}

function competitorDomains(urls) {
  const target = TARGET_HOST.replace(/^www\./, "").toLowerCase();
  const domains = new Set();
  for (const url of urls) {
    const host = hostOf(url);
    if (host && host !== target && host !== "openai.com") domains.add(host);
  }
  return [...domains];
}

function csvCell(value) {
  const text = value === null || value === undefined ? "" : String(value);
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function observationRow({ runId, query, answer, brandMentioned, targetCitations, allCitations, payload }) {
  const firstTarget = targetCitations[0] || null;
  const targetIndex = firstTarget ? allCitations.findIndex((item) => item.url === firstTarget.url) : -1;
  return {
    run_id: runId,
    observed_at_utc: new Date().toISOString(),
    engine: "openai-responses",
    engine_mode: "web_search_preview",
    locale: query.locale,
    query_id: query.query_id,
    variant_id: query.variant_id,
    brand_mentioned: brandMentioned ? "yes" : "no",
    citation_present: firstTarget ? "yes" : "no",
    cited_url: firstTarget?.url || "",
    citation_position: firstTarget ? String(targetIndex + 1) : "none",
    answer_accuracy_1_to_5: "",
    sentiment: "",
    competitors: competitorDomains(allCitations).join("; "),
    reviewer: "",
    notes: `answer_chars=${answer.length}; citations=${allCitations.length}; status=${payload.status}`,
  };
}

function appendObservation(row) {
  const shouldWriteHeader = !fs.existsSync(OBS_LOG_PATH) || fs.readFileSync(OBS_LOG_PATH, "utf8").trim().length === 0;
  if (shouldWriteHeader) {
    fs.writeFileSync(OBS_LOG_PATH, `${LOG_HEADER.join(",")}\n`);
  }
  fs.appendFileSync(OBS_LOG_PATH, `${LOG_HEADER.map((key) => csvCell(row[key] || "")).join(",")}\n`);
}

function saveRawReport({ runId, query, status, answer, payload, error }) {
  fs.mkdirSync(path.join(RAW_DIR, runId), { recursive: true });
  const suffix = error ? "error" : "response";
  const file = path.join(RAW_DIR, runId, `${query.query_id}-${query.variant_id}-${suffix}.json`);
  fs.writeFileSync(
    file,
    `${JSON.stringify(
      {
        run_id: runId,
        observed_at_utc: new Date().toISOString(),
        engine: "openai-responses",
        engine_mode: "web_search_preview",
        query,
        target_url: TARGET_URL,
        status,
        answer,
        payload,
        error: error ? { message: error.message, status: error.status } : undefined,
      },
      null,
      2,
    )}\n`,
  );
  return file;
}

function printHelp() {
  console.log(`GEO OpenAI observation script

Usage:
  node scripts/geo-observe-openai.mjs [options]

Options:
  --query-id <id>       Run one query_id (repeatable not required; comma-separated supported)
  --family <family>     Filter by family (level, flow, pressure, iot, oem, brand)
  --intent <intent>     Filter by intent (discovery, comparison, purchase, application, faq, compliance, logistics, regional, brand)
  --priority <value>    Filter by priority (high, medium, low)
  --limit <number>      Limit number of queries
  --dry-run             Validate selection and print queries without calling OpenAI
  --model <model>       Override the OpenAI model
  --max-output-tokens   Override max output tokens
  --timeout <ms>        Override request timeout
  --delay <ms>          Override delay between queries
  --help                Show this help

Environment:
  OPENAI_API_KEY          Required unless --dry-run
  GEO_TARGET_URL          Optional target URL, defaults to https://www.accumeasuretech.com
  GEO_OPENAI_MODEL        Optional model override
  GEO_MAX_OUTPUT_TOKENS   Optional token limit override
  GEO_MAX_RETRIES         Optional retry count override
  GEO_TIMEOUT_MS          Optional timeout override
  GEO_DELAY_MS            Optional delay override`);
}

async function main() {
  loadEnvLocal();
  if (process.argv.includes("--help")) {
    printHelp();
    return;
  }

  const dryRun = process.argv.includes("--dry-run");
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey && !dryRun) {
    throw new Error("OPENAI_API_KEY is required. Set it in .env.local or the environment.");
  }

  const allQueries = loadQuerySet();
  const queryIdFilter = argValue("--query-id");
  const familyFilter = argValue("--family");
  const intentFilter = argValue("--intent");
  const priorityFilter = argValue("--priority");
  const limit = parseIntArg(argValue("--limit"), 0);
  const model = argValue("--model") || DEFAULT_MODEL;
  const maxOutputTokens = parseIntArg(argValue("--max-output-tokens"), DEFAULT_MAX_OUTPUT_TOKENS);
  const timeoutMs = parseIntArg(argValue("--timeout"), DEFAULT_TIMEOUT_MS);
  const delayMs = parseIntArg(argValue("--delay"), DEFAULT_DELAY_MS);
  const maxRetries = parseIntArg(process.env.GEO_MAX_RETRIES, DEFAULT_MAX_RETRIES);

  let queries = allQueries.filter((query) => {
    if (queryIdFilter) {
      const ids = queryIdFilter.split(",").map((id) => id.trim());
      if (!ids.includes(query.query_id)) return false;
    }
    if (familyFilter && query.family !== familyFilter) return false;
    if (intentFilter && query.intent !== intentFilter) return false;
    if (priorityFilter && query.priority !== priorityFilter) return false;
    return true;
  });

  if (limit > 0) queries = queries.slice(0, limit);

  if (queries.length === 0) {
    console.log("No queries match the requested filters.");
    return;
  }

  const runId = new Date().toISOString().replace(/[:.]/g, "-");
  console.log(`GEO run ${runId}`);
  console.log(`Selected ${queries.length} queries; target ${TARGET_URL}; model ${model}; dry_run=${dryRun}`);

  if (dryRun) {
    for (const query of queries) {
      console.log(`${query.query_id} [${query.locale}/${query.intent}/${query.priority}] ${query.query} -> ${query.expected_landing_page}`);
    }
    console.log("Dry-run complete. No API calls were made and no observation rows were written.");
    return;
  }

  let loggedCount = 0;
  let stopped = false;
  for (let index = 0; index < queries.length; index += 1) {
    const query = queries[index];
    const label = `${query.query_id} ${query.query}`;
    let payload;
    try {
      payload = await callWithRetry(query, {
        apiKey,
        model,
        maxOutputTokens,
        timeoutMs,
        maxRetries,
      });
    } catch (error) {
      saveRawReport({ runId, query, status: "error", answer: "", payload: error.payload || {}, error });
      if (FATAL_API_STATUSES.includes(error.status)) {
        console.error(`Stopping after ${error.status}: ${error.message}`);
        stopped = true;
        break;
      }
      console.error(`Failed ${label}: ${error.message}`);
      if (index < queries.length - 1) await sleep(delayMs);
      continue;
    }

    const answer = extractAnswer(payload);
    const answerUrlList = answerCitations(answer);
    const messageUrlList = extractMessageUrls(payload);
    const mergedUrls = answerUrlList.concat(
      messageUrlList
        .filter((url) => !answerUrlList.some((item) => item.url === url))
        .map((url) => ({ url, position: -1 })),
    );
    const searchableOutput = `${answer}\n${JSON.stringify(payload.output || [])}`;
    const brandMentioned = detectBrand(searchableOutput);
    const targetCitations = mergedUrls.filter((item) => isTargetUrl(item.url));
    const rawPath = saveRawReport({
      runId,
      query,
      status: payload.status,
      answer,
      payload,
    });

    if (payload.status === "completed" && answer.trim()) {
      const row = observationRow({
        runId,
        query,
        answer,
        brandMentioned,
        targetCitations,
        allCitations: mergedUrls,
        payload,
      });
      appendObservation(row);
      loggedCount += 1;
      console.log(`Logged ${label}; brand=${row.brand_mentioned}; citation=${row.citation_present}`);
    } else {
      console.warn(`Not logged ${label}: status=${payload.status}; answer_chars=${answer.length}`);
    }
    console.log(`Raw report: ${path.relative(ROOT, rawPath)}`);
    if (index < queries.length - 1) await sleep(delayMs);
  }

  console.log(`GEO run complete. Logged ${loggedCount} observation(s).`);
  if (stopped) process.exitCode = 2;
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
