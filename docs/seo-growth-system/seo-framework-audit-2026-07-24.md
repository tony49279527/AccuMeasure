# AccuMeasure SEO 全框架评估

日期：2026-07-24（Asia/Shanghai）
范围：`https://www.accumeasuretech.com` 与本地项目 `/Users/liangxile/project/AccuMeasure`

## 结论

网站的技术底座已经健康：39 个 sitemap URL 全部返回 200，基础 metadata、canonical、H1、JSON-LD 和图片 alt 完整；首页 Lighthouse 移动端 99、桌面端 98，SEO 与 Accessibility 均为 100。近期优化至少在“可抓取、可渲染、速度、结构化数据、站内路径”层面有效。

但现在还不能声称带来了询盘或收入增长。GSC 最近 7 天从 170 展示、0 点击变为 241 展示、2 点击，展示增加约 41.8%，但平均排名从 53.18 变为 56.55，样本很小；生产环境也没有可用的询盘转化分析。正确结论是“搜索可见性开始形成，技术质量稳定，商业效果尚未建立测量闭环”。

本轮不改低排名、低样本页面的 title，不批量生产内容，不创建国家/多语言页。已执行的改动集中在有直接证据的缺口：Google 尚未知的 `/applications`、弱内链指南、RFQ 信息完整度与全站响应承诺一致性。

## 已采集证据

- GSC 最近 28 天：3 点击、479 展示、CTR 0.626%、平均排名 55.00；前一等长窗口无行，不能做可靠 28 天环比。
- GSC 最近 7 天：2 点击、241 展示、CTR 0.83%、平均排名 56.55；此前 7 天为 0 点击、170 展示、平均排名 53.18。
- GSC 国家：美国 319 展示和全部 3 次点击；加拿大 55、澳大利亚 17、阿联酋 5、德国 1。没有询盘/成交证据支持本地化。
- URL Inspection：8 个核心入口抽样已收录；`/applications` 为 `URL is unknown to Google`，`/contact` 为 `Crawled - currently not indexed`。
- Lighthouse：首页移动 99/100/100/100，LCP 1.5s、CLS 0；桌面 98/100/100/100，LCP 0.5s、CLS 0。
- PSI API：429 `RESOURCE_EXHAUSTED` 且项目配额 limit 为 0，本轮使用本地 Lighthouse，不虚构 PSI 数据。
- 线上 crawl：39/39 URL 返回 200；未发现 title、description、canonical、`og:url`、H1、JSON-LD 或图片 alt 缺失。
- 内链：两篇选型文章只有 1 条内部入链；应用详情页普遍只有 2 条；`/applications` 正文偏薄。
- 分析：生产环境未配置 GA4 或 Clarity，无法计算 CTA、表单、有效询盘或成交转化率。
- 证据：manifest 只有 3 组未审批图片，尚不能覆盖站内全部证书、客户、订单和量化结果声明。

## 框架评估

| 模块 | 状态 | 判断与下一步 |
| --- | --- | --- |
| SEO Fundamentals | 进行中 | 产品、应用、比较、选型意图已分层；当前关键词样本以 GSC 为准。先积累可见性，不用无转化证据的大词表驱动批量扩页。 |
| Technical SEO | 健康 | crawl、index 指令、sitemap、robots、canonical、schema、Core Web Vitals 实验室指标均正常。继续观察 `/applications` 与 `/contact` 索引，不自动请求索引。 |
| On Page SEO | 健康/增强中 | metadata 与 H1 完整。本轮从 Level、Flow、Pressure 分类页补充应用、比较和选型内链，优先帮助弱入链页面。 |
| Content SEO | 有明确缺口 | 产品与博客已有基础，但应用中心过薄。本轮将其改为测量任务、技术选择、应用指南与 RFQ 输入的决策中心。 |
| Content Optimization | 观察 | GSC scorer 多数是 visibility seed/content-gap review，不足以支持 CTR title 重写。以后按页面和查询连续窗口评估。 |
| Link Building | 候选已研究 | 已有核验候选，但申请、投稿和外联必须人工授权与执行；没有 GSC Links 或外部 backlink 工具数据时不声称完整外链审计。 |
| Local SEO | 非当前主线 | 这是出口型 B2B 站，不应套用门店型 GBP 策略。保持公司名称、地址与联系方式一致；真实本地业务需求出现后再评估。 |
| SaaS SEO | 不直接适用 | 以产品页、应用页、比较页、选型指南、证据页和 RFQ 路径替代 SaaS 的 feature/integration/free-tool 模板。 |
| AI SEO / GEO | 基础具备 | 可抓取正文、Organization/Product/Article/FAQ/ItemList schema 和实体化页面存在。最大限制是可引用的一手证据覆盖不足。 |
| International SEO | 暂缓本地化 | 美国曝光最多但只有 3 点击，德国与阿联酋样本极低。没有语言服务、认证范围、渠道成本与合格询盘证据前，不加 hreflang 或国家页。 |
| Analytics | 主要阻塞 | GSC 可用，生产无 GA4/Clarity 和询盘事件。先批准隐私、同意、事件字典和数据责任，再安装；不能只加脚本不定义 KPI。 |
| Tools | 足够做当前判断 | 当前用 GSC、URL Inspection、Lighthouse、HTTP crawl、schema/form smoke 与确定性脚本。Ahrefs/SEMrush/Screaming Frog 不是当前低样本阶段的必要前提。 |
| Growth | 早期信号 | 7 天展示增加约 41.8%，但点击仅 2 且排名波动向下。以 28 天滚动窗口和有效询盘作为后续判定，不用单日分数证明增长。 |

## 本轮优化

1. 将 `/applications` 从简单链接列表扩展为可独立满足搜索意图的决策页：Level/Flow/Pressure 测量任务、技术适用边界、应用指南、完整 RFQ 输入和 `ItemList` schema。
2. 在三个产品分类页增加上下文相关指南，覆盖应用、技术比较和此前只有 1 条内链的两篇选型文章。
3. 把全站“24 小时回复”硬承诺统一为 `one business day (UTC+8)` 的目标表述，避免元数据、页面、邮件与业务能力不一致。
4. 为询盘与定制表单的成功/失败反馈补充 `role=status`、`role=alert` 与 `aria-live`，改善辅助技术可用性。
5. 更新市场和竞争者基线，只记录当前官方来源能证明的产品范围与买家工具，不推断价格、MOQ、样品或渠道能力。

## 竞争与内容差距

- Endress+Hauser 的产品查找与 Applicator 体现了“选择和 sizing 工作流”；AccuMeasure 当前更适合先把 RFQ 输入和应用决策路径做清楚，而不是复制复杂工具。
- VEGA 将应用条件连接到可配置产品；AccuMeasure 的短期机会是继续加强应用条件、安装参数与具体产品间的双向内链。
- KROHNE 的产品选择器、应用报告和技术资源形成深层买家支持；AccuMeasure 应先补经过批准的校准、测试、证书与项目证据。
- Supmea 用易读的技术比较指南覆盖选型搜索意图；AccuMeasure 已有比较/博客基础，应按 GSC 证据更新而不是批量生成。

当前官方来源：

- Endress+Hauser：https://www.endress.com/en/field-instruments-overview/flow-measurement-product-overview
- Endress+Hauser Applicator：https://www.endress.com/en/support-overview/device-support-overview/applicator-select-size-instrument
- VEGA：https://www.vega.com/en-in/products/product-catalog/level/radar
- KROHNE：https://www.krohne.com/en-us/products/flow-measurement/flowmeters
- Supmea：https://www.supmeaauto.com/training/flow-meter-selection-guide-compare-7-common-types

## 优先级

### P0：建立效果测量闭环

- 业务先定义 `有效询盘`、`样品请求`、`报价`、`成交` 与垃圾询盘排除规则。
- 评审隐私、同意、数据保留和事件字典后，再授权 GA4/其他分析与 `generate_lead` 类事件。
- 在不提交真实询盘的前提下验证事件交付；上线后按来源和落地页看有效询盘，不只看表单提交。

### P1：证据与索引

- 给证书、校准、工厂测试、客户/订单和量化案例补 evidence manifest、日期、来源、适用范围、脱敏和发布审批。
- 观察 `/applications` 和 `/contact` 的 URL Inspection 状态；本轮不主动请求索引。
- 连续 28 天积累页面/查询数据后，再选择 1–3 个接近首页或有稳定展示的页面做内容刷新实验。

### P2：权威与市场

- 人工核验并执行少量高匹配工业目录、协会、媒体或合作伙伴机会；记录提交、发布 URL、引荐访问和有效询盘。
- 美国继续 English-first；阿联酋、德国维持观察。只有真实需求、服务能力、认证范围与渠道经济性同时成立才本地化。

## 未执行

未请求索引、未提交 sitemap、未安装分析/Cookie/像素/CRM、未提交真实询盘、未做外联、未修改 DNS/Cloudflare/GSC 权限、未公开新增证书或客户声明。
