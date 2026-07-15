# Portfolio-Site

Personal portfolio and blog, built with plain HTML, CSS and JavaScript — no framework, no build step. Deployed on GitHub Pages with a custom domain.

**Live at [variableduck.com](https://variableduck.com/)**

## Structure

```
index.html            Home (about, latest blog, highlighted project, film photos)
html/blog.html        Blog list (with tag filter)
html/project.html     Project list (with tag filter)
blog/blog0-5.html     Individual blog posts
css/style.css         The only stylesheet (dark theme, CSS variables at the top)
script/script.js      Tag filter for the two list pages (progressive enhancement)
image/                Images and favicon
feed.xml              RSS feed          } hand-maintained,
sitemap.xml           Sitemap           } see checklists below
llms.txt              AI/LLM summary    }
robots.txt            Allows all crawlers, AI crawlers explicitly opted in
CNAME                 Custom domain (do not touch)
```


## Checklist: adding a blog post

1. **Copy the newest post** (e.g. `blog/blog5.html`) to `blog/blog6.html` and update:
   - `<title>`, `<meta name="description">` (accurate one-liner, no keyword soup), `<meta name="keywords">`
   - `<link rel="canonical">`, `og:url`, and the og/twitter title + description
   - The JSON-LD block: `headline`, `datePublished` (YYYY-MM-DD), `url`, `mainEntityOfPage`
   - Body: the `<h1>` (full topic, self-contained), the `Date:`/`Tag:` meta lines (keep the `<time datetime>` attribute), then the content. Put images in `image/` with factual alt text.
2. **`html/blog.html`**: add a new `<li class="<tags>">` at the top of the list (title link, date, tag, short description) and a matching entry at the top of the `blogPost` array in the Blog JSON-LD. If the post introduces a new tag, add a `data-filter` button.
3. **`index.html`**: update the "Latest Blog:" section (link, date, description).
4. **`feed.xml`**: add an `<item>` at the top. `pubDate` must be RFC-822 format, e.g. `Wed, 15 Jul 2026 00:00:00 GMT` — get it with:
   ```bash
   python3 -c "from datetime import datetime; print(datetime(2026,7,15).strftime('%a, %d %b %Y 00:00:00 GMT'))"
   ```
5. **`sitemap.xml`**: add a `<url><loc>...</loc></url>` entry.
6. **`llms.txt`**: add a line under `## Blog` (title, link, one-line summary, publish date).

## Checklist: adding a project

1. **`html/project.html`**: add a new `<li class="<tags>">` at the top of the list — `<h2>` title linking to the repo, a `Tag:` meta line, and a short description. Add a `data-filter` button if the tag is new.
2. **`index.html`**: optionally swap the "Highlighted Project:" section.
3. **`llms.txt`**: add a line under `## Projects`.

## After publishing

- Verify the page renders at variableduck.com and the filter buttons still work.
- Spot-check `https://variableduck.com/feed.xml` and `sitemap.xml` still load as valid XML.
- Optionally re-submit the sitemap in Google Search Console and run the new post through [Google's Rich Results Test](https://search.google.com/test/rich-results).
