const articles = [
  {
    title: 'School values remain central to a strong start to the year',
    date: '12 September 2026',
    category: 'Community',
    summary: 'Learners and staff reflected on how discipline, care and teamwork are shaping a positive school climate.'
  },
  {
    title: 'Academic support programmes expand across the school',
    date: '08 September 2026',
    category: 'Academics',
    summary: 'New support initiatives are helping learners build confidence and consistency in key subject areas.'
  },
  {
    title: 'Sporting teams continue to build momentum',
    date: '04 September 2026',
    category: 'Sport',
    summary: 'Coaches and learners remain focused on preparation, teamwork and strong performance standards.'
  },
  {
    title: 'Leadership forum encourages active student voice',
    date: '29 August 2026',
    category: 'Leadership',
    summary: 'Learner representatives shared ideas on growth, wellbeing and strengthening school culture.'
  }
];

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">News</p>
      <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Latest school news</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <article key={article.title} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/10">
            <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.15em] text-blue">
              <span>{article.category}</span>
              <span className="text-slate-500">{article.date}</span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-navy">{article.title}</h2>
            <p className="mt-4 text-slate-700">{article.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
