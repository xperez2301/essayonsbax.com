# Essayons Bax 10DLC Website Redesign

This package is a static replacement for the current public website at `essayonsbax.com`.

## What changed

- Redesigned the public homepage for a more professional logistics/dispatch presentation.
- Added SEO metadata, canonical URLs, and safer portal links using `rel="noopener noreferrer"`.
- Reworked SMS language around one clear opt-in workflow: the website consent form at `/sms-consent.html`.
- Updated the SMS consent page so the mobile phone number and consent checkbox are required.
- Strengthened privacy, terms, and SMS terms pages for 10DLC review.
- Added campaign copy in `TELNYX-10DLC-CAMPAIGN-COPY.md`.

## Deploy to GitHub Pages

1. Back up the current public website repository.
2. Copy these files into the GitHub Pages repository root.
3. Commit and push to the branch used by GitHub Pages.
4. Visit:
   - `https://essayonsbax.com/`
   - `https://essayonsbax.com/sms-consent.html`
   - `https://essayonsbax.com/privacy.html`
   - `https://essayonsbax.com/terms.html`
   - `https://essayonsbax.com/sms.html`
5. In Telnyx, update the campaign message flow using the exact copy in `TELNYX-10DLC-CAMPAIGN-COPY.md`.

## Important

The current consent form opens an email submission because this is a static GitHub Pages site. For stronger compliance evidence, connect the form to a backend or form service that stores:

- full name
- mobile phone number
- consent checkbox value
- consent timestamp
- source URL
- IP address, if available

Do not add additional opt-in methods to the Telnyx campaign unless you provide a screenshot, URL, or exact script for each one.
