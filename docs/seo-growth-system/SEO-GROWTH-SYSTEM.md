# AccuMeasure B2B SEO 长期增长系统

## 当前项目基线（2026-07-16，Asia/Shanghai）

- 品牌：AccuMeasure Instruments Co., Ltd.（西安精准测量仪器有限公司）。
- 线上域名：`https://www.accumeasuretech.com`；本地项目：`/Users/liangxile/project/AccuMeasure`。
- 技术栈：Next.js 14 App Router、TypeScript、Tailwind、React Hook Form、Zod；Vercel 线上运行。
- 产品：液位传感器/仪表、流量计、压力变送器及 OEM/定制测量方案。
- 推定买家（来自站点定位，仍需用询盘/CRM 验证）：工业品牌商、进口商、经销商、系统集成商、设备 OEM、工程与采购团队。
- 目标市场暂不定论：GSC 2026-07-08 至 07-14 的 170 次展示中，美国占 106 次、桌面占 152 次，但样本和点击量仍不足；在取得合格询盘、客户国家或更稳定的搜索数据前，不据此创建多语言站。
- 线上 smoke：39/39 个 sitemap 页面、65 个唯一内部链接和 27 个解码后图片 URL 均通过；robots 声明正确 Host 与 sitemap，Contact 有 canonical、JSON-LD、可用询盘表单和邮件 fallback。
- 线上 sitemap 当前列出 39 个 URL；Google 与 Bing 均读取成功且无 sitemap 错误或警告。Bing 已发现 39 个 URL，IndexNow 面板累计记录 568 次提交。
- PSI API 当前仍返回 429 `RESOURCE_EXHAUSTED`，但 PageSpeed 网页端于 2026-07-16 14:39 成功生成报告：移动 98/100/100/100（FCP 1.0s、LCP 2.3s、TBT 0、CLS 0），桌面 100/100/100/100（FCP 0.3s、LCP 0.5s、TBT 10ms、CLS 0）；无 CrUX 真实用户数据，实验室结果不冒充现场指标。
- GSC 最新完整日期为 2026-07-14：最近 28 天 1 点击、238 展示、CTR 0.42%、平均排名 53.43；最近 7 天 0 点击、170 展示。39 个 sitemap URL 的 URL Inspection 结果为 32 个已提交并收录、5 个旧 duplicate-canonical 记录正在验证、Contact 已抓取但未收录、Applications 已发现但未抓取；Contact 和 Applications 的实时测试均显示可编入索引，Applications 的手动请求因 GSC 当日配额用尽而需次日重试。

## Skills 与自然语言用法

- `accumeasure-b2b-authority-growth`：核验目录、协会、展会、媒体、伙伴引用和品牌提及；例如“找本周最值得人工申请的 3 个工业仪表目录”。
- `accumeasure-gsc-content-growth`：比较 GSC 28/7 天及历史等长窗口，排序 CTR、首页冲刺、内容/内链机会；例如“用最近 GSC 数据找 3 个应该先更新的页面”。
- `accumeasure-evidence-case-builder`：治理证书、校准、检测、QC、包装、出货和项目证据，制作经批准案例；例如“把现有工厂和校准资料整理成可审批的匿名案例”。
- `accumeasure-seo-conversion-growth`：审计自然落地页到 RFQ、样品、报价、成交；例如“检查产品页到询盘表单是否丢失产品和来源上下文”。
- `accumeasure-competitive-market-intelligence`：基于真实来源比较竞争者与市场准备度；例如“季度复盘德国和阿联酋，判断是否值得做德语页面”。

这些 skills 的描述允许自然语言自动触发，不要求用户记住 `$skill-name`。

## 自动化节奏

- 每日技术巡检：每日 09:20（Asia/Shanghai）。读取自己的 memory；检查 live/GSC/PSI/索引/robots/sitemap/状态码/canonical/schema/内链/图片/移动/安全头/表单；仅修复证据充分、低风险、可验证的本地问题。
- 每周站外权威：周一 10:10；最多 3-5 个值得人工执行的行动。
- 每月内容、证据与转化：每月 2 日 10:40；最多 3-5 个内容/转化行动和 1 个案例/证据包，低样本时观察。
- 每季度竞争与国际市场：1/4/7/10 月 8 日 11:20；调查 1-2 个市场/语言，2-3 个证据化改进，最多 1 个渠道实验。

以上时间已避开现有多个项目集中在每日 09:00、YUJI 周一 09:30/月初 10:30/季度 11:00 的任务。

## 确定性脚本

```bash
python3 /Users/liangxile/.codex/skills/accumeasure-b2b-authority-growth/scripts/score_prospects.py docs/seo-growth-system/authority-prospects.csv
python3 /Users/liangxile/.codex/skills/accumeasure-gsc-content-growth/scripts/score_gsc_opportunities.py QUERY.json PAGE.json
python3 /Users/liangxile/.codex/skills/accumeasure-evidence-case-builder/scripts/validate_evidence_manifest.py docs/seo-growth-system/evidence-manifest.csv --root .
python3 /Users/liangxile/.codex/skills/accumeasure-seo-conversion-growth/scripts/audit_rfq_journey.py --root .
python3 /Users/liangxile/.codex/skills/accumeasure-competitive-market-intelligence/scripts/score_market_candidates.py docs/seo-growth-system/market-candidates.csv
```

## 自动化边界

可直接完成：只读采集、当前官方页面核验、本地报告/CSV/模板/文案、保护脏工作区的小型低风险代码修复及本地验证。必须把“已采集数据、本地修复、验证、外部授权、未执行动作”分开报告。

必须等待对具体动作的确认：注册/提交档案，邮件/投稿/社交发布/伙伴联系，付费工具/会员/广告/展位，公开证书/客户/订单/检测/评价，安装分析/Cookie/像素/CRM或改留存，请求索引/提交 sitemap，DNS/Cloudflare/GSC 权限，commit/push/生产部署，删除数据或修改外部账号。

## KPI

最终 KPI：有效询盘、销售合格线索、样品请求、报价、成交、首次响应时间和未处理询盘。中间指标：GSC 展示/点击/排名/收录、相关引荐访问、相关引用域名、CTA/Contact/RFQ 阶段（仅在定义和采集经批准且稳定时）。任何转化率都必须有明确分母、窗口和事件交付验证。
