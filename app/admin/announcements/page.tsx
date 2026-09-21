const announcements = [
  { title: 'Sports trials begin this week', audience: 'All learners', status: 'Active' },
  { title: 'Leadership forum registration open', audience: 'Learner leaders', status: 'Draft' },
  { title: 'School open day announced', audience: 'Parents', status: 'Scheduled' }
];

export default function AdminAnnouncementsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Announcements</p>
          <h1 className="mt-2 text-4xl font-bold text-navy">Publish important updates</h1>
        </div>
        <button className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">New announcement</button>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.title} className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-navy/10">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xl font-bold text-navy">{announcement.title}</p>
                <p className="mt-2 text-slate-700">Audience: {announcement.audience}</p>
              </div>
              <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-navy">{announcement.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
