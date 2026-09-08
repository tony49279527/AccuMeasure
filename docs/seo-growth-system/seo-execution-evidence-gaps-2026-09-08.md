# SEO Execution Evidence Gaps - 2026-09-08

## Sources Checked

- `src/lib/products.ts` contains published catalog copy for AM-RL80, AM-EMF100, AM-UF200, and AM-MF50, but it is not a controlled datasheet or engineering sign-off.
- `public/products/` contains product images only. No AM-RL80, AM-EMF100, AM-UF200, or AM-MF50 public PDF, installation drawing, certificate scan, or test report is present.
- `docs/seo-growth-system/evidence-manifest.csv` lists published product, case, and factory image sets only; it contains no approved model document asset.
- `docs/seo-growth-system/claim-to-evidence-matrix.csv` marks C001 through C014 as `pending` and `unapproved`, including AM-RL80 ATEX/IECEx scope.

## Minimum Required Before Publishing New Capability Content

| Plan item | Model / query | Missing file or sign-off | Owner | Public action until received |
| --- | --- | --- | --- | --- |
| A1 | AM-EMF100; `atex flow meter` | Current model datasheet and hazardous-area certificate or written confirmation that no applicable configuration is offered; issuer, marking, exact scope, and validity if a certificate exists. | Engineering | `evidence-pending`; do not publish an ATEX/IECEx capability row. |
| A1 | AM-UF200; non-invasive / portable flow | Current datasheet distinguishing fixed and portable configurations, supported pipe and fluid conditions, and installation instructions. | Engineering | `evidence-pending`; do not map a portable query to AM-UF200 as a confirmed configuration. |
| A1 | AM-MF50; `portable mass flow meter` | Current datasheet stating medium, measurement scope, installation form, and whether any portable configuration exists. | Engineering | `evidence-pending`; do not describe a portable mass-flow product. |
| A2 | AM-RL80 | Same-version datasheet, installation drawing, range/temperature/pressure test conditions, output/configuration scope, and any approved certificate evidence. | Engineering | `evidence-pending`; retain configuration-review and controlled-document request only. |
| A5 | Flow hazardous-area guide | Approved A1 model/document mapping plus a named technical reviewer and evidence that the guide adds information beyond `/products/flow`. | Engineering + SEO | `do-not-publish`; no new exact-match URL or certificate table. |
| Conversion validation | AM-RL80 and flow RFQs | Named RFI owner and verified production delivery route for email or webhook. | Operations | Do not claim successful browser submission equals lead delivery; use invalid-payload smoke only. |

## Handling Rule

These gaps are not requests to publish internal files. The owner should provide an approved public summary or controlled-document review path with exact model scope. Until then, documents, certifications, customer records, and test data remain `do-not-publish`.
