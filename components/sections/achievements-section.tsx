export function AchievementsSection({ items }: { items: Array<{ title: string; description: string; year: string }> }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Learner achievements</p>
        <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl">Celebrating success</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{item.year}</p>
            <h3 className="mt-4 text-2xl font-bold text-navy">{item.title}</h3>
            <p className="mt-4 text-slate-700">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
