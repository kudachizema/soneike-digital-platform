const staff = [
  { name: 'Mrs A. Jacobs', role: 'Principal', department: 'Leadership' },
  { name: 'Mr T. Mokoena', role: 'Head of Academics', department: 'Academics' },
  { name: 'Mr L. Smith', role: 'Sports Coordinator', department: 'Sport' },
  { name: 'Mrs D. Ndlovu', role: 'Culture & Leadership Coordinator', department: 'Student Support' }
];

export default function AdminStaffPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Staff</p>
          <h1 className="mt-2 text-4xl font-bold text-navy">Manage staff directory</h1>
        </div>
        <button className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">Add staff member</button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {staff.map((person) => (
          <article key={person.name} className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-navy/10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-lg font-bold text-gold">
              {person.name.split(' ')[1]?.[0] ?? 'S'}
            </div>
            <h2 className="mt-5 text-2xl font-bold text-navy">{person.name}</h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-blue">{person.role}</p>
            <p className="mt-3 text-slate-700">{person.department}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
