# AccuMeasure B2B SEO 长期增长系统

## 当前项目基线（2026-07-24，Asia/Shanghai）

- 品牌：AccuMeasure Instruments Co., Ltd.（西安精准测量仪器有限公司）。
- 线上域名：`https://www.accumeasuretech.com`；唯一开发 target：`/Users/liangxile/project/AccuMeasure`。
- 技术栈：Next.js 14 App Router、TypeScript、Tailwind、React Hook Form、Zod；Vercel 线上运行。
- 产品与买家：液位传感器、流量计、压力变送器和 OEM/定制测量方案；面向进口商、经销商、系统集成商、设备 OEM、工程与采购团队。买家画像仍需用真实询盘或 CRM 结果验证。
- 公开技术基线：sitemap 39 个 URL 均返回 200；逐页未发现 title、description、canonical、`og:url`、H1、JSON-LD 或图片 alt 缺失。robots、sitemap、canonical、安全头和匿名表单失败路径可用。
- Lighthouse 实验室基线：首页移动端 99/100/100/100，FCP 1.2s、LCP 1.5s、TBT 30ms、CLS 0；桌面端 98/100/100/100，FCP 0.3s、LCP 0.5s、TBT 0、CLS 0。当前无 CrUX 现场数据，实验室结果不冒充真实用户指标。
- PSI API 阻塞：公开 API 返回 429 `RESOURCE_EXHAUSTED`，配额 limit 为 0；巡检使用本地 Lighthouse 兜底并保留精确错误。
- GSC 最新完整日期为 2026-07-21。最近 28 天（06-24 至 07-21）3 点击、479 展示、CTR 0.626%、平均排名 55.00；前一等长窗口无可用行，不能计算可靠环比。最近 7 天 2 点击、241 展示、CTR 0.83%、平均排名 56.55；此前 7 天 0 点击、170 展示、平均排名 53.18。展示增长但样本仍低，暂不因单周数据批量改 title 或扩页。
- GSC 国家与设备：最近 28 天美国 319 展示、3 点击；加拿大 55 展示；澳大利亚 17 展示；阿联酋 5 展示；德国 1 展示。最近 7 天桌面 211 展示、2 点击，移动 24 展示。尚无合格询盘、成交或市场准备度证据，因此不创建多语言或国家落地页。
- URL Inspection 抽样：主页、Products、Level、Flow、Pressure、Compare、Resources、Blog 已收录；`/applications` 为 `URL is unknown to Google`；`/contact` 为 `Crawled - currently not indexed`。sitemap API 无错误或警告，但其计数与 URL Inspection 不一致，继续观察而不自动请求索引。
- 内容与内链：`/applications` 原线上正文约 301 词且 Google 未识别；两篇选型文章只有 1 条内部入链。2026-07-24 本地优化将应用中心改为测量任务/选型/RFQ 决策页，并从三个产品分类页增加相关应用、比较与选型指南链接。
- 分析与转化：生产环境没有 `NEXT_PUBLIC_GA_ID` 或 `NEXT_PUBLIC_CLARITY_ID`，页面也未加载 GA/Clarity；因此目前只能证明搜索曝光、抓取与技术质量，不能证明询盘或收入增量。未经隐私、同意、事件定义和外部授权，不自动安装分析脚本。
- 证据治理：`evidence-manifest.csv` 只有 3 组未审批图片，覆盖度不足以证明站内全部证书编号、客户名称、订单、测试和量化结果。后续新增案例或强声明前必须补来源、授权、日期、适用范围与审批状态。

## Skills 与自然语言用法

- `accumeasure-b2b-authority-growth`：核验目录、协会、展会、媒体、伙伴引用和品牌提及；例如“找本周最值得人工申请的 3 个工业仪表目录”。
- `accumeasure-gsc-content-growth`：比较 GSC 28/7 天及历史等长窗口，排序 CTR、首页冲刺、内容/内链机会；例如“用最近 GSC 数据找 3 个应该先更新的页面”。
- `accumeasure-evidence-case-builder`：治理证书、校准、检测、QC、包装、出货和项目证据，制作经批准案例；例如“把现有工厂和校准资料整理成可审批的匿名案例”。
- `accumeasure-seo-conversion-growth`：审计自然落地页到 RFQ、样品、报价、成交；例如“检查产品页到询盘表单是否丢失产品和来源上下文”。
- `accumeasure-competitive-market-intelligence`：基于真实来源比较竞争者与市场准备度；例如“季度复盘德国和阿联酋，判断是否值得做德语页面”。

这些 skills 的描述允许自然语言自动触发，不要求用户记住 `$skill-name`。

## 自动化节奏

- 每日技术巡检：每日 14:30（Asia/Shanghai）。读取自己的 memory；检查 live/GSC/PSI/索引/robots/sitemap/状态码/canonical/schema/内链/图片/移动/安全头/表单；仅修复证据充分、低风险、可验证且能与已有工作隔离的问题。
- 每周站外权威：周一 10:10；最多 3-5 个值得人工执行的行动。
- 每月内容、证据与转化：每月 2 日 10:40；最多 3-5 个内容/转化行动和 1 个案例/证据包，低样本时观察。
- 每季度竞争与国际市场：1/4/7/10 月 8 日 11:20；调查 1-2 个市场/语言，2-3 个证据化改进，最多 1 个渠道实验。

漏跑补偿以各 automation 的 RRULE、Asia/Shanghai 实际日期和对应 memory 的成功摘要为准；同周期已有成功记录不重跑，最多补最近一个遗漏周期，证据不清时列为待确认。

## 确定性脚本

```bash
python3 /Users/liangxile/.codex/skills/accumeasure-b2b-authority-growth/scripts/score_prospects.py docs/seo-growth-system/authority-prospects.csv
python3 /Users/liangxile/.codex/skills/accumeasure-gsc-content-growth/scripts/score_gsc_opportunities.py QUERY.json PAGE.json
python3 /Users/liangxile/.codex/skills/accumeasure-evidence-case-builder/scripts/validate_evidence_manifest.py docs/seo-growth-system/evidence-manifest.csv --root .
python3 /Users/liangxile/.codex/skills/accumeasure-seo-conversion-growth/scripts/audit_rfq_journey.py --root .
python3 /Users/liangxile/.codex/skills/accumeasure-competitive-market-intelligence/scripts/score_market_candidates.py docs/seo-growth-system/market-candidates.csv
```

## 自动化边界

可直接完成：只读采集、当前官方页面核验、本地报告/CSV/模板/文案，以及不冲突、低风险、可验证的代码或配置修复。

每日巡检的持续授权：若本次巡检产生并验证了可安全隔离的改动，精确暂存本次文件，提交并正常 push 当前 `main`，等待现有生产部署完成，再执行匿名生产 smoke。不得混入巡检前已有的改动，不得 force push。

仍需外部授权或保持禁止：注册或提交第三方档案，邮件、投稿、社交发布或伙伴联系，付费工具、会员、广告或展位，公开尚未批准的证书/客户/订单/检测/评价，安装分析/Cookie/像素/CRM或改变留存，主动请求索引或提交 sitemap，DNS/Cloudflare/GSC 权限、付款/计费、密钥轮换、账号创建删除、域名转移和不可逆数据删除。

## KPI 与判断规则

最终 KPI：有效询盘、销售合格线索、样品请求、报价、成交、首次响应时间和未处理询盘。中间指标：GSC 展示/点击/排名/收录、相关引荐访问、相关引用域名、CTA/Contact/RFQ 阶段（仅在定义和采集经批准且稳定时）。任何转化率都必须有明确分母、窗口和事件交付验证。

低样本或站点技术健康时只观察，不强行改 title、扩写页面、建国家站或制造空提交。先证明索引与搜索意图，再证明询盘与收入影响。
