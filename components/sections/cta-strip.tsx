import Link from 'next/link';

export function CtaStrip({
  title,
  description,
  primaryCta,
  secondaryCta
}: {
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
}) {
  return (
    <section className="bg-gold/10 py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue">Join the community</p>
          <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl">{title}</h2>
          <p className="mt-4 text-slate-700">{description}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href={primaryCta.href} className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue">
            {primaryCta.label}
          </Link>
          <Link href={secondaryCta.href} className="inline-flex items-center justify-center rounded-full border border-navy bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-slate">
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
