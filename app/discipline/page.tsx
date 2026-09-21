export default function DisciplinePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Discipline</p>
      <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Discipline as a foundation for success</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-navy">Our standards</h2>
          <p className="mt-4 text-slate-700">
            We promote a culture of respect, responsibility, punctuality and accountability, helping learners develop habits that support long-term success.
          </p>
        </div>
        <div className="rounded-3xl bg-navy p-6 text-white shadow-soft">
          <h2 className="text-2xl font-bold">Values in action</h2>
          <ul className="mt-4 space-y-2 text-sky">
            <li>• Respect for self and others</li>
            <li>• Responsibility and self-management</li>
            <li>• Consistent effort and discipline</li>
            <li>• Pride in appearance and conduct</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 rounded-3xl bg-gold/10 p-8">
        <h2 className="text-2xl font-bold text-navy">The impact of discipline</h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          Learners are supported to make considered choices, meet expectations and grow into people who can contribute positively to school and society.
        </p>
      </div>
    </div>
  );
}
