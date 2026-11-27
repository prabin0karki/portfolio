# Prabin Karki: Portfolio

Personal portfolio of Prabin Karki, Senior Backend Engineer. Built with **React 18 + Vite**, CSS Modules and no UI framework.

Live: https://www.kprabin.com.np

## Scripts

```bash
pnpm install
pnpm dev       # local dev server (http://localhost:5173)
pnpm build     # production build -> dist/
pnpm preview   # serve the production build
pnpm lint      # ESLint
```

## Structure

```
public/                 Static files copied as-is (resume PDF, favicons, og-image, robots, sitemap, _headers)
src/
  data/                 All site content. Edit these to update the portfolio
    profile.js          Name, title, summary, contact details, socials, stats
    about.js            About paragraphs, highlights, interests
    skills.js           Skill groups and practices
    experience.js       Work history
    projects.js         Featured projects (+ images)
    writing.js          Medium articles
    education.js        Education
    navigation.js       Header/footer nav items
  components/
    ui/                 Reusable primitives: Button, Section, Tag, Icon, SocialLinks, ThemeToggle
    layout/             Header (responsive nav), Footer
    ContactForm.jsx     Validated contact form (Formspree)
  sections/             Page sections: Hero, About, Skills, Experience, Projects, Writing, Education, Contact
  layouts/MainLayout.jsx
  pages/Home.jsx
  hooks/                useTheme, useActiveSection, useReveal
  styles/               Design tokens (light/dark) and base styles
  assets/images/        Optimized WebP images
legacy/                 Previous static (jQuery) version of the site, kept for reference; not deployed
```

## Updating content

- **Resume:** replace `public/Prabin_Karki_Senior_Backend_Developer_CV.pdf` (keep the file name, or update `profile.resume` in `src/data/profile.js`).
- **Projects:** add an entry in `src/data/projects.js`; drop 640px and 1200px WebP screenshots in `src/assets/images/`.
- **Contact form:** posts to the Formspree endpoint in `src/data/profile.js` (`contactFormEndpoint`).

## Deployment

This is now a build-step site. Configure the host (Cloudflare Pages / Netlify / etc.) with:

- Build command: `pnpm install && pnpm build` (pnpm is pinned via `packageManager` in package.json)
- Output directory: `dist`
- Node: 18+ with Corepack (`corepack enable`) or pnpm 10 installed

`public/_headers` sets security headers and long-term caching for hashed assets (Cloudflare Pages / Netlify format).
