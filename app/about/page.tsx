import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20 md:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">About Soneike</p>
        <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">A school grounded in excellence</h1>
      </div>

      <div className="space-y-6 text-lg text-slate-700">
        <p>
          Soneike High School is a dynamic and values-driven school in Kuils River, Cape Town, South Africa. The school is committed to helping every learner grow academically, socially and personally.
        </p>
        <p>
          Through a strong emphasis on academics, sport, discipline and leadership, the school creates an environment where learners are challenge-ready, resilient and community-minded.
        </p>
        <p>
          Our vision is to develop learners who are confident, disciplined and prepared for the opportunities and responsibilities of a changing world.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-navy">Our ethos</h2>
          <p className="mt-3 text-slate-700">We believe education must balance intellectual growth with values, character and service.</p>
        </div>
        <div className="rounded-3xl bg-navy p-6 text-white shadow-soft">
          <h2 className="text-2xl font-bold">Our motto</h2>
          <p className="mt-3 text-lg italic text-gold">Lux et Auctus</p>
          <p className="mt-2 text-sky">Light and growth.</p>
        </div>
      </div>

      <div className="mt-12 flex gap-4">
        <Button href="/contact">Contact the school</Button>
        <Button variant="secondary" href="/academics">Explore academics</Button>
      </div>
    </div>
  );
}
