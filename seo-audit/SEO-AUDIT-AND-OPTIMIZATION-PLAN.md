# AccuMeasure 全面 SEO 审计与优化计划

**审计日期：** 2026-08-09（Asia/Shanghai）  
**仓库：** `/Users/liangxile/project/AccuMeasure`，当前分支 `main`，HEAD `9ae2809`  
**线上域名：** `https://www.accumeasuretech.com`  
**模式：** `AUDIT_AND_IMPLEMENT`，前三轮仅修改本地代码和文档，未部署生产、未改线上内容/配置/域名/GSC/GA4  

## 1. 执行摘要

AccuMeasure 是一个 B2B 工业测量仪器出口制造商的英文单语网站。它的技术底座已经比较健康：DNS、HTTPS、规范主机、robots、sitemap、canonical、H1、结构化数据和基础页面模板都通过了可复现检查；`npm run verify` 通过，39 个 sitemap URL 线上全部返回 200。搜索曝光仍然非常小，且当前最重要的缺口不在“再多写几页”，而在“测量闭环、可验证证据和近胜页刷新”。

当前成熟度可概括为：

- 技术可访问与抓取：成熟，未发现全站阻断。
- 搜索增长：早期，GSC 样本极小，平均位置大多在 20 名以后。
- 商业测量：不成熟，生产页没有可确认的 GA4/Clarity 加载，没有 CRM/收入数据，无法证明询盘来源与成交。
- 信任资产：不成熟，证据清单只有 3 组未审批图片；证书、工厂、团队、客户案例和定制项目中的大量强声明缺少可复核来源。
- AI 搜索/GEO：基础设施存在（`llms.txt`、76 条查询集、监控脚本），但实测行数为 0，不能声称可见性。

**最重要的 3 个阻断**

1. **关键效果测量闭环缺失。** 线上 HTML 未发现 GA4/Clarity 脚本；仓库 GSC 导出文件之间总展示数不一致；无 CRM/成交数据。当前无法判断 SEO 是否带来询盘或收入。
2. **信任证据和强声明不匹配。** `docs/seo-growth-system/evidence-manifest.csv` 只有 3 组未审批图片；案例、定制项目、About、Quality、Certificates 中存在大量无证据支持的量化结果和过程声明。
3. **索引与近胜机会未闭合。** GSC sitemap 导出显示 39 URL 已提交但 indexed 为 0；`/applications`、`/contact` 的索引状态只来自旧文档；同时多个页面位置在 3—8 名但 0 点击。

**最值得做的 5 个机会**

1. 先补测量和询盘交付基线：确认 `RESEND_API_KEY`/webhook/MX，定义“有效询盘”，在经批准的隐私与同意方案下安装并验证 GA4 事件。
2. 建立可引用证据包：证书扫描件、打码校准证书、真实工厂照片、经客户授权的案例证据；这是当前内容质量和 AI 引用能力的最大短板。
3. 刷新近胜页：`/certificates`、`/blog/how-to-choose-radar-level-sensor`、`/case-studies/saudi-water-radar-level`、`/products/am-rl80-80ghz-radar-level-transmitter`、`/products/am-pg200-digital-pressure-gauge`、`/quality`。
4. 处理高曝光低 CTR 的流量簇：`/products/flow` 有 267 次展示、0 点击，和 GSC 中 `electronic flowmeters`、`non contact flow meter`、`explosion proof flow meter` 等查询簇高度相关。
5. 启动首轮人工 GEO 实测：76 条查询尚未测量；只记录实测结果，不把“未测量”当成“不可见”。

**预计先后关系**

先修测量和证据，再做近胜页刷新和少量内链；只有当 28 天滚动 GSC、有效询盘和 SERP 证据同时支持时，才创建新页面、工具或国际化内容。本报告不承诺排名、流量、收录、富结果或 AI 引用。

## 2. 范围、证据与限制

### 2.1 范围

- 仓库全量代码映射：Next.js 14 App Router、TypeScript、Tailwind、React Hook Form、Zod、Vercel。
- 线上 sitemap：39 个 URL，全部通过 2026-08-09 线上状态检查。
- 构建产物：`next build` 生成 48 个路由；`seo-ci.cjs` 扫描 42 个 HTML；`schema-ci.cjs` 扫描 44 个 HTML、180 个 JSON-LD block。
- 人工抽查：首页、产品分类、产品详情、应用、对比、案例、博客、证书、质量、定制、Contact、Resources、404、隐私/条款。
- 性能：2026-08-09 线上 Lighthouse 移动实验室跑首页、AM-RL80、Contact 三页。
- GSC：使用仓库内 `reports/gsc/*.json` 导出，文件 mtime 为 2026-07-25；没有当前直接 GSC 权限。

### 2.2 证据等级说明

- A：本审计当日线上可复现检查、构建/CI 输出、仓库代码事实。
- B：仓库内 GSC 导出、README、既有审计文档；可解释但缺少实时对照。
- C：第三方工具建议、单点观察、作者自报或旧快照；只用于假设，不当作结论。

### 2.3 可用与缺失数据

| 数据 | 状态 | 用途与限制 |
|---|---|---|
| 线上状态/header/HTML | 可用 | 可验证 200、canonical、robots、结构化数据、无分析脚本 |
| `npm run verify` | 可用 | 技术模板和 schema 基线 |
| Lighthouse 实验室 | 可用 | 只能定位代码原因，不能替代 CrUX |
| GSC 导出 | 部分可用 | 文件旧、无元数据、三个维度总和互相冲突 |
| GA4/Clarity | 不可用 | 线上 HTML 未见脚本；无事件、无转化 |
| CRM/收入/服务器日志/CDN | 不可用 | 无法把搜索连接到询盘和成交 |
| URL Inspection 当前状态 | 不可用 | 只有 2026-07-24 文档快照 |
| 外链/关键词工具 | 不可用 | 未购买、未登录；没有第三方搜索量数据 |
| 证书外部核验 | 不可用 | 未登录 issuer 系统，未提交表单 |
| AI 平台实测 | 不可用 | `data/geo-observation-log.csv` 为 0 行 |

### 2.4 观察、推断和建议的边界

本报告把“线上 HTML 没有 gtag”标为观察；把“生产可能未配置分析”标为推断；把“安装经批准的 GA4”标为建议。GSC 导出内部不一致，因此所有 GSC 趋势只用于形成假设，不作为因果结论。

## 3. 业务目标与测量基线

### 3.1 业务与转化

- 业务模型：B2B 工业仪器制造/出口，产品为液位、流量、压力仪表，以及 OEM/ODM 定制。
- 主要转化：有效询盘/RFQ（`/contact`、`/customization`）。
- 次级转化：WhatsApp、电话、Catalog/Document 请求、样品询价。
- 目标客户：进口商、经销商、系统集成商、设备 OEM、工程与采购团队。
- 目标市场：以英语买家的出口市场为主，GSC 中美国展示最多。

### 3.2 指标口径

| 指标 | 建议定义 | 当前状态 |
|---|---|---|
| 有效询盘 | 含公司、国家、产品或应用、联系方式，且非重复/垃圾信息 | 无系统记录 |
| 销售合格线索 | 有效询盘 + 明确采购项目/预算/时间或可跟进产品范围 | 未知 |
| 样品请求/报价 | 表单或 WhatsApp 中的明确请求 | 未知 |
| 成交 | 已确认订单（需 CRM/财务证据） | 未知 |
| 首次响应时间 | 从提交到人工首次回复 | 未知 |
| 未处理询盘 | 超过承诺响应目标的未回复数量 | 未知 |

在数据缺失期间，不能用 GSC impression 代替搜索量，不能用点击代替询盘，不能用 Lighthouse 分数代替真实用户 CWV。

## 4. 100 分 SEO 评分卡

总分用于排优先级，不预测排名或流量。

| 模块 | 满分 | 得分 | 事实依据 | 主要扣分点 | 置信度 | 提高到下一档所需动作 |
|---|---:|---:|---|---|---|---|
| 技术可访问、抓取与索引 | 20 | 15 | 39/39 200；HTTPS/HSTS；robots/sitemap/canonical 正常；verify/schema/seo CI 通过；Lighthouse SEO 100 | GSC sitemap indexed 0；`/applications`、`/contact` 索引状态旧；无 CrUX；线上 hreflang 旧行为已本地清理、待部署复查 | 高 | 获得当前 GSC/URL Inspection 并修复确认的索引问题 |
| 页面质量、意图与刷新 | 20 | 11 | 产品页/分类页/对比页/博客信息密度高；EFD 大多 14—26；FAQ、schema、CTA 完整 | EAR 大多低于 0.3；证据资产缺失；多页位置靠前但 0 点击 | 中高 | 先做证据化刷新，再按 28 天窗口看 CTR/位置 |
| 需求研究与页面映射 | 15 | 9 | 有 GSC 查询/页面导出、Autosuggest、应用/比较页映射 | GSC 样本小且内部冲突；无实时 SERP/关键词工具；无有效询盘验证 | 中低 | 补当前 GSC、SERP 截图和询盘国家/产品证据 |
| 信息架构与内部链接 | 10 | 7 | 导航、面包屑、无孤儿页；分类页已内链应用/博客 | 应用详情只有 2—3 条站内入链；部分博客只有 2—6 条 | 高 | 按用户路径加上下文内链并抽查锚文本 |
| 业务测量与数据可信度 | 10 | 2 | 有 GSC 导出、询盘 source snapshot、GA4 helper 代码 | 生产无分析脚本；GSC 导出三个维度总和冲突；无 CRM/收入；无 consent | 高 | 定义 KPI、批准并安装分析、做事件交付测试 |
| 可链接资产与编辑型分发 | 10 | 2 | 有工厂/产品/案例图片和 llms.txt | 无公开证书扫描、无真实 datasheet、无原创研究/工具；evidence manifest 未审批 | 中高 | 先建证据包和受控文档，再谈编辑型分发 |
| 转化、信任与留存 | 10 | 5 | 询盘表单、WhatsApp/Call/Quote、source snapshot、失败 fallback 完整 | 无转化测量；无 CRM/留存；交付链未确认；强声明缺证据 | 中 | 确认询盘交付并建立 lead 全链路 |
| AI/PSEO/国际化治理 | 5 | 3 | 有 GEO 查询集、llms.txt、禁止 fanout 的边界 | 0 条实测；没有 AI 可见性数据；未启动国际需求验证 | 中低 | 完成首轮实测并建立独立于搜索的 AI 指标 |
| **总分** | **100** | **54** | | | | |

## 5. 技术 SEO、安全、抓取与索引

### 5.1 P0 访问与安全

观察：

- `https://www.accumeasuretech.com/` 返回 200，Vercel 提供，`HSTS`、`X-Content-Type-Options`、`X-Frame-Options`、`Referrer-Policy`、`Permissions-Policy` 均存在。
- `http://accumeasuretech.com` 308 到 `https://accumeasuretech.com/`，再 308 到 `https://www.accumeasuretech.com/`。
- 线上 404 返回 404，`meta robots=noindex, follow`，没有首页 canonical。
- 未发现恶意软件、全站 noindex、认证墙或 5xx。
- 小提示：Vercel 对 HTML 返回 `access-control-allow-origin: *`；不是安全漏洞，但在没有需要公开 CORS 的资源时不必要。

结论：P0 安全/访问层面健康。

### 5.2 P1 抓取、索引与规范化

观察：

- `robots.txt` 允许 `/`，只禁止 `/api/` 和 `?category=/?product=/?document=/?request=` 参数页；sitemap 声明正确。
- `sitemap.xml` 为 39 个 URL；2026-08-09 线上全部 200。
- `seo-ci` 检查 42 个 HTML，无缺 title/description/canonical/OG/H1，无重复 title/description，无孤儿页，无内部断链。
- 404 页已独立 noindex；隐私/条款为 `noindex, follow`。
- 线上检查时首页 `hreflang` 只有 `en-US` 和 `x-default`，其他页面没有 hreflang；单语言站不是阻断问题。本轮已在本地移除首页单独 hreflang，统一为单语言站无 hreflang 策略，部署后需复查线上 HTML。
- GSC sitemap 导出（2026-07-25）显示 submitted 39、indexed 0，warnings 0、errors 0。这不是当前实时状态，不能解释为“谷歌不收录”，但说明需要当前 URL Inspection 数据。
- 旧文档记录 `/applications` 曾为 `URL is unknown to Google`、`/contact` 曾为 `Crawled - currently not indexed`；当前状态未知。

推断：

- 参数页 robots 阻断与客户端读取参数预填表单的设计一致，属于正确的 crawl budget 治理。
- `indexed 0` 可能是新站/低抓取频率，也可能是 sitemap 报告口径问题；不能在没有 URL Inspection 和 GSC 页面索引报告时下结论。

建议：

- 获取当前 GSC 的 Pages、URL Inspection、Sitemaps、Indexing 报告快照。
- 对 39 个 sitemap URL 抽样做 URL Inspection；优先 `/`、`/contact`、`/applications`、`/products/flow`、`/products/am-rl80-80ghz-radar-level-transmitter`。
- 不自动批量“Request Indexing”；只有在页面内容实质更新且 URL Inspection 明确需要时按官方流程操作。

### 5.3 P2 页面理解与重复治理

观察：

- 所有主要页面 1 个 H1；title/description/canonical/OG 自洽。
- Schema CI 扫描 180 个 JSON-LD block，0 错误；包含 Organization、WebSite、Product、BreadcrumbList、ItemList、FAQPage、Article、ContactPage。
- 产品页 JSON-LD 使用 `Product + Offer`，价格、MOQ、Lead Time、Certifications 等作为 `PropertyValue`。
- FAQPage schema 已广泛使用。根据官方文档，Google 目前仅对“well-known, authoritative government and health websites”显示 FAQ rich result；因此对 B2B 站不能把 FAQ schema 当作富结果保证，只能作为页面结构和 AI 抽取的辅助。
- `src/lib/certifications.ts` 中 IECEx 只有 label，没有 number/issuer；`/certificates` 与 `llms.txt` 都明确说明 IECEx 未公开编号，产品页仍列出 IECEx。站内一致性尚可，但外部可验证性不足。

内容质量代理：

- EFD（300 词事实密度）范围 8.8—25.5；大多数核心页 strong。
- EAR（证据化事实率）多数页面 0.08—0.27，只有 `/certificates` 0.67；说明“有事实”不等于“有可核验证据”。

### 5.4 P3 性能、图片与体验

2026-08-09 线上 Lighthouse 移动实验室：

| 页面 | Perf | A11y | BP | SEO | FCP | LCP | TBT | CLS |
|---|---:|---:|---:|---:|---|---:|---:|---:|
| `/` | 87 | 100 | 100 | 100 | 1.5s | 2.6s | 100ms | 0 |
| `/products/am-rl80-80ghz-radar-level-transmitter` | 85 | 95 | 100 | 100 | 1.5s | 2.9s | 120ms | 0 |
| `/contact` | 90 | 100 | 100 | 100 | 1.5s | 1.7s | 0ms | 0.011 |

说明：

- 这是固定配置的实验室数据，不是 CrUX 现场数据；GSC/CrUX 现场数据仍不足。
- 三页主要机会是 `unused-javascript`，估计节省 21—24 KiB；属于优化项，不是当前主要增长瓶颈。
- 图片均为真实 JPEG 文件，尺寸合理；但 `evidence-manifest.csv` 对产品/工厂/案例图片审批状态都是 `unreviewed`，因此只能证明“文件可访问”，不能证明“真实场地/客户”。

## 6. GSC/分析发现

### 6.1 仓库内 GSC 数据

文件 mtime 为 2026-07-25，使用前必须视为旧快照。

- 最近 7 天：1 点击、242 展示、CTR 0.41%、平均位置 56.5。
- 前 7 天：1 点击、173 展示、CTR 0.58%、平均位置 54.2。
- 最近 28 天 page 维度：3 点击、821 展示。
- 最近 28 天 date 维度：3 点击、529 展示。
- 最近 28 天 query 维度：0 点击、298 展示。

**数据可信度问题：三个 28 天导出总和互相冲突，且没有总表文件。** 可能来自不同导出时间、过滤条件或 API 口径，但仓库内无法验证。因此本审计不把 GSC 数字当作精确基线，只用于发现机会。

### 6.2 国家与设备

- 设备：桌面 464 展示/2 点击，移动 57 展示/1 点击，平板 8 展示/0 点击。
- 国家：美国 349 展示/3 点击；加拿大 59 展示/0 点击；澳大利亚 18 展示/0 点击；阿联酋 5 展示/0 点击、平均位置 4。

这只能说明英语出口市场中有零散曝光，不能支撑德国、阿联酋或中文站的投入判断。

### 6.3 页面机会

近胜页（位置约 4—15，展示有限、点击不足）：

| 页面 | 展示 | 点击 | 平均位置 | 判断 |
|---|---:|---:|---:|---|
| `/` | 43 | 1 | 6.0 | 品牌/品类首页已可见，需要证明和 CTA |
| `/blog/how-to-choose-radar-level-sensor` | 27 | 0 | 4.6 | 最接近首页的内容页 |
| `/certificates` | 25 | 0 | 5.8 | 展示高但缺少可验证扫描 |
| `/case-studies/saudi-water-radar-level` | 20 | 0 | 5.3 | 案例证据不足 |
| `/case-studies` | 18 | 0 | 7.7 | 列表页可见 |
| `/quality` | 16 | 0 | 6.2 | 质量承诺缺证据 |
| `/products/am-pg200-digital-pressure-gauge` | 14 | 0 | 3.1 | 已接近首位但点击少 |
| `/products/am-rl80-80ghz-radar-level-transmitter` | 13 | 0 | 4.8 | 核心高价值产品 |
| `/case-studies/brazil-integrator-oem-pressure-gauge` | 7 | 0 | 8.3 | OEM 案例 |
| `/compare/capacitive-vs-ultrasonic-level-sensor` | 3 | 0 | 11.3 | 比较页 |
| `/applications/radar-level-sensor-for-oil-tank` | 2 | 0 | 7.5 | 应用页 |

高曝光低 CTR：

| 页面 | 展示 | 点击 | 平均位置 | 说明 |
|---|---:|---:|---:|---|
| `/products/flow` | 267 | 0 | 66.7 | 高展示、远位置、0 点击 |
| `/products` | 70 | 0 | 48.4 | 需要更清楚进入路径 |
| `/products/pressure` | 59 | 1 | 48.7 | 有商业价值 |
| `/about` | 54 | 1 | 19.9 | 信任页可见 |
| `/blog` | 35 | 0 | 14.6 | 列表页 |
| `/resources` | 30 | 0 | 12.9 | 文档资源 |
| `/products/level` | 21 | 0 | 37.2 | 品类页 |

### 6.4 查询簇

查询维度中可观察但未映射到页面的簇：

- `electronic flowmeters`：18 展示，平均 65.2。
- `non contact flow meter` / `non contact flow meters`：27 + 4 展示，平均 93.6/94.8。
- `explosion proof flow meter`：28 展示，平均 76.6。
- `ex certified pressure gauge`：18 展示，平均 66.4。
- `mass portable flow meters` / `portable mass flow meter`：49 + 7 展示，平均 60.9/58.4。
- `atex flow meter`：15 展示，平均 80.5。

这些查询需要人工确认 SERP 意图和当前页是否真正覆盖，不能直接当作页面创建指令。

## 7. 需求、SERP、意图与内容差距

### 7.1 证据来源

- GSC 查询/页面导出（B 级）。
- 2026-08-09 Google Autosuggest 公共结果（C 级，只用于发现问题，不代表搜索量）。
- 仓库内竞争者基线：Endress+Hauser、VEGA、KROHNE、Supmea（B/C 级，基于 2026-07-24 文档，2026-08-09 重新验证 URL 均 200）。
- 没有可靠 Google SERP 截图；`site:` 查询返回验证页，Bing 返回不相关结果，因此不用于结论。

### 7.2 Autosuggest 观察

- `radar level sensor`：suggestions 包括 `working principle`、`installation`、`for water tank`、`price`。
- `electromagnetic flow meter`：suggestions 包括 `working principle`、`installation guidelines`、`price`、`manufacturer in india`。
- `ultrasonic flow meter`：suggestions 包括 `clamp on`、`portable`、`for water`。
- `pressure transmitter`：suggestions 包括 `vs transducer`、`4-20ma`、`with diaphragm seal`。
- `flow meter water treatment`：suggestions 包括 `plant`、`wastewater treatment plant`。

### 7.3 需求与页面映射

| 查询/需求 | 意图 | 漏斗 | 当前目标 | 差距 | 建议 |
|---|---|---|---|---|---|
| radar level sensor installation / working principle | 信息 | TOFU/MOFU | `/blog/how-to-choose-radar-level-sensor`、AM-RL80 | 本地已加快速决策表和安装输入项；仍无图表、真实照片/视频 | 在下一轮刷新时补安装示意和证据 |
| electronic flowmeters / non-contact flow meter | 信息/商业 | MOFU | `/products/flow` | GSC 高展示低点击，页面已更新但需继续测 CTR | 做 28 天实验，不改批量 title |
| explosion proof flow meter / ATEX flow meter | 商业 | MOFU | `/products/flow`、AM-EMF100 | 直接答案存在，但证书扫描缺 | 补证书扫描和产品级 ATEX scope |
| ex certified pressure gauge | 商业 | MOFU | `/products/pressure`、AM-PG200 | 页面已明确 PG200 无 ATEX；这是正确做法 | 保持，并在 AM-PT300 增加“ex certified pressure gauge”对照段落 |
| pressure transmitter vs transducer | 信息 | TOFU/MOFU | 无独立页 | Autosuggest 出现，但无搜索量/GSC 证据 | 暂不新建，先在压力页 FAQ/内容补充；有 SERP 证据再决定 |
| flow meter wastewater treatment plant | 应用 | MOFU | `/applications/electromagnetic-flow-meter-for-water-treatment` | 已有页面，但入链弱 | 从 flow 分类、产品页、博客增加上下文链接 |
| China level sensor supplier / MOQ | 采购 | BOFU | `/blog/how-to-choose-level-sensor-supplier-china`、`/contact` | 博客只有 2 条站内入链 | 在分类页和产品页加“supplier checklist”入口 |

### 7.4 内容质量原则

- 不复制竞品模板；每个页面必须服务一个明确任务。
- 不把 Autosuggest 当搜索量，不把“零搜索量”当删除理由。
- 新内容必须有第一手证据、真实示例或可复核事实，不能只做同义改写。

## 8. 旧页刷新和 CTR 计划

先处理已有曝光、位置接近首页、或高价值商业页。每次只做一个变量，28 天连续窗口验收。

| URL | 28 天基线 | 目标需求 | 保留 | 增加 | 删除/不改 | 验收 |
|---|---|---|---|---|---|---|
| `/certificates` | 25 展示、0 点击、位置 5.8 | ATEX/CE/ISO 证书可验证 | 证书编号、scope、有效期、请求按钮 | 本地已加核验步骤和受控扫描请求；仍缺真实证书扫描、打码校准证书样例、issuer 验证路径 | 不伪造证书号 | 30 天：点击 >0；60 天：GSC 位置不下降；90 天：询盘中的文档请求可归因 |
| `/blog/how-to-choose-radar-level-sensor` | 27 展示、0 点击、位置 4.6 | radar level sensor 选型 | 现有 8 分钟指南、FAQ、CTA | 已加快速决策表和安装输入项；仍缺安装示意图、真实 tank drawing 示例 | 不扩展成 5000 字同质内容 | 30 天：CTR 有统计意义提升；60 天：相关产品点击/询盘可归因 |
| `/case-studies/saudi-water-radar-level` | 20 展示、0 点击、位置 5.3 | 中东油/水罐雷达案例 | 背景、挑战、结果 | 经授权的脱敏证据、照片或证明 | 不保留无法证明的客户名 | 上线前证据审批；30 天看 GSC；60 天看案例相关询盘 |
| `/products/am-rl80-80ghz-radar-level-transmitter` | 13 展示、0 点击、位置 4.8 | 80GHz radar manufacturer/price | 规格、MOQ、lead time、FAQ、报价 | ATEX/IECEx 证书扫描、安装参数表、真实测试记录 | 不改价格事实源 | 30 天：位置保持或提升；60 天：产品询盘/文档请求 |
| `/products/am-pg200-digital-pressure-gauge` | 14 展示、0 点击、位置 3.1 | digital pressure gauge / OEM | 规格、OEM、FAQ | 电池寿命测试方法、OEM 包装证据、cert scope | 不宣称 ATEX | 30 天：点击 >0；60 天：OEM 询盘 |
| `/quality` | 16 展示、0 点击、位置 6.2 | 72h aging/calibration | 5-stage QC、72h、certificate 承诺 | 已接入 QC 文档请求事件；仍缺测试报告模板、校准证书样例、设备/流程照片 | 不写无证据的 99.8% 之类 KPI | 证据审批后上线；30 天看点击 |
| `/products/flow` | 267 展示、0 点击、位置 66.7 | flow meter category / electronic flow meters | 当前 decision table、ATEX/便携段落 | 本地已测 title 含 Non-Contact；仍需按 GSC 查询簇复查直接答案和内链 | 不做多 URL 变体 | 30 天：CTR/位置；60 天：流量产品和询盘 |
| `/resources` | 30 展示、0 点击、位置 12.9 | datasheet/manual/3D | 请求式文档入口 | 已明确“受控文档仅询盘发送”并接入文档请求事件；仍缺 2—3 个真实可下载 PDF | 不放置不存在的下载 | 30 天：文档请求；60 天：GSC 点击 |

Meta description 是点击沟通实验，不是排名因素；只有页面正文/证据实质变化才改 `lastmod`。

## 9. 信息架构与内部链接计划

当前站内入链（构建 HTML 计数）：

| 页面 | 入链数 | 判断 |
|---|---:|---|
| `/blog/how-to-choose-level-sensor-supplier-china` | 2 | 弱 |
| `/blog/pressure-transmitter-selection-guide` | 2 | 弱 |
| `/applications/electromagnetic-flow-meter-for-water-treatment` | 3 | 弱 |
| `/applications/pressure-transmitter-for-oem-equipment` | 3 | 弱 |
| `/applications/radar-level-sensor-for-oil-tank` | 3 | 弱 |
| `/applications/radar-vs-ultrasonic-level-sensor` | 3 | 弱 |
| `/blog/electromagnetic-vs-ultrasonic-flow-meter` | 4 | 弱 |
| `/compare/electromagnetic-vs-ultrasonic-flow-meter` | 7 | 可 |
| `/products/am-mf50-mass-flow-meter` | 49 | 全站导航造成，不代表正文上下文 |

注意：数字包含导航/页脚重复，不能当作“链接权重”精确值，但能识别弱发现路径。

推荐内链：

| 来源 URL | 目标 URL | 放置语境 | 建议锚文本 | 用户价值 |
|---|---|---|---|---|
| `/products/flow` | `/applications/electromagnetic-flow-meter-for-water-treatment` | decision table 下方 | “Wastewater treatment application guide” | 从技术分类进入应用案例 |
| `/products/level` | `/applications/radar-vs-ultrasonic-level-sensor` | selection guide | “Radar vs ultrasonic buyer guide” | 减少选型歧义 |
| `/products/pressure` | `/blog/pressure-transmitter-selection-guide` | selection guide | “Pressure transmitter selection guide” | 补充选型步骤 |
| `/products/am-emf100-electromagnetic-flow-meter` | `/compare/electromagnetic-vs-ultrasonic-flow-meter` | 已有相关区域但可强化 | “Magmeter vs clamp-on comparison” | 判断安装和介质边界 |
| `/products/am-rl80-80ghz-radar-level-transmitter` | `/blog/how-to-choose-radar-level-sensor` | FAQ 附近 | “7-point radar selection checklist” | 从产品进入决策内容 |
| `/blog/how-to-choose-radar-level-sensor` | `/applications/radar-level-sensor-for-oil-tank` | 正文“storage tanks”上下文 | “Radar for oil storage tanks” | 应用场景闭环 |
| `/blog/how-to-choose-level-sensor-supplier-china` | `/certificates` | 证书验证段落 | “Verify certificate numbers” | 采购尽职调查 |

规则：每个链接都要有语义语境，不追求精确匹配锚文本数量，不做全站自动堆链接。

前三轮已本地落地其中一部分：产品详情页按 category 增加选型指南/应用入口，`/industries` 增加 Water/Oil/OEM 应用入口，5 篇核心博客增加 “Related Guides & Applications” 上下文链接。后续需在部署后复查入链计数。

## 10. 新页面、工具、研究和可引用资产计划

只有证据确认后创建。优先级最高的不是新页面，而是可验证资产。

### 10.1 证据包

- 目标受众：采购、工程、OEM。
- 任务：验证证书、校准、工厂流程、客户真实性。
- 资产：ISO/CE/ATEX/RoHS 扫描（脱敏后）、单台校准证书样例、72h aging 测试记录样例、工厂真实照片/视频。
- 维护：证书有效期追踪，至少每季度检查一次。
- 产品连接：挂在 `/certificates`、`/quality`、产品页。
- 分发：只在站内和相关目录/媒体资源页展示，不群发。
- 成功指标：证书/校准文档请求数、询盘提及“看到证书”、后续成交。

### 10.2 受控 datasheet

- 目标：把 `Request PDF` 变成可审计的资产，或明确标注“询盘后发送”。
- 建议先做 AM-RL80 和 AM-EMF100 的真实 PDF datasheet；内容必须来自 `src/lib/products.ts` 和 `src/lib/facts.ts`，不能出现不一致。
- 成功指标：文档请求、下载/转化事件、询盘质量。

### 10.3 选型工具

- 目标：工程/采购输入应用条件，得到候选型号和 RFQ checklist。
- 只做真实规则和真实产品数据；不做关键词排列组合页面。
- 在证据和测量闭环建立前只做原型，不做 PSEO fanout。

### 10.4 原创数据/研究

- 如果工厂有真实老化测试、校准记录、装机案例，可发布脱敏统计或工程对比。
- 没有真实数据时不发布“行业报告”或“买家调研”。

## 11. 品牌、编辑型分发和外链风险

- `Organization.sameAs` 当前只有 Alibaba（`src/lib/site.ts:16-20`）。
- 旧文档记录品牌名与 MTI Instruments 的“Accumeasure”存在混淆风险；外部分发必须统一法定名称、域名、地址和联系方式。
- 不买链接、不交换链接、不群发外联、不提交低质量目录。
- 建议在证据包完成后，人工评估 2—3 个真实工业目录/协会/媒体资源页，以用户价值而不是 DR/dofollow 为选择标准。
- 所有站外动作需所有者授权，并记录：提交日期、URL、引荐访问、有效询盘、后续维护。

## 12. 转化、信任与测量计划

### 12.1 现状

- 表单有姓名、公司、邮箱、国家、产品兴趣、数量、需求、隐私同意。
- `getSourceSnapshot()` 会记录 landing page、referrer、UTM。
- 表单成功后调用 `trackLeadEvent`；浮动按钮调用 `trackContactClick`，但这些只在 GA4 初始化后有效。
- 后端若没有 `RESEND_API_KEY` 和 `EMAIL_TO`，也没有 webhook，会返回 503 并提示用户走 WhatsApp；这是“不假报成功”的正确设计，但也意味着交付链必须验证。
- 定制表单不真实上传文件，只传文件名；页面文案已说明会通过邮件/WhatsApp 跟进，行为一致。

### 12.2 需要修复

1. 验证生产环境 `RESEND_API_KEY`、`EMAIL_TO`、MX、webhook。
2. 在安装分析前先更新隐私政策、加 consent 机制和事件字典。
3. 定义 `generate_lead`、`contact_click`、`document_request`、`whatsapp_click` 的事件 schema。
4. 用内部测试邮箱做一次端到端表单验证；不在审计模式执行。
5. 建立 `landing -> CTA click -> submit -> email/webhook -> qualified lead -> quote -> order -> retention` 链路。

### 12.3 信任

- 产品页和信任页应链接到真实证书扫描、校准证书样例、工厂证据包。
- 无法证明的客户名、项目数量、性能百分比、创始人背景，必须要么补证据、要么改成可验证范围描述。
- 高流量低转化页和低流量高转化页要分别处理；当前没有数据，不能判断。

## 13. AI、PSEO、国际和多搜索引擎治理

### 13.1 AI 搜索/GEO

- `data/geo-query-set.csv` 有 76 条查询，0 条完成观测。
- `reports/geo/geo-observation-status.md` 明确指出 0 条实测不能解读为 0 可见性。
- 下一步：在 Perplexity、ChatGPT、Copilot、Gemini 上跑高优先级 20 条，记录品牌提及、引用 URL、引用位置、准确性和竞品；截图存档。
- 如果首批结果可复现，再改页面；否则继续观察。

### 13.2 PSEO

- 不建立城市/行业/产品名排列组合页面。
- 只有真实数据、真实功能、真实产品连接才允许模板化。
- 对任何模板页设置质量抽样、收录、转化和淘汰阈值。

### 13.3 国际化

- 当前不新增语言/国家页。
- GSC 美国 349 展示/3 点击，阿联酋 5 展示/0 点击，德国 2 展示/0 点击；样本不足以本地化。
- 如果未来做多语言，必须先用询盘/客户证据验证需求，再处理 URL、hreflang、母语 QA 和服务能力。

### 13.4 其他搜索引擎

- Bing/IndexNow 可以作为补充渠道，但不应替代 Google 基线。
- 需要分别记录 Bing 的查询、点击、收录和询盘；不要把 Bing 展示混入 Google 指标。

## 14. P0/P1/P2/P3 优先级总表

完整机器可读版本见 `seo-priority-backlog.csv`；URL 级动作见 `seo-page-action-plan.csv`。以下为摘要：

| 优先级 | 内容 | 负责人 | 依赖 |
|---|---|---|---|
| P0 | 验证并修复询盘交付链（Resend/webhook/MX） | Dev/Operations | 生产环境凭据 |
| P0 | 建立 KPI、consent、GA4/分析事件并验证 | Marketing/Dev/法务 | 隐私与同意方案 |
| P1 | 获取当前 GSC/URL Inspection 并修复确认的索引问题 | Owner | GSC 权限 |
| P1 | 建立证据包和 claim-to-evidence matrix | Marketing/Operations | 真实证书/客户授权 |
| P1 | 刷新近胜页和 flow category 直接答案 | Content/SEO | 证据和 GSC 基线 |
| P2 | 弱内链页面补上下文链接 | Content/Dev | 内容优先级 |
| P2 | 创建真实 datasheet 或明确受控文档 | Engineering/Marketing | 产品数据审批 |
| P2 | 优化 unused JS、检查移动体验 | Dev | 设计/QA |
| P3 | 首轮 GEO 人工实测 | Marketing | 人工操作许可 |
| P3 | 权威目录/资源页小规模试点 | Owner/Marketing | 证据包、预算 |
| P3 | 国际/多语言需求验证 | Owner | 有效询盘样本 |

## 15. 30/60/90 天路线图

### 0—30 天：可信基础

1. 确认询盘交付链：`RESEND_API_KEY`、`EMAIL_TO`、MX、webhook；用内部测试验证一次。
2. 定义有效询盘/销售合格线索/报价/成交；建立事件字典。
3. 在法务批准后安装 GA4/Clarity（或替代分析）并测试 `generate_lead`、`contact_click`。
4. 获取当前 GSC：28 天、前 28 天、90 天、16 个月，页面/查询/国家/设备；修正导出口径冲突。
5. 完成 URL Inspection 抽样：`/`、`/contact`、`/applications`、`/products/flow`、AM-RL80。
6. 建立 evidence manifest 的完整 claim-to-evidence matrix；优先处理证书、校准、案例和定制项目。
7. 首批近胜页刷新：`/certificates`、`/blog/how-to-choose-radar-level-sensor`、`/case-studies/saudi-water-radar-level`、AM-RL80、AM-PG200。
8. 启动 20 条高优先级 GEO 人工实测，保存截图。

依赖：Owner 提供 GSC、生产环境凭据、证据授权；Marketing 负责内容；Dev 负责事件和交付链。

### 31—60 天：页面与路径

1. 按 28 天基线判断首批刷新是否继续。
2. 更新 `/products/flow` 和弱内链应用/博客页面。
3. 建立真实 datasheet 或明确受控文档机制。
4. 创建证据包页面/资产：证书扫描、校准样例、工厂照片、经授权案例。
5. 修复 About、Customization、Quality、Industries 中无证据的强声明。
6. 根据首轮 GEO 结果决定是否调整 `llms.txt` 和实体页。

依赖：首批 GSC/询盘数据和证据审批是前置条件；没有证据就不扩量。

### 61—90 天：复测与扩大

1. 复盘首批近胜页：CTR、位置、点击、询盘归因。
2. 只扩大有证据的页面模型、内链路径和资产。
3. 回滚无效 title/CTA/内容实验。
4. 建立每月技术、证据、内容、GEO 巡检。
5. 只有在主市场 28 天数据和有效询盘稳定后，才评估新工具、国际化或 PSEO 实验。

## 16. 实施规格

### P0-A：询盘交付链验证

- 目标文件：`src/app/api/inquiry/route.ts:52-118`；生产环境变量。
- 当前行为：若无 `RESEND_API_KEY` 且无 `EMAIL_TO` 且无 `LEAD_WEBHOOK_URL`，合法提交返回 503。
- 目标行为：至少一条交付通道成功，用户收到“已收到”且运营收到可跟进 lead；邮件/MX 可投递。
- 验收：用内部邮箱测试；后端日志和收件箱各出现一条；垃圾/蜜罐不进入 CRM。
- 回滚：移除/回退环境变量或恢复原 route，不影响前端。
- 风险：配置错误可能暴露内部错误或丢询盘；测试只在授权后执行。

### P0-B：测量与 consent

- 目标文件：`src/components/analytics.tsx:8-40`、`src/lib/analytics.ts`、`src/app/privacy/page.tsx`。
- 当前行为：只有设置 env 才加载分析；隐私页声明“不使用广告追踪 cookie”，但没有 consent 机制。
- 目标行为：经批准后加载分析，先取得同意，记录 page_view、contact_click、generate_lead、document_request；隐私页与真实采集一致。
- 验收：预览环境事件出现在 GA4/调试视图；生产只有同意后产生非必要采集；事件名、参数和有效询盘定义一致。
- 回滚：关闭 env 即可停止加载，不修改业务逻辑。

### P1-A：GSC 和 URL Inspection 基线

- 负责人：Owner/SEO。
- 动作：导出当前 28/90 天、前后等长、16 个月数据；页面/查询/国家/设备；截图 URL Inspection。
- 验收：三个导出维度总和一致，每页 action plan 有真实基线。
- 风险：低，只读。

### P1-B：证据治理

- 目标文件：`docs/seo-growth-system/evidence-manifest.csv`；涉及 `src/lib/case-studies.ts`、`src/app/customization/page.tsx`、`src/app/about/page.tsx`、`src/app/quality/page.tsx`、`src/app/industries/page.tsx`。
- 当前行为：已新增 14 项 `claim-to-evidence-matrix.csv`，但真实资产仍未审批；manifest 仍只有 3 组未审批图片。
- 目标行为：每个量化/客户/证书/测试声明有 asset_id、来源、日期、范围、审批状态；未审批内容不上线或弱化为“可提供过程文件”。
- 验收：claim-to-evidence matrix 覆盖率 100%，无“需要审批但未审批”的公开声明。
- 回滚：恢复被替换的文案/图片。

### P1-C：近胜页刷新

- 目标：`/certificates`、`/blog/how-to-choose-radar-level-sensor`、`/case-studies/saudi-water-radar-level`、`/products/am-rl80-80ghz-radar-level-transmitter`、`/products/am-pg200-digital-pressure-gauge`、`/quality`。
- 本地已落地：证书核验步骤、雷达快速决策表和安装输入项、QC/文档请求事件、产品文档入口。真实证书扫描、授权案例和 GSC 基线仍未完成。
- 验收：每个页面 28 天基线明确；每次只改一个假设；30/60/90 天记录。
- 回滚：git revert 或内容管理回退。

### P2-A：Flow 分类页

- 目标：`src/app/products/flow/page.tsx`。
- 当前行为：已有 decision table 和 ATEX/portable 段落；GSC 展示高但点击 0。
- 本地已落地：将 title 改为包含 Non-Contact 的单变量实验，依据旧 GSC 查询簇和 Autosuggest；不新增 URL。
- 目标行为：在 GSC 查询簇确认后复查直接答案、真实产品证据、内链和 CTA，并按 28 天基线验收 title。
- 验收：28 天 CTR/位置；文档/产品询盘事件。

### P2-B：弱内链

- 目标：`src/app/products/level/page.tsx`、`flow`、`pressure`、产品详情、博客。
- 本地已落地：产品详情页按 category 增加选型/应用入口，`/industries` 增加应用详情入口，5 篇核心博客增加相关应用/产品/证书入口。剩余分类页和正文上下文入口待补。
- 验收：目标页面正文上下文入链增加，SEO CI 仍 0 错误，没有无关精确匹配锚文本堆砌。

### P2-C：性能

- 目标：`next.config.mjs`、组件动态加载。
- 当前行为：Lighthouse 主要机会是 unused JS 21—24 KiB。
- 目标行为：减少低价值页面首屏 JS；保持交互功能完整。
- 验收：固定 Lighthouse 对比不退化，关键 CTA 可点击；不承诺 CrUX 分数。

### 前三轮已实施（2026-08-09）

第一轮先落地不依赖外部凭据或真实证据的安全批次，未部署生产：

- 新增 `trackDocumentRequest` 和 `DocumentRequestLink`，在 Resources、Certificates、产品详情页记录文档请求点击。
- 修复产品页 `#documents` 死锚点：增加“Technical Documents”区块，并提供 datasheet、manual、3D、certificate scan 的询盘预填链接。
- 产品详情页新增“Selection Guides & Applications”上下文内链，覆盖 level/flow/pressure 三类产品的选型、应用和比较页。
- Resources 明确“受控文档仅询盘发送”，不再暗示公开下载。
- 移除首页单独 hreflang，统一为单语言站无 hreflang 策略。
- 更新 sitemap 中实质变更页面的 `lastmod` 到 2026-08-09。
- 新增 `docs/seo-growth-system/claim-to-evidence-matrix.csv`，记录证书、质量、案例、About/Customization/Industries 等公开强声明所需证据和审批状态。
- README 和 SEO-GROWTH-SYSTEM 文档同步记录事件与证据治理约定。

第二轮继续完成可本地验证的安全批次，仍未部署生产：

- `/certificates` 增加“How to Verify a Certificate”核验步骤，并明确 IECEx、FCC 当前未公开编号/issuer；证书扫描、证书核验 CTA 接入 `document_request`。
- `/quality` 将 aging 温度循环事实统一引用 `companyFacts.agingSpec`，QC 文档请求 CTA 接入 `document_request`。
- `/resources` 明确“受控文档仅询盘发送”并覆盖 certificate scans，所有文档请求入口改为可测量 `DocumentRequestLink`。
- 产品详情文档 CTA 和 `ProductTabs` 下载/证书扫描请求接入 `document_request`；`ProductTabs` 新增 Certificate Scan 请求入口。
- `/industries` 行业卡新增 Water/Oil/OEM 应用详情入口，补强正文上下文内链。
- 雷达选型指南新增“Quick selection table”和安装输入项，将 `dateModified` 更新到 2026-08-09，博客显示改为 `Updated ...`。
- `docs/seo-growth-system/claim-to-evidence-matrix.csv` 覆盖 14 项公开强声明的证据要求、脱敏和审批状态。

第三轮继续补齐测量归因和内容内链，仍未部署生产：

- `DocumentRequestLink` 自动在询盘链接中带上 `source=product|resources|certificates|quality`，Contact 表单提交时若来源和文档名已知，会补记 `document_request`，不只是记录点击。
- 博客页新增 “Related Guides & Applications” 区块，为雷达选型、80GHz vs 26GHz、电磁/超声波流量计、中国供应商清单、压力变送器选型 5 篇核心文章增加应用、产品、比较、证书和 Contact 上下文内链。
- `/products/flow` 按旧 GSC 查询簇将 title 改为包含 Non-Contact 的单变量实验；部署后需用 28 天 CTR/位置验收，不新增 URL。

验证：`npm run verify` 通过，48 个路由构建成功；schema CI 180 个 JSON-LD 无错误；SEO CI 42 个 HTML 无错误；构建 HTML 中产品文档锚点、Resources 受控文档说明、首页无 hreflang、证书核验步骤、行业应用入口和博客 Related Guides 均已确认。

尚未完成且需要外部授权：生产询盘交付链验证、GA4/consent 安装、当前 GSC/URL Inspection、真实证书扫描/编号/授权案例/工厂证据包、有效询盘和成交定义。

## 17. 复测与验收清单

每次改动后：

- `npm run verify` 通过。
- 线上状态、canonical、robots、sitemap 复查。
- GSC 28 天滚动窗口导出并校验总和一致。
- URL Inspection 记录状态。
- 若涉及转化，预览环境验证事件。
- 若涉及证据，manifest 更新审批状态。
- 30/60/90 天复测：点击、CTR、位置、询盘、成交分别记录。

## 18. 需要补充的数据/决策

1. GSC 当前 28/90 天、前等长、16 个月导出和 URL Inspection 截图。
2. 生产环境 `RESEND_API_KEY`/`EMAIL_TO`/MX/webhook 配置状态。
3. 有效询盘、销售合格线索、报价、成交的定义和审批人。
4. GA4/Clarity 或替代分析、consent、数据保留策略。
5. 证书扫描件、校准证书样例、工厂照片、客户授权/脱敏证据。
6. About/Customization/Quality/Industries 中强声明的事实来源。
7. 首轮 GEO 20 条人工实测日志。
8. 品牌资料：LinkedIn/目录/资源页是否执行、由谁负责。
9. SERP 截图：固定市场、语言、设备下的核心查询。
10. 是否授权部署本轮本地改动到生产，以及后续实施、GSC/GA4/CRM 和外部分发边界。

## 19. 当前官方来源链接

以下链接在 2026-08-09 均返回 200，用于支撑本报告中会变化的政策主张：

- Google robots：https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Google sitemaps：https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google canonical/duplicate URLs：https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- GSC URL Inspection：https://support.google.com/webmasters/answer/9012289
- Google structured data：https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google Product rich results：https://developers.google.com/search/docs/appearance/structured-data/product
- Google FAQPage（FAQ rich result 仅限权威政府/医疗站点）：https://developers.google.com/search/docs/appearance/structured-data/faqpage
- Google AI Overviews：https://developers.google.com/search/docs/appearance/ai-overviews
- GA4 custom events：https://support.google.com/analytics/answer/9216061
- Google Consent Mode：https://support.google.com/analytics/answer/10089681
- Google localized versions/hreflang：https://developers.google.com/search/docs/specialty/international/localized-versions
- IndexNow：https://www.indexnow.org/documentation
