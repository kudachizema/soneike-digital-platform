# Data and security integration

## Database setup
1. Copy `.env.example` to `.env.local`.
2. Set `DATABASE_URL` to a PostgreSQL database.
3. Install dependencies with `npm install`.
4. Generate the Prisma client:

```bash
npm run db:generate
```

5. Create the first migration:

```bash
npm run db:migrate -- --name init
```

6. Seed the school and initial admin record:

```bash
npm run db:seed
```

The seed password is intentionally a development-only value and must be changed before deployment.

## Security requirements before production
- Replace the development seed password immediately.
- Set a strong `NEXTAUTH_SECRET` or equivalent session secret.
- Add a production authentication provider and signed, HTTP-only sessions.
- Protect all `/admin` routes with server-side authentication middleware.
- Add role checks for principal, admin, sports coordinator and editor actions.
- Validate all mutation payloads with a schema validator such as Zod.
- Add CSRF protection, rate limiting and audit logging to content mutations.
- Never commit `.env.local`, database credentials or uploaded private media.

## Data boundaries
Every content record includes `schoolId`, allowing the platform to support more schools later without mixing tenant data. Admin queries must always scope records to the authenticated user's school.

## Current foundation
- Prisma schema for school identity, users, news, events, sports, achievements, clubs, staff and media
- Prisma client singleton for server-side queries
- Database health endpoint at `/api/health`
- Admin sign-in UI foundation at `/admin/login`
- Seed script for local development

The sign-in page is deliberately presented as an integration foundation; production authentication must be completed before exposing the dashboard publicly.
