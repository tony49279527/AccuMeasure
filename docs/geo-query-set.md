# GEO Query Set — AccuMeasure

**Purpose:** Standardized query set for monthly Generative Engine Optimization (GEO) re-testing across Perplexity, ChatGPT, Copilot, and Gemini.

**Testing protocol:**
1. Run each query in incognito/private mode on all 4 platforms
2. Record: brand mention (Y/N), source citation (Y/N), citation position (1st/2nd/3rd/none), accuracy (correct/wrong/missing), sentiment (pos/neutral/neg)
3. Screenshot each result for evidence
4. Re-test monthly; track score delta over time

**Scoring (per query, per platform):**
- Brand mention: Y=20, N=0
- Source citation: Y=20, N=0
- Citation position: 1st=15, 2nd=10, 3rd=5, none=0
- Accuracy: correct=20, wrong=0, missing=10
- Sentiment: pos=10, neutral=5, neg=0
- Query coverage: (queries with mention ÷ total queries) × 5

---

## Category A: Brand Queries (10 queries)

| # | Query | Intent | Last Tested | Mention | Citation | Pos | Acc | Sent |
|---|-------|--------|-------------|---------|----------|-----|-----|------|
| A1 | AccuMeasure Instruments | Brand discovery | — | — | — | — | — | — |
| A2 | AccuMeasure level sensor | Brand + product | — | — | — | — | — | — |
| A3 | AccuMeasure flow meter | Brand + product | — | — | — | — | — | — |
| A4 | AccuMeasure pressure transmitter | Brand + product | — | — | — | — | — | — |
| A5 | 西安精准测量仪器 | Brand (CN) | — | — | — | — | — | — |
| A6 | AccuMeasure Xi'an factory | Brand + location | — | — | — | — | — | — |
| A7 | accumeasuretech.com | Domain lookup | — | — | — | — | — | — |
| A8 | AccuMeasure ISO 9001 certified | Brand + cert | — | — | — | — | — | — |
| A9 | AccuMeasure ATEX certified | Brand + cert | — | — | — | — | — | — |
| A10 | AccuMeasure Alibaba supplier | Brand + platform | — | — | — | — | — | — |

## Category B: Product-Specific Queries (15 queries)

| # | Query | Intent | Last Tested | Mention | Citation | Pos | Acc | Sent |
|---|-------|--------|-------------|---------|----------|-----|-----|------|
| B1 | 80GHz radar level transmitter manufacturer | Product search | — | — | — | — | — | — |
| B2 | capacitive level sensor industrial | Product search | — | — | — | — | — | — |
| B3 | ultrasonic level sensor chemical tank | Product + use case | — | — | — | — | — | — |
| B4 | WiFi level sensor IoT tank monitoring | Product + feature | — | — | — | — | — | — |
| B5 | electromagnetic flow meter DN600 | Product + spec | — | — | — | — | — | — |
| B6 | clamp-on ultrasonic flow meter | Product type | — | — | — | — | — | — |
| B7 | thermal mass flow controller gas | Product type | — | — | — | — | — | — |
| B8 | piezoresistive pressure transmitter 100MPa | Product + spec | — | — | — | — | — | — |
| B9 | digital pressure gauge battery powered | Product + feature | — | — | — | — | — | — |
| B10 | radar level transmitter ATEX certified | Product + cert | — | — | — | — | — | — |
| B11 | level sensor for water treatment plant | Product + industry | — | — | — | — | — | — |
| B12 | flow meter for chemical industry | Product + industry | — | — | — | — | — | — |
| B13 | pressure sensor hydraulic system | Product + industry | — | — | — | — | — | — |
| B14 | level measurement 80 meter range | Product + capability | — | — | — | — | — | — |
| B15 | industrial measurement instrument China factory | Source factory | — | — | — | — | — | — |

## Category C: Comparison Queries (8 queries)

| # | Query | Intent | Last Tested | Mention | Citation | Pos | Acc | Sent |
|---|-------|--------|-------------|---------|----------|-----|-----|------|
| C1 | AccuMeasure vs Vega level transmitter | Brand comparison | — | — | — | — | — | — |
| C2 | AccuMeasure vs Endress+Hauser flow meter | Brand comparison | — | — | — | — | — | — |
| C3 | Chinese level sensor manufacturers comparison | Regional comparison | — | — | — | — | — | — |
| C4 | best radar level transmitter under $2000 | Price + best | — | — | — | — | — | — |
| C5 | 80GHz vs 26GHz radar level sensor | Tech comparison | — | — | — | — | — | — |
| C6 | capacitive vs ultrasonic level sensor | Tech comparison | — | — | — | — | — | — |
| C7 | electromagnetic vs ultrasonic flow meter | Tech comparison | — | — | — | — | — | — |
| C8 | AccuMeasure vs Emerson pressure transmitter | Brand comparison | — | — | — | — | — | — |

## Category D: Procurement / B2B Intent (7 queries)

| # | Query | Intent | Last Tested | Mention | Citation | Pos | Acc | Sent |
|---|-------|--------|-------------|---------|----------|-----|-----|------|
| D1 | level sensor manufacturer China OEM | Sourcing | — | — | — | — | — | — |
| D2 | industrial flow meter wholesale supplier | B2B sourcing | — | — | — | — | — | — |
| D3 | pressure transmitter factory direct | B2B sourcing | — | — | — | — | — | — |
| D4 | measurement instrument manufacturer Xi'an | Regional sourcing | — | — | — | — | — | — |
| D5 | level sensor MOQ 50 units China | B2B + MOQ | — | — | — | — | — | — |
| D6 | custom level sensor manufacturer OEM ODM | Custom mfg | — | — | — | — | — | — |
| D7 | ISO 9001 certified level sensor supplier | B2B + cert | — | — | — | — | — | — |

---

## Platforms to Test

| Platform | URL | Notes |
|----------|-----|-------|
| Perplexity | perplexity.ai | Best for source citations; check "Sources" panel |
| ChatGPT | chat.com | Check "Search" / browsing mode; note inline citations |
| Microsoft Copilot | copilot.microsoft.com | Powered by Bing; check "Learn more" links |
| Google Gemini | gemini.google.com | Check "Sources" / "Related" panel |

## Monthly Test Log

| Date | Tester | Total Queries | Brand Mention Rate | Citation Rate | Avg Position | Avg Accuracy | Notes |
|------|--------|---------------|-------------------|---------------|--------------|-------------|-------|
| — | — | 40 | — | — | — | — | Baseline (pre-deployment) |

## Action Triggers

- **Brand mention rate < 30%** → urgently strengthen entity trust (Person schema, external profiles, press mentions)
- **Citation rate < 20%** → improve extractable fact density (EFD) on product pages
- **Accuracy < 80%** → fix factual errors or add clearer facts on site
- **Avg position > 2.5** → improve content structure (tables, comparison blocks, FAQ)
