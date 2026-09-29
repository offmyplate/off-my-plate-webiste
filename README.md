# Off My Plate

The production landing page for [offmyplate.io](https://offmyplate.io), built with Next.js and TypeScript.

## Local development

Requirements:

- Node.js 20.9 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Before shipping a change, run:

```bash
npm run lint
npm run typecheck
npm run build
```

## Environment variables

Copy `.env.example` to `.env.local` for local development. Both environment variables are optional:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CONTACT_URL=https://calendar.app.google/AsA9ssx8ciQzb1zu8
```

Without a Google Analytics ID, no analytics script loads. Without a contact URL override, primary CTAs use the default Google Calendar booking page.

## Google Analytics 4

1. In Google Analytics, create or select a GA4 property.
2. Add a Web data stream for `https://offmyplate.io`.
3. Copy its Measurement ID (it begins with `G-`).
4. Add it as `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Railway.

The analytics script is loaded only when that variable exists. Header, hero, and final contact CTAs emit a `cta_click` event with `cta_label` and `cta_location` parameters.

## Configure Google Calendar for the CTAs

1. In Google Calendar, open the appointment schedule visitors should book and copy its public booking URL.
2. In Railway, open the service's **Variables** page.
3. Add `NEXT_PUBLIC_CONTACT_URL` with the full URL, for example `https://calendar.app.google/AsA9ssx8ciQzb1zu8`.
4. Redeploy the service. Every primary CTA will now open that Google Calendar booking page, and click tracking will continue to work.

For local testing, add the same variable to `.env.local` and restart `npm run dev`.

## Deploy to Railway

Railway can deploy this Next.js project directly; no Dockerfile is needed.

1. Push this project to the production branch of `https://github.com/offmyplate/offmyplate.git`.
2. In Railway, create a new project and choose **Deploy from GitHub repo**.
3. Select `offmyplate/offmyplate` and the production branch.
4. Railway should detect Next.js automatically. The build command is `npm run build` and the start command is `npm start`.
5. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `NEXT_PUBLIC_CONTACT_URL` under the service variables as needed.
6. Deploy. Future pushes to the connected branch will automatically trigger new deployments.

`next start` reads Railway's injected `PORT` environment variable automatically, so no custom server configuration is required.

## Connect offmyplate.io

1. Open the deployed service in Railway and go to **Settings → Networking → Custom Domain**.
2. Add `offmyplate.io`, then add `www.offmyplate.io` if both should resolve.
3. Railway will display a CNAME record and a TXT ownership-verification record for each custom domain. Add both records at the domain's DNS provider exactly as shown.
4. For the root domain, use the provider's CNAME-flattening or ALIAS/ANAME support if it does not allow a regular CNAME at the apex. Remove any conflicting A, AAAA, or CNAME records for the same hostname.
5. Wait for Railway to show the domain as verified and issue the TLS certificate. DNS propagation can take up to 72 hours.

Both the CNAME and TXT records are required; Railway can return a 404 until ownership is verified. DNS targets can change, so use the values shown in the Railway project rather than copying a target from another service. Choose one canonical hostname and redirect the other to it; this site currently declares `https://offmyplate.io` as canonical.

## Search engine submission

After the custom domain is live:

1. Add `https://offmyplate.io` as a property in Google Search Console. A Domain property is recommended and is verified with the TXT record Google provides.
2. In Search Console, open **Sitemaps**, submit `https://offmyplate.io/sitemap.xml`, and use URL Inspection to request indexing for the homepage.
3. Optionally add the same site in Bing Webmaster Tools. It can import a verified Search Console property or provide its own verification record.

The site already publishes `robots.txt`, `sitemap.xml`, canonical metadata, social metadata, and structured data. Indexing is controlled by search engines and may take time after submission.
