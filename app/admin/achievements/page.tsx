const achievements = [
  { title: 'Academic recognition awards', learner: 'Multiple learners', status: 'Published' },
  { title: 'Regional sport success', learner: 'Netball team', status: 'Reviewed' },
  { title: 'Leadership and service award', learner: 'Learner Council', status: 'Draft' }
];

export default function AdminAchievementsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Achievements</p>
          <h1 className="mt-2 text-4xl font-bold text-navy">Manage learner recognition</h1>
        </div>
        <button className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">Add achievement</button>
      </div>

      <div className="space-y-4">
        {achievements.map((entry) => (
          <div key={entry.title} className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-navy/10">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xl font-bold text-navy">{entry.title}</p>
                <p className="mt-2 text-slate-700">{entry.learner}</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">{entry.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
