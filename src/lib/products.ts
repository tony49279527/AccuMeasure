import { Product } from './types';

export const defaultProcurement = {
  packaging: 'Standard export carton with foam padding; custom wooden cases available for large orders.',
  paymentTerms: 'T/T (30% deposit, 70% before shipment), L/C at sight, PayPal for samples, Alibaba Trade Assurance.',
  tradeTerms: 'FOB Xi\'an / CIF / EXW (per Incoterms 2020).',
  shipping: 'DHL/FedEx for samples (3-7 days); sea freight for bulk orders (15-35 days); air freight on request.',
  samples: '1 sample unit available at unit price plus shipping; sample cost refundable on bulk order >= MOQ.',
};

export const products: Product[] = [
  {
    id: '1',
    slug: 'am-cl100-capacitive-level-sensor',
    model: 'AM-CL100',
    name: 'Capacitive Level Sensor',
    category: 'level',
    tagline: 'Economical level measurement for oil, water, and chemical tanks',
    description: 'The AM-CL100 is a reliable capacitive level sensor designed for continuous level measurement of liquid and bulk solids in tanks. With a robust design and economical pricing, it\'s ideal for general industrial applications.',
    image: '/products/am-cl100-v2.jpg',
    gallery: [
      '/products/am-cl100-v2.jpg',
    ],
    priceFrom: 35,
    moq: 50,
    leadTime: '15-20 days',
    keySpecs: [
      { label: 'Range', value: '0-6m' },
      { label: 'Accuracy', value: '±1% FS' },
      { label: 'Output', value: '4-20mA / RS485' },
      { label: 'Protection', value: 'IP65 / IP68' },
    ],
    specifications: [
      {
        group: 'Measurement',
        items: [
          { param: 'Principle', value: 'Capacitive' },
          { param: 'Range', value: '0.5-6m' },
          { param: 'Accuracy', value: '±1% FS' },
          { param: 'Resolution', value: '0.1% FS' },
        ],
      },
      {
        group: 'Output',
        items: [
          { param: 'Signal', value: '4-20mA / RS485 Modbus' },
          { param: 'Supply', value: '12-36V DC' },
        ],
      },
      {
        group: 'Environment',
        items: [
          { param: 'Temperature', value: '-20°C to +80°C' },
          { param: 'Protection', value: 'IP65 / IP68' },
        ],
      },
      {
        group: 'Mechanical',
        items: [
          { param: 'Material', value: '304/316L SS, PP, PVDF' },
          { param: 'Process Connection', value: 'G1", G2", Flange' },
        ],
      },
    ],
    applications: [
      { icon: 'Oil', name: 'Oil Tanks', description: 'Storage tanks for petroleum products and lubricants' },
      { icon: 'Droplets', name: 'Water Tanks', description: 'Water storage for industrial and municipal applications' },
      { icon: 'FlaskConical', name: 'Chemical Reactors', description: 'Chemical processing vessels and reaction tanks' },
      { icon: 'ShieldCheck', name: 'Fire Protection', description: 'Fire water storage and sprinkler system tanks' },
      { icon: 'Fuel', name: 'Hydraulic Tanks', description: 'Hydraulic oil and lubrication system reservoirs' },
      { icon: 'Factory', name: 'Industrial Tanks', description: 'General industrial liquid storage applications' },
    ],
    advantages: [
      { title: 'Economical', description: 'Cost-effective solution for standard level measurement applications' },
      { title: 'Versatile', description: 'Works with a wide range of liquids and some bulk solids' },
      { title: 'Easy Installation', description: 'Simple installation and commissioning' },
      { title: 'Robust', description: 'Durable construction for industrial environments' },
    ],
    competitorComparison: [
      { feature: 'Accuracy', accumeasure: '±1% FS', competitor: '±1% FS' },
      { feature: 'Range', accumeasure: '0-6m', competitor: '0-5m' },
      { feature: 'Price', accumeasure: 'From $35', competitor: 'From $90' },
      { feature: 'MOQ', accumeasure: '50 units', competitor: '100 units' },
    ],
    certifications: ['ISO9001', 'CE'],
    downloads: [
      { name: 'Product Datasheet', type: 'pdf' },
      { name: 'Installation Manual', type: 'pdf' },
    ],
    procurement: defaultProcurement,
    faq: [
      { question: 'What is the measurement range of the AM-CL100 capacitive level sensor?', answer: 'The AM-CL100 measures continuous level from 0.5 to 6 meters with ±1% FS accuracy and 0.1% FS resolution.' },
      { question: 'What wetted materials are available?', answer: '304/316L stainless steel, PP (polypropylene), and PVDF options are available to suit different media compatibility requirements.' },
      { question: 'What output signals does the AM-CL100 support?', answer: 'It supports 4-20mA and RS485 Modbus outputs, powered by 12-36V DC supply.' },
      { question: 'Is it suitable for chemical tanks?', answer: 'Yes, the PVDF and 316L SS wetted parts are compatible with many corrosive chemicals. For highly aggressive media, please confirm chemical compatibility with our engineers.' },
      { question: 'What is the MOQ and lead time?', answer: 'The minimum order quantity is 50 units with a standard lead time of 15-20 days. Sample units are available for evaluation.' },
    ],
    relatedProductIds: ['2', '3', '4'],
  },
  {
    id: '2',
    slug: 'am-rl80-80ghz-radar-level-transmitter',
    model: 'AM-RL80',
    name: '80GHz FMCW Radar Level Transmitter',
    category: 'level',
    tagline: 'Non-contact radar measurement, ±2mm accuracy, 80m range',
    description: 'High-performance 80GHz FMCW radar level transmitter for non-contact continuous level measurement. Perfect for challenging applications with dust, vapor, or high temperatures.',
    image: '/products/am-rl80-v2.jpg',
    gallery: [
      '/products/am-rl80-v2.jpg',
    ],
    priceFrom: 380,
    moq: 10,
    leadTime: '20-25 days',
    keySpecs: [
      { label: 'Frequency', value: '80GHz FMCW' },
      { label: 'Accuracy', value: '±2mm' },
      { label: 'Range', value: '0-80m' },
      { label: 'Protection', value: 'IP67, Ex d IIC T6' },
    ],
    specifications: [
      {
        group: 'Measurement',
        items: [
          { param: 'Principle', value: '80GHz FMCW Radar' },
          { param: 'Range', value: '0.3-80m' },
          { param: 'Accuracy', value: '±2mm' },
          { param: 'Resolution', value: '0.1mm' },
        ],
      },
      {
        group: 'Output',
        items: [
          { param: 'Signal', value: '4-20mA HART / RS485 Modbus' },
          { param: 'Supply', value: '12-36V DC' },
        ],
      },
      {
        group: 'Environment',
        items: [
          { param: 'Process Temp', value: '-40°C to +200°C' },
          { param: 'Protection', value: 'IP67' },
          { param: 'Explosion Proof', value: 'Ex d IIC T6' },
        ],
      },
    ],
    applications: [
      { icon: 'Droplets', name: 'Crude Oil Storage', description: 'Large crude oil tanks and storage terminals' },
      { icon: 'FlaskConical', name: 'Chemical Tanks', description: 'Corrosive chemical storage and processing' },
      { icon: 'Package', name: 'Solids Silos', description: 'Cement, powder, and granular material storage' },
      { icon: 'Beer', name: 'Food & Beverage', description: 'Food-grade liquid storage and processing' },
      { icon: 'Gas', name: 'LPG/LNG', description: 'Pressurized liquefied gas storage' },
    ],
    advantages: [
      { title: 'High Precision', description: '±2mm accuracy even in challenging conditions' },
      { title: 'Non-Contact', description: 'No moving parts, no wear, minimal maintenance' },
      { title: '80GHz Technology', description: 'Narrow beam angle, better focusing' },
      { title: 'Ex-Proof', description: 'Certified for hazardous area installations' },
    ],
    competitorComparison: [
      { feature: 'Accuracy', accumeasure: '±2mm', competitor: '±3mm' },
      { feature: 'Range', accumeasure: '0-80m', competitor: '0-70m' },
      { feature: 'Price', accumeasure: 'From $380', competitor: 'From $1200' },
      { feature: 'Ex-Cert', accumeasure: 'Included', competitor: 'Optional (+$300)' },
    ],
    certifications: ['ISO9001', 'CE', 'ATEX', 'IECEx'],
    downloads: [
      { name: 'Product Datasheet', type: 'pdf' },
      { name: 'Installation Manual', type: 'pdf' },
      { name: '3D Model', type: '3d' },
    ],
    procurement: defaultProcurement,
    faq: [
      { question: 'What makes the 80GHz FMCW radar better than lower-frequency radar?', answer: 'The 80GHz frequency produces a narrower beam angle (about 8°), enabling better focusing in narrow tanks and avoiding false echoes from agitators or internal structures. It achieves ±2mm accuracy up to 80m range.' },
      { question: 'Is the AM-RL80 certified for hazardous areas?', answer: 'Yes, it carries ATEX and IECEx Ex d IIC T6 explosion-proof certification, making it suitable for hazardous area installations including oil and gas, chemical, and LPG/LNG applications.' },
      { question: 'What is the maximum process temperature?', answer: 'The AM-RL80 operates from -40°C to +200°C process temperature with IP67 protection.' },
      { question: 'Does it require contact with the measured medium?', answer: 'No, the AM-RL80 is a non-contact radar level transmitter. It mounts on top of the tank and measures through air, making it ideal for corrosive, abrasive, or high-temperature media.' },
      { question: 'What output protocols are supported?', answer: '4-20mA HART and RS485 Modbus RTU are standard, powered by 12-36V DC.' },
    ],
    relatedProductIds: ['1', '3', '4'],
  },
  {
    id: '3',
    slug: 'am-ul20-ultrasonic-level-sensor',
    model: 'AM-UL20',
    name: 'Ultrasonic Level Sensor',
    category: 'level',
    tagline: 'Non-contact economical level sensing for water and chemicals',
    description: 'Reliable ultrasonic level sensor for non-contact level measurement of liquids in tanks. Easy installation and maintenance, ideal for water treatment and chemical applications.',
    image: '/products/am-ul20-v2.jpg',
    gallery: [
      '/products/am-ul20-v2.jpg',
    ],
    priceFrom: 55,
    moq: 50,
    leadTime: '15-20 days',
    keySpecs: [
      { label: 'Range', value: '0-20m' },
      { label: 'Accuracy', value: '±1% FS' },
      { label: 'Output', value: '4-20mA / RS485' },
      { label: 'Material', value: 'PVDF' },
    ],
    specifications: [
      {
        group: 'Measurement',
        items: [
          { param: 'Principle', value: 'Ultrasonic' },
          { param: 'Range', value: '0.5-20m' },
          { param: 'Accuracy', value: '±1% FS' },
        ],
      },
      {
        group: 'Output',
        items: [
          { param: 'Signal', value: '4-20mA / RS485 Modbus' },
          { param: 'Supply', value: '12-36V DC' },
        ],
      },
      {
        group: 'Environment',
        items: [
          { param: 'Temperature', value: '-20°C to +60°C' },
          { param: 'Protection', value: 'IP65' },
        ],
      },
    ],
    applications: [
      { icon: 'Droplets', name: 'Water Tanks', description: 'Potable water and wastewater storage' },
      { icon: 'Filter', name: 'Water Treatment', description: 'Water treatment plant process tanks' },
      { icon: 'FlaskConical', name: 'Chemical Storage', description: 'Chemical tanks with PVDF compatibility' },
      { icon: 'Trees', name: 'Irrigation Systems', description: 'Agricultural water storage and distribution' },
    ],
    advantages: [
      { title: 'Cost Effective', description: 'Economical non-contact level measurement' },
      { title: 'Easy Setup', description: 'Simple installation and configuration' },
      { title: 'Chemical Resistant', description: 'PVDF transducer for corrosive applications' },
    ],
    competitorComparison: [
      { feature: 'Range', accumeasure: '0-20m', competitor: '0-15m' },
      { feature: 'Price', accumeasure: 'From $55', competitor: 'From $120' },
    ],
    certifications: ['ISO9001', 'CE'],
    downloads: [
      { name: 'Product Datasheet', type: 'pdf' },
    ],
    procurement: defaultProcurement,
    faq: [
      { question: 'What is the measurement range and accuracy of the AM-UL20?', answer: 'The AM-UL20 ultrasonic level sensor measures 0.5 to 20 meters with ±1% FS accuracy, using non-contact ultrasonic technology.' },
      { question: 'What material is the transducer made of?', answer: 'The transducer is PVDF (polyvinylidene fluoride), providing excellent chemical resistance for corrosive liquids and wastewater.' },
      { question: 'Can the AM-UL20 be used in water treatment plants?', answer: 'Yes, it is commonly used in potable water, wastewater, and water treatment process tanks. The PVDF transducer is suitable for most water treatment chemicals.' },
      { question: 'What are the operating temperature limits?', answer: 'The sensor operates from -20°C to +60°C with IP65 protection.' },
      { question: 'Does ultrasonic measurement work in tanks with foam or vapor?', answer: 'Light foam and vapor are generally tolerated, but heavy foam or dense vapor can attenuate the ultrasonic signal. For such conditions, we recommend the AM-RL80 radar level transmitter instead.' },
    ],
    relatedProductIds: ['1', '2', '4'],
  },
  {
    id: '4',
    slug: 'am-wl50-iot-wifi-level-sensor',
    model: 'AM-WL50',
    name: 'IoT WiFi Smart Level Sensor',
    category: 'level',
    tagline: 'WiFi-connected smart level sensor. Install in 5 minutes, monitor from your phone.',
    description: 'Battery-powered WiFi level sensor with cloud monitoring. Easy installation without wiring, perfect for remote tank monitoring.',
    image: '/products/am-wl50-v2.jpg',
    gallery: [
      '/products/am-wl50-v2.jpg',
    ],
    priceFrom: 25,
    moq: 100,
    leadTime: '25-30 days',
    keySpecs: [
      { label: 'Range', value: '0-5m' },
      { label: 'Connectivity', value: 'WiFi 2.4GHz' },
      { label: 'Battery', value: '6 months' },
      { label: 'App', value: 'iOS / Android / WeChat' },
    ],
    specifications: [
      {
        group: 'Measurement',
        items: [
          { param: 'Principle', value: 'Ultrasonic' },
          { param: 'Range', value: '0.3-5m' },
          { param: 'Accuracy', value: '±2% FS' },
        ],
      },
      {
        group: 'Connectivity',
        items: [
          { param: 'WiFi', value: '2.4GHz b/g/n' },
          { param: 'Protocol', value: 'MQTT / HTTP' },
          { param: 'App', value: 'iOS / Android' },
        ],
      },
      {
        group: 'Power',
        items: [
          { param: 'Supply', value: '3x AA Batteries' },
          { param: 'Battery Life', value: '6 months (typical)' },
        ],
      },
    ],
    applications: [
      { icon: 'Home', name: 'Residential', description: 'Home water tanks and wells' },
      { icon: 'Droplets', name: 'Rainwater Harvesting', description: 'Rainwater collection systems' },
      { icon: 'SprayCan', name: 'Irrigation', description: 'Agricultural and garden irrigation' },
    ],
    advantages: [
      { title: 'No Wiring', description: 'Battery-powered, no electrical wiring needed' },
      { title: 'Quick Install', description: 'Install in under 5 minutes' },
      { title: 'Cloud Monitoring', description: 'Monitor from anywhere via app' },
      { title: 'Alerts', description: 'Low/high level notifications' },
    ],
    certifications: ['ISO9001', 'CE', 'FCC'],
    downloads: [
      { name: 'Product Datasheet', type: 'pdf' },
    ],
    procurement: defaultProcurement,
    faq: [
      { question: 'How does the AM-WL50 WiFi level sensor connect to the internet?', answer: 'The AM-WL50 connects via 2.4GHz WiFi (b/g/n) using MQTT or HTTP protocols. No gateway or wiring is required — it connects directly to your existing WiFi network.' },
      { question: 'How long does the battery last?', answer: 'The sensor is powered by 3x AA batteries with a typical battery life of 6 months. Battery status is visible in the mobile app.' },
      { question: 'Is there a mobile app for monitoring?', answer: 'Yes, apps are available for iOS, Android, and WeChat mini-program. You can view real-time levels, set high/low alarms, and receive push notifications.' },
      { question: 'What is the measurement range?', answer: 'The AM-WL50 measures 0.3 to 5 meters with ±2% FS accuracy using ultrasonic technology.' },
      { question: 'Can multiple sensors be monitored from one account?', answer: 'Yes, you can add multiple AM-WL50 sensors to a single account and monitor all tanks from one dashboard.' },
    ],
    relatedProductIds: ['1', '2', '3'],
  },
  {
    id: '5',
    slug: 'am-emf100-electromagnetic-flow-meter',
    model: 'AM-EMF100',
    name: 'Electromagnetic Flow Meter',
    category: 'flow',
    tagline: 'Mainstream flow meter for water treatment and chemical industry',
    description: 'Full-bore electromagnetic flow meter for conductive liquids. No moving parts, reliable and accurate for water and slurry applications.',
    image: '/products/am-emf100-v2.jpg',
    gallery: [
      '/products/am-emf100-v2.jpg',
    ],
    priceFrom: 280,
    moq: 5,
    leadTime: '15-20 days',
    keySpecs: [
      { label: 'Size', value: 'DN6-DN600' },
      { label: 'Accuracy', value: '±0.5% FS' },
      { label: 'Liner', value: 'PTFE / PFA / Rubber' },
      { label: 'Protection', value: 'IP65 / IP68' },
    ],
    specifications: [
      {
        group: 'Measurement',
        items: [
          { param: 'Principle', value: 'Electromagnetic' },
          { param: 'Size', value: 'DN6 to DN600' },
          { param: 'Accuracy', value: '±0.5% FS' },
          { param: 'Velocity', value: '0.1-12 m/s' },
        ],
      },
      {
        group: 'Output',
        items: [
          { param: 'Signal', value: '4-20mA, Pulse, RS485 Modbus' },
          { param: 'Display', value: 'LCD' },
        ],
      },
      {
        group: 'Materials',
        items: [
          { param: 'Electrodes', value: '316L SS, Hastelloy, Titanium' },
          { param: 'Liner', value: 'PTFE, PFA, Rubber' },
        ],
      },
    ],
    applications: [
      { icon: 'Droplets', name: 'Water Treatment', description: 'Raw water, potable water, wastewater' },
      { icon: 'Filter', name: 'Process Water', description: 'Industrial process and cooling water' },
      { icon: 'FlaskConical', name: 'Chemicals', description: 'Corrosive chemical flow measurement' },
      { icon: 'Mud', name: 'Slurries', description: 'Mining and mineral slurries' },
    ],
    advantages: [
      { title: 'No Moving Parts', description: 'No wear, minimal maintenance' },
      { title: 'Low Pressure Drop', description: 'Full-bore design' },
      { title: 'Wide Turndown', description: '100:1 rangeability' },
      { title: 'Bi-directional', description: 'Measures flow in both directions' },
    ],
    competitorComparison: [
      { feature: 'Accuracy', accumeasure: '±0.5% FS', competitor: '±0.5% FS' },
      { feature: 'Price', accumeasure: 'From $280', competitor: 'From $850' },
    ],
    certifications: ['ISO9001', 'CE', 'ATEX'],
    downloads: [
      { name: 'Product Datasheet', type: 'pdf' },
    ],
    procurement: defaultProcurement,
    faq: [
      { question: 'What sizes are available for the AM-EMF100 electromagnetic flow meter?', answer: 'Sizes range from DN6 to DN600 (1/4" to 24"), with ±0.5% FS accuracy and flow velocity range of 0.1-12 m/s.' },
      { question: 'Can it measure non-conductive fluids like oil or pure water?', answer: 'No. Electromagnetic flow meters require the fluid to have minimum conductivity (typically >5 µS/cm). For non-conductive fluids like oil, please consider our ultrasonic flow meter AM-UF200.' },
      { question: 'What liner and electrode materials are available?', answer: 'Liners: PTFE, PFA, and rubber. Electrodes: 316L stainless steel, Hastelloy C, and Titanium, selected based on fluid chemical compatibility.' },
      { question: 'Does the AM-EMF100 have explosion-proof certification?', answer: 'Yes, ATEX explosion-proof certification is available for hazardous area installations.' },
      { question: 'What outputs does it support?', answer: '4-20mA, pulse, and RS485 Modbus RTU outputs are standard, with an integrated LCD display.' },
    ],
    relatedProductIds: ['6', '7'],
  },
  {
    id: '6',
    slug: 'am-uf200-ultrasonic-flow-meter',
    model: 'AM-UF200',
    name: 'Ultrasonic Flow Meter',
    category: 'flow',
    tagline: 'Clamp-on, non-invasive flow measurement. No pipe cutting required.',
    description: 'Clamp-on ultrasonic flow meter for non-invasive flow measurement. Install without stopping process or cutting pipes.',
    image: '/products/am-uf200-v2.jpg',
    gallery: [
      '/products/am-uf200-v2.jpg',
    ],
    priceFrom: 280,
    moq: 5,
    leadTime: '15-20 days',
    keySpecs: [
      { label: 'Size', value: 'DN15-DN1000' },
      { label: 'Accuracy', value: '±1% FS' },
      { label: 'Type', value: 'Portable / Fixed' },
      { label: 'Sensor', value: 'Clamp-on' },
    ],
    specifications: [
      {
        group: 'Measurement',
        items: [
          { param: 'Principle', value: 'Transit-time Ultrasonic' },
          { param: 'Size', value: 'DN15 to DN1000' },
          { param: 'Accuracy', value: '±1% FS' },
        ],
      },
      {
        group: 'Installation',
        items: [
          { param: 'Mounting', value: 'Clamp-on external' },
          { param: 'Pipe Material', value: 'Metal, Plastic' },
        ],
      },
    ],
    applications: [
      { icon: 'Droplets', name: 'Water Systems', description: 'Municipal and industrial water' },
      { icon: 'Thermometer', name: 'HVAC', description: 'Heating and cooling systems' },
      { icon: 'Factory', name: 'Retrofit', description: 'Existing pipe retrofits' },
    ],
    advantages: [
      { title: 'Non-Invasive', description: 'No process shutdown, no cutting' },
      { title: 'No Pressure Drop', description: 'Full flow, no restriction' },
      { title: 'Portable Option', description: 'Portable version for temporary measurements' },
    ],
    certifications: ['ISO9001', 'CE'],
    downloads: [
      { name: 'Product Datasheet', type: 'pdf' },
    ],
    procurement: defaultProcurement,
    faq: [
      { question: 'Does the clamp-on ultrasonic flow meter require cutting the pipe?', answer: 'No. The AM-UF200 uses clamp-on transit-time ultrasonic technology. Sensors mount externally on the pipe wall, so there is no process shutdown, no pipe cutting, and no pressure drop.' },
      { question: 'What pipe sizes and materials are supported?', answer: 'It supports pipe sizes from DN15 to DN1000 (1/2" to 40") in metal and plastic pipe materials.' },
      { question: 'What is the accuracy of the AM-UF200?', answer: '±1% FS accuracy for clamp-on installation on properly prepared pipe surfaces.' },
      { question: 'Is a portable version available for temporary measurements?', answer: 'Yes, both portable and fixed versions are available. The portable version is ideal for surveying multiple measurement points.' },
      { question: 'Can it measure non-conductive fluids?', answer: 'Yes, unlike electromagnetic flow meters, the ultrasonic principle works with any fluid that can transmit sound waves, including oils and pure water.' },
    ],
    relatedProductIds: ['5', '7'],
  },
  {
    id: '7',
    slug: 'am-mf50-mass-flow-meter',
    model: 'AM-MF50',
    name: 'Digital Mass Flow Meter',
    category: 'flow',
    tagline: 'Precision gas mass flow measurement for labs and semiconductors',
    description: 'High-precision thermal mass flow meter for gas measurement. Ideal for laboratory and semiconductor applications requiring high accuracy.',
    image: '/products/am-mf50-v2.jpg',
    gallery: [
      '/products/am-mf50-v2.jpg',
    ],
    priceFrom: 550,
    moq: 5,
    leadTime: '20-25 days',
    keySpecs: [
      { label: 'Range', value: '0-500 slm' },
      { label: 'Accuracy', value: '±1% FS' },
      { label: 'Response', value: '<10ms' },
      { label: 'Material', value: '316L SS' },
    ],
    specifications: [
      {
        group: 'Measurement',
        items: [
          { param: 'Principle', value: 'Thermal Mass' },
          { param: 'Range', value: '0-500 slm' },
          { param: 'Accuracy', value: '±1% FS' },
          { param: 'Response', value: '<10ms' },
        ],
      },
      {
        group: 'Output',
        items: [
          { param: 'Signal', value: '4-20mA, RS485, EtherNet/IP' },
        ],
      },
    ],
    applications: [
      { icon: 'Microscope', name: 'Semiconductor', description: 'Process gas control' },
      { icon: 'FlaskConical', name: 'Laboratories', description: 'Research and development' },
      { icon: 'Gas', name: 'Specialty Gases', description: 'High-purity gas measurement' },
    ],
    advantages: [
      { title: 'High Precision', description: 'Lab-grade accuracy' },
      { title: 'Fast Response', description: '<10ms response time' },
      { title: 'Direct Mass', description: 'Measures mass flow directly' },
    ],
    certifications: ['ISO9001', 'CE'],
    downloads: [
      { name: 'Product Datasheet', type: 'pdf' },
    ],
    procurement: defaultProcurement,
    faq: [
      { question: 'What is the measurement principle of the AM-MF50?', answer: 'The AM-MF50 uses thermal mass flow technology to measure gas mass flow directly, without needing temperature or pressure compensation.' },
      { question: 'What is the accuracy and response time?', answer: 'It provides ±1% FS accuracy with a fast <10ms response time, making it suitable for dynamic process control.' },
      { question: 'What flow range does it cover?', answer: 'The AM-MF50 measures 0 to 500 slm (standard liters per minute) of gas flow.' },
      { question: 'What output interfaces are available?', answer: '4-20mA, RS485, and EtherNet/IP outputs are supported for integration with PLC and DCS systems.' },
      { question: 'Is it suitable for semiconductor manufacturing?', answer: 'Yes, the 316L stainless steel construction and high precision make it ideal for semiconductor process gas control and laboratory applications.' },
    ],
    relatedProductIds: ['5', '6'],
  },
  {
    id: '8',
    slug: 'am-pt300-pressure-transmitter',
    model: 'AM-PT300',
    name: 'Piezoresistive Pressure Transmitter',
    category: 'pressure',
    tagline: 'High vibration resistance for hydraulic and industrial duty.',
    description: 'Rugged piezoresistive pressure transmitter built for high-vibration industrial environments such as hydraulics, pumps, and heavy machinery.',
    image: '/products/am-pt300-v2.jpg',
    gallery: [
      '/products/am-pt300-v2.jpg',
    ],
    priceFrom: 25,
    moq: 100,
    leadTime: '15-20 days',
    keySpecs: [
      { label: 'Range', value: '0-100MPa' },
      { label: 'Accuracy', value: '±0.25% FS' },
      { label: 'Output', value: '4-20mA / RS485' },
      { label: 'Protection', value: 'IP65, Ex d IIC T6' },
    ],
    specifications: [
      {
        group: 'Measurement',
        items: [
          { param: 'Principle', value: 'Piezoresistive' },
          { param: 'Range', value: '0-10kPa to 0-100MPa' },
          { param: 'Accuracy', value: '±0.25% FS' },
        ],
      },
      {
        group: 'Output',
        items: [
          { param: 'Signal', value: '4-20mA / RS485 Modbus' },
          { param: 'Supply', value: '12-36V DC' },
        ],
      },
      {
        group: 'Environment',
        items: [
          { param: 'Temp Range', value: '-40°C to +125°C' },
          { param: 'Protection', value: 'IP65' },
        ],
      },
    ],
    applications: [
      { icon: 'Fuel', name: 'Hydraulics', description: 'Hydraulic system pressure' },
      { icon: 'Factory', name: 'Industrial', description: 'General industrial processes' },
      { icon: 'Droplets', name: 'Pumps', description: 'Pump discharge and line pressure' },
    ],
    advantages: [
      { title: 'Rugged', description: 'High vibration resistance for industrial duty' },
      { title: 'Wide Range', description: 'From vacuum to 100MPa' },
      { title: 'Stable', description: 'Excellent long-term stability' },
    ],
    competitorComparison: [
      { feature: 'Accuracy', accumeasure: '±0.25% FS', competitor: '±0.5% FS' },
      { feature: 'Price', accumeasure: 'From $25', competitor: 'From $80' },
    ],
    certifications: ['ISO9001', 'CE', 'ATEX'],
    downloads: [
      { name: 'Product Datasheet', type: 'pdf' },
    ],
    procurement: defaultProcurement,
    faq: [
      { question: 'What pressure range does the AM-PT300 cover?', answer: 'The AM-PT300 covers 0-10kPa to 0-100MPa with ±0.25% FS accuracy, using piezoresistive sensing technology.' },
      { question: 'Is the AM-PT300 suitable for high-vibration environments?', answer: 'Yes. It is designed for high-vibration industrial duty such as hydraulic systems, pumps, and heavy machinery. Share your vibration profile with the RFQ and our engineers will confirm suitability or recommend an alternative.' },
      { question: 'Is the AM-PT300 explosion-proof certified?', answer: 'Yes, it carries ATEX Ex d IIC T6 explosion-proof certification and IP65 protection for harsh environments.' },
      { question: 'What is the operating temperature range?', answer: 'It operates from -40°C to +125°C, suitable for both cold outdoor and high-temperature industrial applications.' },
      { question: 'What output signals are supported?', answer: '4-20mA and RS485 Modbus outputs are standard, powered by 12-36V DC supply.' },
    ],
    relatedProductIds: ['9'],
  },
  {
    id: '9',
    slug: 'am-pg200-digital-pressure-gauge',
    model: 'AM-PG200',
    name: 'Smart Digital Pressure Gauge',
    category: 'pressure',
    tagline: 'Digital replacement for mechanical gauges. 2-year battery life.',
    description: 'Battery-powered digital pressure gauge with LCD display. Drop-in replacement for mechanical gauges with much higher accuracy.',
    image: '/products/am-pg200-v2.jpg',
    gallery: [
      '/products/am-pg200-v2.jpg',
    ],
    priceFrom: 15,
    moq: 100,
    leadTime: '15-20 days',
    keySpecs: [
      { label: 'Range', value: '0-100MPa' },
      { label: 'Accuracy', value: '±0.5% FS' },
      { label: 'Display', value: '4-digit LCD' },
      { label: 'Battery', value: '2 years' },
    ],
    specifications: [
      {
        group: 'Measurement',
        items: [
          { param: 'Principle', value: 'Piezoresistive' },
          { param: 'Range', value: '0-10kPa to 0-100MPa' },
          { param: 'Accuracy', value: '±0.5% FS' },
        ],
      },
      {
        group: 'Display',
        items: [
          { param: 'Type', value: 'LCD, 4-digit' },
          { param: 'Units', value: 'MPa, Bar, Psi, kPa' },
        ],
      },
      {
        group: 'Power',
        items: [
          { param: 'Supply', value: '2x AA Batteries' },
          { param: 'Battery Life', value: '2 years' },
        ],
      },
    ],
    applications: [
      { icon: 'Factory', name: 'Field Gauges', description: 'Local pressure indication' },
      { icon: 'Droplets', name: 'Piping', description: 'Pipe and manifold pressure' },
      { icon: 'FlaskConical', name: 'Process', description: 'Process vessel pressure' },
    ],
    advantages: [
      { title: 'Digital Readout', description: 'Easy to read, no parallax error' },
      { title: 'Long Battery', description: '2-year battery life' },
      { title: 'Drop-In', description: 'Direct mechanical gauge replacement' },
    ],
    certifications: ['ISO9001', 'CE'],
    downloads: [
      { name: 'Product Datasheet', type: 'pdf' },
    ],
    procurement: defaultProcurement,
    faq: [
      { question: 'Can the AM-PG200 replace a mechanical pressure gauge directly?', answer: 'Yes, the AM-PG200 is designed as a drop-in replacement for mechanical dial gauges. It uses the same mounting threads and provides a digital LCD readout with higher accuracy (±0.5% FS).' },
      { question: 'How long does the battery last?', answer: 'The gauge is powered by 2x AA batteries with a 2-year typical battery life, reducing maintenance frequency significantly compared to wired gauges.' },
      { question: 'What pressure units can it display?', answer: 'The 4-digit LCD can display MPa, Bar, PSI, and kPa, switchable from the menu.' },
      { question: 'What pressure range does it cover?', answer: 'The AM-PG200 covers 0-10kPa to 0-100MPa using piezoresistive sensing technology with ±0.5% FS accuracy.' },
      { question: 'Is it suitable for outdoor or harsh environments?', answer: 'Yes, it has a rugged industrial housing. For hazardous area installations, please consult our AM-PT300 pressure transmitter with ATEX certification.' },
    ],
    relatedProductIds: ['8'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: 'level' | 'flow' | 'pressure'): Product[] {
  return products.filter((p) => p.category === category);
}
