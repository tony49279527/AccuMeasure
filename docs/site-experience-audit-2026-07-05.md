# AccuMeasure 全站体验审查报告

审查日期: 2026-07-05  
审查对象: `/Users/liangxile/project/AccuMeasure` 本地仓库  
本地实测地址: `http://localhost:3002`  
审查范围: 页面结构、文案、图片素材、交互动作、表单逻辑、链接状态、SEO/结构化数据、基础可访问性

## 1. 总体结论

AccuMeasure 站点已经具备一个 B2B 出口获客站的完整骨架: 产品体系清晰、产品详情页信息量足、询盘路径明确、SEO 基础和 JSON-LD 覆盖较好。生产验证通过: `npm run verify` 成功，`next build` 生成 38 个页面，`schema:ci` 扫描 32 个 HTML、133 个 JSON-LD block，0 个结构化数据错误。

但当前还不适合作为高信任度的正式获客站直接放量。最大问题不是页面数量，而是信任证据和资源真实性: 多数工厂、团队、证书、案例、行业图片仍是生成占位素材；资源页 12 个技术文档/STEP 下载链接全部 404；About 和 Customization 仍有显式占位文字；质量、证书、客户案例等强背书文案缺少可验证入口。

建议定位为: 技术结构已接近上线，商业可信度素材仍需补齐。若目标是投放、SEO 或 AI 搜索引用，优先修复资源 404、真实图片、证书可验证、案例可信度和 CTA 对比度。

## 2. 审查方法和证据

执行过的检查:

- `npm run build`: 通过，生成 38 个页面。
- `npm run verify`: 通过，Schema CI 0 error。
- 浏览器实测: 访问首页、产品页、分类页、9 个产品详情、3 篇博客详情、3 个案例详情、About、Contact、Quality、Certificates、Resources、Customization、Privacy、Terms。
- 链接检查: 45 个本地路由/资源链接中 33 个可用，12 个失败，失败项全部为 `/downloads/*`。
- 素材检查: `public/` 下 52 个图片/图标素材；34 个 `.jpg` 文件实际是 PNG 内容；大量图片小于 5KB，明显为占位图。
- 外链检查: LinkedIn、Alibaba 返回 200，YouTube/WhatsApp/Google Maps 正常跳转；但这只代表可达，不代表平台身份内容已核验。
- 颜色对比检查: 页脚 muted 文本在深色背景上对比度约 2.16:1；白字在橙色 CTA 上约 2.17:1，低于常规 WCAG 正文标准。

移动端说明: 代码层面存在移动菜单和底部固定联系栏；浏览器插件在移动点击复核时超时，所以本报告的移动交互结论主要来自代码审查和页面布局巡检，不作为完整移动端 QA 结论。

## 3. 页面清单

已覆盖可见页面:

- 首页: `/`
- 产品总览: `/products`
- 产品分类: `/products/level`, `/products/flow`, `/products/pressure`
- 产品详情: 9 个产品详情页
- 定制页: `/customization`
- 行业页: `/industries`
- 资源页: `/resources`
- 质量页: `/quality`
- 证书页: `/certificates`
- 公司页: `/about`
- 联系页: `/contact`
- 案例列表和 3 个案例详情
- 博客列表和 3 篇博客详情
- 法律页: `/privacy`, `/terms`
- 技术入口: `/sitemap.xml`, `/robots.txt`

## 4. 最重要问题

| 优先级 | 问题 | 影响 | 证据 |
|---|---|---|---|
| P0 | `/resources` 直接下载链接全部 404 | 用户点击 Datasheet/Manual/STEP 会进入 404，严重损害转化和信任 | 12 个 `/downloads/*` 全部返回 404 |
| P0 | 图片素材大量为占位图 | 工厂、团队、证书、案例、行业页的信任证据不足 | 34 个 `.jpg` 实际为 PNG，占位图多为 0.6KB 到 3KB |
| P1 | About 仍有 `Team Photo`、`Founders Photo` 占位文字 | 公司页是信任页，出现占位会直接拉低可信度 | `/about` 首屏和创始人区 |
| P1 | Customization 的案例卡片仍显示 `Project Photo` | OEM/ODM 定制能力没有真实交付证据 | `/customization#cases` |
| P1 | 证书页只有图片和文字，没有下载/验证动作 | 证书号很强，但没有可操作验证链路 | `/certificates` |
| P1 | 表单文件上传只保存文件名，不上传文件 | 用户以为上传了图纸，后端实际只收到文件名 | `CustomizationForm` 的 `fileName` 字段 |
| P1 | CTA 和页脚颜色对比不足 | 影响可读性和可访问性，尤其是采购用户和移动端 | `#EF9F27` 白字约 2.17:1，页脚 muted 约 2.16:1 |
| P2 | 强信任文案缺少证明 | 99.8% pass rate、0.3% failure、82 employees、客户名等需证据支撑 | About/Quality/Certificates/Case Studies |
| P2 | Contact 页销售联系人邮箱不可点击 | 用户复制成本高，降低联系效率 | Sarah/Leo 邮箱是纯文本 |
| P2 | Blog 无图片、无作者个人信任信息 | 内容可读，但不像工程专家内容库 | `/blog/*` |

## 5. 分项评分

| 模块 | 评分 | 判断 |
|---|---:|---|
| 信息架构 | 4.3/5 | 页面覆盖完整，产品、行业、案例、博客、证书、质量、联系路径清晰 |
| 产品详情完整度 | 4.4/5 | 规格、应用、证书、采购、FAQ、相关产品都有，属于全站最强部分 |
| 转化路径 | 3.8/5 | CTA 密集，WhatsApp 和表单路径明确；但下载 404、上传不真实、邮箱环境依赖仍是风险 |
| 文案质量 | 3.6/5 | 面向采购的表达直接有效；部分说法过强、口语化或缺证据 |
| 图片与信任素材 | 2.0/5 | 产品主图可用，但工厂/团队/证书/案例/行业多为占位 |
| 交互逻辑 | 3.7/5 | 搜索、表单、FAQ、锚点、导航基本成立；资源下载和文件上传逻辑不一致 |
| SEO/结构化数据 | 4.6/5 | build 和 Schema CI 通过，sitemap/robots/JSON-LD 完整 |
| 可访问性与视觉细节 | 3.0/5 | 布局无明显水平溢出；颜色对比和部分 CTA 文本需要调整 |

## 6. 全站文案审查

### 优点

- 首页 H1 清楚: `Level Sensor, Flow Meter & Pressure Transmitter Manufacturer`，能直接命中采购关键词。
- 产品页大量使用采购关心的信息: MOQ、价格起点、lead time、输出信号、认证、材料、应用场景。
- 产品详情页的 `Ordering & Procurement` 很适合外贸采购场景，包含包装、付款、贸易条款、运输、样品。
- 博客文章标题有搜索意图，例如 `80GHz vs 26GHz Radar Level Sensors` 和 `Electromagnetic vs Ultrasonic Flow Meter`。
- 案例文案有背景、挑战、方案、结果和 quote，结构完整。

### 风险

- 首页和质量页有一些过强但未证明的说法:
  - `Aerospace-grade quality at 1/3 the cost`
  - `Same sensor core technology`
  - `99.8% Pass Rate`
  - `<0.3% Field Failure Rate`
  - `The factory owner picks up WhatsApp at 3am`
- 这些句子能提高转化，但如果没有证据，容易显得像营销包装。建议保留强卖点，但配真实证据页、证书、测试照片、报告编号或客户授权案例。
- `The factory owner picks up WhatsApp at 3am` 太口语化，B2B 工业站上会显得不够稳重。可改为 `Senior engineers support urgent timezone-sensitive requests.`。
- 案例里出现具体客户名 `Saudi Water Co.`、`Indonesia PDAM` 等，但当前只配色块占位图和文字 logo。若没有授权，建议改成匿名但更真实的项目描述；若有授权，补客户证明、现场照片或采购文件局部打码图。

## 7. 图片和视觉素材审查

### 可用部分

- 9 个 `*-v2.jpg` 产品主图是真实风格产品图，尺寸 1200x800，视觉效果明显优于占位素材。
- 首页产品主图、产品列表卡片、分类页产品图整体可用。
- 首页 `home/*.svg` 虽是插画型素材，但至少能表达工厂流程和案例场景。

### 问题

- `public/cases/*.jpg` 实际是纯色/占位 PNG，且扩展名为 `.jpg`。
- `public/factory/*.jpg`、`public/team/*.jpg`、`public/certs/*.jpg`、`public/industries/*.jpg` 大多是 1KB 左右占位图，不具备实物证明价值。
- About 页直接显示 `Team Photo` 和 `Founders Photo` 文本占位。
- Customization 页交付案例显示 `Project Photo` 文本占位。
- 证书图片不是可读证书扫描件，不能支撑证书号。
- OG image 只有约 4.5KB，基本也是占位级别。

### 建议素材优先级

1. 真实证书扫描件: ISO、CE、ATEX、RoHS、Alibaba verified。
2. 真实工厂照片: 外立面、产线、测试室、校准台、包装出货。
3. 真实团队照片: 至少公司合影和负责人照片。
4. 真实案例现场图: 水处理、油气、化工、OEM 包装。
5. 行业页图片: 可先用高质量场景图，但必须避免纯色占位。
6. OG 图片: 至少为首页、产品、案例、博客各做一套模板。

## 8. 交互和页面逻辑审查

### 导航

- 桌面导航清晰，Products 有 hover/focus 下拉，包含 Level/Flow/Pressure。
- 移动端代码中有汉堡按钮、`aria-expanded`、`aria-controls` 和展开菜单逻辑。
- 移动端底部固定栏包含 WhatsApp、Call、Quote，适合移动询盘。
- 风险: 移动端底部栏占据 56px，body 用 `pb-14` 规避遮挡，方向正确；仍建议用真实设备做一次表单底部按钮遮挡测试。

### 产品搜索

- `/products` 有搜索框，可按 model、应用、规格、认证过滤。
- 空结果状态有 Clear Search 和 Ask for Recommendation。
- 分类 tab 是独立路由，清楚。
- 风险: 搜索状态不写入 URL，用户无法分享当前搜索结果；这不是阻断问题，但可以优化。

### 产品详情锚点

- `Request Technical Documents` 跳到 `#documents`。
- `Get a Quote for This Product` 跳到 `#quote`。
- Specifications/Applications/Documents 是锚点式导航，逻辑简单可靠。
- 风险: 产品详情页里技术文档是“Request”，资源页里却是“Download”。两个页面的用户预期不一致。

### 表单

- Inquiry 表单有必填项: name、company、email、country、productInterest、privacy。
- Product detail 会预填产品 ID 和产品兴趣，Contact 页支持 `?product=...&document=...` 和 `?request=catalog`。
- 提交到 `/api/inquiry`，通过 zod 校验；如果配置 Resend 环境变量则发邮件，否则只记录服务器日志。
- 成功后有 WhatsApp 继续沟通 CTA，设计合理。
- 风险:
  - Customization 的文件上传没有真正上传文件，只把文件名写入 `fileName`。
  - 表单成功提示说 24 小时回复，但如果 `RESEND_API_KEY` / `EMAIL_TO` 未配置，用户仍会看到成功，实际只在日志里。
  - Sales Contacts 里的 `sarah@...` 和 `leo@...` 是纯文本，不是 `mailto:`。

### FAQ 折叠

- 产品详情和 Contact 页使用 accordion，结构清晰。
- FAQ 同时输出 JSON-LD，对 AI 抽取和搜索理解有帮助。

### 资源下载

- `/resources` 的所有文档链接直接指向 `/downloads/*`。
- 仓库没有 `public/downloads/` 文件。
- 本地检查 12 个链接全部 404。
- 这是当前最严重的用户路径问题。

## 9. 页面逐项审查

### 首页 `/`

优点:

- 首屏定位清楚，产品线和产地明确。
- CTA 有 `Get a Quote` 和 `Request Product Catalog`。
- 有 10 年、40+ 国家、72h aging test 等信任数字。
- 产品分类、买家选择理由、案例、工厂、最终 CTA 覆盖完整。

问题:

- 信任数字和强卖点没有首屏证据链接。
- `Request Product Catalog` 最终进入 Contact 表单，但不是直接下载 catalog，预期需要明确。
- Case/Factory 区使用 SVG/占位风格，不足以支撑工厂真实性。
- `factory owner picks up WhatsApp at 3am` 不够工业 B2B 稳重。

建议:

- 首屏增加 `View certificates`、`Factory photos`、`Download catalog` 的真实证据链。
- 替换工厂和案例图为真实照片。
- 调整过口语化文案。

### 产品总览 `/products`

优点:

- H1 信息完整，覆盖 Level、Flow、Pressure。
- 搜索框大且清楚，placeholder 举例合理。
- 9 个产品卡片包含主图、型号、名称、tagline、价格起点、详情入口。
- 空结果处理较好。

问题:

- 搜索状态不可分享。
- `Customization` tab 跳出产品列表是合理的，但视觉上与分类 tab 同列，用户可能以为也是筛选。

建议:

- 搜索 query 写入 URL，例如 `?q=atex`。
- Customization tab 视觉上做成次级 CTA 或放在搜索下方。

### 产品分类页 `/products/level`, `/products/flow`, `/products/pressure`

优点:

- 每个分类都有独立 SEO title、description、H1、overview 和 selection guide。
- 产品卡片展示 4 个关键规格，很适合快速筛选。
- CTA 引导到 Customization 和 Industries。

问题:

- Selection guide 是纯文字，缺少场景图、选型表或参数对比图。
- 产品卡片 CTA 与全站 CTA 样式混合，卡片整体可点击但不是所有用户都能感知。

建议:

- 增加每类一张选型矩阵: medium、range、accuracy、certification、output。
- 卡片底部明确 `View Details` 按钮区域。

### 产品详情页 `/products/[slug]`

优点:

- 全站最完整的页面模板。
- 包含产品主图、关键规格、价格、MOQ、lead time、报价 CTA、WhatsApp、Quick Specifications、完整规格表、应用、技术文档请求、优势、选型、质量认证、竞品对比、案例、采购条款、FAQ、相关产品、报价表单。
- 产品页 JSON-LD 和 FAQPage 输出完整。

问题:

- `Technical Documents` 是请求文档，不是下载；而 `/resources` 是下载，用户预期冲突。
- `How We Compare` 使用 `European Brand`，有比较价值但缺少依据，容易被认为是泛化营销。
- 证书详情有编号，但没有产品维度证书文件链接。
- 部分产品相关案例/图片来自占位素材，降低真实感。

建议:

- 统一文档策略: 要么所有文档都可下载，要么全部改成申请受控文档。
- 给每个产品至少提供一页真实 PDF datasheet。
- 竞品对比增加注释: 基于公开采购均价、典型配置或内部报价样本。
- 证书列表增加 `Request verification package` 或证书扫描件链接。

### 定制页 `/customization`

优点:

- OEM、ODM、Non-standard 三类服务分明。
- MOQ、lead time、fee 直接展示，符合采购预期。
- 7-step custom process 清晰。
- 表单字段和技术需求 textarea 合理。

问题:

- Delivered Custom Projects 卡片仍是 `Project Photo` 占位。
- 文件上传没有真的上传文件，只记录文件名。
- 页面首屏说 `From sample to bulk order in 45 days`，流程图到 Day 55，时间口径不一致。

建议:

- 替换项目照片，或在没有授权时使用打码实物/包装/图纸截图。
- 真正实现文件上传，或把文案改成 `Tell us the filename and email the drawing after submission`。
- 统一 45 天/55 天口径。

### 行业页 `/industries`

优点:

- 覆盖水处理、油气、化工、制药、食品饮料、制造自动化。
- 每个行业都有推荐产品和关键能力。
- 内链到产品详情，SEO 和转化都有效。

问题:

- 行业图片是占位级素材。
- 行业推荐逻辑固定在数组里，没有解释为什么推荐这些产品。

建议:

- 增加每个行业的典型工况和选型原因。
- 替换行业图。

### 资源页 `/resources`

优点:

- 按产品列出 datasheet、manual、3D model，信息架构正确。
- 每个资源旁边可回到产品页。

严重问题:

- 12 个下载链接全部 404。
- 用户会认为资料库不可用。

建议:

- 最少补齐 9 个 datasheet PDF。
- 如果暂时没有真实文件，把直接下载改为 `/contact?product=...&document=...`，与产品详情页一致。
- 页面标题若继续叫 Downloads，就必须保证文件真实存在。

### 质量页 `/quality`

优点:

- 5-stage QC 和 72-hour aging test 逻辑清楚。
- Calibration Laboratory 和 Quality Statistics 形成信任叙事。

问题:

- 99.8%、0.3%、0.1%、100% 等数字没有证据来源。
- `GE Druck DPI 620` 等设备名较具体，建议配真实设备照片和校准报告样张。
- 72-hour aging test 图片是占位素材。

建议:

- 增加 `Sample calibration certificate`、`Aging test log sample`、`QC checklist sample`。
- 对统计数字标注统计周期和样本数。

### 证书页 `/certificates`

优点:

- 证书名、编号、issuer、scope、validUntil 都有。
- 结构清楚，和产品页的证书信息保持一致。

问题:

- 图片不是可读证书扫描件。
- 没有下载 PDF 或外部验证链接。
- `Need to verify a certificate? Contact us...` 可用，但不如直接提供验证包。

建议:

- 上传可读扫描件或打码证书 PDF。
- 添加 `Download certificate package` 或 `Request stamped copy`。
- 对 ATEX/CE 等证书明确覆盖的产品型号。

### 公司页 `/about`

优点:

- 公司故事、使命愿景、里程碑、工厂、团队、证书都有。
- 结构完整，是正确的信任页方向。

严重问题:

- 首屏右侧仍是 `Team Photo` 占位。
- Founder 区仍是 `Founders Photo` 占位。
- 团队、工厂、证书图片均为低字节占位图。
- 团队履历很具体，例如 Tsinghua PhD、AVIC、12 patents，需要证据，否则风险很高。

建议:

- About 是最高优先级素材页。必须补真实团队/工厂/证书。
- 团队履历如果无法公开证明，改成更稳妥的角色能力描述。

### 联系页 `/contact`

优点:

- 表单在左，联系信息在右，布局符合采购流程。
- Contact Information、Sales Contacts、Find Us On、Map、FAQ 都有。
- 支持产品/文档参数预填消息，产品详情和资源页可复用。

问题:

- Sales Contacts 的邮箱不是链接。
- Google Maps 只定位 `Xi'an High-Tech Zone`，不够具体。
- 表单成功依赖后端环境变量，页面没有提示备用邮箱。

建议:

- Sarah/Leo 邮箱改为 `mailto:`，WhatsApp 改为可点链接。
- 如果不方便公开详细地址，至少加 `Request factory visit address after appointment`。
- 表单旁增加备用邮箱和 WhatsApp，可减少邮件环境故障风险。

### 案例页 `/case-studies` 和详情

优点:

- 案例列表和详情都有，结构完整。
- 每个案例有背景、挑战、方案、结果、quote、产品链接、WhatsApp CTA。
- 详情页有 Article schema。

问题:

- 案例图是占位素材。
- 客户 logo 是纯文本。
- 客户 quote 没有授权或证明信息。
- 结果指标很强，例如 71% cost saved、500 repeat order、0 failures，缺少来源。

建议:

- 增加匿名化采购单、发货照片、安装现场图、测试报告、客户授权标识。
- 如果不能公开客户名，改为 `Saudi municipal water utility` 等匿名表达。

### 博客 `/blog` 和详情

优点:

- 三篇文章选题对 SEO 和采购教育有价值。
- 文章结构清楚，有 FAQ、相关产品、Ask an Engineer CTA。
- 内容避免了纯营销，具备一定工程解释。

问题:

- 没有文章配图、图表、作者、发布日期显示只显示 modified date。
- 没有目录，长文阅读效率一般。
- 文章没有引用标准、选型表或工程图。

建议:

- 每篇增加一个选型表或对比表。
- 增加作者模块，例如 `AccuMeasure Engineering Team`。
- 增加目录和下一步 CTA。

### 法律页 `/privacy` 和 `/terms`

优点:

- 有基础隐私和条款页，且设置 noindex 是合理的。

问题:

- 内容过短，偏占位。
- Privacy 写 `retained for up to 2 years`，但表单实际记录在服务器日志/邮件服务中，删除流程不明确。
- Terms 缺少贸易条款、保修范围、责任限制、适用法律、报价有效期之外的细节。

建议:

- 对 B2B 出口站，Terms 应补充 warranty、Incoterms、payment、delivery、custom order cancellation、documentation accuracy。
- Privacy 应说明邮件服务商、日志、跨境数据、删除请求处理方式。

## 10. SEO 和结构化数据

优点:

- `metadataBase`、canonical、OpenGraph、Twitter card、robots、sitemap 都有。
- sitemap 包含静态页、产品页、案例页、博客页，并有 image sitemap 扩展。
- Product、FAQPage、Article、Organization、WebSite、BreadcrumbList、Person schema 均有覆盖。
- `npm run verify` 通过，JSON-LD 0 error。

问题和建议:

- `WebSite` 的 `SearchAction` 指向 `/products?category={query}`，但实际产品搜索是前端 `q` 文本搜索，并不使用 `category={query}`。建议改成真实可工作的搜索 URL，或移除 SearchAction。
- sitemap 的 lastModified 对静态页使用当前构建时间，会每次 build 改变，可能制造不必要的抓取信号。可改成固定发布日期或 git commit 时间。
- `robots.txt` disallow 了 `/*?product=`、`/*?document=`、`/*?request=`，合理；但这些参数页是转化路径，仍需确认不会影响重要入口被分享后的体验。

## 11. 可访问性和视觉细节

问题:

- 白色按钮文字在橙色 CTA `#EF9F27` 上对比度约 2.17:1，低于 4.5:1。
- 页脚 `text-muted` 在 `bg-dark` 上对比度约 2.16:1，明显偏暗。
- 很多卡片整体可点击，但 CTA 和卡片边界关系不够明确，键盘用户可能不容易判断。
- 产品详情中部分规格表数值较长，当前桌面无水平溢出，但移动端仍需要真机复核。

建议:

- CTA 按钮改为深文字或更深橙色背景。当前 hover 色 `#BA7517` 更接近可用，但仍需重新测对比度。
- 页脚链接和描述使用 `text-white/70` 或更亮的灰。
- 给卡片链接增加明显 focus ring。
- 移动端做一次真实设备检查，重点是底部 fixed bar 是否遮挡表单 submit。

## 12. 推荐修复顺序

### 第一优先级: 立即修

1. 修复 `/resources` 12 个 404。没有真实文件就先改为申请文档链接。
2. 删除所有显式占位文字: `Team Photo`、`Founders Photo`、`Project Photo`。
3. 替换 About、Certificates、Case Studies、Customization 的核心占位图。
4. 修复 Customization 文件上传预期: 要么真上传，要么改文案。
5. 调整 CTA 和页脚颜色对比。

### 第二优先级: 可信度增强

1. 证书页增加真实扫描件/PDF/验证包。
2. Quality 数字加统计周期、样本数和证明材料。
3. 案例页补真实现场/发货/安装/授权证据。
4. Sales contacts 改为可点击 email/WhatsApp。
5. About 团队履历加证据或降调。

### 第三优先级: 转化和内容优化

1. 产品搜索支持 URL query。
2. Blog 加目录、作者、图表和选型矩阵。
3. 产品详情的竞品对比加说明来源。
4. Terms/Privacy 补 B2B 出口业务条款。
5. SearchAction schema 改成真实搜索逻辑。

## 13. 最小上线标准

如果只做最小可上线版本，至少完成以下 8 项:

1. `/resources` 不再出现 404。
2. About 首页和 founders 区不再出现文字占位。
3. Certificates 至少显示可读证书图或 PDF 请求入口。
4. Case Studies 不再使用纯色占位图。
5. Customization 不再显示 `Project Photo`。
6. 文件上传逻辑和文案一致。
7. CTA 和 footer 文本对比度达标。
8. 生产 `npm run verify` 继续通过。

## 14. 最终判断

这个站点的代码和信息架构已经比普通外贸站完整，尤其是产品详情页和结构化数据。但“真实性证据”没有跟上文案强度。当前版本适合继续开发和内部预览，不建议直接大规模投放或对外当作最终信任站。

下一步应优先做真实素材和资源链路，而不是继续加页面。补齐真实证书、工厂、案例、下载文件后，这个站的转化基础会明显更稳。
