#!/usr/bin/env python3
"""GEO baseline observation round 1: 20 high-priority queries via DeepSeek chat.

Writes raw answers to reports/geo/raw/deepseek-2026-09-23-run1/<query_id>.md
and appends observation rows to data/geo-observation-log.csv (repo format).
"""
import csv, os, re, subprocess, sys, time, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RUN_ID = "ds-2026-09-23-run2"
ENGINE = "deepseek"
ENGINE_MODE = "deepseek-chat (no web browsing)"
MODEL = "deepseek-chat"
RAW_DIR = os.path.join(ROOT, "reports", "geo", "raw", RUN_ID)
os.makedirs(RAW_DIR, exist_ok=True)

QUERY_IDS = [
    "AM-D-002",
    "AM-D-004",
    "AM-D-006",
    "AM-D-007",
    "AM-D-008",
    "AM-C-002",
    "AM-C-003",
    "AM-C-005",
    "AM-C-006",
    "AM-C-007",
    "AM-C-008",
    "AM-P-003",
    "AM-P-004",
    "AM-P-006",
    "AM-P-007",
    "AM-A-003",
    "AM-A-004",
    "AM-A-005",
    "AM-A-006",
    "AM-A-007",
    "AM-A-008",
    "AM-A-009",
    "AM-A-010",
    "AM-F-001",
    "AM-F-003",
    "AM-F-005",
    "AM-F-006",
    "AM-F-007",
    "AM-F-008",
    "AM-F-009",
    "AM-F-010",
    "AM-CO-001",
    "AM-CO-003",
    "AM-CO-005",
    "AM-CO-006",
    "AM-CO-007",
    "AM-CO-008",
    "AM-L-001",
    "AM-L-003",
    "AM-L-004",
    "AM-L-005",
    "AM-L-006",
    "AM-L-007",
    "AM-L-008",
    "AM-R-001",
    "AM-R-002",
    "AM-R-003",
    "AM-R-005",
    "AM-R-006",
    "AM-R-007",
    "AM-R-008",
    "AM-B-003",
    "AM-B-004",
    "AM-B-006",
    "AM-B-007",
    "AM-B-008",
]

COMPETITORS = ["siemens", "emerson", "endress+hauser", "endress hauser", "e+h",
               "vega", "honeywell", "yokogawa", "abb", "krohne", "wika",
               "ifm", "sick", "omega", "dwyer"]

def load_queries():
    out = {}
    with open(os.path.join(ROOT, "data", "geo-query-set.csv"), encoding="utf-8") as f:
        for r in csv.DictReader(f):
            if r["query_id"] in QUERY_IDS:
                out[r["query_id"]] = r
    missing = set(QUERY_IDS) - set(out)
    if missing:
        raise SystemExit(f"missing queries: {missing}")
    return out

def ask(query):
    p = subprocess.run(
        [os.path.expanduser("~/workspace/skills/deepseek/bin/ds"),
         "chat", MODEL, query],
        capture_output=True, text=True, timeout=180)
    if p.returncode != 0:
        raise RuntimeError(f"ds chat failed: {p.stderr[:300]}")
    raw = p.stdout.strip()
    # ds prints the raw API JSON envelope; extract the message content
    try:
        import json as _json
        payload = _json.loads(raw)
        content = payload["choices"][0]["message"]["content"]
        model_used = payload.get("model", MODEL)
        return content, model_used
    except Exception:
        return raw, MODEL

def analyze(answer):
    low = answer.lower()
    brand = "accumeasure" in low
    cited = "accumeasuretech.com" in low
    urls = sorted(set(re.findall(r"https?://[^\s\)\]\"'<>]+", answer)))
    cited_urls = [u for u in urls if "accumeasuretech.com" in u]
    comps = sorted({c for c in COMPETITORS if c in low})
    return brand, cited, cited_urls, comps, urls

def main():
    queries = load_queries()
    log_path = os.path.join(ROOT, "data", "geo-observation-log.csv")
    new_rows = []
    for qid in QUERY_IDS:
        q = queries[qid]
        print(f"[{qid}] asking...", flush=True)
        try:
            ans, model_used = ask(q["query"])
        except Exception as e:
            print(f"[{qid}] ERROR {e}", flush=True)
            ans, model_used = f"__ERROR__ {e}", MODEL
        with open(os.path.join(RAW_DIR, f"{qid}.md"), "w", encoding="utf-8") as f:
            f.write(f"# {qid} — {q['intent']} / {q['family']}\n\n")
            f.write(f"Query: {q['query']}\n\nEngine: {ENGINE_MODE} (model: {model_used})\n\n---\n\n{ans}\n")
        brand, cited, cited_urls, comps, urls = analyze(ans)
        new_rows.append({
            "run_id": RUN_ID,
            "observed_at_utc": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
            "engine": ENGINE, "engine_mode": ENGINE_MODE, "locale": q["locale"],
            "query_id": qid, "variant_id": q["variant_id"],
            "brand_mentioned": str(brand).lower(),
            "citation_present": str(cited).lower(),
            "cited_url": "; ".join(cited_urls),
            "citation_position": "", "answer_accuracy_1_to_5": "",
            "sentiment": "", "competitors": "; ".join(comps),
            "reviewer": "muse-agent",
            "notes": f"auto-detect; urls_found={len(urls)}",
        })
        print(f"[{qid}] brand={brand} cited={cited} comps={comps}", flush=True)
        time.sleep(2)
    header = ["run_id","observed_at_utc","engine","engine_mode","locale","query_id",
              "variant_id","brand_mentioned","citation_present","cited_url",
              "citation_position","answer_accuracy_1_to_5","sentiment","competitors",
              "reviewer","notes"]
    write_header = not os.path.exists(log_path) or os.path.getsize(log_path) == 0
    # repo file already has header; never duplicate it
    if os.path.exists(log_path):
        with open(log_path, encoding="utf-8") as f:
            first = f.read(200)
        write_header = "run_id" not in first
    with open(log_path, "a", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=header)
        if write_header:
            w.writeheader()
        w.writerows(new_rows)
    print(f"done: {len(new_rows)} rows -> {log_path}")

if __name__ == "__main__":
    main()
