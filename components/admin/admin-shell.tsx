import Link from 'next/link';

const adminNav = [
  { label: 'Overview', href: '/admin' },
  { label: 'News', href: '/admin/news' },
  { label: 'Events', href: '/admin/events' },
  { label: 'Sports Fixtures', href: '/admin/fixtures' },
  { label: 'Results', href: '/admin/results' },
  { label: 'Announcements', href: '/admin/announcements' },
  { label: 'Images', href: '/admin/images' },
  { label: 'Learner Achievements', href: '/admin/achievements' },
  { label: 'Clubs', href: '/admin/clubs' },
  { label: 'Staff', href: '/admin/staff' }
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="rounded-3xl border border-navy/10 bg-white shadow-soft">
          <div className="grid lg:grid-cols-[260px_1fr]">
            <aside className="border-b border-navy/10 bg-navy p-6 text-white lg:border-b-0 lg:border-r">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Admin</p>
                <h2 className="mt-2 text-2xl font-bold">Soneike Portal</h2>
              </div>
              <nav className="space-y-2">
                {adminNav.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-sky transition hover:bg-white/10">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>

            <main className="p-6 md:p-10">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
