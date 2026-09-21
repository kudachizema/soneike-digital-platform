import Link from 'next/link';
import { siteNav } from '@/lib/site-data';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">S</div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">Soneike</p>
            <p className="font-display text-lg italic text-navy">High School</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-navy transition hover:text-blue">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact">Enquire now</Button>
        </div>
      </div>
    </header>
  );
}
