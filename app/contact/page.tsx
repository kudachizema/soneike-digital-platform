import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Contact</p>
      <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Connect with Soneike High School</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-navy">School details</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>Soneike High School</li>
            <li>Kuils River, Cape Town, South Africa</li>
            <li>Email: admin@soneikehigh.co.za</li>
            <li>Phone: +27 (0)21 000 0000</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-navy p-6 text-white shadow-soft">
          <h2 className="text-2xl font-bold">Enquire</h2>
          <p className="mt-4 text-sky">We welcome enquiries from parents, learners, community partners and prospective staff members.</p>
        </div>
      </div>

      <div className="mt-10">
        <Button href="/about">Learn more about the school</Button>
      </div>
    </div>
  );
}
