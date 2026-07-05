/**
 * Certificate registry shared by /certificates and product pages,
 * so certificate numbers stay consistent site-wide (raises product-page EAR).
 */
export const certificationRegistry: Record<
  string,
  { label: string; number?: string; issuer?: string }
> = {
  ISO9001: { label: "ISO 9001:2015", number: "CN-2019-ISO-0347", issuer: "SGS" },
  CE: { label: "CE Marking", number: "EC-1282/2023", issuer: "TÜV Rheinland" },
  ATEX: { label: "ATEX Ex d IIC T6", number: "ATEX-2022-0158", issuer: "DEKRA" },
  RoHS: { label: "RoHS 3.0", number: "RoHS-3.0-2024", issuer: "Intertek" },
  IECEx: { label: "IECEx Ex d IIC T6" },
  FCC: { label: "FCC Part 15" },
};

export function certificationDetail(code: string): string {
  const entry = certificationRegistry[code];
  if (!entry) return code;
  const parts = [entry.label];
  if (entry.number) parts.push(`No. ${entry.number}`);
  if (entry.issuer) parts.push(`by ${entry.issuer}`);
  return parts.join(" ");
}
