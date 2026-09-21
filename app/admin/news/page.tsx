const newsEntries = [
  { title: 'School community celebrates a strong start to the term', status: 'Published', date: '12 Sep 2026' },
  { title: 'Academic support programmes expand across departments', status: 'Draft', date: '08 Sep 2026' },
  { title: 'Sporting season milestones and team updates', status: 'Published', date: '04 Sep 2026' }
];

export default function AdminNewsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">News</p>
          <h1 className="mt-2 text-4xl font-bold text-navy">Manage school news</h1>
        </div>
        <button className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">Create article</button>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-navy/10">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate text-navy">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsEntries.map((item) => (
              <tr key={item.title} className="border-t border-navy/10">
                <td className="p-4 font-semibold text-navy">{item.title}</td>
                <td className="p-4 text-slate-700">{item.date}</td>
                <td className="p-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4 text-blue">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
