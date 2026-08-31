# MattGloverMusic.com

Matt Glover's artist site: music/releases, photos, and Stonebridge Records.

Built with React + Vite + Tailwind + Framer Motion, following the same stack
and structure as `personal-website` (ElectricPulse).

## Running locally

```
npm install
npm run dev
```

## Before this goes live, replace the placeholders

- `src/siteConfig.js` &mdash; streaming links (Spotify/Apple Music/YouTube
  Music/SoundCloud), social links, contact emails.
- `src/components/About.jsx` &mdash; real bio copy.
- `src/pages/StonebridgePage.jsx` &mdash; real label mission/history and
  roster (currently just Matt Glover + a placeholder slot).
- `public/images/` &mdash; add more photos as they come in; reference them
  from `src/components/Photos.jsx`.

## Structure

- `/` &mdash; Hero, About, Music, Photos, Stonebridge teaser, Contact
- `/stonebridge` &mdash; dedicated Stonebridge Records page

## Deploying

`netlify.toml` is set up for a Netlify static deploy (SPA redirect to
`index.html`). Build command `npm run build`, publish dir `dist`.
