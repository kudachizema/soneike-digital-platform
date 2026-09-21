import Link from 'next/link';

const cards = [
  { title: 'News', value: '24', detail: 'Published updates', href: '/admin/news' },
  { title: 'Events', value: '12', detail: 'Upcoming activities', href: '/admin/events' },
  { title: 'Fixtures', value: '18', detail: 'Current seasonal matches', href: '/admin/fixtures' },
  { title: 'Achievements', value: '9', detail: 'Recent learner highlights', href: '/admin/achievements' }
];

export default function AdminDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue">Admin dashboard</p>
        <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">School operations overview</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Link key={card.title} href={card.href} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10 transition hover:-translate-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">{card.title}</p>
            <p className="mt-4 text-4xl font-bold text-navy">{card.value}</p>
            <p className="mt-2 text-slate-700">{card.detail}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="rounded-3xl bg-navy p-8 text-white shadow-soft">
          <h2 className="text-2xl font-bold">Operational priorities</h2>
          <ul className="mt-6 space-y-3 text-sky">
            <li>• Review latest news and announcements</li>
            <li>• Coordinate upcoming school and sports events</li>
            <li>• Approve learner achievements and media uploads</li>
            <li>• Maintain staff and club information</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-navy/10">
          <h2 className="text-2xl font-bold text-navy">Quick actions</h2>
          <div className="mt-6 space-y-3">
            <Link href="/admin/news" className="block rounded-2xl bg-slate p-3 text-sm font-semibold text-navy">Manage news</Link>
            <Link href="/admin/events" className="block rounded-2xl bg-slate p-3 text-sm font-semibold text-navy">Manage events</Link>
            <Link href="/admin/fixtures" className="block rounded-2xl bg-slate p-3 text-sm font-semibold text-navy">Manage fixtures</Link>
            <Link href="/admin/images" className="block rounded-2xl bg-slate p-3 text-sm font-semibold text-navy">Manage media</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
