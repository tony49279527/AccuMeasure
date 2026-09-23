# AM-CO-005 — compliance / pressure

Query: RoHS compliant pressure transmitter for OEM equipment

Engine: deepseek-chat (no web browsing) (model: deepseek-flash)

---

For OEM equipment requiring **RoHS compliance**, you need pressure transmitters that meet the EU Directive 2011/65/EU (RoHS 2) and its amendment (EU) 2015/863 (RoHS 3), which restricts lead, mercury, cadmium, hexavalent chromium, PBB, PBDE, and four phthalates (DEHP, BBP, DBP, DIBP).

Here's a breakdown to help you specify the right unit:

## Key Specifications to Define First

| Parameter | Typical OEM Options |
|---|---|
| Pressure range | 0–100 mbar up to 0–1000+ bar |
| Output signal | 4–20 mA, 0–10 V, 0.5–4.5 V ratiometric, I²C, SPI |
| Accuracy | ±0.25% / ±0.5% / ±1% FS |
| Process connection | G¼, G½, ¼ NPT, M12, custom |
| Electrical connection | M12, DIN 43650, cable, Packard |
| Media compatibility | Air, water, hydraulic oil, refrigerants, gases |
| Operating temp | -40 to +125 °C (varies) |
| IP rating | IP65 / IP67 / IP69K |

## Recommended Product Families (RoHS Compliant)

**Industrial / general OEM:**
- **Sensata / Kavlico** – P1A, P1J, P255 series (many RoHS-compliant variants)
- **Wika** – A-10, S-20 (RoHS declarations available)
- **IFM** – PT / PN series
- **Danfoss** – MBS 3000/5000 series
- **Honeywell** – PX3, MLH, MPR series
- **TE Connectivity** – MS4515, MS4525, M5600
- **Gems Sensors** – 3100 / 3500 series
- **Ashcroft** – OEM ranges

**Compact / board-mount (cost-optimized for high-volume OEM):**
- **Bosch Sensortec** – BMP series (I²C/SPI)
- **Sensirion** – SDP series (differential)
- **Amphenol / All Sensors** – DLHR, BLVR
- **Merit Sensor** – low-cost OEM transmitters

**Automotive / harsh environment (RoHS + AEC-Q):**
- **Sensata**
- **TE / Measurement Specialties**
- **Bosch**

## What to Verify Before You Commit

1. **RoHS declaration** – request the manufacturer's "Declaration of Conformity" or material compliance certificate (not just a datasheet claim).
2. **Exemptions** – some stainless steel or high-temp alloys use RoHS exemptions (e.g., lead in steel ≤0.35%, copper alloys ≤4%). Confirm the exemption applies.
3. **REACH + conflict minerals** – often required alongside RoHS for OEM supply chains.
4. **Wetted materials** – 316L SS, Hastelloy, ceramic, or silicon depending on media.
5. **EMC / CE** – EN 61326-1 for industrial, EN 61000 for automotive.
6. **Lifecycle & MOQ** – OEM programs need 5–10 year availability; check obsolescence policy.

## Typical Selection Path

- **Cost-sensitive, dry air/gas, high volume** → board-mount MEMS (Sensirion, Bosch, Amphenol)
- **Hydraulic/pneumatic, industrial** → Sensata P1A/Kavlico, Danfoss MBS, Wika A-10
- **Harsh media, washdown, mobile hydraulics** → IFM PT, TE M5600, Gems 3500
- **Automotive / E-mobility** → Sensata, TE, Bosch

If you share the **range, output, medium, connection, and annual volume**, I can narrow this to 2–3 specific part numbers with RoHS documentation paths.
