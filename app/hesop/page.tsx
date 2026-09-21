export default function HESOPPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">HESOP</p>
      <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Health, Environment and School Optimisation Programme</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-navy">Programme focus</h2>
          <p className="mt-4 text-slate-700">
            HESOP supports healthy habits, environmental awareness and a school environment that promotes wellbeing and responsibility.
          </p>
        </div>
        <div className="rounded-3xl bg-navy p-6 text-white shadow-soft">
          <h2 className="text-2xl font-bold">Key priorities</h2>
          <ul className="mt-4 space-y-2 text-sky">
            <li>• Health and wellness</li>
            <li>• Environmental responsibility</li>
            <li>• Positive learning environments</li>
            <li>• Learner participation and ownership</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
