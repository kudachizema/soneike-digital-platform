# Project architecture

## 1. Product vision
Soneike High School needs a digital platform that presents the school professionally while supporting future administrative workflows. The platform will evolve from a public-facing school website into a broader digital management platform for academics, sport, news, events, learner achievements, community work and school administration.

## 2. Core architecture principles
- Mobile-first, accessible design
- Clear separation between public website and secure admin dashboard
- Reusable UI components and content-driven architecture
- Scalable schema design for future school operations
- Fast loading and SEO-friendly structure
- Strong role-based access for school administrators

## 3. Recommended stack
### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

### Backend and data layer
- PostgreSQL
- Prisma ORM
- API routes or server actions for content management

### Authentication and authorisation
- NextAuth.js or authentication provider with role-based access control
- Admin-only access to management modules
- Separate permission levels: principal, admin, department, sports coordinator, staff

### Asset management
- Cloud object storage (e.g. Supabase Storage or AWS S3)
- Optimised image handling with Next.js Image

## 4. High-level system design
The platform is split into three main layers:

1. Public website layer
   - Home
   - About
   - Academics
   - Sport
   - Discipline
   - Culture & Leadership
   - News
   - Events
   - Contact

2. Content and administration layer
   - News management
   - Event calendar management
   - Sports fixtures and results
   - Announcements
   - Staff profiles
   - Learner achievements
   - Clubs and societies

3. Secure admin dashboard
   - Manage content
   - Moderate submissions
   - Review sports data
   - Update school information
   - Upload images and media

## 5. Route architecture
### Public application routes
- `/`
- `/about`
- `/academics`
- `/sport`
- `/discipline`
- `/culture-leadership`
- `/news`
- `/events`
- `/clubs`
- `/community`
- `/hesop`
- `/achievements`
- `/staff`
- `/contact`

### Admin routes
- `/admin`
- `/admin/news`
- `/admin/events`
- `/admin/fixtures`
- `/admin/results`
- `/admin/announcements`
- `/admin/images`
- `/admin/achievements`
- `/admin/clubs`
- `/admin/staff`

## 6. Security model
- Public pages are read-only and SEO-friendly
- Admin routes require secure authentication
- Different role permissions for sports, academics, staff and marketing administrators
- Content publishing workflow for school approvals
- Sanitised data handling and strict validation

## 7. Content model strategy
The platform should support both structured and flexible content:
- Standard pages with fixed content blocks
- News and blog-like content with categories and tags
- Event records with start date, end date and location
- Sports records with teams, fixtures and standings
- Media assets with alt text and category metadata

## 8. Future growth path
This foundation is intentionally designed so the platform can later become a complete school digital management system with:
- learner and parent portals
- attendance and behaviour tracking
- academic performance dashboards
- transport and admissions workflows
- staff management and communication tools

## 9. Implementation strategy
Phase 1: public website foundation and homepage
Phase 2: school content pages and CMS schema
Phase 3: news, events and achievement modules
Phase 4: sports management module
Phase 5: admin dashboard and secure auth
Phase 6: scale, testing and deployment
