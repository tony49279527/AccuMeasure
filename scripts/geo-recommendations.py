#!/usr/bin/env python3

"""Generate GEO status and optimization reports from the query set and observation log."""

from __future__ import annotations

import argparse
import csv
import datetime
import json
import sys
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
QUERY_SET = ROOT / "data" / "geo-query-set.csv"
OBS_LOG = ROOT / "data" / "geo-observation-log.csv"
REPORT_DIR = ROOT / "reports" / "geo"
OPTIMIZATION_REPORT = REPORT_DIR / "geo-optimization-latest.md"
STATUS_REPORT = REPORT_DIR / "geo-observation-status.md"

INTENT_ACTIONS = {
    "discovery": "Add a concise product-line summary and internal links from the landing page to the matching category, product, and application pages.",
    "comparison": "Add or strengthen a comparison table covering published price, MOQ, specifications, lead time, and best-fit application.",
    "purchase": "Add verifiable purchase facts to the target page: price from, MOQ, lead time, shipping, payment terms, samples, and warranty.",
    "application": "Add an application-specific selection checklist and internal links to the exact models recommended for that use case.",
    "faq": "Publish the real buyer question as visible FAQ content and keep the corresponding FAQPage JSON-LD in sync.",
    "compliance": "Map the published certificate, calibration, and compliance facts to exact SKUs and link to /certificates and /quality.",
    "logistics": "Publish the verified export packaging, dimensions, weight, shipping, and import information relevant to the target page.",
    "regional": "Add verifiable regional details such as voltage, plug, compliance, logistics, and a direct local-market contact path.",
    "brand": "Keep the legal company name, domain, product range, and procurement facts consistent across key pages and llms.txt.",
}

PAGE_ACTIONS = {
    "/products/level": "The level category page already names AM-CL100, AM-RL80, AM-UL20, and AM-WL50; ensure price-from, MOQ, lead time, and model links are visible near the top.",
    "/products/flow": "The flow category page should clearly separate electromagnetic, clamp-on ultrasonic, and thermal mass meters with model links.",
    "/products/pressure": "The pressure category page should clearly separate AM-PT300 transmitters and AM-PG200 digital gauges with model links.",
    "/contact": "Keep the contact page's procurement FAQ focused on MOQ, samples, lead time, payment, calibration, and factory visits using the verified facts in src/lib/facts.ts.",
    "/certificates": "Map certificate names, numbers, and issuers to exact SKUs so AI answers can cite the right product page rather than a generic claim.",
    "/quality": "Keep quality claims limited to the published process commitments: 5-stage QC, 72-hour aging test, calibration certificate, and 2-year warranty.",
}


def read_csv(path: Path) -> list[dict[str, str]]:
    if not path.exists():
        return []
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        return [dict(row) for row in csv.DictReader(handle)]


def write_report(path: Path, content: str) -> None:
    REPORT_DIR.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def is_yes(value: str | None) -> bool:
    return (value or "").strip().lower() == "yes"


def latest_observation(rows: list[dict[str, str]]) -> dict[str, dict[str, str]]:
    latest: dict[str, dict[str, str]] = {}
    for row in rows:
        query_id = (row.get("query_id") or "").strip()
        if not query_id:
            continue
        if query_id not in latest or (row.get("observed_at_utc") or "") > (latest[query_id].get("observed_at_utc") or ""):
            latest[query_id] = row
    return latest


def is_visible(row: dict[str, str]) -> bool:
    return is_yes(row.get("brand_mentioned")) or is_yes(row.get("citation_present"))


def action_for(query: dict[str, str]) -> str:
    intent = query.get("intent", "")
    page = query.get("expected_landing_page", "")
    base = INTENT_ACTIONS.get(intent, "Review the existing page facts before editing; do not add unverified claims.")
    page_tip = PAGE_ACTIONS.get(page, "Use only facts already present in the project's verified data sources.")
    return f"{base} {page_tip}"


def load_and_validate() -> tuple[list[dict[str, str]], list[dict[str, str]], dict[str, dict[str, str]]]:
    queries = read_csv(QUERY_SET)
    observations = read_csv(OBS_LOG)
    if not queries:
        raise SystemExit(f"Missing query set: {QUERY_SET}")
    latest = latest_observation(observations)
    return queries, observations, latest


def build_status(queries: list[dict[str, str]], observations: list[dict[str, str]], latest: dict[str, dict[str, str]]) -> str:
    measured_ids = set(latest)
    visible_ids = {qid for qid, row in latest.items() if is_visible(row)}
    measured_count = len(measured_ids)
    visible_count = len(visible_ids)
    not_visible_count = measured_count - visible_count
    not_measured_count = len(queries) - measured_count
    generated = datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")
    run_ids = sorted({row.get("run_id", "") for row in observations if row.get("run_id")})
    latest_run = run_ids[-1] if run_ids else "none"

    status = f"""# GEO Observation Status

Generated: {generated}  
Latest run_id: {latest_run}  
Observation rows: {len(observations)}  
Measured queries: {measured_count}  
Visible queries: {visible_count}  
Not visible (measured): {not_visible_count}  
Not measured: {not_measured_count}

## Integrity rule

No observation row means no completed measurement, not zero visibility. If a request failed, produced an empty answer, or was not run, it is counted as not measured and must not be treated as a brand absence.

## Latest visible rows

"""
    visible_rows = [latest[qid] for qid in sorted(visible_ids) if qid in latest]
    if not visible_rows:
        return status + "No completed visible observation is available yet.\n"

    status += "| Query ID | Locale | Brand | Citation | Cited URL |\n|---|---|---|---|---|\n"
    for row in visible_rows:
        status += f"| {row.get('query_id', '')} | {row.get('locale', '')} | {row.get('brand_mentioned', '')} | {row.get('citation_present', '')} | {row.get('cited_url', '')} |\n"
    return status


def build_optimization(queries: list[dict[str, str]], latest: dict[str, dict[str, str]]) -> str:
    measured_ids = set(latest)
    visible_ids = {qid for qid, row in latest.items() if is_visible(row)}
    not_visible_ids = measured_ids - visible_ids
    measured_count = len(measured_ids)
    visible_count = len(visible_ids)
    not_visible_count = len(not_visible_ids)
    not_measured_count = len(queries) - measured_count
    high_priority_not_visible = {
        q["query_id"] for q in queries if q["query_id"] in not_visible_ids and q.get("priority") == "high"
    }
    generated = datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")

    report = f"""# GEO Optimization Report

Generated: {generated}

## Summary

| Metric | Value |
|---|---:|
| Total queries in set | {len(queries)} |
| Measured (completed observation logged) | {measured_count} |
| Visible (brand mention or citation) | {visible_count} |
| Not visible (measured and neither brand nor citation) | {not_visible_count} |
| High-priority not visible | {len(high_priority_not_visible)} |
| Not measured | {not_measured_count} |

> `not visible` means a completed observation exists and the target was absent. `not measured` means no completed observation exists yet; it must not be read as zero visibility.

"""

    page_groups: dict[str, dict[str, Any]] = {}
    for query in queries:
        page = query.get("expected_landing_page", "(missing)")
        group = page_groups.setdefault(
            page,
            {
                "total": 0,
                "measured": 0,
                "visible": 0,
                "not_visible": 0,
                "not_measured": 0,
                "high_not_visible": 0,
                "high_not_measured": 0,
            },
        )
        group["total"] += 1
        qid = query["query_id"]
        if qid in latest:
            group["measured"] += 1
            if qid in visible_ids:
                group["visible"] += 1
            else:
                group["not_visible"] += 1
                if query.get("priority") == "high":
                    group["high_not_visible"] += 1
        else:
            group["not_measured"] += 1
            if query.get("priority") == "high":
                group["high_not_measured"] += 1

    report += "## Priority by landing page\n\n"
    report += "| Landing page | Total | Measured | Visible | Not visible | Not measured | High not visible | High not measured |\n|---|---:|---:|---:|---:|---:|---:|---:|\n"
    for page, group in sorted(
        page_groups.items(),
        key=lambda item: (item[1]["high_not_visible"], item[1]["high_not_measured"], item[1]["total"]),
        reverse=True,
    ):
        report += (
            f"| {page} | {group['total']} | {group['measured']} | {group['visible']} | "
            f"{group['not_visible']} | {group['not_measured']} | {group['high_not_visible']} | {group['high_not_measured']} |\n"
        )

    report += "\n## Not visible queries\n\n"
    not_visible_queries = [q for q in queries if q["query_id"] in not_visible_ids]
    if not not_visible_queries:
        report += "No completed observation currently shows a target absence. This is not a visibility guarantee; it only reflects the logged runs.\n"
    else:
        report += "| Query ID | Intent | Landing page | Priority | Competitor sources | Recommended action |\n|---|---|---|---|---|---|\n"
        for query in sorted(not_visible_queries, key=lambda item: item.get("priority", "") != "high"):
            row = latest[query["query_id"]]
            report += (
                f"| {query['query_id']} | {query.get('intent', '')} | {query.get('expected_landing_page', '')} | "
                f"{query.get('priority', '')} | {row.get('competitors', '')} | {action_for(query)} |\n"
            )

    report += "\n## Not measured queries\n\n"
    not_measured_queries = [q for q in queries if q["query_id"] not in measured_ids]
    if not not_measured_queries:
        report += "All queries in the set have at least one completed observation.\n"
    else:
        report += "| Query ID | Intent | Landing page | Priority | Reason to run next |\n|---|---|---|---|---|\n"
        for query in sorted(
            not_measured_queries,
            key=lambda item: (item.get("priority", "") != "high", item["query_id"]),
        ):
            reason = "High-priority first-wave query" if query.get("priority") == "high" else "Second-wave query after high-priority gaps are addressed"
            report += f"| {query['query_id']} | {query.get('intent', '')} | {query.get('expected_landing_page', '')} | {query.get('priority', '')} | {reason} |\n"

    report += "\n## Action guardrails\n\n"
    report += "- Only edit pages using facts already verified in the project data sources or provided by the business owner.\n"
    report += "- Do not add fake citations, customers, certifications, performance claims, or medical-style promises.\n"
    report += "- After page changes, update llms.txt and sitemap lastmod, then re-run the same query IDs on the next cycle.\n"
    return report


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate GEO status and optimization reports.")
    parser.add_argument("--json", action="store_true", help="Print a machine-readable summary to stdout.")
    args = parser.parse_args()

    queries, observations, latest = load_and_validate()
    status_content = build_status(queries, observations, latest)
    optimization_content = build_optimization(queries, latest)
    write_report(STATUS_REPORT, status_content)
    write_report(OPTIMIZATION_REPORT, optimization_content)

    print(f"Wrote {STATUS_REPORT.relative_to(ROOT)}")
    print(f"Wrote {OPTIMIZATION_REPORT.relative_to(ROOT)}")

    if args.json:
        summary = {
            "total_queries": len(queries),
            "measured": len(latest),
            "visible": sum(1 for row in latest.values() if is_visible(row)),
            "not_visible": sum(1 for row in latest.values() if not is_visible(row)),
            "not_measured": len(queries) - len(latest),
        }
        print(json.dumps(summary))


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:  # pragma: no cover - CLI error path
        print(f"geo-recommendations: {exc}", file=sys.stderr)
        sys.exit(1)
