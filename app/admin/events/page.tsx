const events = [
  { title: 'Open Day', date: '19 Sep 2026', status: 'Confirmed' },
  { title: 'Interhouse Athletics Weekend', date: '27 Sep 2026', status: 'Draft' },
  { title: 'Leadership Forum', date: '02 Oct 2026', status: 'Confirmed' }
];

export default function AdminEventsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Events</p>
          <h1 className="mt-2 text-4xl font-bold text-navy">Manage events</h1>
        </div>
        <button className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">Add event</button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {events.map((event) => (
          <article key={event.title} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">{event.status}</p>
            <h2 className="mt-4 text-2xl font-bold text-navy">{event.title}</h2>
            <p className="mt-3 text-slate-700">{event.date}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
