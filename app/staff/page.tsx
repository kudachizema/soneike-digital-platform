const staff = [
  {
    name: 'Mrs A. Jacobs',
    role: 'Principal',
    department: 'School Leadership'
  },
  {
    name: 'Mr T. Mokoena',
    role: 'Head of Academics',
    department: 'Academic Programmes'
  },
  {
    name: 'Mr L. Smith',
    role: 'Sports Coordinator',
    department: 'Sport'
  },
  {
    name: 'Mrs D. Ndlovu',
    role: 'Culture & Leadership Coordinator',
    department: 'Student Development'
  }
];

export default function StaffPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Staff</p>
      <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Meet the Soneike team</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {staff.map((person) => (
          <article key={person.name} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-xl font-bold text-gold">
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
