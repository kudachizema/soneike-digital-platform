import './globals.css';
import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-display'
});

export const metadata: Metadata = {
  title: 'Soneike High School | Lux et Auctus',
  description:
    'Soneike High School in Kuils River, Cape Town, South Africa. A modern school platform celebrating academics, sport, discipline and leadership.',
  keywords: ['Soneike High School', 'Cape Town school', 'Kuils River school', 'Lux et Auctus'],
  openGraph: {
    title: 'Soneike High School',
    description: 'Modern digital platform for Soneike High School, Cape Town, South Africa.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} bg-slate text-ink antialiased`}>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_32%)]">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
