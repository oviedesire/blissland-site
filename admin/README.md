Netlify CMS (GitHub-backed) — admin/ README

Overview
- This folder contains the Netlify CMS admin entry and configuration.
- The CMS is configured to use the GitHub backend. You must register a GitHub OAuth app and set the `repo` and `client_id` in `config.yml`.

Quick steps
1. Replace placeholders
   - Open `admin/config.yml` and set `repo: GITHUB_USER/REPO` to your GitHub repo (e.g. `praise/blissland-site`).
   - Create a GitHub OAuth app (Settings → Developer settings → OAuth Apps) and set the callback URL to:
     - `https://your-deploy-domain.com/admin/` when deployed to Netlify/Vercel, or
     - `http://localhost:3000/admin/` for local testing with a proxy server.
   - Copy the OAuth app Client ID into `client_id` in `config.yml`.

2. Local testing
- Netlify CMS requires a Git backend or a proxy for local sign-in. For quick local testing use the `netlify-cms-proxy-server`:

```bash
# install globally if needed
npm install -g netlify-cms-proxy-server
# run proxy (from project root)
netlify-cms-proxy-server
```

Then open the admin at `http://localhost:8080/admin/` (proxy serves the admin and talks to GitHub on your behalf).

3. Recommended deployment for easiest auth
- Deploy the site to Netlify and enable Identity + Git Gateway — Netlify handles auth and Git commits automatically.
- If you prefer Vercel, you'll need a GitHub OAuth app and to use the GitHub backend (as configured above). For some workflows you may also opt for a GitHub App or a third-party proxy.

4. Content paths & integration
- News items: `content/news/*.md` (frontmatter: title, date, excerpt, cover)
- Gallery images: uploaded to `public/uploads` and entries created under `content/gallery`.
- After adding content, update the Next.js data layer to read from `content/` (I can scaffold code to parse markdown and replace the mock `lib/news.ts`).

Next steps I can take for you
- Scaffold example `content/news/*.md` and `content/gallery/*.md` entries.
- Update `lib/news.ts` to read markdown files from `content/news` and generate routes.
- Provide exact steps to create the GitHub OAuth app and deploy to Netlify or Vercel.

Tell me which next step you'd like me to run now.