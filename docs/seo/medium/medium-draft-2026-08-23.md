# Medium Draft

**Status:** Draft only. Do not publish.

**Target procurement keyword:** `ultrasonic vs radar`

**GSC evidence:** The local 28-day query snapshot, modified 2026-07-25 and covering rows through 2026-07-22, recorded 4 impressions, 0 clicks, and an average position of 77.75 for `ultrasonic vs radar`. Related comparison queries also received impressions without clicks. This is an early signal, not a stable-volume or ranking claim.

## Title

Radar vs. Ultrasonic Level Sensors: A Procurement Decision Guide

## Subtitle

How industrial buyers, system integrators, importers, and distributors can match level technology to the medium, range, installation, environment, and documentation required by the project.

## Tags

Industrial Automation, Instrumentation, Level Measurement, Procurement, Sensors

## Article Body

When an RFQ says only "level sensor," a supplier may reasonably ask several more questions before recommending a model. Is the medium clean water, a chemical, oil, or a bulk solid? How deep is the vessel? Is there vapor, foam, dust, condensation, or an Ex area? Does the control system need 4-20 mA, HART, or Modbus?

Radar and ultrasonic level sensors can both provide non-contact measurement, but they should not be treated as interchangeable catalog items. The practical choice is the one that fits the process and can be supported by a complete document package. AccuMeasure's [radar-versus-ultrasonic selection guide](https://www.accumeasuretech.com/applications/radar-vs-ultrasonic-level-sensor) is a useful starting point, but the final model still needs to be checked against the current datasheet and the installation details.

## The Short Decision

Start by evaluating ultrasonic for clean water, compatible chemical liquids, and open or straightforward tank applications where the range and environmental limits fit the job. The published AM-UL20 example is positioned for water tanks, water treatment, chemical storage, and irrigation systems.

Evaluate radar when the project introduces longer range, vapor, dust, foam, higher process temperature, difficult beam geometry, or hazardous-area documentation requirements. The published AM-RL80 example is positioned for crude oil storage, chemical tanks, solids silos, food and beverage processing, and LPG/LNG applications.

This is a screening rule, not a universal technology guarantee. A supplier should confirm the exact model configuration after reviewing the process and mounting conditions.

## 1. Match the Technology to the Medium

The medium is the first procurement input because it changes the measurement risk and the materials that need to be reviewed.

For an ultrasonic shortlist, state whether the liquid surface is clean and whether heavy foam or dense vapor is expected. The AM-UL20 product information identifies non-contact ultrasonic measurement, a PVDF transducer, and use in water and chemical applications. That makes it a reasonable candidate for many water-tank and treatment duties, subject to the actual chemistry and operating envelope.

For a radar shortlist, describe vapor, dust, foam, condensation, agitation, and the possibility of buildup. The AM-RL80 information identifies 80GHz FMCW radar and highlights non-contact use for challenging conditions. Its application list includes liquid storage as well as cement, powder, and granular-material silos. Those published applications do not remove the need to review the tank drawing: inlets, ladders, agitators, and nearby walls can still affect the mounting decision.

Do not specify a sensor from the medium name alone. "Chemical tank" is not a complete requirement. Include the chemical name or composition, concentration where relevant, process temperature, pressure, and the materials that will contact or face the process.

## 2. Compare Range, Accuracy, and Installation Conditions

Published model data gives a useful reference point, but it is not a universal limit for every sensor in the category.

| Published model example | AM-RL80 radar | AM-UL20 ultrasonic |
| --- | --- | --- |
| Measurement range | 0.3-80 m | 0.5-20 m |
| Published accuracy | ±2 mm | ±1% FS |
| Output | 4-20 mA HART / RS485 Modbus | 4-20 mA / RS485 Modbus |
| Supply | 12-36 V DC | 12-36 V DC |
| Environmental entry | IP67 | IP65 |
| Published process temperature | -40°C to +200°C | -20°C to +60°C |

The right comparison is not "which number is larger?" First define the required measurement range, the normal operating band, the minimum and maximum level, and the acceptable error basis. Ask the supplier to state the blind zone or minimum distance and to confirm that the required range remains available after installation.

Mounting geometry deserves the same attention as the instrument specification. Include tank height, nozzle size and height, mounting position, internal structures, inlet location, and any drawing or photograph that shows the beam path. A narrow beam can be valuable in a crowded or narrow vessel, but the supplier should confirm the proposed position rather than relying on a product headline.

## 3. Check Outputs, Certification, and Maintenance Cost

Output compatibility is a common source of avoidable rework. State the existing PLC, DCS, SCADA, or tank-gauging interface and confirm the required signal before the quotation is finalized. For the published examples, both models support 4-20 mA and RS485 Modbus; the AM-RL80 page additionally lists HART. Confirm the wiring arrangement, power supply, connector, and communication settings for the quoted configuration.

Certification must be treated as model-specific. The AM-RL80 product page publishes IP67 and Ex d IIC T6 information and lists ATEX-related documentation; the AM-UL20 page publishes ISO 9001 and CE entries. If the installation is in a hazardous area, ask for the certificate or declaration that names the exact model, protection marking, applicable zone, issuer, and validity. A company-level quality certificate is not a substitute for product-specific hazardous-area evidence.

Lifecycle cost is broader than the unit price. Compare installation work, commissioning effort, access for maintenance, replacement parts, calibration records, and the cost of troubleshooting an unsuitable installation. The radar page describes a non-contact design with no moving parts and minimal maintenance, while the ultrasonic page emphasizes economical measurement and easy setup. These are useful selection considerations, not a promise of a fixed maintenance cost for every site.

## 4. Prepare an RFQ That Can Be Quoted Correctly

A procurement-ready RFQ should give the supplier enough information to recommend a model without guessing:

- **Process:** medium, concentration, liquid or solid state, vapor, foam, dust, condensation, agitation, temperature, and pressure.
- **Geometry:** vessel height, minimum and maximum operating level, nozzle size and height, mounting location, internal obstructions, and available drawings.
- **Performance:** measuring range, required accuracy and error basis, blind-zone constraints, response expectations, and any alarm or control requirement.
- **Integration:** output signal, HART or Modbus needs, supply voltage, wiring, connector, enclosure, and display requirements.
- **Compliance:** hazardous-area classification, certificate type, destination-market requirements, inspection rules, and required language for documents.
- **Commercial scope:** sample quantity, annual volume, first-order quantity, destination, target delivery date, packaging, and Incoterms.

For an OEM or private-label project, add the approved logo and label artwork, packaging requirements, interface or firmware expectations, required materials, sample-approval steps, and change-control rules. AccuMeasure's customization workflow separates branding review, design feasibility, non-standard engineering, sample evaluation, and production planning; an RFQ should make those boundaries explicit.

## 5. Documents to Request Before the Purchase Order

Ask for the current controlled document set for the exact quoted model and configuration:

1. A datasheet showing range, accuracy, blind zone, process temperature and pressure limits, materials, output, power, ingress protection, and Ex marking where applicable.
2. An installation manual, wiring diagram, dimensional drawing, and any required mounting or antenna information.
3. Product-specific certificates, declarations, or compliance records with scope, issuer, validity, and model identification.
4. An individual calibration certificate with the instrument serial number and the stated reference or traceability information.
5. The inspection or quality records agreed in the RFQ, plus the acceptance criteria for samples or first articles.
6. A commercial quotation that identifies configuration, quantity, MOQ, lead time, packaging, trade terms, and the destination assumptions behind the price.

Do not accept "certificate available" as a complete answer. Ask which document revision will ship, whether the scope covers the exact model, and how the serial number will be tied to the calibration record. For hazardous-area projects, resolve those questions before comparing quotations.

## Final Procurement Rule

Choose ultrasonic when the process is clean and straightforward and the published range, temperature, materials, and output match the requirement. Choose radar for a project where vapor, dust, foam, long range, narrow installation geometry, or hazardous-area review makes the additional capability relevant. In both cases, the defensible decision comes from a complete RFQ, a current model-specific document set, and an installation review - not from a generic "radar is better" or "ultrasonic is cheaper" statement.

## Author Bio

The AccuMeasure technical content team prepares buyer-focused guidance for level sensors, flow meters, pressure transmitters, and OEM measurement projects. The team uses published product information and application requirements, and distinguishes confirmed specifications from items that still require engineering review.

## CTA

Before requesting a quotation, send the medium, range, tank or vessel drawing, process temperature and pressure, mounting constraints, output and power requirements, hazardous-area classification, quantity, destination, and document requirements. Ask the supplier to return the proposed model, open technical questions, controlled documents, commercial assumptions, and validation steps in writing.

## Citation Sources

These sources were used for editorial verification. They are supporting references for the draft and are not additional in-body links.

- [AccuMeasure Radar vs Ultrasonic Level Sensor application guide](https://www.accumeasuretech.com/applications/radar-vs-ultrasonic-level-sensor)
- [AM-RL80 80GHz FMCW Radar Level Transmitter](https://www.accumeasuretech.com/products/am-rl80-80ghz-radar-level-transmitter)
- [AM-UL20 Ultrasonic Level Sensor](https://www.accumeasuretech.com/products/am-ul20-ultrasonic-level-sensor)
- [80GHz Radar Level Sensor for Oil Storage Tanks](https://www.accumeasuretech.com/applications/radar-level-sensor-for-oil-tank)
- [AccuMeasure Comparison Guides](https://www.accumeasuretech.com/compare)
- [AccuMeasure OEM / ODM Instrument Customization](https://www.accumeasuretech.com/customization)
- Local GSC evidence: `reports/gsc/query-28d.json`, `reports/gsc/page-28d.json`, and the opportunity rubric at `/Users/liangxile/.codex/skills/accumeasure-gsc-content-growth/references/opportunity-rubric.md`.
