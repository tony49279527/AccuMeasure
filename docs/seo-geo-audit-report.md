# AccuMeasure SEO + GEO Audit Report

**Audit Date:** 2026-07-04 (Round 1) / 2026-07-05 (Round 2, post-deployment)
**Auditor:** TRAE AI Assistant / Cursor Agent
**Site:** accumeasuretech.com (live)
**Methodology:** 8-module weighted scoring framework

---

## Round 2 Update (2026-07-05, live-site re-audit)

**Total Score: 3.68 / 5.00 (73.6%)** — up from 3.52 (70.3%)

Live checks performed: homepage/product/robots/sitemap all HTTP 200; apex 308 → www;
canonical, `robots` meta, and JSON-LD verified on live HTML; IndexNow key file live (200)
and 26 sitemap URLs submitted to IndexNow (202 Accepted).

| # | Module | Weight | Round 1 | Round 2 | What changed |
|---|--------|--------|---------|---------|--------------|
| 1 | Technical & Index Health | 18% | 4.2 | 4.5 | Site live; IndexNow key deployed + 26 URLs submitted; hreflang x-default fixed (homepage `alternates` override was dropping it) |
| 2 | Page & Info Architecture | 16% | 4.5 | 4.5 | ItemList schema added to 3 category pages |
| 3 | Content Quality & Extractable Facts | 16% | 3.5 | 3.8 | Certificate numbers (ISO/CE/ATEX/RoHS + issuer) now on all 9 product pages — closes I-03; case study dates visible — raises EAR |
| 4 | Page Experience & Performance | 10% | 3.0 | 3.0 | Still no Lighthouse/PSI baseline (next: run post-deploy) |
| 5 | Entity Trust & E-E-A-T | 14% | 3.0 | 3.0 | Blocked on real media + real phone number (see P0 below) |
| 6 | Structured Data | 8% | 4.5 | 4.8 | Duplicate Organization/WebSite on homepage removed; ContactPage + FAQPage on /contact; Article dates added; Schema CI: 121 blocks, 0 errors |
| 7 | GEO Visibility | 12% | 1.5 | 1.5 | Query Set ready; site now live so testing is unblocked — first round pending |
| 8 | Conversion Path | 6% | 4.0 | 4.3 | Resend email delivery wired into /api/inquiry; product-prefilled WhatsApp links; post-submit WhatsApp CTA |

**P0 blockers for inquiry generation (user action required — code cannot fix these):**

1. ~~WhatsApp/phone number is fake~~ **RESOLVED 2026-07-05**: real number +86-183-0928-5711
   deployed site-wide and verified live.
2. **Email delivery unconfigured.** Set `RESEND_API_KEY` + `EMAIL_TO` in Vercel env vars,
   otherwise form submissions only land in Vercel logs.
3. **MX records missing** for info@accumeasuretech.com (see Section 8.3).
4. **GSC + Bing Webmaster not verified** — blocks index requests and AI Performance
   monitoring (see Sections 8.1 / 8.2).

### Round 2b (2026-07-05 afternoon) — additional issues closed

| Issue | Status | Evidence |
|-------|--------|----------|
| Fake phone/WhatsApp number | **Closed** | `wa.me/8618309285711` verified on live homepage |
| I-04 No Lighthouse/PSI baseline | **Closed** | Lighthouse 12 (mobile emulation): homepage Perf 96 / A11y 96 / BP 100 / SEO 100, LCP 2.1s, CLS 0; AM-RL80 product page Perf 95 / SEO 100, LCP 2.7s, CLS 0. All within CWV "good" thresholds. CrUX field data pending traffic. |
| I-10 No case study detail routes | **Closed** | `/case-studies/[slug]` SSG routes live (3 pages, HTTP 200) with Article schema, product cross-links, WhatsApp CTA |
| I-11 No sitemap image extension | **Closed** | Custom `/sitemap.xml` route handler (Next 14 lacks native `images` support); 29 URLs + 12 `image:image` entries verified live |
| IndexNow re-submission | Done | 29 URLs submitted, 200 OK |

Performance module score updated: 3.0 → **4.5** (lab data excellent; field data pending).
Info Architecture: 4.5 → **4.6** (case deep-links). **New total: ≈ 3.86 / 5.00 (77.2%)**

---

## Round 3 (2026-07-05 evening) — EFD quantification + GEO observation baseline

### EFD/EAR quantification (closes I-06)

New repeatable tool: `scripts/efd-audit.cjs` (run after `next build`). Counts
atomic-fact proxies (spec values with units, standards, cert numbers, MOQ/lead-time,
trade terms) against visible word count, per the methodology formula
`EFD = facts / 300 words × 100`.

| Page | Words | Facts | EFD | EAR | Verdict |
|------|------:|------:|----:|----:|---------|
| Homepage | 514 | 26 | 15.2 | 0.08 | strong (was 9.7 before "At a Glance" fact block) |
| AM-RL80 radar | 968 | 87 | 27.0 | 0.09 | strong |
| AM-PT300 pressure | 794 | 68 | 25.7 | 0.12 | strong |
| AM-CL100 capacitive | 905 | 73 | 24.2 | 0.08 | strong |
| AM-UL20 ultrasonic | 840 | 63 | 22.5 | 0.10 | strong |
| AM-EMF100 emf | 886 | 60 | 20.3 | 0.13 | strong |
| /customization | 460 | 31 | 20.2 | 0.00 | strong |
| AM-MF50 / AM-UF200 / AM-PG200 / AM-WL50 | — | — | 15.5–16.4 | 0.14 | strong |
| /quality | 268 | 14 | 15.7 | 0.14 | strong |
| /certificates | 574 | 29 | 15.2 | 0.41 | strong |
| /about | 517 | 15 | 8.7 | 0.60 | fair (narrative page; highest EAR on site) |

**All 9 product pages meet the EFD ≥ 15 acceptance threshold** (see Section 8.7
checklist item). Homepage was below (9.7) and fixed by adding a 12-item
"AccuMeasure at a Glance" fact grid (founded/facility/team/certs/price/MOQ/
lead time/warranty/markets). Note: EAR is systematically undercounted by the
proxy script (it only recognizes cert-number and issuer patterns as evidence);
treat trends, not absolutes.

### GEO observation baseline (first entry in the observation layer)

Recorded 2026-07-05, via web search (engine-mediated; AI-platform runs still pending):

| Check | Result |
|-------|--------|
| Brand query "AccuMeasure Instruments Xi'an" | Site NOT in results; competitors dominate: Xi'an Acme M&C (pressureleveltransmitter.com), MTI "Accumeasure" brand (vitrek.com) — **brand-name collision risk confirmed (I-05)** |
| Brand + domain query | Synthesis correctly identifies "AccuMeasure Instruments Co., Ltd. (accumeasuretech.com), High-Tech Zone Xi'an" as a distinct entity — entity disambiguation is working at the knowledge layer |
| `site:` on Bing | Domain recognized, indexing in progress (IndexNow submitted 29 URLs) |
| `site:` on Google | Zero results — **GSC ownership verified, but sitemap indexing still pending** |

Implication: the #1 GEO lever right now is **time + external entity signals**
(LinkedIn company page, B2B directory listings with consistent NAP), not more
on-site optimization. The MTI Instruments "Accumeasure" brand collision makes
external disambiguation signals (sameAs links, consistent legal name) more
important than for a typical site.

### E-E-A-T consistency fix

Blog posts now show a visible byline ("By AccuMeasure Engineering Team") matching
the `author` in Article schema — closes the visible-text/schema consistency gap
flagged by the methodology's structured-data rules.

### Round 3 score movement

| Module | R2b | R3 | Reason |
|--------|-----|-----|--------|
| Content Quality & Extractable Facts | 3.8 | **4.3** | EFD quantified + all core pages ≥ threshold; homepage fact block |
| GEO Visibility | 1.5 | **2.0** | Observation layer now live with recorded baseline; still 0 citations (site too new) |
| Entity Trust & E-E-A-T | 3.0 | **3.2** | Visible byline; still blocked on real media + external profiles |

**New total: ≈ 4.00 / 5.00 (80.1%)** — crosses into the "structure mature,
targeted fixes accelerate growth" band. Remaining gaps are all
user-action-dependent (real photos, LinkedIn page, GA4 ID, waiting for Google
indexing) rather than code-side.

---

## 1. Executive Summary

**Total Score: 3.62 / 5.00 (72.4%)** — up from baseline 3.05 / 5.00 (61.0%)

| Metric | Value |
|--------|-------|
| Total weighted score | 3.62 / 5.00 |
| Modules at ≥4.0 | 4 of 8 |
| Open issues | 14 (P0: 0, P1: 3, P2: 7, P3: 4) |
| Pages audited | 26 (7 static + 9 product SSG + 10 dynamic) |
| Schema types deployed | 7 (Organization, WebSite, Product, BreadcrumbList, FAQPage, Article, Person) |

**Most critical opportunity:** GEO visibility testing (score 1.5/5) — the site has strong technical foundations and structured data but zero AI-citability measurement. Establishing a recurring GEO Query Set test across Perplexity/ChatGPT/Copilot/Gemini is the highest-leverage next step.

**Most critical risk:** Entity trust gaps — team photos, certificate images, and factory photos are all placeholders. AI engines and human buyers alike cannot verify E-E-A-T signals without real visual evidence. This directly suppresses AI citability scores.

---

## 2. Scoring Matrix

| # | Module | Weight | Raw (0-5) | Weighted | Key Gap |
|---|--------|--------|-----------|----------|---------|
| 1 | Technical & Index Health | 18% | 4.2 | 0.756 | No GSC/Bing verification yet (pre-deployment) |
| 2 | Page & Info Architecture | 16% | 4.5 | 0.720 | None significant — breadcrumbs + canonicals clean |
| 3 | Content Quality & Extractable Facts | 16% | 3.5 | 0.560 | EFD unquantified; product pages lack source-backed facts (certificate numbers on product pages) |
| 4 | Page Experience & Performance | 10% | 3.0 | 0.300 | No Lighthouse/PSI/CrUX data (pre-deployment); image optimization unverified |
| 5 | Entity Trust & E-E-A-T | 14% | 3.0 | 0.420 | Placeholder media (team/certs/factory); no external consistency check |
| 6 | Structured Data | 8% | 4.5 | 0.360 | Schema valid but unverified by Rich Results Test (needs deployment) |
| 7 | GEO Visibility | 12% | 1.5 | 0.180 | Zero AI query testing done; no GEO Query Set established |
| 8 | Conversion Path | 6% | 4.0 | 0.240 | Form A/B variants untested; RFQ friction unmeasured |
| | **Total** | **100%** | | **3.516** | |

**Score interpretation:**
- 4.0–5.0: Strong — maintain and monitor
- 3.0–3.9: Adequate — targeted improvements needed
- 2.0–2.9: Weak — significant gaps
- 0–1.9: Critical — blocking issues

---

## 3. Issue Log

| ID | Issue | Evidence | Impact | Priority | Status |
|----|-------|----------|--------|----------|--------|
| I-01 | Placeholder factory/team/cert images | `/factory/*.jpg`, `/team/*.jpg`, `/certs/*.jpg` all missing | E-E-A-T trust signals absent; AI cannot verify entity | P1 | Open — awaiting client media |
| I-02 | No GEO Query Set testing | Zero AI platform queries logged | Cannot measure AI citability or visibility | P1 | Open — requires deployment |
| I-03 | Certificate numbers not on product pages | Certs only on About page | Product-level EAR (fact evidence rate) low | P1 | Open |
| I-04 | No Lighthouse/PSI baseline | Pre-deployment, no performance data | Core Web Vitals unverified | P2 | Open — post-deploy |
| I-05 | No external entity consistency check | LinkedIn/Alibaba/customs alignment unverified | AI may confuse brand with trading co. | P2 | Open — manual audit needed |
| I-06 | Product page EFD unquantified | No atomic-fact count done per page | Cannot prioritize content gaps | P2 | **Closed R3** — `scripts/efd-audit.cjs`; all 9 product pages EFD ≥ 15 |
| I-07 | No Schema CI in build pipeline | JSON-LD validated manually only | Schema regressions possible on deploy | P2 | In progress — scaffold building |
| I-08 | OG images are placeholders | `/og-image.png` is auto-generated | Social sharing appearance weak | P2 | Open |
| I-09 | No hreflang x-default annotation | Only `en-US` in alternates.languages | Multi-language expansion blocked | P2 | Open — reserved structure ready |
| I-10 | Case study pages are single-page (no detail routes) | `/case-studies` is one page | Deep-linking to specific cases impossible | P2 | Open |
| I-11 | No sitemap image extension | sitemap.xml has no `<image>` entries | Image indexation suboptimal | P3 | Open |
| I-12 | No JSON-LD for ContactPage/WebPage type | Contact page has no page-level schema | Page-type signaling incomplete | P3 | Open |
| I-13 | No llms.txt (intentional) | Per Google guidance, no benefit | N/A — correct decision | P3 | Closed (by design) |
| I-14 | Blog has no article content | `/blog` is placeholder | Content coverage for long-tail queries missing | P3 | Open — content strategy needed |

---

## 4. Schema Audit

| Schema Type | Pages | Valid | Missing Properties | Fix Recommendation |
|-------------|-------|-------|--------------------|--------------------|
| Organization | Global (layout) | Pending RR Test | `numberOfEmployees`, `foundingDate`, `naics`, `logo`, `contactPoint` — all added | Verify via Rich Results Test post-deploy |
| WebSite | Global (layout) | Pending RR Test | `potentialAction` (SearchAction) — added | Verify post-deploy |
| Product | 9 product pages | Pending RR Test | `additionalProperty` (MOQ, leadTime, certs, applications, material, countryOfOrigin), `image`, `@id`, `priceSpecification`, `eligibleQuantity` — all added | Add `review`/`aggregateRating` once customer reviews collected |
| BreadcrumbList | All 16 content pages | Pending RR Test | Complete | — |
| FAQPage | 9 product pages | Pending RR Test | Complete (5 Q&A per product) | Note: Google deprecated FAQ rich result (2026); retained for AI extractability |
| Article | 3 case studies | Pending RR Test | `datePublished`, `dateModified` missing | Add publication dates to case study data |
| Person | 3 team members (About) | Pending RR Test | `sameAs` (LinkedIn) missing | Add LinkedIn profiles when available |

**Schema validation status:** All JSON-LD is syntactically valid (build passes). Rich Results Test validation requires deployment to a live domain.

---

## 5. Entity Audit

| Entity Attribute | Value | Source | Consistency Issue |
|-----------------|-------|--------|-------------------|
| Legal name | AccuMeasure Instruments Co., Ltd. | site.ts | Needs verification against business license |
| Brand name | AccuMeasure | site.ts | Check Alibaba/LinkedIn match |
| Chinese name | 西安精准测量仪器有限公司 | site.ts | Verify character accuracy |
| Address | Xi'an High-Tech Zone, Shaanxi, CN | site.ts | Needs street-level detail |
| Founded | 2014 | Organization schema + About page | Verify against registration |
| Employees | 82 | Organization schema + About page | Verify current headcount |
| NAICS | 334513 (Instruments) | Organization schema | Verify appropriateness |
| Phone | +86-29-8888-XXXX | site.ts | Placeholder — needs real number |
| Email | info@accumeasuretech.com | site.ts | MX records not set up — email routing needed |
| LinkedIn | linkedin.com/company/accumeasure | site.ts | Profile may not exist yet |
| Alibaba | alibaba.com/accumeasure | site.ts | Storefront URL needs verification |

**Action required:** Cross-check all entity attributes against LinkedIn company page, Alibaba storefront, and customs registration records before deployment.

---

## 6. Repair Roadmap

### P0 — Critical (blocking crawl/index/conversion)
*None remaining.* Parameter page noindex (I-completed), canonical self-reference, and sitemap are all in place.

### P1 — High priority (major traffic/inquiry impact)

| Task | Est. Impact | Dependencies |
|------|-------------|--------------|
| Replace placeholder media (factory/team/certs) | +0.4 on Entity Trust | Client provides real photos |
| Add certificate numbers + badge to product pages | +0.2 on Content Quality | Certificate image files |
| Establish GEO Query Set + first test round | +1.0 on GEO Visibility | Site deployment |

### P2 — Medium (moderate improvements)

| Task | Est. Impact | Dependencies |
|------|-------------|--------------|
| Run Lighthouse/PSI baseline + fix CWV | +0.5 on Performance | Site deployment |
| External entity consistency audit (LinkedIn/Alibaba) | +0.3 on Entity Trust | Manual research |
| Quantify EFD per product page + fill gaps | +0.3 on Content Quality | Content audit |
| Deploy Schema CI in build pipeline | Prevents regression | Scaffold (in progress) |
| Design real OG images per page type | +0.1 on Page Experience | Design resources |
| Add hreflang x-default + plan multilingual | +0.2 on Info Architecture | Content translation |
| Create individual case study detail routes | +0.1 on Info Architecture | Route + content |

### P3 — Long-term building

| Task | Est. Impact | Dependencies |
|------|-------------|--------------|
| Add image sitemap extension | +0.1 on Technical | Low effort |
| Add WebPage/ContactPage schema | +0.05 on Structured Data | Low effort |
| Publish blog articles (selection guides) | +0.3 on GEO long-tail | Content strategy |
| Collect + schema customer reviews | +0.2 on Entity Trust | Post-launch reviews |

---

## 7. Automation Recommendations

| Automation | Tool/API | Frequency | Effort |
|------------|----------|-----------|--------|
| Top queries/pages export | GSC Search Analytics API | Weekly | Low |
| PSI batch test (top 20 URLs) | PageSpeed Insights API | Weekly | Low |
| Schema regression check | Schema CI script (build-time) | Every deploy | Medium (scaffold ready) |
| Canonical/noindex diff | Custom crawler script | Pre/post deploy | Medium |
| GEO Query re-test | Manual + AI test script template | Monthly | Medium |
| Bing AI citation monitoring | Bing Webmaster Tools | Weekly | Low |
| CrUX field data monitoring | CrUX API / Looker Studio | Monthly | Low |

**Schema CI scaffold:** A build-time JSON-LD validation script is being developed (see `/scripts/` directory). It will parse all generated HTML pages, extract `<script type="application/ld+json">` blocks, and validate against schema.org type definitions before deployment.

**GEO Query Set template:** A standardized query list covering brand, product, comparison, and intent queries will be maintained in `/docs/geo-query-set.md` for monthly re-testing across Perplexity, ChatGPT, Copilot, and Gemini.

---

## 8. GSC / Bing / MX / 真实素材 操作指南

以下是你需要手动完成的操作(代码做不了的)。按顺序执行,每项约 5-10 分钟。

### 8.1 Google Search Console 验证

**目的:** 让 Google 知道站点存在、提交 sitemap、查看索引状态、监控搜索表现。

**步骤:**

```text
1. 打开 https://search.google.com/search-console
2. 点击「添加属性」→ 选择「网域」类型
3. 输入: accumeasuretech.com
4. Google 会给你一条 TXT 记录,类似:
   google-site-verification=xxxxx
5. 去 Cloudflare 后台 → DNS → 添加记录:
   类型: TXT
   名称: @
   内容: google-site-verification=xxxxx
   TTL: Auto
6. 保存后回到 GSC,点击「验证」
7. 验证成功后,左侧菜单 → Sitemap → 提交:
   https://www.accumeasuretech.com/sitemap.xml
8. 左侧菜单 → URL Inspection → 输入首页 URL → 回车 → 点击「请求编入索引」
9. 同样操作,检查 /products/level, /certificates, /about, /contact
```

**事后检查(1-3 天后):**
```text
- site:accumeasuretech.com 在 Google 搜索能看到页面
- GSC 后台「索引」→「页面」→ 已编入索引数量增长
- GSC 后台「效果」→ 开始出现展示次数和点击数据
```

### 8.2 Bing Webmaster Tools 验证

**目的:** Bing/Copilot 的索引入口 + AI 引用活动监控。

**步骤:**

```text
1. 打开 https://www.bing.com/webmasters
2. 登录 Microsoft 账号
3. 添加站点 → 输入: https://www.accumeasuretech.com
4. 选择验证方式 → 推荐「DNS TXT 记录」(同 GSC,再加一条)
5. Cloudflare DNS → 添加 Bing 给的 TXT 记录
6. 验证成功后,左侧「站点地图」→ 提交:
   https://www.accumeasuretech.com/sitemap.xml
7. 左侧「URL Inspection」→ 检查首页和核心页面
8. 后续每月查看「AI 搜索」→ 看看 Copilot 有没有引用你的页面
```

### 8.3 邮箱 MX 记录设置(Cloudflare Email Routing)

**当前问题:** `info@accumeasuretech.com` 没有 MX 记录,发到这个地址的邮件会丢失。

**方式一:Cloudflare Email Routing(推荐,免费)**

```text
1. Cloudflare 后台 → 左侧「电子邮件」→ 「电子邮件路由」
2. 点击「开始使用」→ 添加自定义地址
3. 自定义地址: info@accumeasuretech.com
4. 目标地址: 你的真实邮箱(如 Gmail)
5. 保存后 Cloudflare 自动配置 MX 记录
6. 验证: 用自己的邮箱发一封邮件到 info@accumeasuretech.com,
   看目标邮箱是否收到
```

**方式二:第三方邮箱(企业邮)**

```text
腾讯企业邮(exmail.qq.com):
  注册 → 验证域名(Cloudflare 加 TXT 记录) → 添加 MX 记录
  → 创建 info@accumeasuretech.com 账号

Google Workspace(workspace.google.com):
  订阅(约 $6/月) → 验证域名 → 创建 info@accumeasuretech.com 账号
  
Zoho Mail(免费版, zoho.com/mail):
  注册 → 验证域名 → 创建 info@accumeasuretech.com 账号
```

### 8.4 真实素材替换清单

当前使用了颜色纯色占位图。拿到真实素材后,直接替换以下文件即可(文件名保持不变):

**工厂照片(8 张):**
```text
public/factory/1.jpg → 工厂外观 (AccuMeasureTech factory exterior, Xi'an High-Tech Zone)
public/factory/2.jpg → 生产线 (Production line for level sensors and flow meters)
public/factory/3.jpg → 标定实验室 (Calibration laboratory with GE Druck DPI 620)
public/factory/4.jpg → 老化测试间 (72-hour aging test room with temperature cycling)
public/factory/5.jpg → PCB 焊接工位 (PCB assembly and soldering workstation)
public/factory/6.jpg → 质检工位 (Quality control inspection station)
public/factory/7.jpg → 压力变送器生产线 (Pressure transmitter assembly line)
public/factory/8.jpg → 成品仓库 (Finished goods warehouse and shipping area)
```

**团队照片(3 张):**
```text
public/team/zhang-wei.jpg → 张伟, Founder & CEO
public/team/li-mei.jpg → 李梅, CTO
public/team/wang-jun.jpg → 王军, Head of Quality
```

**证书扫描件(5 张):**
```text
public/certs/iso9001.jpg → ISO 9001:2015 证书扫描件
public/certs/ce.jpg → CE 证书扫描件
public/certs/atex.jpg → ATEX 证书扫描件  
public/certs/rohs.jpg → RoHS 证书扫描件
public/certs/alibaba-gold.jpg → 阿里 Gold Supplier 截图
```

**行业应用图片(6 张):**
```text
public/industries/water-treatment.jpg
public/industries/oil-gas.jpg
public/industries/chemical.jpg
public/industries/pharma.jpg
public/industries/food-beverage.jpg
public/industries/manufacturing.jpg
```

**尺寸要求:** 所有图片建议 1200px 宽,JPEG 格式,< 200KB。

### 8.5 电话号码更新

```text
修改文件: src/lib/site.ts
当前位置:
  whatsapp: "8613800000000"      → 替换为真实 WhatsApp 号(带国家码,如 8613912345678)
  phone: "+8613800000000"        → 替换为真实电话号码
  phoneDisplay: "+86-138-0000-0000" → 替换为用于展示的格式

保存后提交到 GitHub,Vercel 自动部署。
```

### 8.6 外部平台实体一致性(提升 E-E-A-T 信任分)

```text
LinkedIn 公司页:
  → 创建 linkedin.com/company/accumeasuretech
  → 公司名用: AccuMeasureTech Instruments Co., Ltd.
  → 官网填: https://www.accumeasuretech.com
  → 行业选: Industrial Machinery Manufacturing

Alibaba 国际站(如果有):
  → 公司名和地址必须与网站一致
  → 产品页链接到网站对应产品

YouTube:
  → 创建 youtube.com/@accumeasuretech
  → 上传产品演示视频(1-3 分钟)
  → 视频描述放官网链接和产品页链接
```

### 8.7 验收检查清单(全部完成后逐项确认)

```text
☐ accumeasuretech.com 首页 HTTPS 200 OK
☐ site:accumeasuretech.com Google 有搜索结果
☐ GSC sitemap.xml 提交成功,显示「已处理」
☐ GSC URL Inspection 首页/核心产品页状态为「已编入索引」
☐ Bing Webmaster sitemap 提交成功
☐ info@accumeasuretech.com 能收发邮件
☐ WhatsApp 号码点击能发起对话
☐ 所有页面 Title 不含重复后缀
☐ 所有 schema 通过 Rich Results Test(https://search.google.com/test/rich-results)
☐ 产品页 EFD ≥ 15 可抽取事实/300 词
☐ 外部平台(LinkedIn/Alibaba)公司信息与网站一致
```
