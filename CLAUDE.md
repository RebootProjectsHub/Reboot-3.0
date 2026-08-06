## Verification scope

Match verification effort to the risk of the change. Do not run the same live-deploy check on a one-line content edit as on a logic change.

For low-risk changes — swapping an image path, editing copy/text, changing a link target, or any edit to a data/content file (e.g. references.ts, page copy) that doesn't touch logic, components, routing, or build config:
- Make the edit, confirm it with a git diff, commit and push.
- Then stop. Do not start a dev server, do not inspect network requests, and do not poll or wait for the GitHub Pages deploy to finish.
- A correct git diff is sufficient proof for these.

For higher-risk changes — component or logic edits, routing, metadata/SEO, build or config files, anything that can break a page render:
- Verify as normal (type check, local dev server, live confirmation as needed).

If unsure which category a change falls in, treat it as higher-risk and verify.
