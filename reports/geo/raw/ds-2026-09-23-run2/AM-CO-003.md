# AM-CO-003 — compliance / flow

Query: CE certified electromagnetic flow meter for water projects

Engine: deepseek-chat (no web browsing) (model: deepseek-flash)

---

Here's a comprehensive overview of CE-certified electromagnetic flow meters for water projects.

## What "CE Certified" Means

CE marking indicates the product complies with applicable EU directives. For electromagnetic flowmeters used in water projects, the relevant directives typically include:

- **EMC Directive 2014/30/EU** – electromagnetic compatibility
- **LVD 2014/35/EU** – low voltage (if mains-powered)
- **Pressure Equipment Directive (PED) 2014/68/EU** – for pressurized sensors
- **ATEX** (if installed in hazardous areas – separate certification)
- **RoHS / WEEE** – material and disposal compliance

Always request the **EU Declaration of Conformity** and check the notified body number if applicable.

## Typical Specifications to Look For

| Parameter | Common Range |
|---|---|
| Nominal diameter (DN) | DN15 – DN3000 |
| Liner material | PTFE, F46, PFA, hard rubber, soft rubber |
| Electrode material | 316L, Hastelloy C, titanium, tantalum, platinum |
| Accuracy | ±0.2% to ±0.5% of reading |
| Protection class | IP65, IP67, IP68 |
| Outputs | 4–20 mA, pulse, RS485 (Modbus/HART), Profibus |
| Power supply | 220 V AC, 24 V DC, battery-powered |
| Fluid conductivity | ≥5 µS/cm |
| Temperature | −20 °C to 180 °C (depends on liner) |

## Selection Criteria for Water Projects

1. **Application type** – raw water, treated water, wastewater, irrigation, district metering
2. **Pipe size and flow range** – ensure velocity stays between 0.5–5 m/s for accuracy
3. **Liner compatibility** – rubber for potable/wastewater; PTFE for aggressive media
4. **Ingress protection** – IP68 for buried or flooded installations
5. **Communication** – SCADA integration (Modbus RTU, HART, 4–20 mA)
6. **Calibration certificate** – traceable to national standards
7. **Drinking water approvals** – WRAS, NSF/ANSI 61 if for potable supply

## Reputable Brands with CE-Certified Models

- **Endress+Hauser** – Promag series
- **Siemens** – SITRANS FM MAG
- **ABB** – ProcessMaster / AquaMaster
- **Krohne** – Optiflux, Waterflux
- **Yokogawa** – ADMAG series
- **Emerson (Rosemount)** – 8700 series
- **Chinese manufacturers** (with valid CE) – Supmea, Sinomeasure, Aube, Kaifeng

## Procurement Checklist

- [ ] Valid CE Declaration of Conformity (with directive references)
- [ ] Test reports (EMC, LVD) from accredited lab
- [ ] Calibration certificate
- [ ] Material certificates (electrodes, liner)
- [ ] Installation manual (earthing/grounding is critical for EMF)
- [ ] Warranty terms (typically 12–24 months)
- [ ] Local after-sales support

## Installation Notes

- Ensure **upstream straight pipe ≥ 5×DN**, downstream ≥ 3×DN
- Flow direction arrow must match pipe flow
- **Grounding rings** required for non-conductive pipes
- Avoid installation at pipe high points (air entrapment) or near pumps/valves
- Verify **empty pipe detection** and low-flow cut-off settings

---

If you tell me:
- Pipe size and flow rate
- Fluid type (potable/wastewater/irrigation)
- Output/communication needs
- Budget range and region

…I can narrow down specific CE-certified models or suppliers for you.
