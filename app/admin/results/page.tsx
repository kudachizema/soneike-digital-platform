const results = [
  { match: 'Soneike Netball A vs West Coast', score: '34 - 28', result: 'Win' },
  { match: 'Soneike Soccer U15 vs Elsies River', score: '2 - 1', result: 'Win' },
  { match: 'Soneike Hockey vs Protea', score: '1 - 3', result: 'Loss' }
];

export default function AdminResultsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Results</p>
          <h1 className="mt-2 text-4xl font-bold text-navy">Update match outcomes</h1>
        </div>
        <button className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">Add result</button>
      </div>

      <div className="space-y-4">
        {results.map((entry) => (
          <div key={entry.match} className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-navy/10">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xl font-bold text-navy">{entry.match}</p>
                <p className="mt-2 text-slate-700">Score: {entry.score}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${entry.result === 'Win' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {entry.result}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
