/** Buyer FAQs per product model. Drafted from published specifications only;
 *  no certifications, customer cases, or field-performance claims are included.
 *  Answers point buyers to confirm project terms in the quotation. */
export const productFaqs: Record<string, { question: string; answer: string }[]> = {
  "AM-CL100": [
    { question: "What level range and accuracy does the AM-CL100 offer?", answer: "It covers 0-6m with ±1% FS accuracy and provides 4-20mA or RS485 output. Published specs are selection inputs; confirm in the project quotation." },
    { question: "Which tank applications suit this capacitive level sensor?", answer: "It is intended for oil, water, chemical reactors, fire protection, hydraulic and industrial tanks. The tagline describes economical level measurement for these media." },
    { question: "What protection rating is published for the AM-CL100?", answer: "IP65 and IP68 are published protections. Suitability depends on your installation; the controlled datasheet and project quotation govern." },
    { question: "What are the ordering terms for the AM-CL100?", answer: "Published MOQ is 50 units, lead time 15-20 days, and price from 35. Confirm these in the project quotation." },
  ],
  "AM-RL80": [
    { question: "What measurement performance does the AM-RL80 publish?", answer: "It uses 80GHz FMCW non-contact radar with ±2mm accuracy over 0-80m. These published values should be confirmed in the project quotation." },
    { question: "Which applications fit the AM-RL80 radar transmitter?", answer: "Input applications include crude oil storage, chemical tanks, solids silos, food and beverage, and LPG/LNG. Suitability depends on your specific process conditions." },
    { question: "What protection does the AM-RL80 publish?", answer: "IP67 is published, and the project document scope must confirm final protection requirements. The controlled datasheet governs." },
    { question: "What are the procurement terms for the AM-RL80?", answer: "Published MOQ is 10 units, lead time 20-25 days, and price from 380. Confirm in the project quotation." },
  ],
  "AM-UL20": [
    { question: "What range and accuracy does the AM-UL20 provide?", answer: "The ultrasonic sensor covers 0-20m with ±1% FS accuracy and 4-20mA or RS485 output. Confirm published specs in the project quotation." },
    { question: "Is the AM-UL20 suitable for chemical storage?", answer: "Chemical storage is a listed application, and the PVDF material supports non-contact sensing. Verify media compatibility in the project quotation." },
    { question: "What material is used for the AM-UL20?", answer: "PVDF is the published material. The controlled datasheet should be reviewed for your installation conditions." },
    { question: "What are the ordering terms for the AM-UL20?", answer: "Published MOQ is 50 units, lead time 15-20 days, and price from 55. Confirm these in the project quotation." },
  ],
  "AM-WL50": [
    { question: "How does the AM-WL50 connect and report data?", answer: "It uses WiFi 2.4GHz with iOS, Android or WeChat app monitoring, covering 0-5m. Confirm connectivity needs in the project quotation." },
    { question: "Which applications does the AM-WL50 target?", answer: "Input applications are residential tanks, rainwater harvesting and irrigation. It is positioned as a smart level sensor for these settings." },
    { question: "What is the AM-WL50 battery life?", answer: "Published battery life is 6 months. Actual life depends on use; the controlled datasheet and quotation govern." },
    { question: "What are the procurement terms for the AM-WL50?", answer: "Published MOQ is 100 units, lead time 25-30 days, and price from 25. Confirm in the project quotation." },
  ],
  "AM-EMF100": [
    { question: "What sizes and accuracy does the AM-EMF100 cover?", answer: "It covers DN6-DN600 with ±0.5% FS accuracy and PTFE, PFA or rubber liner options. Confirm selections in the project quotation." },
    { question: "Which applications suit the electromagnetic flow meter?", answer: "Listed applications are water treatment, process water, chemicals and slurries. Liner choice should match your media; confirm in the project quotation." },
    { question: "What protection ratings are published for the AM-EMF100?", answer: "IP65 and IP68 are published protections. The controlled datasheet and project document scope govern final selection." },
    { question: "What are the ordering terms for the AM-EMF100?", answer: "Published MOQ is 5 units, lead time 15-20 days, and price from 280. Confirm these in the project quotation." },
  ],
  "AM-UF200": [
    { question: "How is the AM-UF200 installed?", answer: "It is a clamp-on, non-invasive ultrasonic flow meter, so no pipe cutting is required. Confirm pipe and sensor fit in the project quotation." },
    { question: "What sizes and accuracy does the AM-UF200 offer?", answer: "Published sizes are DN15-DN1000 with ±1% FS accuracy, available as portable or fixed. Confirm in the project quotation." },
    { question: "Which applications fit the AM-UF200?", answer: "Listed uses are water systems, HVAC and retrofit work. Suitability depends on your pipe and fluid conditions." },
    { question: "What are the procurement terms for the AM-UF200?", answer: "Published MOQ is 5 units, lead time 15-20 days, and price from 280. Confirm in the project quotation." },
  ],
  "AM-MF50": [
    { question: "What flow range and accuracy does the AM-MF50 provide?", answer: "It covers 0-500 slm with ±1% FS accuracy and under 10ms response. Published specs should be confirmed in the project quotation." },
    { question: "Which gas applications suit the AM-MF50?", answer: "Listed applications are semiconductor, laboratories and specialty gases. Verify gas compatibility in the project quotation." },
    { question: "What material is used in the AM-MF50?", answer: "316L stainless steel is the published material. The controlled datasheet governs final material selection." },
    { question: "What are the ordering terms for the AM-MF50?", answer: "Published MOQ is 5 units, lead time 20-25 days, and price from 550. Confirm these in the project quotation." },
  ],
  "AM-PT300": [
    { question: "What range and accuracy does the AM-PT300 publish?", answer: "It covers 0-100MPa with ±0.25% FS accuracy and 4-20mA or RS485 output. Confirm these published values in the project quotation." },
    { question: "Which applications suit this piezoresistive transmitter?", answer: "Listed applications are hydraulics, general industrial use and pumps. Suitability depends on your process; confirm in the project quotation." },
    { question: "What protection does the AM-PT300 publish?", answer: "IP65 is published, and the project document scope must confirm final protection. The controlled datasheet governs." },
    { question: "What are the procurement terms for the AM-PT300?", answer: "Published MOQ is 100 units, lead time 15-20 days, and price from 25. Confirm in the project quotation." },
  ],
  "AM-PG200": [
    { question: "What does the AM-PG200 replace and what range does it cover?", answer: "It is a digital replacement for mechanical gauges, covering 0-100MPa with ±0.5% FS accuracy on a 4-digit LCD. Confirm in the project quotation." },
    { question: "How long does the AM-PG200 battery last?", answer: "Published battery life is 2 years. Actual life depends on use; the controlled datasheet and quotation govern." },
    { question: "Which applications suit the AM-PG200?", answer: "Listed uses are field gauges, piping and process monitoring. Suitability depends on your installation; confirm in the project quotation." },
    { question: "What are the ordering terms for the AM-PG200?", answer: "Published MOQ is 100 units, lead time 15-20 days, and price from 15. Confirm these in the project quotation." },
  ],
};
