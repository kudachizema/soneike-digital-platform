import Link from 'next/link';

export function NewsGrid({ items }: { items: Array<{ title: string; date: string; category: string; summary: string }> }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
          <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue">
            <span>{item.category}</span>
            <span className="text-slate-500">{item.date}</span>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-navy">{item.title}</h3>
          <p className="mt-4 text-slate-700">{item.summary}</p>
          <Link href="/news" className="mt-6 inline-flex text-sm font-semibold text-blue hover:text-navy">
            Read more →
          </Link>
        </article>
      ))}
    </div>
  );
}
