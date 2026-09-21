const sportCodes = [
  { name: 'Soccer', description: 'Senior and junior boys and girls teams across school leagues and inter-school fixtures.', badge: 'Teamwork' },
  { name: 'Netball', description: 'High-energy competitive play led by structured training and disciplined preparation.', badge: 'Precision' },
  { name: 'Handball', description: 'Fast-paced attacking play with strong game intelligence and conditioning.', badge: 'Intensity' },
  { name: 'Rugby', description: 'Physical and strategic play that develops resilience, leadership and discipline.', badge: 'Resilience' },
  { name: 'Hockey', description: 'Skill, passing patterns and tactical awareness across senior and junior levels.', badge: 'Skill' },
  { name: 'Athletics', description: 'Track and field participation supporting speed, endurance and school pride.', badge: 'Speed' },
  { name: 'Chess', description: 'Strategic thinking and problem solving in a competitive club environment.', badge: 'Strategy' },
  { name: 'Drummies', description: 'Performance culture and school identity through rhythm, discipline and expression.', badge: 'Culture' }
];

const upcomingFixtures = [
  { home: 'Soneike 1st XV', away: 'Bishop McGregor', venue: 'Home Stadium', date: '27 Sep 2026', time: '15:00' },
  { home: 'Soneike U16A Soccer', away: 'Kuils River Academy', venue: 'Main Field', date: '30 Sep 2026', time: '15:30' },
  { home: 'Soneike Netball A', away: 'Sizenwe', venue: 'School Courts', date: '02 Oct 2026', time: '17:00' }
];

const results = [
  { match: 'Soneike Netball A vs West Coast', score: '34 - 28', status: 'Won' },
  { match: 'Soneike Soccer U15 vs Elsies River', score: '2 - 1', status: 'Won' },
  { match: 'Soneike Hockey vs Protea', score: '1 - 3', status: 'Lost' }
];

const leagueTable = [
  { position: 1, team: 'Soneike A', played: 8, won: 7, drawn: 1, points: 22 },
  { position: 2, team: 'Kuils River Academy', played: 8, won: 6, drawn: 1, points: 19 },
  { position: 3, team: 'Protea High', played: 8, won: 5, drawn: 2, points: 17 },
  { position: 4, team: 'North Road College', played: 8, won: 4, drawn: 2, points: 14 }
];

const announcements = [
  'Trials for the athletics squad begin this week.',
  'Winter sport training blocks continue every Tuesday and Thursday.',
  'The school welcomes new coaching support for handball and hockey.'
];

export default function SportPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Sport</p>
        <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Sporting excellence across every code</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-3xl bg-navy p-6 text-white shadow-soft">
          <p className="text-sm uppercase tracking-[0.18em] text-gold">Codes</p>
          <p className="mt-3 text-3xl font-bold">8</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
          <p className="text-sm uppercase tracking-[0.18em] text-blue">Teams</p>
          <p className="mt-3 text-3xl font-bold text-navy">24+</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
          <p className="text-sm uppercase tracking-[0.18em] text-blue">Coaches</p>
          <p className="mt-3 text-3xl font-bold text-navy">18</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
          <p className="text-sm uppercase tracking-[0.18em] text-blue">Activities</p>
          <p className="mt-3 text-3xl font-bold text-navy">Weekly</p>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-navy">Supported sports codes</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sportCodes.map((sport) => (
            <article key={sport.name} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">{sport.badge}</p>
              <h3 className="mt-4 text-2xl font-bold text-navy">{sport.name}</h3>
              <p className="mt-4 text-slate-700">{sport.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
          <h2 className="text-3xl font-bold text-navy">Upcoming fixtures</h2>
          <div className="mt-6 space-y-4">
            {upcomingFixtures.map((fixture) => (
              <div key={`${fixture.home}-${fixture.date}`} className="rounded-2xl bg-slate p-4">
                <div className="flex items-center justify-between gap-3 text-sm font-semibold uppercase tracking-[0.1em] text-blue">
                  <span>{fixture.date}</span>
                  <span>{fixture.time}</span>
                </div>
                <p className="mt-3 text-xl font-bold text-navy">{fixture.home} vs {fixture.away}</p>
                <p className="mt-1 text-slate-700">{fixture.venue}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-navy p-6 text-white shadow-soft">
          <h2 className="text-3xl font-bold">Latest results</h2>
          <div className="mt-6 space-y-4">
            {results.map((result) => (
              <div key={result.match} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.1em] text-gold">{result.status}</p>
                <p className="mt-2 text-xl font-bold">{result.match}</p>
                <p className="mt-2 text-sky">{result.score}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
          <h2 className="text-3xl font-bold text-navy">League table</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-navy/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate text-navy">
                <tr>
                  <th className="p-3">Pos</th>
                  <th className="p-3">Team</th>
                  <th className="p-3">P</th>
                  <th className="p-3">W</th>
                  <th className="p-3">D</th>
                  <th className="p-3">Pts</th>
                </tr>
              </thead>
              <tbody>
                {leagueTable.map((row) => (
                  <tr key={row.team} className="border-t border-navy/10">
                    <td className="p-3">{row.position}</td>
                    <td className="p-3">{row.team}</td>
                    <td className="p-3">{row.played}</td>
                    <td className="p-3">{row.won}</td>
                    <td className="p-3">{row.drawn}</td>
                    <td className="p-3 font-semibold text-navy">{row.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
          <h2 className="text-3xl font-bold text-navy">Announcements</h2>
          <ul className="mt-6 space-y-4 text-slate-700">
            {announcements.map((announcement) => (
              <li key={announcement} className="rounded-2xl bg-slate p-4">• {announcement}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
