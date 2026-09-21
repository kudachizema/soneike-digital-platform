const clubs = [
  {
    name: 'Debating Society',
    description: 'Develops critical thinking, public speaking and confident expression.',
    category: 'Academic'
  },
  {
    name: 'Drama & Performance Arts',
    description: 'Provides opportunities for self-expression, creativity and stage confidence.',
    category: 'Culture'
  },
  {
    name: 'Environmental Club',
    description: 'Encourages sustainability, awareness and action for a better school community.',
    category: 'Community'
  },
  {
    name: 'Chess Club',
    description: 'Builds strategy, patience and problem-solving skills in a structured setting.',
    category: 'Sport & Academic'
  }
];

export default function ClubsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Clubs & Societies</p>
      <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Opportunities beyond the classroom</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {clubs.map((club) => (
          <article key={club.name} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
            <div className="inline-flex rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-blue">
              {club.category}
            </div>
            <h2 className="mt-4 text-2xl font-bold text-navy">{club.name}</h2>
            <p className="mt-4 text-slate-700">{club.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
