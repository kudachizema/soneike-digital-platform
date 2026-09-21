import { Button } from '@/components/ui/button';

export default function AcademicsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Academics</p>
      <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Academic excellence with purpose</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-navy">Strong curriculum</h2>
          <p className="mt-3 text-slate-700">Learners are supported through a focused academic programme aligned to future readiness and growth.</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-navy">Dedicated faculty</h2>
          <p className="mt-3 text-slate-700">Teachers guide learners with academic rigor, encouragement and individual support.</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-navy">Holistic growth</h2>
          <p className="mt-3 text-slate-700">Learning extends beyond the classroom into leadership, wellbeing and community involvement.</p>
        </div>
      </div>

      <div className="mt-12 rounded-3xl bg-navy p-8 text-white shadow-soft">
        <h2 className="text-2xl font-bold">Our academic focus</h2>
        <ul className="mt-6 grid gap-3 text-sky md:grid-cols-2">
          <li>• Subject mastery and deep understanding</li>
          <li>• Critical thinking and problem solving</li>
          <li>• Learner support and mentoring</li>
          <li>• Preparation for tertiary pathways</li>
        </ul>
      </div>

      <div className="mt-8">
        <Button href="/contact">Speak to the school</Button>
      </div>
    </div>
  );
}
