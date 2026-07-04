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
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
