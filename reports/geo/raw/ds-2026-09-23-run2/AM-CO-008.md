# AM-CO-008 — compliance / iot

Query: FCC compliant IoT level sensor for US tank monitoring

Engine: deepseek-chat (no web browsing) (model: deepseek-flash)

---

# FCC-Compliant IoT Level Sensor for US Tank Monitoring

Here's a breakdown of what you need to specify, source, or build for a US-market tank level sensor that must pass FCC certification.

## 1. Regulatory Framework (FCC)

| Requirement | Rule | Notes |
|---|---|---|
| Unlicensed radio operation | **FCC Part 15.247** (2.4 GHz DSSS/FHSS), **15.249** (902–928 MHz), or **15.231** (periodic) | Most tank sensors use 902–928 MHz (LoRa) or 2.4 GHz |
| LPWAN (LoRaWAN/NB-IoT) | Part 15.247 for LoRa; **Part 22/24/27** for cellular | LoRa US915 is most common |
| RF exposure | **FCC Part 1.1307 / 2.1091** | MPE evaluation if >20 cm from body |
| EMC | **Part 15 Subpart B** | Unintentional radiator emissions |
| Certification path | **Certification** (not SDoC) via TCB | Requires FCC ID |

**Action:** Budget **$3k–8k** and 4–8 weeks per radio module for FCC ID testing (less if you use a pre-certified module).

## 2. Recommended Radio Options

| Technology | Band | Range | FCC ID path | Best for |
|---|---|---|---|---|
| **LoRa (Semtech SX1262)** | 902–928 MHz | 1–15 km | Certify as module or end product | Remote/outdoor tanks |
| **NB-IoT / LTE-M** | Licensed cellular | Cell coverage | Carrier + FCC | No gateway needed |
| **802.15.4 / Zigbee / Thread** | 2.4 GHz | 10–100 m | Module cert | Indoor/home tanks |
| **BLE** | 2.4 GHz | 10–50 m | Module cert | Setup + short-range |
| **Wi-Fi (ESP32)** | 2.4 GHz | 30–100 m | Module has FCC ID | Sites with Wi-Fi |

**Recommendation for most US tank deployments:** **LoRaWAN US915** with a certified module (e.g., Murata CMWX1ZZABZ, Semtech SX1262 + STM32, or RAK3172). Use the module's existing FCC ID if you don't modify the antenna/RF layout → **Class II Permissive Change** or reuse grant.

## 3. Sensing Technologies

| Method | Best for | Pros | Cons |
|---|---|---|---|
| **Ultrasonic (non-contact, top-down)** | Water, chemicals, fuel | No wetted parts, easy retrofit | Condensation, foam issues |
| **Pressure/DP transmitter** | Sealed tanks, fuel | Accurate, mature | Wetted, needs vent |
| **Capacitive** | Fuels, oils | No moving parts | Dielectric-dependent |
| **Float / reed switch** | Simple hi/lo alarms | Cheap, reliable | Discrete only |
| **Radar (60/77 GHz)** | Harsh chemicals | Robust | Cost, FCC complexity |
| **Time-of-Flight (VL53L1X etc.)** | Small tanks | Cheap | Short range |

**Most common IoT tank sensor:** top-mounted **ultrasonic** or **submersible pressure transducer** with a LoRa or NB-IoT uplink.

## 4. Reference Architecture

```
[Tank] 
  └─ Ultrasonic / Pressure sensor
       └─ MCU (STM32L0/L4, nRF52, or ESP32)
            ├─ LoRa SX1262 (US915) ──► LoRaWAN Gateway ──► Network Server ──► Cloud
            ├─ NB-IoT modem (SIM7020/7000) ──► Carrier ──► Cloud
            └─ BLE for provisioning
```

**Power:** 3.6 V Li-SOCl2 (AA or D) — 5–10 year life typical with 15-min to 1-hour uplinks.

**Enclosure:** IP67/IP68, UV-stable, -40 to +85 °C, ATEX/IECEx if flammable liquids (that's a separate NRTL/UL certification on top of FCC).

## 5. FCC Certification Steps

1. **Select a pre-certified radio module** (fastest path). Copy its FCC ID and grant conditions.
2. **Design antenna** — must match module's certified antenna type, or you trigger a **Class II Permissive Change**.
3. **Pre-scan** in-house or at a lab for spurious emissions (Part 15.209 limits).
4. **Test at an FCC-recognized lab:**
   - Conducted/radiated emissions
   - Occupied bandwidth, power spectral density
   - Band-edge, spurious
   - RF exposure (MPE)
5. **Submit via TCB** (Telecommunication Certification Body) with FCC Form 731.
6. **Label** with FCC ID + compliance statement (Part 15.19).
7. **User manual** must include Part 15.21 and 15.105 statements.

**Typical cost:** $5k–15k total for a LoRa end-product using a certified module. $15k–30k if certifying the radio from scratch.

## 6. Combined Certifications to Plan For

- **FCC** (radio) — mandatory
- **UL 61010 / UL 913 / ATEX** — if hazardous location
- **NSF/ANSI 61** — potable water wetted parts
- **EPA SPCC / state tank regs** — for fuel/chemical compliance
- **CARB / state** — if fuel vapor sensing

## 7. Product Examples to Study

- **Keller ARC / Submersible** — pressure-based, LoRa
- **Dunraven / TankScan** — ultrasonic, cellular
- **Anova / Tank Monitor** — cellular + BLE
- **Monnit / ALTA** — LoRa + various sensors (FCC ID: ZG2-*)
- **Sensata / TE** — OEM sensors

## 8. Quick Decision Guide

| If you need… | Choose |
|---|---|
| Longest battery life, private network | LoRaWAN US915 + SX1262 |
| No gateway, plug-and-play | NB-IoT/LTE-M (e.g., Sequans, Quectel BG95) |
| Home/consumer | BLE + Wi-Fi (ESP32-C6) |
| Hazardous area | Intrinsically safe LoRa or NB-IoT |
| Fastest FCC path | Pre-certified module + simple antenna |

---

**Want me to go deeper on any part?** I can:
- Recommend specific **FCC-certified LoRa modules** with grant IDs
- Draft a **Part 15.247 test plan** or **user manual statements**
- Compare **ultrasonic vs. pressure** sensing for your specific tank
- Estimate **BOM cost** for a 1k-unit run
- Outline the **LoRaWAN payload/cloud** side

Tell me: tank contents (water/fuel/chemical), size, indoor/outdoor, and whether you want a gateway-based or cellular design.
