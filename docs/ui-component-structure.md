# Main UI component structure

## Design system
The interface should feel clean, modern and school-focused, with the following style foundations:

- Primary palette: Navy blue, gold, white, supportive blue
- Strong typography for headings and school branding
- Clear spacing and rounded card surfaces
- Accessible contrast and focus states
- Mobile-first layout system

## Core UI component map

### Layout components
- `SiteHeader`
- `SiteFooter`
- `PageHero`
- `SectionHeader`
- `Container`
- `Card`

### Navigation and interaction
- `MainNav`
- `MobileMenu`
- `Button`
- `PrimaryLinkButton`
- `SecondaryLinkButton`
- `Tag`

### Content modules
- `HeroSection`
- `FourPillarsSection`
- `LatestNewsSection`
- `UpcomingEventsSection`
- `SportsHighlightsSection`
- `LearnerAchievementsSection`
- `CommunityImpactSection`
- `CTASection`

### Content cards
- `NewsCard`
- `EventCard`
- `AchievementCard`
- `StaffCard`
- `ClubCard`
- `SportsTeamCard`

### Admin dashboard components
- `DashboardShell`
- `SidebarNav`
- `StatCard`
- `DataTable`
- `FormField`
- `FileUpload`
- `StatusBadge`

## Example structure
```text
components/
  layout/
    SiteHeader.tsx
    SiteFooter.tsx
    DashboardShell.tsx
  sections/
    HeroSection.tsx
    FourPillarsSection.tsx
    NewsGrid.tsx
    EventsList.tsx
    SportsHighlights.tsx
    AchievementGrid.tsx
    CommunityImpact.tsx
  ui/
    Button.tsx
    Card.tsx
    SectionHeader.tsx
    Badge.tsx
```

## Content data flow
Public pages should source structured content from typed data modules or CMS APIs. The UI should be built so that content is not deeply coupled to page components.

## Accessibility standards
- Semantic landmarks (`header`, `main`, `footer`, `nav`)
- Sufficient color contrast
- Keyboard-accessible links and buttons
- Alt text for all informative images
- Focus styling visible on mobile and desktop
