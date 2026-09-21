const projects = [
  {
    title: 'YCAP Outreach Programme',
    summary: 'Support for learners and families through meaningful community engagement and volunteer action.',
    impact: 'Community service and values-based participation'
  },
  {
    title: 'School-led mentoring',
    summary: 'Peer support and mentoring promote wellbeing, resilience and confidence among learners.',
    impact: 'Student support and guidance'
  },
  {
    title: 'Local partnerships',
    summary: 'Collaborative projects with community stakeholders help learners contribute with purpose.',
    impact: 'Stronger school-community relationships'
  }
];

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">YCAP / Community Projects</p>
      <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Community impact and service</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="rounded-3xl bg-navy p-6 text-white shadow-soft">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="mt-4 text-sky">{project.summary}</p>
            <p className="mt-6 inline-flex rounded-full bg-gold/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              {project.impact}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
