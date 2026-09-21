export function FourPillarsSection({ pillars }: { pillars: Array<{ title: string; description: string; accent: string }> }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Our pillars</p>
        <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">A balanced school experience</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/5">
            <div className="mb-5 inline-flex rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Pillar
            </div>
            <h3 className="text-2xl font-bold text-navy">{pillar.title}</h3>
            <p className="mt-4 text-slate-700">{pillar.description}</p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.1em] text-gold">{pillar.accent}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
