# 测量看板（Measurement Dashboard）

每周一条记录一行（按页面 × 查询簇），28 天滚动指标每月复核一次。

## 字段定义

| 字段 | 来源 | 说明 |
|---|---|---|
| week_start / week_end | — | 自然周（周一~周日） |
| page | GSC Pages | 被衡量的关键 URL |
| primary_query_cluster | GSC Queries | 该页面的主要查询簇（如 80GHz radar、ATEX flow） |
| clicks / impressions / ctr / avg_position | GSC Performance | 与“同等前期”对比，不看单周绝对值 |
| index_status | GSC URL Inspection | indexed / discovered-not-indexed / excluded+原因 |
| organic_sessions | GA4 | 自然搜索会话 |
| form_success | 站内事件 | 表单成功提交数 |
| whatsapp_clicks | 站内事件 | WhatsApp 按钮点击数（floating-buttons 已埋点） |
| valid_rfq | 销售 | 含公司、国家、需求与联系方式的有效询盘；过滤垃圾与重复 |
| sales_status | 销售 | 跟进中 / 已报价 / 成交 / 丢单 |
| geo_mention_rate / geo_citation_rate | GEO 观测 | 提及率与引用率分开记录（见 reports/geo/） |
| notes | — | 改版日期、重抓日期、异常说明 |

## 纪律

1. 每次只改一个核心变量，记录改版日期；等 Google 重抓后用完整 28 天窗口对比。
2. 低量页面看趋势，不把一次点击解释成成功。
3. 曝光涨但 RFQ 不涨 → 先查意图、CTA、交付链，不批量改标题“救数据”。
4. 排名下降 → 先回查证据、内容变更、canonical。

## 询盘链状态（2026-09-23 已核查代码与配置）

- 表单 → `/api/inquiry`：zod 校验 + honeypot + UTM 归因 → Resend 邮件（生产环境已配 `EMAIL_TO` / `RESEND_API_KEY`）。
- WhatsApp 悬浮按钮：已埋点 `trackContactClick`。
- 缺口：未配 `LEAD_WEBHOOK_URL` 备份通道；Resend 失败则线索只记日志。建议补一个 webhook 备份。
- 未验证：真实收件测试（需用户确认后做一次真实提交测试）。
