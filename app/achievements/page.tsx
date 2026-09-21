const achievements = [
  {
    title: 'Academic excellence recognition',
    description: 'Learners were acknowledged for consistent effort, subject mastery and determination across core areas.',
    year: '2026'
  },
  {
    title: 'Sporting achievement',
    description: 'School teams represented the institution with pride, discipline and excellent team values throughout the season.',
    year: '2026'
  },
  {
    title: 'Leadership and service awards',
    description: 'Learners received recognition for service, initiative, and positive leadership within the school community.',
    year: '2026'
  },
  {
    title: 'Creative and cultural participation',
    description: 'Students demonstrated excellence through performance, innovation and creative contributions across school programmes.',
    year: '2026'
  }
];

export default function AchievementsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Learner Achievements</p>
      <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Celebrating excellence</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {achievements.map((item) => (
          <article key={item.title} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{item.year}</p>
            <h2 className="mt-4 text-2xl font-bold text-navy">{item.title}</h2>
            <p className="mt-4 text-slate-700">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
