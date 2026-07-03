import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'am-cl100-capacitive-level-sensor',
    model: 'AM-CL100',
    name: 'Capacitive Level Sensor',
    category: 'level',
    tagline: 'Economical level measurement for oil, water, and chemical tanks',
    description: 'The AM-CL100 is a reliable capacitive level sensor designed for continuous level measurement of liquid and bulk solids in tanks. With a robust design and economical pricing, it\'s ideal for general industrial applications.',
    image: '/products/am-cl100.jpg',
    gallery: [
      '/products/am-cl100-1.jpg',
      '/products/am-cl100-2.jpg',
      '/products/am-cl100-3.jpg',
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
      { name: 'Product Datasheet', type: 'pdf', url: '/downloads/am-cl100-datasheet.pdf' },
      { name: 'Installation Manual', type: 'pdf', url: '/downloads/am-cl100-manual.pdf' },
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
    image: '/products/am-rl80.jpg',
    gallery: [
      '/products/am-rl80-1.jpg',
      '/products/am-rl80-2.jpg',
      '/products/am-rl80-3.jpg',
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
      { name: 'Product Datasheet', type: 'pdf', url: '/downloads/am-rl80-datasheet.pdf' },
      { name: 'Installation Manual', type: 'pdf', url: '/downloads/am-rl80-manual.pdf' },
      { name: '3D Model', type: '3d', url: '/downloads/am-rl80-3d.step' },
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
    image: '/products/am-ul20.jpg',
    gallery: [
      '/products/am-ul20-1.jpg',
      '/products/am-ul20-2.jpg',
      '/products/am-ul20-3.jpg',
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
      { name: 'Product Datasheet', type: 'pdf', url: '/downloads/am-ul20-datasheet.pdf' },
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
    image: '/products/am-wl50.jpg',
    gallery: [
      '/products/am-wl50-1.jpg',
      '/products/am-wl50-2.jpg',
      '/products/am-wl50-3.jpg',
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
      { name: 'Product Datasheet', type: 'pdf', url: '/downloads/am-wl50-datasheet.pdf' },
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
    image: '/products/am-emf100.jpg',
    gallery: [
      '/products/am-emf100-1.jpg',
      '/products/am-emf100-2.jpg',
      '/products/am-emf100-3.jpg',
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
      { name: 'Product Datasheet', type: 'pdf', url: '/downloads/am-emf100-datasheet.pdf' },
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
    image: '/products/am-uf200.jpg',
    gallery: [
      '/products/am-uf200-1.jpg',
      '/products/am-uf200-2.jpg',
      '/products/am-uf200-3.jpg',
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
      { name: 'Product Datasheet', type: 'pdf', url: '/downloads/am-uf200-datasheet.pdf' },
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
    image: '/products/am-mf50.jpg',
    gallery: [
      '/products/am-mf50-1.jpg',
      '/products/am-mf50-2.jpg',
      '/products/am-mf50-3.jpg',
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
      { name: 'Product Datasheet', type: 'pdf', url: '/downloads/am-mf50-datasheet.pdf' },
    ],
    relatedProductIds: ['5', '6'],
  },
  {
    id: '8',
    slug: 'am-pt300-pressure-transmitter',
    model: 'AM-PT300',
    name: 'Piezoresistive Pressure Transmitter',
    category: 'pressure',
    tagline: 'Aerospace-grade vibration resistance. Industrial pressure workhorse.',
    description: 'Rugged pressure transmitter with aerospace-grade components. High vibration resistance for demanding industrial applications.',
    image: '/products/am-pt300.jpg',
    gallery: [
      '/products/am-pt300-1.jpg',
      '/products/am-pt300-2.jpg',
      '/products/am-pt300-3.jpg',
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
      { title: 'Rugged', description: 'Aerospace-grade vibration resistance' },
      { title: 'Wide Range', description: 'From vacuum to 100MPa' },
      { title: 'Stable', description: 'Excellent long-term stability' },
    ],
    competitorComparison: [
      { feature: 'Accuracy', accumeasure: '±0.25% FS', competitor: '±0.5% FS' },
      { feature: 'Price', accumeasure: 'From $25', competitor: 'From $80' },
    ],
    certifications: ['ISO9001', 'CE', 'ATEX'],
    downloads: [
      { name: 'Product Datasheet', type: 'pdf', url: '/downloads/am-pt300-datasheet.pdf' },
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
    image: '/products/am-pg200.jpg',
    gallery: [
      '/products/am-pg200-1.jpg',
      '/products/am-pg200-2.jpg',
      '/products/am-pg200-3.jpg',
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
      { name: 'Product Datasheet', type: 'pdf', url: '/downloads/am-pg200-datasheet.pdf' },
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
