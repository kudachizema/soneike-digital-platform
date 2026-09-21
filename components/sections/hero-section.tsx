import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  stats
}: {
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  stats: Array<{ value: string; label: string }>;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.22),_transparent_25%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 py-20 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue">{badge}</p>
          <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-navy md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-700">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <Button href={secondaryCta.href} variant="secondary">{secondaryCta.label}</Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-navy/10 bg-white p-4 shadow-soft">
                <p className="text-2xl font-bold text-navy">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-navy p-6 text-white shadow-soft md:p-8">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-gold">School focus</p>
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-sm text-sky">Academics</p>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[92%] rounded-full bg-gold" />
                </div>
              </div>
              <div>
                <p className="text-sm text-sky">Sport</p>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[88%] rounded-full bg-gold" />
                </div>
              </div>
              <div>
                <p className="text-sm text-sky">Discipline</p>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[96%] rounded-full bg-gold" />
                </div>
              </div>
              <div>
                <p className="text-sm text-sky">Leadership & Community</p>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[90%] rounded-full bg-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
