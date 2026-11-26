/** Structured data for one page. "<" is escaped so the JSON cannot close the script tag. */
export default function JsonLd({ data }: { data: object | object[] }) {
  const graphs = Array.isArray(data) ? data : [data];
  return <>{graphs.map((graph, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />)}</>;
}
