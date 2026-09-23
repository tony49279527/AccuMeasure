# AM-CO-006 — compliance / level

Query: IECEx explosion proof level transmitter for oil and gas

Engine: deepseek-chat (no web browsing) (model: deepseek-flash)

---

For oil and gas applications requiring IECEx certification, you'll need an explosion-proof (Ex) level transmitter rated for hazardous areas. Here's what to specify:

## Key IECEx Ratings to Look For

**Protection Types (common for level transmitters):**
- **Ex ia / Ex ib** — Intrinsic Safety (most common for instrumentation)
- **Ex d** — Flameproof/Explosion-proof enclosure
- **Ex e** — Increased safety
- **Ex tb / Ex tc** — Dust ignition protection
- **Combined markings** like `Ex ia IIC T6 Ga` or `Ex d IIC T6 Gb`

**Gas Groups:**
- **IIA** (propane) — least stringent
- **IIB** (ethylene)
- **IIC** (hydrogen, acetylene) — most stringent, covers all

**Temperature Classes:** T1–T6 (T6 = max 85°C surface temp, safest)

**Zones:**
- Zone 0: continuous explosive atmosphere (only Ex ia)
- Zone 1: occasional (Ex ia, Ex d, Ex e)
- Zone 2: unlikely under normal operation

**Equipment Protection Levels (EPL):** Ga (highest), Gb, Gc for gas; Da, Db, Dc for dust

## Recommended Technologies for Oil & Gas

| Technology | Best For | Notes |
|---|---|---|
| **Guided Wave Radar (GWR)** | Liquids, interface, hydrocarbons | Ex ia, high accuracy, TDR-based |
| **Non-Contact Radar** | Tanks, separators | 26/80 GHz, Ex ia/d |
| **Magnetostrictive** | Clean liquids, custody transfer | High accuracy |
| **Differential Pressure** | Closed tanks, boilers | Simple, Ex d/ia |
| **Capacitance/RF Admittance** | Interface, slurries | Good for emulsions |
| **Float/Servo** | Custody transfer, crude | Mechanical, reliable |

## Leading Vendors (IECEx certified)

- **Emerson (Rosemount)** — 5300/5400 GWR, 5900S radar
- **Endress+Hauser** — Levelflex (GWR), Micropilot (radar)
- **VEGA** — VEGAFLEX, VEGAPULS
- **Honeywell** — SmartLine, Enraf (servo)
- **ABB** — LMT, LLT series
- **Siemens** — SITRANS LG/LR
- **KROHNE** — OPTIFLEX (GWR), OPTIWAVE (radar)
- **Magnetrol** — Eclipse GWR, Guided Wave

## Selection Checklist for Oil & Gas

1. **Medium**: crude, condensate, LPG, glycol, produced water?
2. **Process conditions**: pressure (up to 400+ bar), temp, dielectric constant
3. **Vessel type**: atmospheric storage, pressure vessel, separator, wellhead
4. **Zone & gas group**: typically Zone 1, IIA/IIB (methane, H₂S)
5. **Output**: 4–20 mA HART, Foundation Fieldbus, Profibus PA
6. **Certifications needed**: IECEx + ATEX + regional (INMETRO, EAC, etc.)
7. **Ingress protection**: IP66/IP67/IP68
8. **SIL rating** if safety loop (SIL 2/3)

## Typical Spec Example

> Guided wave radar transmitter, 24 VDC loop-powered, 4–20 mA + HART 7, IECEx Ex ia IIC T6 Ga / Ex tb IIIC T80°C Db IP66, SIL 2 capable, 316L SS housing, -40 to +150°C process, up to 100 bar, flange mount 3" 150# RF, probe: 316L / PTFE.

If you can share the specific application (tank type, medium, zone, output protocol), I can narrow down to specific model recommendations.
