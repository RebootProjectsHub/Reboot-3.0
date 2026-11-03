# GEO rules for reboot.no

These rules apply to every new or changed page meant to get Reboot cited in ChatGPT, Google AI Mode and other AI answers. This includes /sporsmal/, /tjenester/ and blog posts. Read this file before writing anything.

## 1. Inventory first, every time

Before you draft anything, list every page that exists:

- the page registry in `lib/`
- the folders `sporsmal/`, `app/`, `posts/` and `cases/`
- the live https://reboot.no/sitemap.xml

For each page, note the question or intent it answers: what the searcher actually wants to know.

## 2. One page per intent (no duplicates)

- If an existing page already answers the same question, or a close paraphrase of it, improve that page. Do not create a new one. Two pages chasing one question split the citations and confuse both Google and the AI engines about which page to trust.
- A new page is allowed only when its intent clearly differs from every existing page. In the summary, say in one sentence how it differs from the closest existing page.
- A Q&A page and a service page may cover the same topic, but with different jobs. The Q&A page answers the question neutrally. The service page sells. The two must link to each other.
- No city or location copies of the same page (for example "... i Oslo", "... i Bergen" with the same body). One page per intent. Mention the location in the text where it is true.
- Never reuse a title, H1 or meta description that another page already has. Check the built output for duplicates.

## 3. Facts must match the site

- Prices, included hours, delivery times, notice periods and service names must match the pricing page (/nettside-priser) and the /tjenester pages exactly. If a page needs a fact the site doesn't state, leave it out and flag it to Henrik. Never invent one.
- No made-up statistics, clients, quotes, reviews, rankings or results. Name a client only if a /cases page already exists for them.
- Business details exactly as in the Google Business Profile: Reboot, Sandakerveien 138, 0484 Oslo, 97 67 58 48.
- Never name Mediabooster. Name other competitors only where an existing page already does (for example the Coretrek page), and never negatively.

## 4. Page format (same as the existing Q&A pages)

- The H1 is the question, in the words a customer would use.
- The first two or three sentences answer the question directly, so they can be quoted on their own.
- Use short sections with descriptive H2s, a "Vanlige spørsmål" block with three questions (these feed the FAQ schema), and a soft call to action at the end.
- Metadata: title as "<question> | Reboot", a meta description under 160 characters, a canonical URL, an OG image, and the page registered so it appears in the sitemap and in the /sporsmal/ list.
- Hero image: a free Unsplash photo with the photographer credited in the alt text or caption. Make the hero, thumbnail and OG crops at the existing sizes, as WebP.
- Norwegian copy conventions: «» quotes, never en dashes, non-breaking spaces in prices.

## 5. Internal links

- Link from the new or changed page to two or three related /sporsmal/ pages and to the relevant /tjenester page.
- Add a link back to the new page from the most closely related existing page.
- Check every link in the built output. None may 404.

## 6. Quality bar

- No thin pages. If there isn't enough real substance to answer the question well, improve an existing page instead.
- Write for a small business owner, not for search engines. No keyword stuffing and no repeating the question in every heading.
- At most one new page per month. Improving existing pages has no limit.

## 7. Publishing

- Never push to main without Henrik's explicit approval in the conversation. Work on a branch called `geo/<slug>`.
- The build must pass. Check the static output for title, description, canonical, OG image, FAQ schema, sitemap entry and the /sporsmal/ list entry.
- Commit only the files for this change. Leave unrelated uncommitted work (for example `launch.json` or the `design/` folder) alone.
- Follow the commit message convention in CLAUDE.md.
