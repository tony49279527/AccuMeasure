# AccuMeasure 全面 SEO 审计与优化计划

**审计日期：** 2026-08-10（Asia/Shanghai）  
**线上域名：** `https://www.accumeasuretech.com`  
**仓库：** `/Users/liangxile/project/AccuMeasure`，`main`，审计基线 `9ae28094ebc8055c2be0d987f9def6396a809fbb`  
**模式：** `AUDIT_ONLY`。本轮只新增本报告和两份 CSV，不修改业务代码、内容、配置或外部平台。

## 1. 执行摘要

AccuMeasure 已具备可用的技术 SEO 底座，但增长系统仍处于早期。39 个 sitemap URL 当前均返回 200，title、description、canonical、H1、内部链接和 JSON-LD 的本地 CI 均通过；主要瓶颈不是全站抓取故障，而是搜索到收入的测量缺口、强声明缺少已审批证据，以及已有曝光未有效转化为点击。

**当前成熟度：58/100。** 分数只用于排优先级，不预测排名、流量、收录、富结果或 AI 引用。

**最重要的 3 个阻断**

1. **P0 测量闭环缺失：** 线上 HTML 未发现 GA4/Clarity，且没有 CRM/收入数据，无法把 GSC 点击连接到有效询盘、报价和订单。
2. **P0 询盘交付未被端到端证明：** 源码有 Resend/webhook 和失败处理，但生产环境密钥、收件与 CRM 落库无法由公开页面验证。
3. **P1 信任证据不足：** 证据清单只有 3 组 `unreviewed` 图片；14 项证书、测试、客户、工厂与项目声明全部仍为 `pending/unapproved`。

**最值得做的 5 个机会**

1. 在隐私与同意方案批准后建立 `organic landing -> CTA -> form -> delivered -> qualified lead -> quote -> order` 测量链。
2. 审批证书扫描、校准/老化测试记录和脱敏案例证据，再刷新 `/certificates`、`/quality` 与案例页。
3. 优先刷新已有可见性的 `/certificates`、首页、`/case-studies`，以及高价值产品与选型指南，而不是批量新建页面。
4. 对 `/products/flow` 的高曝光远排名查询簇做意图校验和内容整合；不为 `ATEX/non-contact/portable mass` 机械拆分薄页。
5. 先完成 20 条人工 GEO 观测，并建立可验证 datasheet/选型表/案例资产，再考虑编辑型分发。

顺序是：**先确认询盘交付与测量，再治理证据，再做近胜页和内链实验，最后才扩大内容、外链、国际化或 AI 搜索投入。**

## 2. 范围、证据与限制

### 2.1 审计范围

- 技术栈：Next.js 14 App Router、TypeScript、Tailwind、React Hook Form、Zod、Vercel。
- URL inventory：线上 sitemap 39 个可索引 URL；另检查 noindex 的 `/privacy`、`/terms` 和正常 404。
- 线上基础爬取：39/39 sitemap URL，检查状态码、title、description、canonical、H1、JSON-LD、图片 alt。
- 本地构建：`npm run verify` 于 2026-08-10 通过；42 个 HTML 页面、180 个 JSON-LD 块，0 个 schema/SEO CI 错误。
- GSC：Search Analytics 数据截至 2026-08-08；URL Inspection 抽查首页、Flow、Applications、Contact。
- 性能：当前 PSI API 返回 429，配额上限为 0；采用 2026-08-09 固定配置 Lighthouse 移动实验室结果作诊断兜底，不冒充 CrUX。
- 转化：仅向 inquiry API 发送空 JSON 和 malformed body，分别验证 422/400；未提交真实询盘。

### 2.2 证据等级

- **A：** 当日官方文档、GSC 一方数据、线上可复现 HTTP/HTML、源码和本地测试。
- **B：** 多项一致的仓库记录或历史实验室数据，但缺生产行为或对照。
- **C：** 单次 SERP、第三方分数或未经一方数据验证的假设，只能用于候选发现。

本报告严格区分：观察是可复现事实，推断写明其他解释，建议包含动作与验收。低样本不写成趋势或因果。

### 2.3 数据缺口及其限制

| 数据 | 状态 | 因此不能下的结论 |
|---|---|---|
| GSC Search Analytics | 可用至 2026-08-08 | 样本小；16 个月仅从 2026-07-03 起有数据，无法判断季节性 |
| GSC URL Inspection | 4 URL 可用 | 不能外推全部 39 URL 的索引状态 |
| GA4/Clarity/Consent | 未确认上线 | 不能判断 organic session、CTA、表单转化率 |
| CRM/报价/订单/留存 | 不可用 | 不能判断 SEO 收入和市场质量 |
| 服务器/CDN 日志 | 不可用 | 不能验证 Googlebot 抓取频率和 5xx 历史 |
| CrUX/CWV 现场数据 | 不可用 | Lighthouse 只能定位实验室问题 |
| 完整外链数据 | 不可用 | GSC API 不提供完整 Links 报告，不能评价链接增长/流失 |
| 当前完整 SERP 快照 | 不完整 | 不能把查询直接转成 CREATE 指令 |
| GEO 观测 | 0/76 | 不能声称品牌在 AI 搜索中可见或不可见 |
| 证据审批 | 0/14 强声明获批 | 不能把源码声明当作已验证事实 |

## 3. 业务目标与测量基线

业务模型为 B2B 工业仪器制造与出口，核心产品包括液位、流量和压力仪表，以及 OEM/ODM 定制。主要转化应定义为**有效 RFQ**；次级转化为 WhatsApp、电话、受控文档、样品和报价请求。目标用户包括进口商、经销商、系统集成商、设备 OEM、工程与采购团队，当前以英语市场为主。

| 漏斗层 | 建议口径 | 当前基线 |
|---|---|---|
| Search visibility | GSC click/impression/CTR/position，按 query/page/country/device 分开 | 可用，样本小 |
| Landing engagement | consented organic session、关键页参与 | 未知 |
| CTA | `contact_click`、WhatsApp/phone/document request | 未知 |
| Form | valid submit、API accepted、delivery accepted 分开 | 代码有候选事件，生产未知 |
| Qualified lead | 公司、国家、产品/应用、联系方式有效且非垃圾 | 未定义/未知 |
| Revenue | quote、order、revenue、sales cycle | 未知 |
| Retention | repeat order、retained account | 未知 |

GSC impression 不是市场总搜索量，click 不是 lead，平均位置不是固定排名。现阶段首要业务基线应是：生产询盘交付成功率、有效询盘定义、landing source 保留率和首次响应时间。

## 4. 100 分 SEO 评分卡

| 模块 | 满分 | 得分 | 事实依据与扣分点 | 置信度 | 下一档动作 |
|---|---:|---:|---|---|---|
| 技术可访问、抓取与索引 | 20 | 16 | 39/39 为 200，canonical/robots/sitemap/CI 健康；`/applications` 未知、`/contact` crawled-not-indexed，无完整 Pages/CrUX | 高 | 复核重点 URL Inspection 和 Pages 报告，按原因处理 |
| 页面质量、意图与刷新 | 20 | 12 | 页面类型较完整、结构清楚；证据化比例低，部分曝光页 0 点击 | 中高 | 证据审批后做单变量刷新 |
| 需求研究与页面映射 | 15 | 10 | 有当前 GSC query/page/country/device；缺 90 天等长有效样本、完整 SERP 和询盘验证 | 中 | 建查询簇到页面/询盘联合基线 |
| 信息架构与内部链接 | 10 | 8 | 导航、面包屑、类别/产品路径完整且无 CI 孤儿页；深层应用/指南入链仍弱 | 高 | 按选型路径补上下文内链并抽样 |
| 业务测量与数据可信度 | 10 | 3 | GSC 当前可用；GA4/consent/CRM/收入缺失 | 高 | 建立 consented analytics 和 lead join |
| 可链接资产与编辑型分发 | 10 | 2 | 有图片和候选列表；无已审批证书、案例、研究或工具资产 | 高 | 发布可核验资产后再人工分发 |
| 转化、信任与留存 | 10 | 4 | 表单、WhatsApp、电话路径存在；交付、事件和声明证据未闭环 | 中高 | 完成内部测试询盘和证据治理 |
| AI/PSEO/国际化治理 | 5 | 3 | 有 76 查询集和防低价值扩张规则；0 次观测，无本地化需求证据 | 中 | 做 20 条人工观测；维持 English-first |
| **总分** | **100** | **58** | 分数用于排优先级，不预测结果 |  |  |

## 5. 技术 SEO、安全、抓取与索引

### 5.1 P0 访问和安全

**观察（A）：** 规范首页返回 200；HTTPS、HSTS preload、`X-Content-Type-Options: nosniff`、`X-Frame-Options: SAMEORIGIN`、严格 referrer policy 和 Permissions Policy 存在。未观察到全站 noindex、认证墙、恶意下载或 5xx。正常 404 返回 404 并 noindex。未发现 CSP；对当前静态营销站不是 SEO 阻断，但应由安全负责人评估，而非为评分机械添加。

### 5.2 抓取、索引和规范化

- `robots.txt` 允许公开内容，禁止 `/api/` 和会形成表单预填参数的 URL；声明 sitemap。
- sitemap 为 39 个规范 URL，39/39 返回 200。`lastmod` 只能在能证明实质更新时间时更新，不能每日机械刷新。
- 线上抽查未发现错误 canonical、多个 H1、缺 title/description、缺图片 alt 或 JSON-LD 缺失。
- GSC sitemap API 的“submitted 39 / indexed 0”与 URL Inspection 已确认的已索引页面矛盾，不能把 sitemap 的 0 当作实际全站未收录。
- URL Inspection：`/` 已提交且已索引，最近抓取 2026-07-25；`/products/flow` 已提交且已索引，最近抓取 2026-07-29；`/applications` 为 `URL is unknown to Google`；`/contact` 为 `Crawled - currently not indexed`，最近抓取 2026-07-15。

**推断（中置信度）：** `/applications` 的问题更可能是新站发现/页面价值信号不足，而不是 robots 或 canonical 错误；`/contact` 不收录未必影响询盘，只要它可从核心页面访问。需要 Pages/Inspection 原因和日志才能进一步确定。

**建议：** 不批量请求索引。先审查 `/applications` 的独立价值、首页/行业/产品上下文链接和真实案例证据；实质更新后由 Owner 人工复查 URL Inspection。`/contact` 以可访问和转化可用为首要验收，不以收录为 KPI。

### 5.3 页面理解、schema 与重复

本地 `schema-ci` 扫描 180 个 JSON-LD 块为 0 错误，`seo-ci` 扫描 42 个 HTML 页面为 0 错误。结构合规不保证富结果。Google 已在 2026 年移除 FAQ rich result；保留 FAQPage 只能建立在可见、准确、有帮助的 FAQ 内容上，不应为了富结果扩写 FAQ。

未发现同义词城市页、门页或参数抓取陷阱。网站为 English-only，不应在没有需求与母语 QA 证据时增加国家/语言目录。

### 5.4 性能、图片、移动与可访问性

2026-08-09 Lighthouse 移动实验室：

| URL | Performance | A11y | Best Practices | SEO | LCP | TBT | CLS |
|---|---:|---:|---:|---:|---:|---:|---:|
| `/` | 87 | 100 | 100 | 100 | 2.6s | 100ms | 0 |
| `/products/am-rl80-80ghz-radar-level-transmitter` | 85 | 95 | 100 | 100 | 2.9s | 120ms | 0 |
| `/contact` | 90 | 100 | 100 | 100 | 1.7s | 0ms | 0.011 |

主要实验室机会是约 21-24 KiB unused JavaScript。当前无 CrUX p75，不能宣称通过或失败 Core Web Vitals。性能优化是 P2/P3，不应压过测量、交付和证据治理。移动端下一轮应人工验证导航、产品筛选、WhatsApp/电话、文档请求、表单错误和成功态。

## 6. GSC/分析发现

### 6.1 时间窗口

| 窗口 | Clicks | Impressions | CTR | Avg position | 解释 |
|---|---:|---:|---:|---:|---|
| 2026-07-12 至 08-08 | 5 | 990 | 0.505% | 59.79 | 当前 28 天 |
| 2026-06-14 至 07-11 | 1 | 164 | 0.610% | 53.50 | 数据仅从 07-03 起出现，覆盖不等长，不可作可靠环比 |
| 2026-08-02 至 08-08 | 0 | 158 | 0% | 52.80 | 当前 7 天 |
| 2026-07-26 至 08-01 | 1 | 361 | 0.277% | 65.72 | 前 7 天 |

当前 7 天展示较前 7 天下降 56.2%，点击少 1 次，但平均位置改善约 12.9。下降主要来自低排名 Flow 查询和页面覆盖收缩；样本很小，不能定义为站点级惩罚或改版因果。相较 2026-07-31 的滚动 28 天审计（867 展示、6 点击），当前展示约增加 14.2%，点击减少 16.7%，CTR 下降 0.18 个百分点，位置改善约 0.51；这只是滚动检查。

### 6.2 页面发现

| 页面 | 28d 展示/点击/位置 | 行动判断 |
|---|---|---|
| `/products/flow` | 441 / 0 / 64.59 | 高曝光但远排名；先做意图/覆盖诊断，不用 CTR 话术掩盖相关性问题 |
| `/products` | 141 / 0 / 61.45 | 保持目录任务，改善到类别/产品的决策入口 |
| `/about` | 95 / 2 / 61.79 | 有点击但排名远；证据优先于扩写 |
| `/products/level` | 83 / 0 / 46.84 | 评估查询覆盖和产品匹配 |
| `/products/pressure` | 73 / 1 / 60.73 | 保持，按查询与询盘再细分 |
| `/certificates` | 29 / 0 / 8.07 | P1 近胜 CTR/信任页，但先补证据 |
| `/` | 24 / 1 / 8.04 | 保持标题；观察品牌/品类组合 |
| `/case-studies` | 17 / 0 / 10.29 | P1/P2 首页冲刺，依赖案例证据 |
| `/quality` | 14 / 0 / 6.00 | 可见但 0 点击，依赖质量证据 |

`/applications` 在 GSC 无可用页面表现且 URL Inspection 未知；它不是“再改一次 title”的候选，而是索引资格与独立价值问题。

### 6.3 查询、国家和设备

主要查询均处于远排名：`explosion proof flow meter` 61 展示/位置 71.90，`mass portable flow meters` 54/54.22，`ATEX flow meter` 34/68.56，`non contact flow meter` 33/89.79，`ex certified pressure gauge` 26/62.88，`80 GHz radar` 17/76.35。它们是内容/产品匹配候选，不是独立页面指令。

国家：美国 635 展示/3 点击，加拿大 73/0，英国 51/0，澳大利亚 27/0，爱尔兰 23/0，越南 22/0。设备：desktop 851/5，mobile 108/0，tablet 31/0。美国展示占多数，但没有有效询盘或收入证据，不能据此创建美国落地页。

### 6.4 分析数据

线上首页 HTML 未发现 `gtag`、GA4 或 Clarity。源码中的 analytics helper 和事件名只有在生产环境初始化、同意逻辑和 DebugView 验证后才算可用。当前不能计算 organic conversion rate，也不能比较高流量低转化与低流量高转化页面。

## 7. 需求、SERP、意图与内容差距

需求池以当前 GSC 为 A 级来源，历史 Autosuggest/竞品矩阵只作为 B/C 级候选。当前完整 SERP 版面未稳定采集，因此所有 `CREATE` 均暂缓。

| 查询/任务簇 | 当前 URL | 供给缺口 | 处理 |
|---|---|---|---|
| Explosion-proof / ATEX flow meter | `/products/flow`、相关产品 | 证书适用型号、介质/安装限制和可核验证据不足 | 在同页建立准确筛选；证据获批前不创建认证门页 |
| Portable mass flow meter | `/products/flow`、AM-MF50 | “portable”是否真实产品能力未证实 | 工程确认事实；不匹配则不要追词 |
| Non-contact flow meter | `/products/flow`、AM-UF200 | 术语可能指 clamp-on/ultrasonic，不应泛化承诺 | 用用户任务解释技术边界并链接产品 |
| Ex-certified pressure gauge | `/products/pressure`、AM-PG200 | 当前认证范围与产品证据不清 | 先核认证范围；不创建虚假 Ex 页面 |
| 80GHz vs 26GHz / radar selection | 指南、对比、AM-RL80 | 需要安装图、场景限制和真实配置实例 | 更新现有指南和产品，不新建重复页 |
| Datasheet/certificate/manual | `/resources`、`/certificates` | 缺真实可下载或明确受控文档流程 | 发布经工程审批的文档或明确 request 流程 |

竞争者基线包含 Endress+Hauser、VEGA、KROHNE、Supmea，但现有矩阵不是 2026-08-10 完整 SERP 快照。下一次内容决策应固定美国/英语/移动与桌面，记录广告、AI/PAA、页面类型、自然点击空间和来源日期。

## 8. 旧页刷新和 CTR 计划

| URL | 基线 | 单变量假设 | 保留/增加/不做 | 验收 |
|---|---|---|---|---|
| `/certificates` | 29/0，pos 8.07 | 证书可验证信息比泛化认证文案更能满足点击后任务 | 保留 URL；增加扫描/范围/状态；不承诺 rich result | 30 天 CTR/位置 + 文档请求；60/90 天复核 |
| `/quality` | 14/0，pos 6.00 | 真实 SOP/校准样例比“严格质量”更可信 | 保留结构；增加脱敏记录；未获批数字降级 | 30 天 CTR；60 天 CTA；90 天 lead quality |
| `/case-studies` | 17/0，pos 10.29 | 有证据状态的案例摘要比结果口号更可用 | 保留列表；仅突出已审批案例 | 30/60/90 天页面和 lead 复核 |
| `/products/flow` | 441/0，pos 64.59 | 清楚的技术分类/边界可改善相关性 | 保留目录；补意图筛选；不拆薄页 | 28 天 query coverage/position；60 天点击/询盘 |
| Radar selection guide | 当前 28d 低曝光；历史近胜 | 决策表、安装图和限制可提高任务完成 | 保留正文；增加一手图/示例；不机械改日期 | 30 天 impressions/CTR；60/90 天产品点击 |

标题和 description 只做一次一个变量的沟通实验；无实质内容更新不改发布日期。低样本时连续两个 28 天窗口后再判断。

## 9. 信息架构与内部链接计划

当前层级 `Home -> Product category -> Product -> Application/Guide/Case -> Contact` 基本正确。CI 未发现孤儿页，但深层应用和指南的上下文入口较少。

| 来源 URL | 目标 URL | 放置语境 | 建议锚文本 | 用户价值 |
|---|---|---|---|---|
| `/products/level` | Radar selection guide | 选型条件之后 | `radar level sensor selection guide` | 从类别进入决策方法 |
| AM-RL80 | Oil tank application | 安装/危险区域说明 | `radar measurement for oil tanks` | 验证适用场景和限制 |
| `/products/flow` | Magmeter vs ultrasonic comparison | 技术选择表后 | `compare electromagnetic and ultrasonic flow meters` | 减少错误询盘 |
| AM-EMF100 | Water treatment application | 行业应用段落 | `electromagnetic flow measurement for water treatment` | 连接产品与工况 |
| `/products/pressure` | Pressure selection guide | 输出/量程选择后 | `pressure transmitter selection guide` | 帮助完成规格选择 |
| `/certificates` | 受影响产品 | 每个有效证书范围内 | 具体产品型号 | 避免用户误解证书覆盖范围 |
| 已审批 case | 对应产品与 RFQ | 结果/配置后 | 具体配置或相似应用 | 从证明进入商业下一步 |

模板内链必须按语义规则，并抽查锚文本、目标 200、canonical 和移动端可点击性。链接数量不是 KPI。

## 10. 新页面、工具、研究和可引用资产计划

当前不建议立即创建新 SEO 页面。先做以下资产，按证据门槛排队：

1. **Certificate verification library：** 扫描件、编号、issuer、有效期、型号范围、脱敏与审批。引用理由是可核验，不是 schema。
2. **AM-RL80 / AM-EMF100 controlled datasheets：** 由工程从已批准规格生成 PDF，含 revision/date/owner；不存在的文件不得伪装下载。
3. **Selection worksheet：** 输入介质、量程、温压、安装、输出、认证需求，输出需要向工程确认的规格清单；不做虚假即时选型结论。
4. **Calibration/aging evidence brief：** 展示 SOP、设备校准状态、样例记录和适用范围，删除无法证明的绝对承诺。
5. **经授权的匿名案例：** 问题、工况、选型、实施、结果、限制、证据 ID、客户授权与复核日期。

只有资产具备真实数据、维护负责人、产品连接和转化事件后，才评估独立 URL 或工具。

## 11. 品牌、编辑型分发和外链风险

当前无完整 backlink 数据，不能评价 DR、链接增长或流失。Authority scorer 仅验证了 10 个候选，Thomasnet 20 分、Instrumentation Live 19 分、MCAA 18 分；这些分数是人工审核顺序，不是申请或付费指令。

先决条件：品牌电话/地址/类目一致、证书和案例审批、RFI inbox 归属、预算与渠道适配。之后可小规模人工评估行业目录、协会、展会、合作伙伴资源和工程媒体；成功指标是相关 referral visits、有效询盘和引用准确性，不是 dofollow 或链接数量。

禁止购买/交换链接、群发外联、虚假目录、寄生 SEO 或操纵社区投票。Google 将主要为操纵排名创建的链接视为 link spam。

## 12. 转化、信任与测量计划

### 12.1 转化路径

产品、应用、案例和资源页都应携带 `landing URL + source page + product/document context` 到表单。事件至少分为：CTA click、valid submit、API accepted、delivery accepted、qualified lead、quote、order。前端成功提示只能在后端确认接收后出现。

### 12.2 P0 测量实施顺序

1. Owner 定义有效询盘、SQL、quote、order 和首次响应时间。
2. Legal/Marketing 决定 consent 和 privacy 文案；确认 GA4 property 与数据保留。
3. Dev 在 preview 验证 page_view 去重、UTM/landing/source 保留、`contact_click`、`generate_lead`、`document_request`。
4. Operations 用授权的内部测试地址验证 email/webhook/CRM 交付、重试和失败提示。
5. 生产验证只使用内部测试，不提交真实客户询盘；建立每周漏单检查。

### 12.3 信任门槛

`claim-to-evidence-matrix.csv` 的 14 项声明必须分为 approved、weaken/remove、pending。客户名、订单量、节省比例、零故障、交付天数、认证范围等高风险声明，没有来源、授权、日期、适用范围和 owner 就不能扩散到新页面或外部渠道。

## 13. AI、PSEO、国际和多搜索引擎治理

- **AI/GEO：** 76 条 query set、0 条 observation；“未测量”不等于“不可见”。先人工测 20 条高优先问题，记录平台、日期、地区、答案、品牌提及、引用 URL、位置、准确性、竞争者和截图。
- **生成式 AI：** 可用于研究、聚类、草稿和代码候选；事实、证书、案例、代码和发布必须人工闸门。Google 明确提示，大规模生成而不给用户增加价值可能触发 scaled content abuse。
- **PSEO：** 当前不启动。每个规模化页面必须有独立真实数据/功能、产品连接、质量抽样、索引/转化/淘汰门槛。
- **国际化：** Market scorer 为美国 7、阿联酋 5、德国 2；均无 inquiries/customers/readiness。维持 English-first，不创建国家/语言页面，不添加 hreflang 体系。
- **Bing/IndexNow：** IndexNow 的 HTTP 200 只表示搜索引擎收到通知，不保证抓取或收录。只有确认 Bing 有合格需求并能独立测量后再启用。
- **AI crawler：** robots/WAF 决策应同时考虑发现、训练授权、版权、成本和安全，不能把允许 crawler 当作排名策略。

## 14. P0/P1/P2/P3 优先级总表

| ID | 优先级 | 动作 | 影响/置信度/工作量/风险 | Owner | 依赖 | 验收与回滚摘要 |
|---|---|---|---|---|---|---|
| B001 | P0 | 建立 analytics/consent/lead KPI | 5/高/M/中 | Marketing + Dev + Legal | GA4 property、privacy 决策 | DebugView 和生产内部测试；移除 env/脚本回滚 |
| B002 | P0 | 证明 inquiry email/webhook/CRM 交付 | 5/高/S/中 | Dev + Operations | 生产密钥、授权测试地址 | 日志与收件一致；恢复 env/route 回滚 |
| B003 | P1 | 关闭 14 项强声明证据缺口 | 5/高/L/中 | Operations + Engineering + Marketing | 原始文件、授权、脱敏 | 100% 强声明有 approved ID 或降级；回滚内容/资产 |
| B004 | P1 | 复核 `/applications` 和重点索引状态 | 4/高/S/低 | SEO + Owner | GSC Pages/Inspection | 原因与状态记录；不批量请求索引，无代码回滚 |
| B005 | P1 | 刷新 certificates/quality/case near-win | 4/中高/M/低 | Content + SEO | B003、当前 GSC/SERP | 单变量 30/60/90 复测；Git/CMS 回滚 |
| B006 | P2 | Flow 查询簇意图和内容整合 | 4/中/M/低 | Content + Engineering | 产品能力核实 | 不新增重复 URL；28/60 天复测；页面回滚 |
| B007 | P2 | 上下文内链与用户路径 | 3/高/S/低 | Content + Dev | 页面优先级 | 目标有语义入链且 CI 通过；移除链接回滚 |
| B008 | P2 | 受控 datasheet/证书请求资产 | 4/高/M/中 | Engineering + Marketing | 数据审批 | 文件 revision 与规格一致；撤下文件回滚 |
| B009 | P2 | 移动表单和 unused JS 优化 | 2/中/M/低 | Dev + QA | CWV/analytics 基线 | 固定 Lighthouse 不回退且路径可用；Git 回滚 |
| B010 | P3 | 20 条 GEO 人工观测 | 3/中/S/低 | Marketing | 平台访问 | 20 条带截图记录；删除错误行回滚 |
| B011 | P3 | 小规模编辑型分发试点 | 2/中/M/中 | Owner + Marketing | B003/B008、预算 | 无买链，记录 referral/lead；停止/撤回 |
| B012 | P3 | 国际与 Bing 需求验证 | 2/中/S/低 | Owner + SEO | lead/revenue、Bing 数据 | 无需求不建页；维持单语回滚 |

机器可读细节见 `seo-priority-backlog-2026-08-10.csv`。

## 15. 30/60/90 天路线图

### 0-30 天

- B001/B002：确定 KPI、consent、生产询盘交付与内部测试流程。
- B003：逐条处理 14 项 claim-to-evidence，先证书、质量流程和三个案例。
- B004：导出 Pages/Sitemaps，检查 10 个优先 URL；不自动请求索引。
- 建立当前 28 天 GSC 自动快照和维度总计校验。
- 只有证据获批后，发布一个 near-win 单变量批次。

### 31-60 天

- 评估第一批 `/certificates`、`/quality`、案例或指南的 GSC 与 lead 行为。
- 做 Flow 查询簇的产品事实/意图校验，更新一个现有页面批次。
- 发布 1-2 份经工程审批的受控文档，测量文档请求。
- 补语义内链并跑 build/schema/SEO/mobile/form smoke。
- 完成首 20 条 GEO 人工观测。

### 61-90 天

- 用两个完整 28 天窗口决定 KEEP、迭代或回滚；低样本继续观察。
- 将 organic landing 与 qualified lead/quote/order 做匿名 join。
- 仅在证据资产、渠道适配和预算批准后试点 2-3 个编辑型渠道。
- 依据有效询盘而非 impression 决定是否研究美国/阿联酋市场页或 Bing。

## 16. 实施规格

### B001：测量与同意

- **目标位置：** `src/components/analytics.tsx`、`src/lib/analytics.ts`、表单组件、Privacy 文案和部署环境。
- **当前行为：** helper 存在，公开 HTML 无分析脚本，生产事件不可证。
- **目标行为：** 经同意后唯一 page_view；保留 first landing/source/product/document；事件与 lead 定义一致。
- **测试：** preview DebugView、网络请求、拒绝 consent、SPA 导航、UTM、自引荐、移动端。
- **验收：** 事件不重复；拒绝非必要 consent 时不发；提交与后端 accepted 可对应。
- **回滚：** 禁用相关 env 或恢复 analytics 组件；保留业务表单。

### B002：询盘交付

- **目标位置：** `src/app/api/inquiry/route.ts`、Resend/webhook/MX 环境与运行日志。
- **当前行为：** 无任何交付目标时返回 503；生产配置无法匿名验证。
- **目标行为：** 只有至少一个目标明确接受后才返回成功；失败可观测、可重试、无 secret 泄露。
- **测试：** malformed/empty/honeypot/内部有效测试；email/webhook/CRM 对账。
- **验收：** 内部测试从提交到 inbox/CRM 有同一 request ID；失败不展示成功。
- **回滚：** 恢复前一版 route/env，暂停有问题的交付目标。

### B003：证据治理

- **目标位置：** `docs/seo-growth-system/evidence-manifest.csv`、`claim-to-evidence-matrix.csv`、certificates/quality/about/case/customization/industries 内容源。
- **当前行为：** 3 个图片资产 unreviewed，14 项强声明 unapproved。
- **目标行为：** 每项声明有来源、日期、适用范围、授权、脱敏、owner、approval；否则降级或删除。
- **测试：** evidence validator + 人工逐项核对 live copy。
- **验收：** 公开强声明 100% 映射 approved asset ID 或已降级；证书范围不越界。
- **回滚：** 撤下未通过资产，恢复经批准的保守文案。

### B004：索引诊断

- **目标：** `/applications`、`/contact`、类别页、核心产品、near-win 页面。
- **当前行为：** 两个页面 Inspection 异常，技术 crawl 未见阻挡。
- **目标行为：** 记录 Pages reason、canonical、last crawl、rendered HTML、referring pages 和 sitemap state；只按确认原因修复。
- **验收：** priority URL 状态表可复现；任何请求索引均为实质更新后的人工动作。
- **回滚：** 数据采集无回滚；页面改动按独立 Git 批次回滚。

### B005/B006：页面刷新

- 每页必须有 URL、主任务、GSC 28/90 基线、固定 SERP 快照、保留/增加/删除/不改、证据 ID、单变量 title/snippet 假设、CTA/event 和 30/60/90 验收。
- 一个批次只改变一个主要假设；不为查询排列组合创建新 URL。
- 验收同时看相关 query/page、点击、qualified lead；位置下降或无业务价值时回滚，不机械续写。

### B007/B008：内链与资产

- 内链目标必须 200、自 canonical、任务相关，锚文本描述用户下一步；构建后用 SEO CI 抽查。
- PDF/工具必须有 revision、owner、数据来源和 QA；禁止 placeholder、过时规格和无能力承诺。

## 17. 复测清单

- [ ] `npm run verify` 通过；schema/SEO CI 0 error。
- [ ] 39 个 sitemap URL 状态、canonical、H1、title/description、JSON-LD、alt 无回退。
- [ ] robots、sitemap、404、privacy/terms noindex 策略符合预期。
- [ ] GSC 28/7 天按等长窗口、query/page/country/device 导出并记录 final date。
- [ ] Priority URL Inspection reason/canonical/last crawl 已记录。
- [ ] GA4 consent、page_view 去重、CTA/form/document 事件通过 DebugView。
- [ ] 内部有效测试询盘到 inbox/webhook/CRM 对账；不提交真实客户询盘。
- [ ] 移动端导航、筛选、WhatsApp、电话、文档请求、错误和成功态可完成且不重叠。
- [ ] Lighthouse 使用同一设备/网络配置；CrUX 可用后改用 p75 LCP/INP/CLS。
- [ ] 所有新增声明有 approved asset ID；客户与证书范围通过人工复核。
- [ ] 刷新页按 30/60/90 天记录单变量、结果和 rollback 决策。
- [ ] GEO、Bing、referral 与 Google 搜索指标分开。

## 18. 需要的数据、权限与决策

1. GA4 property、consent 类别、隐私文案、数据保留和 Owner。
2. 生产 Resend/webhook/CRM 配置的只读核查权和授权内部测试地址。
3. GSC 16 个月 date/page/query/country/device、Pages、Sitemaps、CWV；每个导出包含 property、filter、search type、timezone 和 final date。
4. CRM 匿名字段：landing URL、source、country、product/application、created time、qualified、quote、order/revenue、first response、repeat order。
5. 服务器/CDN 日志：timestamp、host、path/query、status、method、user-agent、referer、cache、response time；先脱敏。
6. 证书扫描、issuer 验证、型号范围、有效期；校准/老化 SOP 和样例记录；案例授权与脱敏规则。
7. 美国/阿联酋/德国的销售服务能力、认证、渠道、语言与预算决策。
8. 外部目录/展会预算及 RFI inbox 归属；未批准前不联系、不购买。

## 19. 当前官方来源链接

以下政策来源于 2026-08-10 核验的当前官方文档：

- Google Search Central：[Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)；`lastmod` 应反映重要且可验证的最后修改。
- Google Search Central：[Robots.txt introduction](https://developers.google.com/search/docs/crawling-indexing/robots/intro)。
- Google Search Central：[Canonical URL consolidation](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)。
- Google Search Central：[Structured data introduction](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)；有效 schema 不保证富结果。
- Google Search Central：[Search documentation updates](https://developers.google.com/search/updates#removing-faq-rich-result)；FAQ rich result 已移除。
- Google Search Central：[Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)；link spam 与 scaled content abuse 边界。
- Google Search Central：[Using generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)；AI 可辅助研究，规模化低价值内容存在政策风险。
- Google Search Central：[Mobile-first indexing best practices](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)。
- web.dev：[Web Vitals](https://web.dev/articles/vitals)；现场判断应使用 p75 的 LCP、INP、CLS。
- IndexNow：[Documentation](https://www.indexnow.org/documentation)；接收通知不等于抓取或索引保证。

---

本报告没有执行部署、提交 sitemap、请求索引、修改 DNS/GSC/GA4、安装像素、发外联、购买服务或提交真实询盘。逐项优先级和逐页动作分别见同日期 CSV。
