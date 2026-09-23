# AM-CO-002 — compliance / level

Query: ATEX certified radar level transmitter for hazardous area

Engine: deepseek-chat (no web browsing) (model: deepseek-flash)

---

An **ATEX-certified radar level transmitter** is used to measure the level of liquids, slurries, or solids in tanks and vessels located in **hazardous areas** where explosive atmospheres may be present. Here's a comprehensive overview:

---

## What Is ATEX?

**ATEX** (from French: *ATmosphères EXplosibles*) refers to two EU directives:
- **ATEX 2014/34/EU** (Equipment Directive) – covers equipment intended for use in explosive atmospheres.
- **ATEX 1999/92/EC** (Workplace Directive) – covers safety requirements for workers in explosive atmospheres.

Equipment is classified by:
- **Category / Equipment Group**: Category 1, 2, or 3 (Zone 0/1/2 for gas; Zone 20/21/22 for dust)
- **Marking example**: `II 1G Ex ia IIC T6 Ga`
  - **II** = non-mining (surface) industry
  - **1G** = Category 1, Gas
  - **Ex ia** = intrinsically safe
  - **IIC** = gas group (hydrogen, acetylene)
  - **T6** = max surface temperature 85°C
  - **Ga** = Equipment Protection Level (EPL)

---

## How Radar Level Transmitters Work

Two main technologies:
| Type | Frequency | Best For |
|------|-----------|----------|
| **Pulse (Non-Contacting)** | 6–80 GHz | Liquids, solids, aggressive media, hygienic apps |
| **FMCW (Non-Contacting)** | 24–80 GHz | High accuracy, narrow beams, foaming/mixing |
| **Guided Wave Radar (TDR)** | ~1 GHz pulses | Low-dielectric media, steam, turbulence |

Radar is popular in hazardous areas because the sensor is **non-contact** (no moving parts, no ignition risk from contact) and can be made **intrinsically safe** with low power.

---

## Typical ATEX Ratings for Radar Transmitters

Common certifications:
- **Ex ia IIC T6 Ga** – Intrinsically safe, Zone 0
- **Ex ib IIC T4 Gb** – Zone 1
- **Ex d ia IIC T6** – Flameproof + IS
- **Ex ia IIIC T85°C Da/Db** – Dust zones
- **Combined Gas + Dust**: e.g., `II 1G Ex ia IIC T6...Ga / II 1D Ex ia IIIC T85°C...Da`

---

## Key Selection Criteria

1. **Zone classification** (0, 1, 2 for gas; 20, 21, 22 for dust)
2. **Gas group** (IIA, IIB, IIC)
3. **Temperature class** (T1–T6) — must exceed process temp
4. **Process conditions**: pressure, temperature, dielectric constant (εr), foam, turbulence
5. **Output signal**: 4–20 mA HART, Profibus PA, Foundation Fieldbus, Modbus
6. **Barrier/isolator**: required for Ex ia (e.g., associated apparatus)
7. **Antenna material**: PTFE, PP, 316L, Hastelloy — chemically compatible
8. **Ingress protection**: IP66/IP67/IP68

---

## Leading Vendors & Example Models

| Brand | Model | Notes |
|-------|-------|-------|
| **Endress+Hauser** | Micropilot FMR60/62/67 | 80 GHz, Ex ia/d |
| **Emerson (Rosemount)** | 5408, 5400 series | 80 GHz, compact |
| **Siemens** | Sitrans LR110/LR560 | FMCW, Ex ia |
| **VEGA** | VEGAPULS 6X series | 80 GHz, extensive ATEX |
| **ABB** | LST300/LST400 | Loop-powered |
| **Krohne** | OPTIWAVE 1400/7400 | 80 GHz, Ex i |
| **Honeywell** | SmartLine RM | Guided wave |

---

## Installation & Safety Notes

- **Intrinsic safety**: sensor connects via an **Ex ia barrier or isolator** (e.g., Pepperl+Fuchs, MTL) — keep cable capacitance/inductance within limits.
- **Grounding/bonding** required for flameproof (Ex d) installations.
- **Antenna purging** may be needed for dusty or condensing service.
- **Documentation**: EU-Type Examination Certificate, IECEx, and often **ATEX + IECEx + NEC/CEC** for global use.
- Observe **entity parameters** (Ui, Ii, Pi, Ci, Li) between transmitter and barrier.

---

## Alternatives in Hazardous Areas

- **Guided wave radar (TDR)** – better for low-εr or turbulent media
- **Ultrasonic** – cheaper but affected by temperature/pressure
- **Capacitance / RF admittance** – contact type
- **DP (differential pressure)** – widely used but needs impulse lines

---

If you tell me your **specific application** (medium, zone, temperature, pressure, tank size, output protocol), I can recommend a suitable model and ATEX category.
