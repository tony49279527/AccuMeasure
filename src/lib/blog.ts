export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  keywords: string[];
  relatedProductIds: string[];
  intro: string;
  sections: {
    heading: string;
    body: string[];
    bullets?: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-radar-level-sensor",
    title: "How to Choose a Radar Level Sensor for Water Tanks and Silos",
    description:
      "A practical B2B guide to selecting radar level sensors by range, beam angle, tank geometry, media condition, output signal, certification, and installation constraints.",
    category: "Level Measurement",
    datePublished: "2026-07-04",
    dateModified: "2026-07-04",
    readTime: "8 min read",
    keywords: [
      "radar level sensor",
      "level sensor manufacturer",
      "80GHz radar level transmitter",
      "water tank level sensor",
      "silo level measurement",
    ],
    relatedProductIds: ["2", "3", "1"],
    intro:
      "Radar level sensors are often selected when a tank has vapor, dust, foam, high temperature, or internal structures that make contact measurement unreliable. For overseas buyers, the right choice depends less on the catalog headline and more on the tank geometry, medium behavior, installation point, and output standard used by the control system.",
    sections: [
      {
        heading: "Start with the real measuring range",
        body: [
          "The first specification is not only tank height. Confirm the highest liquid or solid level, the lowest operating level, the nozzle height, and the sensor dead zone. A transmitter listed for 80 m range may still need a minimum blanking distance at the top of the tank.",
          "For water tanks, 0.3-20 m is common. For cement, lime, grain, and plastic pellet silos, 20-80 m is more likely. Add at least 20% margin so the sensor is not working at its limit during abnormal operating conditions.",
        ],
        bullets: [
          "Water storage tanks: prioritize stable echo and IP67 outdoor protection.",
          "Chemical tanks: confirm process temperature, vapor, and wetted housing material.",
          "Powder silos: prioritize narrow beam angle and strong false-echo suppression.",
        ],
      },
      {
        heading: "Check beam angle and installation space",
        body: [
          "80GHz FMCW radar produces a narrower beam than older low-frequency radar. That matters in tall or narrow vessels because the beam is less likely to hit ladders, agitators, bracing, or tank walls. In practical purchasing terms, a narrower beam can reduce commissioning time and false level jumps.",
          "If the nozzle is close to the wall or the tank has many internal obstructions, send a simple drawing before ordering. A good supplier should confirm the mounting position instead of only quoting the lowest price.",
        ],
      },
      {
        heading: "Match outputs to the control system",
        body: [
          "Most industrial projects still use 4-20mA because it is simple, robust, and compatible with PLC and DCS analog input cards. HART is useful when engineers need remote diagnostics. RS485 Modbus is useful for multi-point monitoring or SCADA networks.",
          "For retrofit projects, ask whether the existing panel is 2-wire loop-powered or 4-wire powered. This small detail affects wiring, power supply, and commissioning.",
        ],
      },
      {
        heading: "Do not ignore certification and documentation",
        body: [
          "For oil, gas, solvent, or dust explosion environments, check ATEX or IECEx marking before price comparison. For general water and utility projects, CE, RoHS, ISO 9001 factory control, calibration certificate, and serial-number traceability are usually the core documents buyers request.",
          "A professional China level sensor manufacturer should provide a datasheet, wiring diagram, calibration certificate, and installation guide with the shipment.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is 80GHz radar better than ultrasonic level measurement?",
        answer:
          "80GHz radar is usually better for vapor, dust, foam, high temperature, and long measuring ranges. Ultrasonic sensors are more economical for clean water tanks and simple chemical storage where vapor and foam are limited.",
      },
      {
        question: "What information should I send before buying a radar level transmitter?",
        answer:
          "Send tank height, medium, temperature, pressure, nozzle size, mounting location, required output signal, hazardous area requirement, and any internal structures such as agitators or ladders.",
      },
      {
        question: "Can radar level sensors measure solids in silos?",
        answer:
          "Yes. 80GHz radar is commonly used for cement, lime, grain, plastic pellets, and powders. The supplier should check beam angle, dust level, and installation point before confirming the model.",
      },
    ],
  },
  {
    slug: "80ghz-vs-26ghz-radar-level-sensor",
    title: "80GHz vs 26GHz Radar Level Sensors: Practical Differences for Buyers",
    description:
      "Compare 80GHz and 26GHz radar level transmitters by beam angle, accuracy, dust tolerance, installation constraints, and total project cost.",
    category: "Level Measurement",
    datePublished: "2026-07-04",
    dateModified: "2026-07-04",
    readTime: "7 min read",
    keywords: [
      "80GHz radar level sensor",
      "26GHz radar level transmitter",
      "FMCW radar level measurement",
      "radar level transmitter supplier",
    ],
    relatedProductIds: ["2", "1", "3"],
    intro:
      "Many buyers compare 80GHz and 26GHz radar level transmitters only by unit price. That misses the real engineering tradeoff. The best choice depends on tank shape, nozzle location, internal obstructions, media surface, and how much commissioning time the project can tolerate.",
    sections: [
      {
        heading: "Beam angle is the most visible difference",
        body: [
          "80GHz radar typically has a narrower beam angle, which makes it easier to aim at the product surface and avoid tank walls or internal structures. This is valuable in narrow tanks, tall silos, and installations with agitators or ladders.",
          "26GHz radar can still work well in open vessels, simple storage tanks, and applications where the mounting position is clean and unobstructed. The issue is not whether 26GHz works; the issue is how much installation margin the site gives you.",
        ],
      },
      {
        heading: "Accuracy and small targets",
        body: [
          "A well-designed 80GHz FMCW transmitter can achieve millimeter-level accuracy and stronger echo resolution. This helps when the measured surface is turbulent or the target area is small.",
          "For inventory monitoring where a few centimeters of error is acceptable, 26GHz may be enough. For custody-like monitoring, batch control, or high-value chemical storage, 80GHz gives better measurement confidence.",
        ],
      },
      {
        heading: "Dust, vapor, and buildup",
        body: [
          "Powder silos and dusty filling operations are common reasons to choose 80GHz. The stronger focusing makes false echoes easier to manage. Vapor and condensation still need careful antenna and installation design, especially in chemical tanks.",
          "No radar sensor is immune to bad installation. Avoid mounting directly above inlet flow, near ladders, or too close to tank walls unless the supplier has reviewed the drawing.",
        ],
      },
      {
        heading: "The real cost is not only the sensor price",
        body: [
          "A cheaper transmitter can become expensive if it requires repeated site visits, false echo tuning, or replacement after commissioning. For export projects, the cost of troubleshooting across time zones can exceed the price difference between 26GHz and 80GHz.",
          "For new projects with unknown site conditions, 80GHz often reduces risk. For simple, repeat installations with clean geometry, 26GHz or ultrasonic may still be the better budget choice.",
        ],
      },
    ],
    faqs: [
      {
        question: "When should I choose 80GHz radar instead of 26GHz?",
        answer:
          "Choose 80GHz when the tank is narrow or tall, the nozzle is close to the wall, the medium creates dust or vapor, or the project requires higher accuracy and easier commissioning.",
      },
      {
        question: "Is 26GHz radar obsolete?",
        answer:
          "No. 26GHz radar can still be suitable for simple tanks with open installation space and moderate accuracy requirements. The best choice depends on the application, not only frequency.",
      },
      {
        question: "Does 80GHz always cost more?",
        answer:
          "The unit price is often higher, but total project cost can be lower if it reduces commissioning time, false readings, or site troubleshooting.",
      },
    ],
  },
  {
    slug: "electromagnetic-vs-ultrasonic-flow-meter",
    title: "Electromagnetic vs Ultrasonic Flow Meter: Which One Fits Water Treatment?",
    description:
      "A purchasing guide for water treatment projects comparing electromagnetic and ultrasonic flow meters by fluid conductivity, pipe work, accuracy, maintenance, and installation cost.",
    category: "Flow Measurement",
    datePublished: "2026-07-04",
    dateModified: "2026-07-04",
    readTime: "9 min read",
    keywords: [
      "electromagnetic flow meter",
      "ultrasonic flow meter",
      "flow meter supplier",
      "water treatment flow measurement",
      "China flow meter manufacturer",
    ],
    relatedProductIds: ["5", "6", "2"],
    intro:
      "Water treatment projects often compare electromagnetic and ultrasonic flow meters because both can measure large pipes without moving parts. The right choice depends on conductivity, installation constraints, pipe access, expected accuracy, and whether shutdown is acceptable.",
    sections: [
      {
        heading: "Use electromagnetic flow meters for conductive liquids",
        body: [
          "Electromagnetic flow meters are the standard choice for conductive liquids such as raw water, wastewater, sludge, chemical dosing water, and many process liquids. They measure velocity using Faraday's law, so there are no moving parts and pressure loss is very low.",
          "They are usually preferred when the project needs stable accuracy, permanent installation, and integration with PLC or SCADA through 4-20mA, pulse, RS485, or industrial Ethernet.",
        ],
        bullets: [
          "Best for conductive water and wastewater.",
          "Good for permanent plant instrumentation.",
          "Requires pipe cutting or flanged installation.",
        ],
      },
      {
        heading: "Use clamp-on ultrasonic when shutdown is difficult",
        body: [
          "Clamp-on ultrasonic flow meters mount outside the pipe. That makes them attractive for retrofit projects, temporary audits, energy monitoring, and sites where pipe cutting is expensive or impossible.",
          "The tradeoff is that accuracy depends strongly on pipe material, liner condition, straight pipe length, installation skill, and whether the pipe is full. For old pipes with scaling or unknown liners, field testing is recommended.",
        ],
        bullets: [
          "Best for retrofit or temporary measurement.",
          "No pipe cutting and no process shutdown.",
          "Needs suitable pipe condition and careful sensor spacing.",
        ],
      },
      {
        heading: "Compare lifecycle cost, not only purchase price",
        body: [
          "Electromagnetic meters usually cost more to install because they require pipe work, but they provide stable long-term measurement once installed. Ultrasonic meters can reduce installation cost but may need more site adjustment.",
          "For a new water treatment plant, electromagnetic meters are usually the safer main process choice. For existing lines, temporary checks, or hard-to-stop pipes, clamp-on ultrasonic meters can be the faster option.",
        ],
      },
      {
        heading: "What to specify in an RFQ",
        body: [
          "A good RFQ should include pipe size, pipe material, liner, fluid conductivity, temperature, pressure, flow range, required output signal, installation environment, and whether the pipe can be shut down.",
          "If you are buying from a China flow meter supplier, ask for a calibration certificate, wiring diagram, English manual, and packing suitable for export shipment.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can an electromagnetic flow meter measure pure water?",
        answer:
          "It depends on conductivity. Standard electromagnetic flow meters require conductive liquid, typically above the meter's minimum conductivity threshold. Very low-conductivity deionized water may require another technology.",
      },
      {
        question: "Is clamp-on ultrasonic accurate enough for billing?",
        answer:
          "Clamp-on ultrasonic can be accurate when pipe condition and installation are ideal, but permanent billing or custody-like applications usually require careful calibration and project-specific verification.",
      },
      {
        question: "Which flow meter is better for wastewater?",
        answer:
          "Electromagnetic flow meters are usually preferred for wastewater because the liquid is conductive and the meter has no moving parts. Choose suitable liner and electrode materials for corrosion and abrasion.",
      },
    ],
  },
  {
    slug: "how-to-choose-level-sensor-supplier-china",
    title: "How to Choose a Reliable Level Sensor Supplier in China: A Buyer's Checklist",
    description:
      "A practical due-diligence checklist for sourcing level sensors from China: certifications to verify, factory capability questions, sample testing, MOQ and payment terms, and red flags to avoid.",
    category: "Procurement Guide",
    datePublished: "2026-07-05",
    dateModified: "2026-07-05",
    readTime: "9 min read",
    keywords: [
      "level sensor supplier China",
      "level sensor manufacturer OEM",
      "ISO 9001 certified sensor supplier",
      "China instrument factory audit",
      "sourcing measurement instruments",
    ],
    relatedProductIds: ["1", "2", "3", "4"],
    intro:
      "Sourcing level sensors from China can cut instrument cost by 40-70% versus European brands, but the savings only materialize if the supplier ships consistent quality. This checklist covers what experienced buyers verify before placing a first order: certifications, factory capability, sample testing, commercial terms, and the warning signs that predict problems.",
    sections: [
      {
        heading: "Verify certifications, not just logos",
        body: [
          "Many websites display ISO 9001, CE, and ATEX logos without holding current certificates. Ask for the certificate number, issuing body, and validity date, then verify directly with the issuer. SGS, TÜV Rheinland, DEKRA, and Intertek all provide online or email verification of certificates they issue.",
          "For hazardous-area products, the ATEX or IECEx certificate must name the specific product series. A factory-level ISO 9001 certificate does not make an individual radar transmitter explosion-proof.",
        ],
        bullets: [
          "ISO 9001: confirms a working quality management system at the factory.",
          "CE (EMC + LVD): required for EU import; check the declaration of conformity.",
          "ATEX / IECEx: must list the exact product model and protection class, e.g. Ex d IIC T6.",
          "Calibration certificates: every shipped unit should include one with traceable references.",
        ],
      },
      {
        heading: "Ask capability questions a trading company cannot answer",
        body: [
          "Trading companies resell factory stock with a margin but cannot control quality or customize firmware. Five minutes of technical questions usually reveals which one you are talking to: ask about the aging test procedure, calibration equipment models, PCB sourcing, and whether output configuration is done in-house.",
          "A real manufacturer can provide a video factory tour on request, showing the assembly line, calibration bench, and aging-test racks. Video verification costs nothing and filters out most misrepresentation.",
        ],
        bullets: [
          "Ask: 'What is your aging test duration and temperature profile?' — a factory answers immediately.",
          "Ask: 'Can you configure a custom 4-20mA output curve?' — requires in-house firmware capability.",
          "Ask for a live or recorded video tour before the first order.",
        ],
      },
      {
        heading: "Test samples the way your project will use them",
        body: [
          "Order 1-2 samples at unit price before committing to MOQ. Reputable suppliers refund sample cost against the first bulk order. Test the sample against your actual medium, temperature, and mounting position — not just a bench check.",
          "Record accuracy at 3-5 level points across the range, check output signal stability over 48 hours, and inspect housing sealing. If a supplier resists selling samples or insists on MOQ-only, treat it as a red flag.",
        ],
      },
      {
        heading: "Understand the commercial terms that protect you",
        body: [
          "Standard terms from established instrument factories: T/T with 30% deposit and 70% before shipment, or an L/C at sight for larger orders. Alibaba Trade Assurance adds a layer of dispute protection for platform orders. Typical MOQ for economical level sensors is 50 units; radar transmitters often quote MOQ 10 or lower because of higher unit value.",
          "Lead time of 15-20 days for standard models is normal. Quotes promising 3-5 day production for configured instruments usually mean stock of unknown age or specification.",
        ],
        bullets: [
          "Payment: 30/70 T/T, L/C at sight, or platform trade assurance.",
          "Incoterms: FOB (your forwarder) or CIF (supplier arranges freight) per Incoterms 2020.",
          "Warranty: 18-24 months is the credible range for industrial sensors.",
        ],
      },
      {
        heading: "Red flags that predict quality problems",
        body: [
          "Price far below the market band usually means reused housings, uncalibrated cores, or skipped burn-in testing. A capacitive level sensor quoted under $20 or an 80GHz radar under $300 should trigger scrutiny rather than excitement.",
          "Other warning signs: no physical address published, refusal of video calls, certificates with mismatched company names, and datasheets copied from other brands with the logo swapped.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a typical MOQ for level sensors from a China factory?",
        answer:
          "Economical capacitive and ultrasonic level sensors commonly have an MOQ of 50 units for bulk pricing. Higher-value instruments such as 80GHz radar transmitters are often available at MOQ 5-10, and most factories sell 1-2 samples at unit price before a bulk order.",
      },
      {
        question: "How do I verify a Chinese supplier's ISO 9001 certificate?",
        answer:
          "Ask for the certificate number and issuing body, then verify through the issuer's official channel — SGS, TÜV, DEKRA, and Intertek all support verification requests. Also check that the certificate scope covers design and manufacturing of measurement instruments, not an unrelated activity.",
      },
      {
        question: "Should I buy from a manufacturer or a trading company?",
        answer:
          "For configured industrial instruments, a manufacturer is usually safer: it controls calibration, firmware, and quality processes, and can support OEM branding. Trading companies can be acceptable for standard commodity items, but confirm who actually handles warranty claims.",
      },
      {
        question: "What documents should ship with industrial level sensors?",
        answer:
          "Each shipment should include a datasheet, wiring diagram, installation guide, and an individual calibration certificate per unit with serial-number traceability. For EU projects, add the CE declaration of conformity; for hazardous areas, the ATEX/IECEx certificate.",
      },
    ],
  },
  {
    slug: "pressure-transmitter-selection-guide",
    title: "Pressure Transmitter Selection Guide: Range, Accuracy, Output, and Certification",
    description:
      "How to specify an industrial pressure transmitter: choosing range with overpressure margin, accuracy class, output signal, process connection, wetted materials, and hazardous-area certification.",
    category: "Pressure Measurement",
    datePublished: "2026-07-05",
    dateModified: "2026-07-05",
    readTime: "8 min read",
    keywords: [
      "pressure transmitter selection",
      "piezoresistive pressure transmitter",
      "4-20mA pressure sensor",
      "pressure transmitter manufacturer",
      "ATEX pressure transmitter",
    ],
    relatedProductIds: ["8", "9"],
    intro:
      "A pressure transmitter is one of the most frequently ordered industrial instruments, and also one of the most frequently mis-specified. Range chosen too tight fails on water hammer; accuracy specified too loose fails acceptance testing. This guide walks through the six decisions that define a correct specification.",
    sections: [
      {
        heading: "Choose range with overpressure margin, not nameplate pressure",
        body: [
          "Size the transmitter so normal operating pressure sits between 30% and 70% of full scale. This preserves accuracy at the working point and leaves headroom for transients. Water hammer in pump systems can spike to 3-5x operating pressure for milliseconds — check the transmitter's overpressure rating, not just its range.",
          "For hydraulic systems running 20 MPa, a 0-40 MPa transmitter with 2x overpressure protection is a safer choice than a 0-25 MPa unit at the edge of its band.",
        ],
        bullets: [
          "Operating point: keep within 30-70% of the selected range.",
          "Overpressure rating: at least 2x full scale for pump and hydraulic circuits.",
          "Burst pressure: verify separately for safety-critical installations.",
        ],
      },
      {
        heading: "Match accuracy class to the application",
        body: [
          "0.5% FS accuracy covers most monitoring and control tasks at the lowest cost. 0.25% FS suits process control loops where the PLC acts on small pressure changes. 0.1% FS is for test benches, calibration references, and custody-adjacent measurement — paying for it on a simple tank monitoring point is wasted budget.",
          "Also check long-term stability (percent of FS per year) and the compensated temperature range. A transmitter accurate at 25°C but uncompensated at your process temperature will drift in the field.",
        ],
      },
      {
        heading: "Output signal and wiring",
        body: [
          "4-20mA 2-wire loop-powered remains the default for industrial installations: simple, noise-resistant, and detects wire breaks (current drops below 4mA). RS485 Modbus suits multi-point monitoring on one cable run. 0-10V is common in HVAC but degrades over long cable distances.",
          "Confirm supply voltage range (12-36V DC typical) and whether your panel provides loop power or the transmitter needs a separate supply.",
        ],
      },
      {
        heading: "Process connection and wetted materials",
        body: [
          "G1/4 and G1/2 threads dominate general industry; NPT is standard for North American projects — confirm which one your fitting stock uses before ordering 200 units with the wrong thread. For corrosive media, specify 316L stainless steel wetted parts or a diaphragm seal; standard 304 housings handle water, air, and hydraulic oil.",
          "For viscous, crystallizing, or sanitary media, a flush diaphragm connection prevents clogging of the pressure port.",
        ],
      },
      {
        heading: "Certification for the installation environment",
        body: [
          "For oil and gas, chemical, and dust-explosion environments, specify ATEX or IECEx explosion-proof certification (e.g. Ex d IIC T6) and verify the certificate names the transmitter model. For outdoor installations, IP65 is the minimum; IP67 where hose-down or temporary flooding is possible.",
          "Every unit should ship with an individual calibration certificate traceable to reference standards — this is standard practice from ISO 9001 certified factories and required documentation for many EPC project handovers.",
        ],
      },
    ],
    faqs: [
      {
        question: "What accuracy do I need for a pressure transmitter?",
        answer:
          "0.5% FS is sufficient for general monitoring, 0.25% FS for process control loops, and 0.1% FS for test benches and reference measurement. Higher accuracy costs more and adds no value if the application only needs trend monitoring.",
      },
      {
        question: "Why does my pressure transmitter fail early in a pump system?",
        answer:
          "The most common cause is water hammer: pressure spikes of 3-5x operating pressure when valves close quickly. Select a transmitter with at least 2x overpressure rating, keep the operating point below 70% of full scale, or add a pressure snubber.",
      },
      {
        question: "What is the difference between 2-wire and 4-wire pressure transmitters?",
        answer:
          "A 2-wire transmitter is loop-powered: the same pair of wires carries both power and the 4-20mA signal, which simplifies wiring. A 4-wire unit has separate power and signal lines, used when the output is voltage or when the sensor needs more power than a loop provides.",
      },
      {
        question: "Can one pressure transmitter measure 100 MPa?",
        answer:
          "Yes. High-pressure piezoresistive transmitters cover ranges up to 100 MPa for hydraulic, test-bench, and high-pressure processing applications. Verify the overpressure and burst ratings, and use appropriate high-pressure fittings rated for the same class.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
