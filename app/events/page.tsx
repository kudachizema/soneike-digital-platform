const events = [
  {
    title: 'Open Day',
    date: '19 September 2026',
    time: '09:00 - 12:00',
    location: 'School Hall',
    category: 'School'
  },
  {
    title: 'Interhouse Athletics Weekend',
    date: '27 September 2026',
    time: '08:30 - 15:00',
    location: 'Sports Ground',
    category: 'Sport'
  },
  {
    title: 'Leadership Forum',
    date: '02 October 2026',
    time: '14:00 - 16:00',
    location: 'Media Centre',
    category: 'Leadership'
  },
  {
    title: 'Parent Information Session',
    date: '08 October 2026',
    time: '17:30 - 19:00',
    location: 'Lecture Hall',
    category: 'Parents'
  }
];

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Events Calendar</p>
      <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Upcoming school events</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {events.map((event) => (
          <article key={event.title} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
            <div className="inline-flex rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-navy">
              {event.category}
            </div>
            <h2 className="mt-4 text-2xl font-bold text-navy">{event.title}</h2>
            <dl className="mt-4 space-y-2 text-slate-700">
              <div className="flex items-start justify-between gap-3">
                <dt className="font-semibold text-navy">Date:</dt>
                <dd>{event.date}</dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="font-semibold text-navy">Time:</dt>
                <dd>{event.time}</dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="font-semibold text-navy">Venue:</dt>
                <dd>{event.location}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
