import { Button } from '@/components/ui/button';

export default function SportPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Sport</p>
      <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Sporting excellence with teamwork and discipline</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-navy">Codes supported</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Soccer</li>
            <li>Netball</li>
            <li>Handball</li>
            <li>Rugby</li>
            <li>Hockey</li>
            <li>Athletics</li>
            <li>Chess</li>
            <li>Drummies</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-navy p-6 text-white shadow-soft">
          <h2 className="text-2xl font-bold">Sports management</h2>
          <p className="mt-4 text-sky">The sports module is designed to support fixtures, results, teams, coaching, league structures and performance tracking.</p>
        </div>
      </div>

      <div className="mt-10">
        <Button href="/contact">Contact sports administration</Button>
      </div>
    </div>
  );
}
