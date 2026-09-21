export function CommunityImpactSection({ items }: { items: Array<{ title: string; summary: string; impact: string }> }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">YCAP / Community</p>
          <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl">Impact beyond the classroom</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-3xl bg-navy p-6 text-white shadow-soft">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 text-sky">{item.summary}</p>
              <p className="mt-5 inline-flex rounded-full bg-gold/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                {item.impact}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
