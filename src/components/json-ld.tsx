export function JsonLd({ data }: { data: object | object[] }) {
  let json: string;
  try {
    json = JSON.stringify(data);
  } catch {
    console.error("JsonLd: failed to serialize structured data", data);
    return null;
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
