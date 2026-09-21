export function EventsList({ items }: { items: Array<{ title: string; date: string; time: string; location: string; category: string }> }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
          <div className="inline-flex rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-navy">
            {item.category}
          </div>
          <h3 className="mt-4 text-2xl font-bold text-navy">{item.title}</h3>
          <dl className="mt-4 space-y-2 text-slate-700">
            <div className="flex items-start justify-between gap-2">
              <dt className="font-semibold text-navy">Date:</dt>
              <dd>{item.date}</dd>
            </div>
            <div className="flex items-start justify-between gap-2">
              <dt className="font-semibold text-navy">Time:</dt>
              <dd>{item.time}</dd>
            </div>
            <div className="flex items-start justify-between gap-2">
              <dt className="font-semibold text-navy">Venue:</dt>
              <dd>{item.location}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
