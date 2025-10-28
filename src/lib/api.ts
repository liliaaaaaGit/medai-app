export async function analyzeRemote(mode: "acute" | "chronic", input: any) {
  const res = await fetch("/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mode, ...input }),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
