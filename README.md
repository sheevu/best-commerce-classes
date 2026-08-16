# Commerce Tutorials By Anjali Srivastava

Static marketing site for the institute behind **Commerce Tutorials By Anjali Srivastava** in Indira Nagar, Lucknow.

## 📍 Institute Overview & Verified Brand Contact Info

- **Name:** Commerce Tutorials By Anjali Srivastava
- **Tagline:** Where Concepts Become Confidence.
- **Location:** C-717, Near Church Road, Behind Arawali Marg, Indira Nagar, Lucknow – 226016
- **Google Maps Location:** [Get Directions on Google Maps](https://maps.app.goo.gl/bbXyRwKK7zrQQtcz8)
- **Phone / Call:** [+91 98388 27833](tel:+91 98388 27833) (91-9838827833)
- **WhatsApp:** [Chat on WhatsApp (+91 98388 27833)](https://wa.me/919838827833)
- **Email:** [hellocommerceclass@gmail.com](mailto:hellocommerceclass@gmail.com)
- **Pinterest:** [Pinterest Profile & Study Pins](https://pin.it/56c56anvX)
- **Timings:** Monday – Saturday (4:00 PM – 8:00 PM)
- **Mode:** Offline Coaching with AC Classrooms & Personal Mentorship
- **Focus:** Accountancy, Business Studies, Economics, Commerce, B.Com support, CUET guidance
- **Boards:** CBSE, ICSE, ISC, UP Board

## What this repo includes

- A single-page landing experience in `index.html`
- Local SEO metadata, Open Graph tags, and JSON-LD schema
- A WhatsApp enquiry form and direct call / directions CTAs
- `robots.txt` and `sitemap.xml` for crawler discovery
- Brand assets and promotional images in the repository root

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Cloudflare deployment

This repo is deployed on Cloudflare Workers with Static Assets.

### Live Production Endpoints:
- **Primary Website:** [https://www.bestcommerceprep.in/](https://www.bestcommerceprep.in/)
- **Apex Domain:** [https://bestcommerceprep.in/](https://bestcommerceprep.in/)
- **Infographics Interactive Page:** [https://www.bestcommerceprep.in/Infographics/commerce_tutorials_infographic_spa.html](https://www.bestcommerceprep.in/Infographics/commerce_tutorials_infographic_spa.html)
- **Workers Dev URL:** [https://best-commerce-classes.hellocommerceclass.workers.dev](https://best-commerce-classes.hellocommerceclass.workers.dev)

Required GitHub secrets for CI:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Manual deploy command:

```bash
npm run deploy:cloudflare
```

Deployment notes:

- `wrangler.toml` manages both `bestcommerceprep.in` and `www.bestcommerceprep.in` custom domains.
- The app is configured as a SPA via `assets.not_found_handling = "single-page-application"`.
- Static assets (logos, robots.txt, sitemap.xml, infographics) are placed in `public/` and built into `dist/`.

## SEO notes

- Institute name, address, phone (`+91 98388 27833`), and WhatsApp number are consistent across all components and JSON-LD schema.
- Canonical URL is set to `https://www.bestcommerceprep.in/`.
