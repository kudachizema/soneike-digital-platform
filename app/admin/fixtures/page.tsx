const fixtures = [
  { match: 'Rugby 1st XV vs Bishop McGregor', date: '27 Sep 2026', venue: 'Home Stadium' },
  { match: 'Soccer U16A vs Kuils River Academy', date: '30 Sep 2026', venue: 'Main Field' },
  { match: 'Netball A vs Sizenwe', date: '02 Oct 2026', venue: 'School Courts' }
];

export default function AdminFixturesPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Sports</p>
          <h1 className="mt-2 text-4xl font-bold text-navy">Manage fixtures</h1>
        </div>
        <button className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">Create fixture</button>
      </div>

      <div className="space-y-4">
        {fixtures.map((fixture) => (
          <div key={fixture.match} className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-navy/10">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xl font-bold text-navy">{fixture.match}</p>
                <p className="mt-2 text-slate-700">{fixture.date} • {fixture.venue}</p>
              </div>
              <button className="rounded-full border border-navy px-4 py-2 text-sm font-semibold text-navy">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
