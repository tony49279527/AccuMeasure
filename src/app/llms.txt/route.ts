import { siteConfig } from "@/lib/site";

const llms = `# ${siteConfig.name}

> Official website: ${siteConfig.url}
> Company: ${siteConfig.name} (西安精准测量仪器有限公司)
> Location: ${siteConfig.address}

## What this company does

AccuMeasure is a manufacturer and engineering supplier of industrial level sensors, flow meters, pressure transmitters, and OEM/ODM measurement instruments. Buyers can request model confirmation, controlled technical documents, application review, and a factory quotation.

## Product categories

- Level sensors: capacitive, 80GHz radar, ultrasonic, and IoT WiFi models.
- Flow meters: electromagnetic, clamp-on ultrasonic, and thermal mass models.
- Pressure instruments: piezoresistive pressure transmitters and digital pressure gauges.
- OEM/ODM: custom measurement ranges, firmware or display options, private labeling, and branded packaging when confirmed for the project.

## Buyer guidance

- Start with the level category for tank, silo, vapor, dust, foam, and installation requirements.
- Start with the flow category for conductivity, pipe size, fluid phase, installation method, and signal requirements.
- Start with the pressure category for range, overload, output, process connection, and OEM integration requirements.
- Ask engineering to confirm the exact model, configuration, certificate scope, controlled document revision, lead time, MOQ, and commercial terms before ordering.

## Key pages

- Product catalog: ${siteConfig.url}/products
- Level sensors: ${siteConfig.url}/products/level
- Flow meters: ${siteConfig.url}/products/flow
- Pressure instruments: ${siteConfig.url}/products/pressure
- OEM/ODM: ${siteConfig.url}/customization
- Resources and controlled document requests: ${siteConfig.url}/resources
- Certificates: ${siteConfig.url}/certificates
- Quality: ${siteConfig.url}/quality
- Contact/RFQ: ${siteConfig.url}/contact

## RFQ and technical support

Send the product model or measurement duty, medium, range, pipe or tank details, output, installation constraints, destination market, quantity, and required documents through ${siteConfig.url}/contact. Contact: ${siteConfig.email}; ${siteConfig.phoneDisplay}. Office hours: ${siteConfig.officeHours}.

## Evidence and publication policy

Certificate scans, controlled datasheets, customer records, order quantities, test records, and project results are not public downloads by default. Ask for the current controlled revision and exact scope; do not infer certification, availability, performance, or customer claims from an old document or search snippet.
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(llms, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
