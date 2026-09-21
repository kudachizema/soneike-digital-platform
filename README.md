# Soneike Digital Platform

A modern digital platform for Soneike High School in Kuils River, Cape Town, South Africa.

## Overview
This project lays the foundation for a scalable school management and communications platform built around the school’s identity, values and four pillars:

- Academics
- Sport
- Discipline
- Culture, Leadership & Community

## Product goals
- Present Soneike High School professionally online
- Provide a modern public-facing website for parents, learners and community members
- Support future school operations and administrator workflows
- Scale into a broader digital school management platform

## Tech stack
- Next.js 14
- TypeScript
- Tailwind CSS
- PostgreSQL + Prisma (planned for content + admin data model)
- NextAuth.js or secure auth layer (planned for admin dashboard)

## Architecture and planning
See the documentation in the `docs/` folder for:
- architecture overview
- database and schema proposal
- component structure
- roadmap

## Project structure
- `app/` – application routes and page layouts
- `components/` – reusable UI sections and layouts
- `docs/` – architecture and planning documentation
- `lib/` – reusable data and helpers
- `public/` – static assets

## Development workflow
```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Status
Foundation and homepage implementation are in progress, with the platform designed for future growth into a full school administration and content management system.
