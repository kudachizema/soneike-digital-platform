import Link from 'next/link';
import { siteNav } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <p className="text-lg font-bold">Soneike High School</p>
          <p className="mt-3 text-sky">Kuils River, Cape Town, South Africa</p>
          <p className="mt-2 text-sm text-sky">Lux et Auctus</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sky">
            {siteNav.slice(0, 8).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contact</p>
          <ul className="mt-4 space-y-2 text-sky">
            <li>admin@soneikehigh.co.za</li>
            <li>+27 (0)21 000 0000</li>
            <li>Monday to Friday</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
