export interface Product {
  id: string;
  slug: string;
  model: string;
  name: string;
  category: 'level' | 'flow' | 'pressure';
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  priceFrom: number;
  moq: number;
  leadTime: string;
  keySpecs: {
    label: string;
    value: string;
  }[];
  specifications: {
    group: string;
    items: {
      param: string;
      value: string;
    }[];
  }[];
  applications: {
    icon: string;
    name: string;
    description: string;
  }[];
  advantages: {
    title: string;
    description: string;
  }[];
  competitorComparison?: {
    feature: string;
    accumeasure: string;
    competitor: string;
  }[];
  certifications: string[];
  downloads: {
    name: string;
    type: 'pdf' | 'doc' | '3d';
    url: string;
  }[];
  relatedProductIds: string[];
}

export interface InquiryForm {
  name: string;
  company: string;
  email: string;
  whatsapp?: string;
  country: string;
  productInterest: string[];
  quantity?: number;
  message: string;
  productId?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  country: string;
  flag: string;
  productIds: string[];
  background: string;
  challenge: string;
  solution: string[];
  results: {
    metric: string;
    value: string;
  }[];
  testimonial: string;
  testimonialAuthor: string;
  image: string;
}
