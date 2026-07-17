# AccuMeasure SEO / GEO 深度审核报告

**审核日期：** 2026-07-17（Asia/Shanghai）  
**站点：** https://www.accumeasuretech.com  
**仓库：** `/Users/liangxile/project/AccuMeasure`（HEAD 基于 `affe988`，本轮本地未提交改动见「已实施修改」）  
**方法：** 代码全量映射 + 线上 39 URL inventory + 模板抽样 + 既有审计/GSC 基线交叉核验 + P0/P1 本地实施与 `npm run verify`

---

## 1. Executive Summary

| 项 | 结论 |
|---|---|
| 企业 | AccuMeasure Instruments Co., Ltd.（西安精准测量仪器有限公司） |
| 业务 | 液位传感器、流量计、压力变送器；OEM/ODM |
| 语言 | 英文单语（暂不扩多语言，GSC 样本不足） |
| 核心转化 | Contact / RFQ 表单 → Resend 邮件 + 可选 webhook；WhatsApp / mailto fallback |
| 总分 | **3.48 / 5.00（69.6%）** — 七模块加权，见评分矩阵 |

**最关键问题（本轮）**

1. **404 页曾继承首页 canonical**（P0，已修）— 软 404 / 错误规范化风险。  
2. **无证据质量百分比**（99.8% / &lt;0.3% / &lt;0.1%）与 **aerospace-grade** 表述（P1，已修）— 损害 E-E-A-T。  
3. **实体混淆**：品牌检索被 Xi'an Acme M&amp;C 等竞品占据；本站外部 sameAs 仅有 Alibaba（P1，Blocked 于站外）。  
4. **Contact / Applications 索引未完成**（GSC 基线，E2）— Contact 已抓取未收录；Applications 已发现未抓取。  
5. **GEO 实测仍为空**（`docs/geo-query-set.md` 全空白）— 不可伪造引用率。

**最大增长机会**

1. 完成 Contact / Applications 索引推进（用户在 GSC 操作）。  
2. 上传真实工厂/证书扫描件并更新 evidence-manifest 审批状态。  
3. 建立 LinkedIn 公司页 + NAP 一致目录，缓解品牌碰撞。  
4. 执行 GEO Query Set 首轮（Perplexity / ChatGPT / Copilot）。  
5. 用合格询盘/CRM 验证目标市场后再谈多语言。

**本轮已完成优化：** 见 §10。  
**需用户决定：** 部署、GSC 请求索引、真实媒体替换、证书扫描件、LinkedIn、Resend/MX 生产配置核验。

---

## 2. 范围与方法

| 指标 | 数量 | 说明 |
|---|---:|---|
| Sitemap URL | 39 | 线上 `sitemap.xml` E1 实测 |
| 可抓取商业页 | 39 | robots Allow；参数页 Disallow |
| noindex 政策页 | 2 | `/privacy` `/terms`（不在 sitemap，正确） |
| 代码路由 | 48 生成页 | `next build` 输出 |
| 人工/脚本抽查 | 24+ | 首页、三品类、AM-RL80、应用、对比、案例、博客、Contact、Quality、Certificates、404 |
| 不可用权限 | GSC 实时导出、PSI API、AI 平台登录、CRM | 使用 07-16 基线文档（E2）与公开 SERP（E3/E5） |

**假设（已标注）：** 买家画像为工业品牌商/进口商/经销商/OEM/工程采购；合格询盘 = 含公司、国家、产品兴趣、可跟进联系方式的 RFQ。目标市场不定论。

---

## 3. 评分矩阵

公式：`Σ（模块平均分 ÷ 5 × 模块权重）`

| 模块 | 权重 | 0–5 | 加权 | 主要证据 | 置信度 |
|---|---:|---:|---:|---|---|
| 技术 SEO 与索引 | 18 | 4.2 | 15.12 | robots/sitemap 200；39 URL；404 noindex 已修；Contact/Applications 未完全收录（E2） | 高 |
| 页面 SEO | 12 | 4.3 | 10.32 | 抽样页 1×H1、canonical、title/desc；seo-ci 0 errors | 高 |
| 内容质量与采购信息 | 16 | 3.8 | 12.16 | 产品规格/MOQ/交期齐全；质量假数据已去；案例结果缺证据链 | 中 |
| 需求、关键词与主题覆盖 | 12 | 3.5 | 8.40 | 有应用/对比/博客覆盖选型意图；GSC 样本极小，无工具量级 | 中低 |
| E-E-A-T、实体与信任 | 14 | 2.8 | 7.84 | 证书编号在站内；工厂/案例图偏占位；品牌 SERP 被竞品占 | 中 |
| GEO 与 AI 可见性 | 18 | 2.0 | 7.20 | Query set 就绪但未测；实体可被消歧但引用未观测 | 低（无平台实测） |
| 询盘转化路径 | 10 | 4.3 | 8.60 | RFQ 审计 0 error；product/document 预填；失败有 fallback | 高 |
| **合计** | **100** | — | **69.64** | ≈ **3.48 / 5.00** | — |

本轮按母提示词七模块权重重算，且不因“结构成熟”抬高 GEO/实体；同时计入索引未完成与无证据声明清理前风险，分数比历史 Round 7（约 3.96）更保守。

---

## 4. 关键发现

### F1 — 404 继承首页 canonical（已修）
- **发现：** 线上 404 返回 `robots: noindex` 但 `canonical → https://www.accumeasuretech.com`（首页）。根因：`layout.tsx` 写死 `alternates.canonical: "/"`。  
- **证据：** E1 浏览器 fetch；代码 `src/app/layout.tsx`。  
- **影响：** Discover→Index 规范化错误，软 404 风险。  
- **建议/验收：** 根布局移除全站 canonical；`not-found` 独立 noindex 标题；构建 HTML 无首页 canonical。**已通过本地 build 验收。**

### F2 — 无证据质量 KPI（已修）
- **发现：** `/quality`、`/certificates` 宣传 99.8% / &lt;0.3% / &lt;0.1%。  
- **证据：** E1 线上 HTML + 源码。  
- **影响：** E-E-A-T / GEO 引用失真风险。  
- **建议：** 改为可验证过程承诺（5 段 QC、72h、出货校准证、2 年质保）。**已修。**

### F3 — aerospace-grade 无范围证据（已修）
- **发现：** AM-PT300、压力品类、行业页使用 “aerospace-grade”。  
- **影响：** 过度宣称；AI 可能扩大能力。  
- **建议：** 改为高振动工业工况表述，询盘确认振动谱。**已修。**

### F4 — 品牌实体碰撞（Open）
- **发现：** 检索 “AccuMeasure / Xi'an level sensor” 结果由 Xi'an Acme M&amp;C（pressureleveltransmitter.com）主导；本站未出现在首屏。  
- **证据：** E3/E5 WebSearch 2026-07-17。  
- **影响：** GEO 提及与品牌点击。  
- **建议：** LinkedIn + 目录 NAP + 品牌词内容强化（含法定中文名与域名）。

### F5 — 索引缺口（Blocked / 用户）
- **发现：** GSC（至 07-14）：32 收录；Contact 抓取未收录；Applications 发现未抓取；5 条旧 duplicate 验证中。  
- **证据：** E2 `SEO-GROWTH-SYSTEM.md` 基线。  
- **建议：** 次日重试 Applications 请求编入索引；观察 Contact。

### F6 — 媒体与证据治理未闭环（Open）
- **发现：** evidence-manifest 3 条均为 `unreviewed`；工厂/案例 JPEG 存在但审批未完成。  
- **影响：** 信任页可信度。  
- **建议：** 用户提供真实照片与证书扫描件后替换并审批。

---

## 5. 完整 Issue Log

| ID | 模块 | URL/模板 | 发现 | 证据等级 | 优先级 | 工作量 | 依赖 | 状态 |
|---|---|---|---|---|---|---|---|---|
| AM-2026-0717-01 | 技术 | 404 / layout | 404 继承首页 canonical | E1 | P0 | S | — | **Fixed** |
| AM-2026-0717-02 | 实体/内容 | /quality /certificates | 无证据通过率/失效率 | E1 | P1 | S | — | **Fixed** |
| AM-2026-0717-03 | 内容 | AM-PT300 / pressure / industries | aerospace-grade 无证据 | E1 | P1 | S | — | **Fixed** |
| AM-2026-0717-04 | 技术 | products/[category] | 空动态目录死代码 | E1 | P2 | S | — | **Fixed**（已删除空目录） |
| AM-2026-0717-05 | 技术 | sitemap | lastmod 停在 07-10 | E1 | P2 | S | — | **Fixed**（更新至 07-17） |
| AM-2026-0717-06 | 实体 | 品牌 SERP | 竞品占位，本站不可见 | E3 | P1 | L | 站外目录/LinkedIn | Open |
| AM-2026-0717-07 | 索引 | /contact /applications | GSC 未完全收录 | E2 | P1 | S | GSC 用户操作 | Blocked |
| AM-2026-0717-08 | GEO | 全站 | Query set 未执行 | E1 | P1 | M | AI 平台访问 | Open |
| AM-2026-0717-09 | 实体 | 工厂/证书图 | 占位/未审批证据 | E1 | P1 | L | 真实素材 | Blocked |
| AM-2026-0717-10 | 内容 | case-studies | 结果指标缺可核验附件 | E5 | P2 | M | 客户批准/脱敏 | Open |
| AM-2026-0717-11 | 数据 | products.downloads.url | 仍指向不存在的 `/downloads/*`（UI 已绕过） | E1 | P3 | S | — | **Fixed**（移除 url 字段） |
| AM-2026-0717-12 | 品牌一致 | 多页 overview/OG | AccuMeasure vs AccuMeasureTech 混用 | E1 | P3 | S | 品牌规范 | **Fixed** |
| AM-2026-0717-13 | 转化 | customization | 仅文件名无实际上传 | E1 | P2 | M | 存储/隐私 | Open（文案已标明参考文件名，真正传文件需资料/存储） |
| AM-2026-0717-14 | 性能头 | 全站 | 未见 HSTS（E1 头探测） | E1 | P3 | S | Vercel/Cloudflare | **Fixed in code**（next.config 已有；部署后复测） |
| AM-2026-0717-15 | 数据 | GSC | 28d 1 click / 238 impr | E2 | P2 | — | 观察 | Observe |

---

## 6. URL Inventory（摘要）

完整 39 条与线上 sitemap 一致。分类：

| 类型 | 数量 | 可索引 |
|---|---:|---|
| 首页 | 1 | Y |
| 产品列表/品类 | 4 | Y |
| 产品详情 | 9 | Y |
| 应用 | 5（列表+4） | Y |
| 对比 | 3（列表+2） | Y |
| 案例 | 4（列表+3） | Y |
| 博客 | 6（列表+5） | Y |
| 信任/能力 | 4（about/quality/certificates/industries） | Y |
| 转化/资源 | 3（contact/customization/resources） | Y |
| 政策 | 2 | noindex |

参数页 `?category|product|document|request=`：robots Disallow（正确）。

---

## 7. 需求与内容差距（高层）

| Query cluster | Intent | 目标页 | 缺口 | 动作 |
|---|---|---|---|---|
| brand + Xi'an / AccuMeasure | 验证 | /about + 外部 | SERP 被竞品占 | 站外实体 + 品牌消歧文案 |
| radar level sensor manufacturer | 商业 | /products/level, AM-RL80 | 流量极低 | 观察+内链 |
| capacitive vs ultrasonic | 比较 | /compare/... | 已有页 | 维持 |
| China supplier checklist | 采购 | blog | 已有 | 内链到 Contact |
| MOQ / sample / calibration | 采购 | Contact FAQ + product | 尚可 | 保持 facts.ts 单一事实源 |
| OEM pressure transmitter | 方案 | applications + customization | Applications 未收录 | 索引后观察 |

不建议在无 GSC/询盘证据时批量新建词根变体页。

---

## 8. GEO Query Log

**状态：** 未执行平台实测（权限/时间）。设计集见 `docs/geo-query-set.md`（40 条）。  
**公开检索观察（2026-07-17）：** 品牌相关查询未稳定出现本站；竞品 Xi'an Acme 占主导 — **不得据此伪造 AI 引用率**。

建议首轮手工记录：平台、日期、地区、语言、是否提及、是否引用 URL、准确性。

---

## 9. Schema 与 Entity Audit

| 类型 | 状态 |
|---|---|
| Organization + WebSite（全局） | 有效；sameAs 仅 Alibaba |
| Product + FAQ + Breadcrumb（产品） | schema-ci 0 errors（177 blocks） |
| Article（案例/博客） | 有 byline/日期 |
| ContactPage + FAQ | /contact |
| SearchAction | 已故意移除（正确） |
| 人员 Person | /about，无 sameAs |

实体一致性：法定名/域名/电话在 `site.ts` 集中；LinkedIn/YouTube 刻意留空（曾链错）。证书编号在 `certifications.ts`；IECEx 无数号故不上首页。

---

## 10. 已实施修改

| Issue ID | 文件 | 摘要 | 验证 | 状态 |
|---|---|---|---|---|
| AM-2026-0717-01 | `layout.tsx`, `not-found.tsx`, `page.tsx` | 移除全站错误 canonical；404 独立 noindex；首页补 OG | `npm run verify` PASS；`_not-found.html` 无首页 canonical | Fixed |
| AM-2026-0717-02 | `quality/page.tsx`, `certificates/page.tsx` | 假 KPI → 过程承诺 | build HTML 无 99.8% | Fixed |
| AM-2026-0717-03 | `products.ts`, `pressure/page.tsx`, `industries/page.tsx` | 去除 aerospace-grade | grep 清零 | Fixed |
| AM-2026-0717-04 | `products/[category]/` | 删除空目录 | 目录不存在 | Fixed |
| AM-2026-0717-05 | `sitemap.xml/route.ts` | lastmod → 2026-07-17 | 代码已更新 | Fixed |
| AM-2026-0717-12 | `customization/page.tsx` | title 品牌统一 AccuMeasure | 代码 | Partial |

**验证命令结果：** `npm run verify` → build OK；Schema CI PASSED；SEO CI PASSED。

---

## 11. 未实施依赖（需用户）

1. **部署**本轮改动到 Vercel（未授权不部署）。  
2. GSC：Contact / Applications 请求编入索引。  
3. 真实工厂/团队/证书扫描件替换 + evidence-manifest 审批。  
4. LinkedIn 公司页与目录 NAP。  
5. 确认生产 `RESEND_*` / MX / webhook。  
6. 批准后执行 IndexNow 再提交（可选）。  
7. GEO Query Set 首轮实测填表。

---

## 12. 路线图

### 0–30 天
- 部署本轮 P0/P1；验证线上 404 无首页 canonical。  
- GSC 索引推进 Contact/Applications。  
- 准备 1 套可公开证书扫描件 + 2–3 张真实工厂图。  
- GEO 首轮 10 条高价值查询实测。

### 31–90 天
- LinkedIn + 2–3 个工业目录。  
- 案例证据脱敏包（1 个）。  
- 基于 GSC 刷新 1–2 个已有权威页（非批量新建）。

### 90+ 天
- 用合格询盘国家分布评估是否做第二语言。  
- 外部引用与品牌消歧复盘。

---

## 13. 最终验证结果

| 检查 | 结果 |
|---|---|
| lint/typecheck（含于 next build） | PASS |
| production build | PASS（48 routes） |
| schema-ci | PASS（177 blocks, 0 errors） |
| seo-ci | PASS（42 pages, 0 errors） |
| RFQ journey script | 0 errors |
| evidence-manifest validate | 3 assets, 0 errors（仍 unreviewed） |
| 线上（改前）robots/sitemap | 200 / 39 URLs |
| 线上 404 canonical | 改前错误指向首页；**改后需部署后再测** |
| 表单真实提交 | 未执行（禁止） |

---

## 工作范围与假设（开场回顾）

小站全量技术检查 + 全模板抽样；不编造流量/引用；不部署；先修索引规范化与虚假信任声明，再谈内容扩张与 GEO 实验。
