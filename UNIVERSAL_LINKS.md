# BloomingBitz invitation hosting

Deploy this repository root to the existing EspeeLabs Cloudflare Pages custom domain `espeelabs.com`. Keep `.well-known/apple-app-site-association` extensionless and include `_headers` in the upload. No backend, build, rewrite or dependency is needed.

Before distributing the app, verify direct public HTTPS 200 responses for AASA (`application/json`) and `/bloomingbitz/b/`, without redirects, access controls or bot challenges. Confirm the signed app identifier is `QMH8542N9X.com.espeelabs.bloomingbitz`; update only if the actual signing prefix differs. Preserve the narrow path association when adding future apps. Allow for Apple association CDN caching.

The invitation URL is `https://espeelabs.com/bloomingbitz/b/#<token>`. JavaScript reads only the fragment and copies `BBP1:<token>` locally on a button tap, with selectable fallback. Do not add analytics, third-party scripts, token-dependent network requests or redirect chains. All previews are generic. Fragments are absent from normal HTTP request URLs but remain visible to messaging providers and browser-side code/history.

The numeric App Store listing was not available: installation copy deliberately contains no invented store destination. Add the confirmed listing when available, using a fixed URL with no invitation data. Recipients install and then return to the original message and tap again; there is no deferred-install routing.

Physical acceptance: actual Messages/WhatsApp sharing, ordinary/maximum-length tokens, installed cold/warm launch, absent-app fallback, clipboard denial, missing/corrupt fragment, hash changes, and browser network inspection. A direct fallback opened in the same domain is not a guaranteed app-launch button.

Local source changes only; no deployment, staging, commit or push has been performed.
