# Talgat Zakiryanov - Portfolio

A modern, responsive personal portfolio webpage showcasing the professional experience, skills, and projects of Talgat Zakiryanov, a Backend Developer with 10+ years of experience in building high-load web services, SaaS products, and microservices.

## Overview

This portfolio demonstrates expertise in backend development with Node.js/NestJS, fintech solutions, performance optimization, and team leadership. The site features a dark theme with cyan accent colors, smooth scroll animations, and a clean, contemporary design that emphasizes technical depth and professional achievements.

## Features

- **Dark Theme UI**: Modern dark mode with bright cyan/blue accents for visual appeal
- **Smooth Animations**: Intersection Observer-based scroll animations with fade-in and slide-up effects
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Navigation**: Smooth scroll navigation with sticky header
- **Project Showcase**: Highlighted portfolio projects with tech stack details
- **SEO Optimized**: Proper metadata and semantic HTML structure

## Components

### Core Components
- **Header** (`components/header.tsx`): Sticky navigation with smooth scroll behavior and mobile menu
- **Hero** (`components/hero.tsx`): Landing section with name, title, tagline, and CTA buttons
- **About** (`components/about.tsx`): Professional summary highlighting experience and expertise
- **Experience** (`components/experience.tsx`): Detailed work history with 6 positions, achievements, and tech stacks
- **Achievements** (`components/achievements.tsx`): Key accomplishments and project highlights
- **Skills** (`components/skills.tsx`): Organized tech stack including backend, databases, messaging, infrastructure, and testing
- **Portfolio** (`components/portfolio.tsx`): Showcase of notable projects with links and full tech details
- **Education** (`components/education.tsx`): Educational background and certifications
- **Contact** (`components/contact.tsx`): "Get in Touch" section with contact information and social icons
- **Footer** (`components/footer.tsx`): Footer with copyright and quick links

### UI Components
- Theme Provider and other shadcn/ui components for consistent styling

## Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Library**: Shadcn/UI
- **Animations**: CSS and IntersectionObserver API

### Development
- **Node.js Runtime**: Next.js/Vercel Environment
- **Font Family**: Geist (sans) and Geist Mono

## Design

The portfolio uses a carefully selected color scheme:
- **Primary Color**: Cyan/Blue (accent)
- **Background**: Dark/Near-black theme
- **Neutral**: Grays and whites for text

All components feature:
- Smooth hover effects and transitions
- Responsive typography with proper hierarchy
- Accessible ARIA labels and semantic HTML
- Mobile-optimized navigation and layouts

## Pages & Sections

1. **Header/Navigation** - Sticky header with links to all sections
2. **Hero Section** - Eye-catching introduction with call-to-action
3. **About Me** - Professional profile and experience overview
4. **Work Experience** - 6 detailed positions with responsibilities and achievements
5. **Achievements** - Key project highlights and accomplishments
6. **Skills & Technologies** - Comprehensive tech stack across multiple categories
7. **Portfolio** - Featured projects with GitHub links and tech details
8. **Education** - Academic background and professional certifications
9. **Get in Touch** - Contact information and social media links
10. **Footer** - Navigation and copyright information

## Project Structure

\`\`\`
app/
├── page.tsx              # Main portfolio page
├── layout.tsx            # Root layout with metadata and fonts
└── globals.css           # Global styles and theme variables

components/
├── header.tsx            # Navigation header
├── hero.tsx              # Hero/landing section
├── about.tsx             # About me section
├── experience.tsx        # Work experience timeline
├── achievements.tsx      # Key accomplishments
├── skills.tsx            # Technical skills showcase
├── portfolio.tsx         # Portfolio projects
├── education.tsx         # Education & certifications
├── contact.tsx           # Contact information
├── footer.tsx            # Footer
└── theme-provider.tsx    # Theme configuration
\`\`\`

## How It's Demonstrated

This is a **portfolio project** that showcases modern web development best practices including:
- Component-based architecture
- Responsive design patterns
- Animation and interaction design
- TypeScript type safety
- Semantic HTML and accessibility
- Clean code organization
- Professional UI/UX design

## Getting Started

To view the portfolio, deploy to Vercel or run locally with:

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The portfolio can be deployed to Vercel with a single click using the Vercel platform.

---

Built with modern web technologies showcasing full-stack development expertise.
