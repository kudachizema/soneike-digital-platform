const clubs = [
  { name: 'Debating Society', convenor: 'Mrs T. van Wyk', status: 'Active' },
  { name: 'Drama & Performance Arts', convenor: 'Mr J. Mthembu', status: 'Active' },
  { name: 'Environmental Club', convenor: 'Mrs K. Petersen', status: 'Review' }
];

export default function AdminClubsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Clubs</p>
          <h1 className="mt-2 text-4xl font-bold text-navy">Manage clubs and societies</h1>
        </div>
        <button className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">Add club</button>
      </div>

      <div className="space-y-4">
        {clubs.map((club) => (
          <div key={club.name} className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-navy/10">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xl font-bold text-navy">{club.name}</p>
                <p className="mt-2 text-slate-700">Convenor: {club.convenor}</p>
              </div>
              <span className="rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue">{club.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
