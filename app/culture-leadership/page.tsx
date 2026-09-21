export default function CultureLeadershipPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Culture & Leadership</p>
      <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Leadership, culture and community</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-navy">Student leadership</h2>
          <p className="mt-3 text-slate-700">Learners are encouraged to lead with integrity, confidence and service.</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-navy">School culture</h2>
          <p className="mt-3 text-slate-700">Our culture is shaped by belonging, respect, pride, inclusion and shared purpose.</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-navy">Community engagement</h2>
          <p className="mt-3 text-slate-700">We strengthen relationships through service learning, partnerships and active citizenship.</p>
        </div>
      </div>

      <div className="mt-12 rounded-3xl bg-navy p-8 text-white shadow-soft">
        <h2 className="text-2xl font-bold">Building connected, capable learners</h2>
        <p className="mt-4 max-w-3xl text-sky">
          Through leadership opportunities, enrichment programmes and partnerships, learners grow into confident, compassionate contributors to community and country.
        </p>
      </div>
    </div>
  );
}
