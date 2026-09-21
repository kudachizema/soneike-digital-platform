# Database and schema proposal

## Overview
The platform needs a flexible schema that supports both website content and future school administration. The database should separate public-facing content from secure internal management records.

## Core tables

### 1. `schools`
Stores the school-level identity.

```sql
CREATE TABLE schools (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255),
  country VARCHAR(255),
  motto VARCHAR(255),
  primary_color VARCHAR(50),
  secondary_color VARCHAR(50),
  accent_color VARCHAR(50),
  website_url TEXT,
  contact_email TEXT,
  phone VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 2. `users`
School staff and admin users.

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  school_id UUID REFERENCES schools(id),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT,
  role VARCHAR(50) NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 3. `pages`
Public website pages and structured page sections.

```sql
CREATE TABLE pages (
  id UUID PRIMARY KEY,
  school_id UUID REFERENCES schools(id),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  summary TEXT,
  content JSONB,
  is_published BOOLEAN DEFAULT TRUE,
  seo_title VARCHAR(255),
  seo_description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 4. `news_posts`
News and announcements.

```sql
CREATE TABLE news_posts (
  id UUID PRIMARY KEY,
  school_id UUID REFERENCES schools(id),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  body TEXT,
  featured_image_url TEXT,
  author_id UUID REFERENCES users(id),
  category VARCHAR(100),
  published_at TIMESTAMP,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 5. `events`
School calendar records.

```sql
CREATE TABLE events (
  id UUID PRIMARY KEY,
  school_id UUID REFERENCES schools(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP,
  location VARCHAR(255),
  category VARCHAR(100),
  is_featured BOOLEAN DEFAULT FALSE,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 6. `sports_codes`
List of supported sports codes.

```sql
CREATE TABLE sports_codes (
  id UUID PRIMARY KEY,
  school_id UUID REFERENCES schools(id),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  icon_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 7. `teams`
Sports teams and age groups.

```sql
CREATE TABLE teams (
  id UUID PRIMARY KEY,
  school_id UUID REFERENCES schools(id),
  sport_code_id UUID REFERENCES sports_codes(id),
  name VARCHAR(255) NOT NULL,
  gender VARCHAR(50),
  age_group VARCHAR(100),
  coach_id UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 8. `fixtures`
Fixtures, fixtures and schedules.

```sql
CREATE TABLE fixtures (
  id UUID PRIMARY KEY,
  school_id UUID REFERENCES schools(id),
  home_team_id UUID REFERENCES teams(id),
  away_team_id UUID REFERENCES teams(id),
  competition_name VARCHAR(255),
  venue VARCHAR(255),
  scheduled_at TIMESTAMP NOT NULL,
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 9. `results`
Match scores and results.

```sql
CREATE TABLE results (
  id UUID PRIMARY KEY,
  fixture_id UUID REFERENCES fixtures(id),
  home_score INT,
  away_score INT,
  winner_team_id UUID REFERENCES teams(id),
  notes TEXT,
  recorded_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 10. `achievements`
Learner and school achievements.

```sql
CREATE TABLE achievements (
  id UUID PRIMARY KEY,
  school_id UUID REFERENCES schools(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  learner_name VARCHAR(255),
  category VARCHAR(100),
  award_level VARCHAR(100),
  featured_image_url TEXT,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 11. `clubs`
Clubs and societies.

```sql
CREATE TABLE clubs (
  id UUID PRIMARY KEY,
  school_id UUID REFERENCES schools(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  convenor_id UUID REFERENCES users(id),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 12. `staff_members`
Academic and support staff.

```sql
CREATE TABLE staff_members (
  id UUID PRIMARY KEY,
  school_id UUID REFERENCES schools(id),
  full_name VARCHAR(255) NOT NULL,
  role VARCHAR(255),
  department VARCHAR(255),
  bio TEXT,
  photo_url TEXT,
  email TEXT,
  phone VARCHAR(50),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 13. `community_projects`
YCAP and community initiatives.

```sql
CREATE TABLE community_projects (
  id UUID PRIMARY KEY,
  school_id UUID REFERENCES schools(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  impact_summary TEXT,
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 14. `media_assets`
Images and document files.

```sql
CREATE TABLE media_assets (
  id UUID PRIMARY KEY,
  school_id UUID REFERENCES schools(id),
  file_name VARCHAR(255),
  file_type VARCHAR(100),
  url TEXT NOT NULL,
  alt_text TEXT,
  category VARCHAR(100),
  uploaded_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Design considerations
- Use UUIDs for globally unique records
- Use JSONB for flexible page section content
- Separate public and admin content workflows
- Keep sports management relational and query-friendly
- Add indexes on slug, published state, school id and date fields

## Recommended indexes
- `news_posts(school_id, published_at)`
- `events(school_id, start_date)`
- `fixtures(school_id, scheduled_at)`
- `teams(school_id, sport_code_id)`
- `pages(school_id, slug)`

## Future expansion
This schema can later support:
- learner profiles
- parent accounts
- attendance records
- discipline tracking
- academic marks and reports
- fee and admissions systems
