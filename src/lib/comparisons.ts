import { getProductById } from "./products";

export interface ComparisonPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  directAnswer: string;
  productIds: [string, string];
  criteria: {
    label: string;
    first: string;
    second: string;
    buyingGuidance: string;
  }[];
  chooseFirst: string[];
  chooseSecond: string[];
  rfqChecklist: string[];
  faqs: { question: string; answer: string }[];
}

export const comparisonPages: ComparisonPage[] = [
  {
    slug: "capacitive-vs-ultrasonic-level-sensor",
    title: "Capacitive vs Ultrasonic Level Sensor | Buyer Guide",
    description:
      "Compare capacitive and ultrasonic level sensors by media, range, accuracy, price, MOQ, and installation. Choose the right model and request a quote.",
    h1: "Capacitive vs Ultrasonic Level Sensor: B2B Comparison",
    directAnswer:
      "Choose capacitive sensing for compact tanks, oils, chemicals, or bulk solids. Choose ultrasonic for non-contact measurement of clean liquids and longer ranges up to 20m.",
    productIds: ["1", "3"],
    criteria: [
      {
        label: "Measurement principle",
        first: "Contact capacitive probe",
        second: "Non-contact ultrasonic",
        buyingGuidance: "Use non-contact measurement when the sensor must not touch the medium.",
      },
      {
        label: "Published range",
        first: "0.5-6m",
        second: "0.5-20m",
        buyingGuidance: "Ultrasonic covers taller tanks; confirm the top dead zone before ordering.",
      },
      {
        label: "Published accuracy",
        first: "±1% FS",
        second: "±1% FS",
        buyingGuidance: "Both fit general tank monitoring; neither is the first choice for millimeter accuracy.",
      },
      {
        label: "Best-fit media",
        first: "Oil, water, chemicals, and some bulk solids",
        second: "Clean water and compatible chemical liquids",
        buyingGuidance: "Confirm dielectric behavior for capacitive probes and foam or vapor for ultrasonic sensors.",
      },
      {
        label: "Wetted material",
        first: "304/316L SS, PP, or PVDF",
        second: "PVDF transducer",
        buyingGuidance: "Send the medium name and concentration for a compatibility check.",
      },
      {
        label: "Output",
        first: "4-20mA / RS485 Modbus",
        second: "4-20mA / RS485 Modbus",
        buyingGuidance: "Both integrate with common PLC and SCADA systems.",
      },
    ],
    chooseFirst: [
      "The tank is compact and a probe can contact the medium.",
      "You need 304/316L SS, PP, or PVDF wetted-material options.",
      "The application includes oil, chemicals, or compatible bulk solids.",
    ],
    chooseSecond: [
      "The process requires non-contact measurement.",
      "The tank range is above 6m and no more than 20m.",
      "The liquid surface is relatively clean, without heavy foam or dense vapor.",
    ],
    rfqChecklist: [
      "Tank height, nozzle size, and mounting position",
      "Medium name, concentration, temperature, and pressure",
      "Expected foam, vapor, agitation, or buildup",
      "Required output: 4-20mA or RS485 Modbus",
      "Order quantity, target delivery date, and destination country",
    ],
    faqs: [
      {
        question: "Is a capacitive or ultrasonic level sensor better for a water tank?",
        answer:
          "Ultrasonic is usually the simpler non-contact choice for clean water tanks. Capacitive sensing is useful when a probe is acceptable or when material and vessel geometry favor contact measurement.",
      },
      {
        question: "Which sensor handles foam or vapor better?",
        answer:
          "Heavy foam or dense vapor can weaken ultrasonic signals. A capacitive probe may be more stable if buildup is controlled; for demanding non-contact duty, consider 80GHz radar.",
      },
      {
        question: "What are the MOQ and lead time for these models?",
        answer:
          "AM-CL100 and AM-UL20 both have a published bulk MOQ of 50 units and a standard lead time of 15-20 days. One sample unit is available at unit price plus shipping.",
      },
    ],
  },
  {
    slug: "electromagnetic-vs-ultrasonic-flow-meter",
    title: "Electromagnetic vs Ultrasonic Flow Meter | Buyer Guide",
    description:
      "Compare electromagnetic and clamp-on ultrasonic flow meters by fluid, pipe size, accuracy, installation, price, and MOQ. Get a model recommendation.",
    h1: "Electromagnetic vs Ultrasonic Flow Meter: B2B Comparison",
    directAnswer:
      "Choose electromagnetic flow for conductive liquids and ±0.5% FS accuracy. Choose clamp-on ultrasonic when pipe cutting or process shutdown is not acceptable.",
    productIds: ["5", "6"],
    criteria: [
      {
        label: "Measurement principle",
        first: "Full-bore electromagnetic",
        second: "Clamp-on transit-time ultrasonic",
        buyingGuidance: "Fluid conductivity and installation access are the first decision points.",
      },
      {
        label: "Published pipe size",
        first: "DN6-DN600",
        second: "DN15-DN1000",
        buyingGuidance: "Ultrasonic covers larger existing pipes; electromagnetic starts at smaller diameters.",
      },
      {
        label: "Published accuracy",
        first: "±0.5% FS",
        second: "±1% FS",
        buyingGuidance: "Use electromagnetic when the tighter published accuracy is required.",
      },
      {
        label: "Fluid requirement",
        first: "Conductive liquids",
        second: "Liquids that transmit sound, including oils and pure water",
        buyingGuidance: "Do not specify an electromagnetic meter for non-conductive oil or ultrapure water.",
      },
      {
        label: "Installation",
        first: "Inline meter with liner and electrodes",
        second: "External clamp-on sensors",
        buyingGuidance: "Clamp-on ultrasonic avoids pipe cutting and process shutdown.",
      },
      {
        label: "Hazardous-area option",
        first: "ATEX option published",
        second: "No ATEX claim published",
        buyingGuidance: "Confirm the exact area classification before quoting either model.",
      },
    ],
    chooseFirst: [
      "The liquid is conductive water, wastewater, slurry, or a compatible chemical.",
      "You need the published ±0.5% FS accuracy.",
      "An inline installation and process connection are acceptable.",
    ],
    chooseSecond: [
      "The pipe cannot be cut or the process cannot be stopped.",
      "The fluid is non-conductive but can transmit ultrasound.",
      "You need portable surveys or coverage up to DN1000.",
    ],
    rfqChecklist: [
      "Fluid name, conductivity, temperature, and solids content",
      "Pipe OD, wall thickness, material, liner, and nominal DN",
      "Minimum, normal, and maximum flow rate",
      "Available straight-pipe length and installation access",
      "Output, power supply, accuracy, and hazardous-area requirements",
    ],
    faqs: [
      {
        question: "Can an electromagnetic flow meter measure oil?",
        answer:
          "Usually no. Electromagnetic meters require a conductive liquid. For oil or another non-conductive fluid that transmits sound, a clamp-on ultrasonic flow meter is the better starting point.",
      },
      {
        question: "Which flow meter is easier to retrofit?",
        answer:
          "A clamp-on ultrasonic meter is easier to retrofit because its sensors mount outside the pipe, without cutting the pipe or stopping the process.",
      },
      {
        question: "Do the two models have different starting prices or MOQ?",
        answer:
          "AM-EMF100 and AM-UF200 both start at $280 FOB Xi'an, with a published bulk MOQ of 5 units and a standard lead time of 15-20 days.",
      },
    ],
  },
];

export function getComparisonBySlug(slug: string) {
  return comparisonPages.find((page) => page.slug === slug);
}

export function getComparisonProducts(page: ComparisonPage) {
  return page.productIds
    .map((id) => getProductById(id))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));
}

export function getComparisonsForProduct(productId: string) {
  return comparisonPages.filter((page) => page.productIds.includes(productId));
}
