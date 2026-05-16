export default async function Home() {
  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Brands`,
    {
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}` },
      cache: "no-store",
    }
  );
  const data = await res.json();
  const brands = data.records || [];

  return (
    <main style={{ padding: "24px", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "24px" }}>Znahidka — Brand Directory</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
        {brands.map((b) => (
          <div key={b.id} style={{ border: "1px solid #e5e5e5", borderRadius: "8px", padding: "16px" }}>
            <h2 style={{ fontSize: "16px", margin: "0 0 8px" }}>{b.fields.Name}</h2>
            {b.fields.Description && <p style={{ fontSize: "13px", color: "#666", margin: "0 0 8px" }}>{b.fields.Description}</p>}
            <div style={{ display: "flex", gap: "12px" }}>
              {b.fields.Instagram && <a href={b.fields.Instagram} target="_blank" rel="noreferrer" style={{ fontSize: "13px" }}>Instagram</a>}
              {b.fields.Website && <a href={b.fields.Website} target="_blank" rel="noreferrer" style={{ fontSize: "13px" }}>Website</a>}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
