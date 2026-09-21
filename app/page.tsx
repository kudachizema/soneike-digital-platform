import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/sections/hero-section';
import { FourPillarsSection } from '@/components/sections/four-pillars-section';
import { NewsGrid } from '@/components/sections/news-grid';
import { EventsList } from '@/components/sections/events-list';
import { SportsHighlights } from '@/components/sections/sports-highlights';
import { AchievementsSection } from '@/components/sections/achievements-section';
import { CommunityImpactSection } from '@/components/sections/community-impact-section';
import { CtaStrip } from '@/components/sections/cta-strip';
import {
  newsItems,
  events,
  sportsHighlights,
  achievements,
  communityProjects,
  pillars,
  schoolProfile
} from '@/lib/site-data';

export default function HomePage() {
  return (
    <>
      <HeroSection 
        badge="Lux et Auctus"
        title="Excellence in learning, leadership and community"
        subtitle="Soneike High School inspires confident, skilled and principled young people in Kuils River, Cape Town."
        primaryCta={{ href: '/about', label: 'About Soneike' }}
        secondaryCta={{ href: '/contact', label: 'Contact the school' }}
        stats={[
          { value: '500+', label: 'Learners' },
          { value: '20+', label: 'Sports codes' },
          { value: '4', label: 'Core pillars' },
          { value: '25+', label: 'Clubs & societies' }
        ]}
      />

      <FourPillarsSection pillars={pillars} />

      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Latest news</p>
            <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl">School updates</h2>
          </div>
          <Link href="/news" className="hidden text-sm font-semibold text-blue hover:text-navy sm:inline-flex">
            View all news →
          </Link>
        </div>
        <NewsGrid items={newsItems.slice(0, 3)} />
      </div>

      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Calendar</p>
              <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl">Upcoming events</h2>
            </div>
            <Link href="/events" className="hidden text-sm font-semibold text-blue hover:text-navy sm:inline-flex">
              View calendar →
            </Link>
          </div>
          <EventsList items={events.slice(0, 3)} />
        </div>
      </div>

      <SportsHighlights items={sportsHighlights.slice(0, 3)} />

      <AchievementsSection items={achievements.slice(0, 3)} />

      <CommunityImpactSection items={communityProjects.slice(0, 3)} />

      <CtaStrip
        title="A school community built on purpose and pride"
        description="Whether you are a parent, learner, coach or supporter, Soneike High School welcomes you to be part of a dynamic and future-focused learning community."
        primaryCta={{ href: '/contact', label: 'Get in touch' }}
        secondaryCta={{ href: '/academics', label: 'Explore academics' }}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="rounded-3xl bg-navy p-8 text-white shadow-soft md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">School identity</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">{schoolProfile.name}</h2>
              <p className="mt-4 max-w-xl text-base text-sky md:text-lg">
                Located in {schoolProfile.location}, the school values academic excellence, discipline, sport and leadership in a caring and ambitious learning environment.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-gold">Motto</p>
              <p className="mt-3 font-display text-2xl italic text-white">{schoolProfile.motto}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
