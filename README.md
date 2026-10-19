# Sneha Choudhury — Portfolio

Built with [Astro](https://astro.build). Pages: Home, About, Experience, Art, plus a case-study page per selected-work item.

## Run it locally

```bash
npm install      # first time only
npm run dev      # then open http://localhost:4321
```

## Where to edit things

| What | File |
|---|---|
| Intro line, email, LinkedIn, CV, artist statement | `src/data/site.ts` |
| Stats, timeline, leadership, certifications | `src/data/experience.ts` |
| Selected work / case studies | `src/data/work.ts` |
| Paintings & sketches | `src/data/art.ts` |
| Colours, fonts, spacing | `src/styles/global.css` |

### Adding art
1. Put the photo in `public/art/` (e.g. `public/art/sunset.jpg`). Keep it under ~1 MB, ~2000px on the long side.
2. In `src/data/art.ts`, replace the placeholder list with your pieces:
   ```ts
   export const artworks: Artwork[] = [
     { title: 'Sunset', year: 2025, medium: 'Acrylic on canvas', type: 'painting', ratio: '4/5', image: '/art/sunset.jpg' },
   ];
   ```

### Photos and CV
- About-page photos: `public/photos/` (set in `src/pages/about.astro`).
- CV: `public/Sneha_Choudhury_CV.pdf` (a version **without** your phone number).

## Deploy
The site is hosted on **GitHub Pages** at https://snehachoudhury.com.
Every push to the `main` branch rebuilds and publishes it automatically
(see `.github/workflows/deploy.yml`). The custom domain is set in `public/CNAME`.

```bash
git add -A
git commit -m "Describe your change"
git push
```
