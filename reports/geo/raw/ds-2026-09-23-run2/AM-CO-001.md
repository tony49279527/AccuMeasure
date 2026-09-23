# AM-CO-001 — compliance / level

Query: documents required for importing radar level transmitters to EU

Engine: deepseek-chat (no web browsing) (model: deepseek-flash)

---

Importing radar level transmitters into the EU requires a set of documents covering customs, product compliance, and sometimes end-use/dual-use considerations. The exact list depends on the transmitter type (e.g., 24/80 GHz FMCW, guided-wave radar), whether it emits radio frequencies, and whether it has hazardous-area certification.

## 1. Commercial & Customs Documents

- **Commercial invoice** – seller/buyer details, description, HS code, value, Incoterms, country of origin
- **Packing list** – weights, dimensions, number of packages
- **Bill of Lading / Air Waybill** – transport document
- **Certificate of Origin** – often required for preferential duty treatment
- **Customs declaration (SAD)** – filed by importer/customs agent
- **EORI number** – importer must have an EU Economic Operators Registration and Identification number
- **HS code classification** – typically under **9026 10** (instruments for measuring level/flow) or **8526** if the radio module is classified separately; verify with a customs broker

## 2. EU Product Compliance Documents

- **CE Declaration of Conformity (DoC)** – issued by the manufacturer, listing applicable directives
- **Technical file / construction file** – test reports, design drawings, schematics
- **Test reports** for applicable directives:
  - **EMC Directive 2014/30/EU**
  - **Radio Equipment Directive (RED) 2014/53/EU** – required if the device transmits radio waves (most radar level transmitters do)
  - **Low Voltage Directive 2014/35/EU** – if mains-powered
  - **ATEX Directive 2014/34/EU** – if used in explosive atmospheres (zones 0/1/2 or 20/21/22)
  - **RoHS 2011/65/EU** and **REACH** declarations
  - **Pressure Equipment Directive 2014/68/EU** – if the transmitter includes a pressurized process connection
  - **Machinery Directive 2006/42/EC** – in some integrated installations
- **EU-type examination certificate** – issued by a Notified Body for RED and/or ATEX
- **Notified Body opinions / QA certificates** – e.g., ATEX Annex IV/VII
- **User manual and safety instructions** in an official EU language of the destination country
- **CE marking** on the product and packaging

## 3. Radio-Specific (RED) Documents

Because radar level transmitters use microwave frequencies:

- **RED conformity assessment** (Module A, B+C, H, etc.)
- **Notified Body EU-type examination certificate** if using harmonized standards is not fully possible
- **Frequency band declaration** – e.g., 6 GHz, 24 GHz, 26 GHz, 77–81 GHz
- **RF exposure / EMF assessment**
- **National radio authority notifications** – some EU states (e.g., Germany's BNetzA) require additional registration

## 4. Hazardous Area (ATEX/IECEx) Documents

- **ATEX EU-type examination certificate**
- **IECEx certificate** (recognized in many EU countries)
- **Quality assurance notification** (ATEX Annex IV or VII)
- **Ex label / marking documentation** (e.g., II 1G Ex ia IIC T6 Ga)
- **Intrinsic safety entity parameters** and control drawings
- **Notified Body** must be EU-recognized

## 5. Dual-Use / Export Control

Radar level transmitters can fall under **EU Dual-Use Regulation 2021/821** (Category 6 – sensors and lasers) depending on frequency, resolution, and accuracy:

- **Dual-use authorization** from the exporting country's authority (if applicable)
- **End-user statement / non-reapplication declaration**
- **Import license** in some EU member states
- **Catch-all checks** for military or WMD end-use

## 6. Additional / Situational Documents

- **Insurance certificate**
- **Dangerous goods documentation** – if the transmitter contains a lithium battery (UN 38.3 test report, MSDS, Class 9 declaration)
- **Material certificates** (3.1/3.2 per EN 10204) for wetted parts in hygienic or pressure applications
- **Food-contact compliance** (EC 1935/2004) for food/pharma versions
- **Calibration certificates** (ISO 17025) if required by the buyer
- **Warranty and after-sales documentation**

## 7. Importer Responsibilities (Post-Clearance)

- Maintain the **technical file** for 10 years
- Ensure **EU Responsible Person** is designated for RED/ATEX compliance (for non-EU manufacturers)
- Register in **EUDAMED/SCIP** if applicable (SCIP for articles containing SVHCs)
- Keep **traceability records** (batch/serial numbers)

## Practical Tips

- Confirm the **HS code** and applicable duties with an EU customs broker — duty rates on 9026 10 typically range from 0–2.7%, but radio module classification can change this.
- Ask the manufacturer for a **compliance documentation package** covering CE, RED, ATEX, RoHS, and REACH upfront — retrofitting is expensive.
- If the transmitter is non-EU origin, ensure the **manufacturer has an EU Authorised Representative** for RED and ATEX.
- Verify whether your specific model needs **national radio licensing** — most do not, since RED covers free movement, but some member states add requirements.

Would you like a checklist template, or details on a specific directive (e.g., ATEX vs. IECEx recognition, or RED Notified Body selection)?
