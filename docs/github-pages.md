# Hosting this portfolio on GitHub Pages

GitHub Pages serves **static files only** (HTML, CSS, JS, images). This project uses **`yarn generate`** (`nuxt generate`), which builds a fully static site into **`.output/public`**.

Hosting on GitHub Pages for a **public repository** is **free**. Private repos need a paid GitHub plan for Pages (see [GitHub billing docs](https://docs.github.com/en/billing)).

---

## What was added in the repo

| Item | Purpose |
|------|---------|
| [`public/.nojekyll`](../public/.nojekyll) | Disables Jekyll on Pages. Without it, folders like `_nuxt` can be ignored and the site breaks. |
| [`app.baseURL` via `NUXT_APP_BASE_URL`](../nuxt.config.ts) | Project sites are served under `https://USER.github.io/REPO/`; asset and router URLs must use that prefix. |
| [`NUXT_PUBLIC_SITE_URL`](../nuxt.config.ts) | Sets `@nuxtjs/i18n` `baseUrl` for canonical / Open Graph URLs during static generation. |
| [`.github/workflows/github-pages.yml`](../.github/workflows/github-pages.yml) | Builds on push to `main` and deploys with the official Pages actions. |

---

## One-time setup on GitHub

1. **Push this repository** to GitHub (if it is not there yet).

2. **Enable GitHub Pages**
   - Open the repo on GitHub → **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, choose **GitHub Actions** (not “Deploy from a branch” unless you prefer that manual flow).

3. **Default branch**
   - The workflow runs on pushes to **`main`**. If your default branch is **`master`**, either rename it to `main` or edit [`.github/workflows/github-pages.yml`](../.github/workflows/github-pages.yml) and change:

     ```yaml
     branches:
       - master
     ```

4. **Wait for the first deploy**
   - **Actions** tab → open **Deploy static site to GitHub Pages** → confirm the job succeeds.
   - After a few minutes, the site URL appears in **Settings → Pages** (and on the workflow run).

**Site URL patterns**

- Normal repo named e.g. `portfolio`: **`https://YOUR_USERNAME.github.io/portfolio/`**
- Special repo named **`YOUR_USERNAME.github.io`**: **`https://YOUR_USERNAME.github.io/`** (site at domain root; workflow sets `NUXT_APP_BASE_URL=/` automatically)

---

## How the workflow picks the base path

The workflow sets environment variables before `yarn generate`:

- If the repository name ends with **`.github.io`** → `NUXT_APP_BASE_URL=/` and `NUXT_PUBLIC_SITE_URL=https://OWNER.github.io/`
- Otherwise → `NUXT_APP_BASE_URL=/REPO_NAME/` and `NUXT_PUBLIC_SITE_URL=https://OWNER.github.io/REPO_NAME/`

If you rename the repository, push again so the next build uses the new name.

---

## Local checks

Same output CI uses:

```bash
yarn install --immutable
yarn generate
```

Preview locally (serves the static folder):

```bash
npx serve .output/public
```

To mimic a **project** site locally (replace `portfolio` with your repo name):

```bash
export NUXT_APP_BASE_URL=/portfolio/
export NUXT_PUBLIC_SITE_URL=https://YOUR_USERNAME.github.io/portfolio/
yarn generate
npx serve .output/public
```

---

## Troubleshooting

| Symptom | Likely cause |
|--------|----------------|
| Blank page or 404 on assets | Missing `.nojekyll` (already added under `public/`). Redeploy. |
| Wrong paths / broken CSS after rename | Base URL comes from repo name; rebuild after renaming the repo. |
| Workflow does not run | Branch is not `main`, or workflow file not on default branch. |
| “Environment `github-pages`” approval | First deploy may require approving the **github-pages** environment once (org/repo policies). |

---

## Official references

- [GitHub Pages documentation](https://docs.github.com/en/pages)
- [Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Nuxt static deployment](https://nuxt.com/deploy/static)
