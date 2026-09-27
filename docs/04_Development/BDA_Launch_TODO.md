# BDA Website — Complete Launch TODO

This document is the master checklist for **BDA Public Release 1.0** and the later **BDA Administration Console 1.1**.

---

# Release strategy

## Release 0.9 — Private production preview

Deploy the current static Astro site to Cloudflare Pages before public launch.

Recommended Cloudflare Pages configuration:

```text
Framework preset: Astro
Build command: npm run build
Output directory: dist
Production branch: main
```

Use preview deployments for feature branches and pull requests.

## Release 1.0 — Public Bureau website

Connect:

```text
digitalantiquities.org
```

Launch the public, static, content-driven website.

## Release 1.1 — Bureau Administration Console

Introduce a protected administrative interface for creating content through forms while continuing to use Markdown and Git as the source of truth.

---

# 1. Core website functionality

## Navigation and routing

- [x] Home page
- [x] FWX Catalogue
- [x] Organisation page
- [x] Individual department pages
- [x] Publications index
- [x] Individual publication pages
- [x] Collections index
- [x] Individual collection pages
- [x] About the Bureau
- [x] Individual Bureau Notice pages
- [X] Bureau Notices archive at `/notices`
- [x] Custom Bureau-themed 404 page
- [x] Verify every internal link
- [x] Remove obsolete or duplicated routes
- [x] Confirm all route folders and URLs use lowercase
- [x] Verify no navigation item leads to an empty page

## Homepage

- [x] Dynamic public-record count
- [x] Dynamic department count
- [x] Dynamic publication count
- [x] Dynamic collection count
- [x] Dynamic featured Digital Object
- [x] Dynamic recently catalogued records
- [x] Dynamic latest publications
- [x] Dynamic organisation directory
- [x] Dynamic latest Bureau Notice
- [x] Functional link to the full notice
- [X] Add latest or featured Collection
- [X] Replace the illustrative browser image with a real record preview
- [X] Decide whether the featured heading should remain “Featured Digital Object” or become “Curatorial Selection”
- [X] Add graceful empty states for collections containing no content

## FWX Catalogue

- [x] Content collection and schema
- [x] Dynamic FWX routes
- [x] Preservation assessment
- [x] Related Digital Objects
- [x] Publication details
- [X] Functional catalogue search
- [X] Filter by object type
- [X] Filter by operational status
- [X] Filter by preservation status
- [X] Filter by Classification
- [X] Filter by period or first-publication date
- [X] Filter by collection
- [X] Sort results by title, FWX ID, date and verification date
- [ ] Pagination or progressive result loading when the catalogue grows
- [X] Clear empty-results message
- [X] Preserve search state in URL parameters
- [X] Add screenshot or preview-image support
- [X] Add “Appears in Collections”
- [X] Add “Referenced by Publications”
- [X] Make observing or responsible offices clickable
- [X] Add graceful handling for unresolved related IDs

A static client-side search index is the safest first implementation because it avoids introducing a public API or database. The current search button should not remain apparently operational unless it actually processes the query.

## Publications

- [x] Publication schema
- [x] Publication index
- [x] Dynamic publication pages
- [x] Related FWX objects
- [X] Add a sixth document-control field
- [X] Recommended field: `documentStatus`
- [X] Support statuses such as Current, Superseded, Archived and Withdrawn
- [X] Make issuing office clickable
- [X] Add “Appears in Collections”
- [X] Add downloadable or print-friendly rendering
- [X] Add publication-type filtering
- [X] Add publication archive by year
- [X] Add related-publication support
- [X] Create reusable `PublicationCard.astro`

## Collections

- [x] Collections schema
- [x] Collections index
- [x] Dynamic collection pages
- [x] Resolved featured Digital Objects
- [x] Resolved related Publications
- [X] Create reusable `CollectionCard.astro`
- [X] Add featured Collection to homepage
- [X] Add collection cover or key image
- [X] Add object count and publication count
- [X] Link curator to the relevant department
- [X] Add related Collections
- [X] Add collection chronology or timeline where appropriate

## Organisation and departments

- [x] Dynamic department collection
- [x] Organisation directory
- [x] Dynamic individual department pages
- [x] Homepage department list
- [x] Add dynamic institution statistics to the Organisation page
- [x] Show publications issued by each department
- [x] Show FWX objects observed or maintained by each department
- [x] Add organisational chart
- [x] Add Digital Object lifecycle diagram
- [x] Add department establishment dates where appropriate
- [ ] Add parent-unit relationships if the institution becomes more complex

## Bureau Notices

- [x] Notice schema
- [x] Homepage displays newest notice
- [x] Dynamic notice route
- [x] Notice record component
- [X] Create `/notices/index.astro`
- [X] Sort notices newest first
- [X] Separate Current and Archived notices
- [X] Display publication date and status
- [ ] Link relevant Notices to FWX releases, Publications or Collections
- [ ] Add “Superseded by” support if policies change

---

# 2. Required launch content

The site should launch with enough real content that it feels intentionally populated rather than technically complete but empty.

## Minimum launch inventory

### Digital Objects

- [x] At least **8 complete FWX records**
- [x] Include several different object types or historical contexts
- [x] Every record has a checked title, summary and URL
- [x] Every record has classification and status values
- [x] Every record has a preservation assessment
- [x] Every record has a verification date
- [x] At least four records include relationships
- [x] At least three records appear in Collections
- [X] At least one record is marked `featured: true`

Suggested launch records could include:

- The Million Dollar Homepage
- Space Jam Website
- One personal homepage
- One portal or directory
- One software or network service
- One partially recovered object
- One defunct commercial site
- One active legacy site

### Publications

- [X] At least **three Publications**
- [x] One Preservation Bulletin
- [X] One Field Report
- [X] One Technical Note
- [x] Optional abbreviated Annual Report or institutional report
- [X] Every publication links to a real issuing office
- [X] Every related FWX ID resolves correctly

### Collections

- [x] At least **two Collections**
- [x] The Dawn of Commercial Websites
- [x] One additional curated collection
- [x] Each Collection contains at least two real Digital Objects
- [x] Each Collection contains a curatorial introduction
- [x] At least one Collection references a Publication

### Bureau Notices

- [x] Initial public catalogue release
- [x] One additional launch or institutional notice
- [ ] Optional notice describing the Bureau’s public-access policy

### Institutional content

- [x] Six departments
- [x] About page
- [x] Organisation page
- [x] Review mission wording across all pages
- [x] Confirm terminology matches `Lexicon.md`
- [x] Confirm department responsibilities match `Departments.md`
- [x] Confirm FWX terminology matches the Digital Object specification
- [x] Confirm establishment year is consistently 1998
- [x] Remove any remaining placeholder organisations, IDs and dates

---

# 3. Content templates and editorial workflow

Markdown remains the source of truth.

## Repository templates

Create:

```text
templates/
├── digital-object.md
├── preservation-bulletin.md
├── field-report.md
├── technical-note.md
├── collection.md
├── bureau-notice.md
└── department.md
```

Each template should contain:

- [x] Required frontmatter
- [x] Optional frontmatter
- [x] Example values
- [x] Writing guidance
- [x] ID format
- [x] Allowed enum values
- [x] Recommended section headings
- [x] Related-record syntax
- [x] Image naming convention
- [x] Verification checklist

## Content workflow

Document this process:

```text
Draft
→ Schema validation
→ Editorial review
→ Preview deployment
→ Approval
→ Merge
→ Public release
```

- [x] Assign unique IDs before drafting
- [x] Check for duplicate IDs
- [x] Validate related records
- [x] Check external URLs
- [x] Review facts and citations
- [x] Run `npm run build`
- [x] Open the Cloudflare preview
- [x] Approve and merge
- [x] Verify the production page
- [x] Record the release in a Bureau Notice when appropriate

---

# 4. Visual and responsive polish

## Emblems and assets

- [x] Create final Office of Digital Preservation emblem
- [x] Rework all department emblems as one consistent set
- [x] Same canvas size
- [x] Same apparent emblem size
- [x] Same border weight
- [x] Same typography treatment
- [x] Transparent backgrounds
- [x] High-resolution source exports
- [x] Standardize filenames using lowercase kebab-case
- [x] Move them into:

```text
public/images/emblems/
```

- [x] Add meaningful alt text
- [x] Convert large photographic images to WebP or AVIF where suitable
- [X] Define a consistent FWX screenshot directory

## CSS

- [x] Refactor `global.css`
- [x] Suggested structure:

```text
src/styles/
├── global.css
├── variables.css
├── layout.css
├── navigation.css
├── records.css
├── departments.css
├── publications.css
├── collections.css
├── homepage.css
└── responsive.css
```

- [x] Remove duplicate declarations
- [x] Standardize spacing values
- [x] Standardize borders
- [x] Standardize buttons and text links
- [x] Equalize card heights where useful
- [x] Review empty grid cells
- [x] Review typography hierarchy
- [x] Review hover and focus states
- [x] Verify no horizontal overflow

## Responsive testing

Test at minimum:

- [x] 320 px
- [x] 375 px
- [x] 430 px
- [x] 768 px
- [x] 1024 px
- [x] 1440 px
- [x] Large desktop
- [x] Real iPhone
- [ ] Real Android device if available
- [x] Windows Firefox
- [x] Windows Chromium browser
- [ ] Safari or WebKit

---

# 5. Accessibility

- [x] One meaningful `<h1>` per page
- [x] Correct heading hierarchy
- [x] Every input has a label
- [x] Every meaningful image has alt text
- [x] Decorative images use empty alt text where appropriate
- [x] Full keyboard navigation
- [x] Visible focus indicators
- [x] Skip-to-content link
- [x] Navigation has accessible labels
- [x] Form errors are announced clearly
- [x] Colour contrast reviewed
- [x] Page works at 200% zoom
- [x] Reduced-motion preference respected
- [x] Tables use appropriate headers
- [x] Links make sense out of context
- [x] Run automated accessibility checks
- [x] Perform a manual keyboard-only test
- [x] Test at least one screen reader workflow

---

# 6. SEO and public metadata

- [x] Unique page title for every route
- [x] Unique meta description
- [x] Canonical URL
- [x] Open Graph title
- [x] Open Graph description
- [x] Open Graph image
- [x] Twitter/X card metadata if desired
- [x] `robots.txt`
- [x] XML sitemap
- [x] Favicon set
- [x] Web app manifest if useful
- [x] Structured data for the organisation
- [x] Structured data for articles or publications where suitable
- [x] Redirect www canonical — configure during Cloudflare production deployment
- [x] Redirect pages.dev production URL — configure during Cloudflare production deployment
- [x] Cloudflare previews non-indexed — configure during Cloudflare preview deployment

---

# 7. Project and repository security

## GitHub account and repository

- [x] Enable MFA on GitHub
- [x] Enable MFA on Cloudflare
- [x] Protect the production branch
- [x] Disallow force pushes
- [x] Disallow branch deletion
- [x] Require pull requests for production
- [x] Require successful build checks
- [X] Use feature branches
- [ ] Review Cloudflare preview before merge
- [x] Enable Dependabot alerts
- [x] Enable Dependabot security updates
- [x] Enable secret scanning where available — unavailable for current private-repository configuration; personal push protection enabled
- [x] Review repository security notifications
- [ ] Add `CODEOWNERS` later if additional maintainers join — deferred until multiple maintainers
- [x] Store secrets only in GitHub or Cloudflare secret storage — no application secrets currently required; future secrets must use managed secret storage
- [x] Never commit `.env` files
- [x] Confirm `.gitignore` covers environment and generated files
- [x] Search repository history for accidentally committed tokens
- [x] Use least-privilege tokens — no custom tokens currently in use; future tokens must use minimum required permissions
- [x] Rotate any token suspected of exposure — no suspected exposed tokens identified
- [x] Configure GitHub Actions CI for branch pushes and main

## Dependency security

- [x] Run `npm audit`
- [x] Review every high or critical result
- [x] Do not blindly run breaking automatic fixes
- [x] Remove unused packages — reviewed; only Astro and @astrojs/sitemap are direct dependencies and both are required
- [x] Commit `package-lock.json`
- [x] Pin the Node major version for builds
- [x] Configure Dependabot for npm
- [x] Review Astro release notes before major upgrades — established as upgrade policy
- [x] Add a monthly dependency-review task
- [x] Confirm production build uses a clean dependency install

Recommended CI sequence:

```bash
npm ci
npm run build
npm audit --audit-level=high
```

Treat `npm audit` carefully: a reported issue should be assessed for actual exposure rather than automatically forcing a disruptive upgrade.

## Content security

- [x] Do not render untrusted raw HTML from Markdown
- [x] Avoid `set:html` unless content is fully trusted and reviewed
- [x] Validate all URLs through Zod
- [x] Use enums for controlled classifications and statuses
- [x] Validate all relationship IDs
- [x] Restrict image types
- [ ] Disallow user-supplied SVG in the future admin console unless sanitized — deferred to Administration Console; current content schema rejects SVG
- [ ] Generate filenames rather than trusting uploaded names — deferred to Administration Console; MK1 has no user uploads
- [ ] Set file-size limits — deferred to Administration Console; MK1 has no user uploads
- [x] Avoid embedding third-party scripts unless necessary

---

# 8. Browser security headers

Create:

```text
public/_headers
```

Initial policy:

```text
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
  Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
```

Launch tasks:

- [x] Add `_headers`
- [x] Test all pages
- [x] Confirm CSS is not blocked
- [x] Confirm fonts are not blocked
- [x] Confirm images load
- [ ] Confirm Cloudflare challenges still work
- [x] Inspect the browser console
- [x] Confirm iframe embedding is denied
- [x] Add `Strict-Transport-Security` only after HTTPS is fully verified
- [x] Consider CSP report-only testing before enforcement — not required; enforced CSP tested successfully in production
- [x] Avoid adding `'unsafe-inline'` to scripts
- [x] FWX inline catalogue script blocked by CSP; resolve before MK1 public launch.

---

# 9. Cloudflare Pages deployment

## Initial production deployment

- [x] Connect the GitHub repository
- [x] Framework preset: Astro — N/A under current Workers static-assets deployment; Astro builds to `dist`
- [x] Build command: `npm run build`
- [x] Output directory: `dist`
- [x] Production branch: `main`
- [x] Confirm deployment uses the correct Node version
- [x] Confirm all generated routes exist
- [x] Verify case-sensitive paths
- [x] Verify assets resolve on Linux
- [x] Review production build logs

## Preview environment

- [x] Enable automatic preview deployments
- [x] Test feature branches
- [ ] Test pull-request builds
- [x] Protect preview deployments with Cloudflare Access
- [ ] Optionally create:

```text
staging.digitalantiquities.org
```

- [ ] Point staging to a dedicated branch
- [x] Verify previews have `noindex`
- [x] Do not place production secrets in preview environments — no production application secrets currently configured

## Custom domain

- [x] Add `digitalantiquities.org` to production Workers deployment
- [x] Confirm Cloudflare nameservers are active
- [x] Decide canonical hostname: `digitalantiquities.org`
- [x] Redirect the non-canonical hostname
- [x] Redirect production `pages.dev` URL — N/A; production uses Workers static assets rather than Cloudflare Pages
- [x] Verify certificate issuance
- [x] Check CAA records if certificate issuance fails — N/A; certificate issuance succeeded
- [x] Verify apex and `www`
- [ ] Test IPv4 and IPv6 — IPv4 HTTP verified; IPv6 AAAA records verified, but end-to-end IPv6 unavailable from current test network
- [x] Verify DNS propagation

---

# 10. Cloudflare zone security

## DNS and TLS

- [x] Enable DNSSEC
- [x] Use HTTPS only
- [x] Enable Always Use HTTPS
- [x] Set minimum TLS to 1.2
- [x] Review TLS 1.3 availability
- [x] Confirm no mixed content
- [x] Add HSTS only after stable HTTPS testing
- [x] Do not preload HSTS until configuration is proven
- [x] Review certificate renewal status

## DDoS, bots and WAF

For the initial static site:

- [x] Confirm Cloudflare proxy is active
- [x] Confirm automatic DDoS protection
- [x] Enable Bot Fight Mode on Free, or Super Bot Fight Mode on a paid plan
- [x] Review Security Events after launch
- [x] Avoid aggressive country blocking
- [x] Allow verified search crawlers
- [x] Confirm monitoring services are not challenged
- [x] Enable the managed protections available on the selected plan
- [ ] Do not enable every rule without testing
- [ ] Begin uncertain rules in Log or Managed Challenge mode

## Rate limiting

For the static v1 site, rate limiting is lower priority because there are no write APIs or login endpoints.

Still prepare rules for:

- [ ] `/admin/*`
- [ ] `/api/*`
- [ ] Future contact or submission forms
- [ ] Future search API
- [ ] Future upload endpoints
- [ ] Authentication callbacks where appropriate
- [ ] Start with logging or Managed Challenge
- [ ] Monitor false positives
- [ ] Document legitimate automated clients
- [ ] Increase enforcement only after observing traffic

---

# 11. Privacy, legal and public trust

- [x] Publish a Privacy Notice
- [x] Publish a Cookie Notice only if cookies are introduced
- [x] Avoid unnecessary analytics identifiers
- [x] Decide whether Cloudflare Web Analytics is needed
- [x] Document what logs are retained
- [x] Do not collect personal data without a defined purpose
- [x] Provide a contact address
- [x] Provide a security contact
- [x] Add:

```text
public/.well-known/security.txt
```

Suggested contents:

```text
Contact: mailto:security@digitalantiquities.org
Preferred-Languages: en, sv
Canonical: https://digitalantiquities.org/.well-known/security.txt
Policy: https://digitalantiquities.org/security
```

- [x] Add copyright and content-use information
- [x] Clarify that BDA is a fictional institution where appropriate
- [x] Review whether external website screenshots can be reproduced
- [x] Attribute source material and archival captures properly
- [x] Avoid presenting fabricated historical claims as real-world fact outside the fictional framing

---

# 12. Testing and quality assurance

## Automated

- [x] `npm ci`
- [X] `npm run build`
- [x] TypeScript checks
- [x] Link checker
- [x] Accessibility scan
- [x] Lighthouse run
- [x] Dependency audit
- [x] HTML validation where practical
- [x] Ensure CI fails on build errors

## Manual

- [x] Click every navigation item
- [x] Click every card and record
- [x] Verify all related-record links
- [x] Verify all publication links
- [x] Verify every collection member
- [x] Verify every notice
- [X] Test search
- [x] Test 404
- [x] Test keyboard navigation
- [x] Test browser back and forward
- [x] Test direct URL entry
- [x] Test with JavaScript disabled where possible
- [x] Test at slow connection speed
- [x] Inspect browser console for errors
- [x] Inspect network panel for failed assets
- [x] Check page source for accidentally exposed secrets
- [x] Verify headers with:

```bash
curl -I https://digitalantiquities.org
```

## Performance

- [x] Optimize emblem files
- [x] Optimize screenshot files
- [x] Add image dimensions to prevent layout shift
- [x] Lazy-load off-screen images
- [x] Limit third-party scripts
- [x] Review font loading
- [x] Test Core Web Vitals
- [x] Ensure catalogue pages remain fast with more records

---

# 13. Monitoring, backup and recovery

- [x] Enable Cloudflare security-event monitoring
- [x] Review deployment notifications
- [x] Subscribe to GitHub security alerts
- [x] Define who receives operational alerts
- [x] Document rollback procedure
- [x] Test restoring a previous Cloudflare deployment
- [x] Confirm Git history contains all content
- [x] Keep a local clone or secondary backup
- [x] Export Cloudflare DNS configuration periodically
- [x] Document custom rules and Access policies
- [x] Review security settings quarterly
- [x] Review dependencies monthly
- [x] Test restore before launch

---

# 14. Administration Console — Release 1.1

The admin console should **not replace Markdown**. It should generate validated Markdown and submit it through Git.

## Proposed architecture

```text
admin.digitalantiquities.org
        ↓
Cloudflare Access
        ↓
BDA Administration Console
        ↓
Validated form
        ↓
Generated Markdown and assets
        ↓
GitHub branch / pull request
        ↓
Cloudflare preview
        ↓
Review and merge
        ↓
Production deployment
```

## Authentication and authorization

- [ ] Use `admin.digitalantiquities.org`
- [ ] Protect it with Cloudflare Access
- [ ] Allow only approved identities
- [ ] Require MFA through the identity provider
- [ ] Set limited session duration
- [ ] Add named roles:
  - Administrator
  - Editor
  - Reviewer
- [ ] Do not build or store passwords ourselves
- [ ] Consider default-deny Access protection for internal hostnames
- [ ] Ensure the public website remains explicitly public

## Admin functionality

- [ ] Dashboard
- [ ] Create Digital Object
- [ ] Edit Digital Object
- [ ] Create Publication
- [ ] Create Collection
- [ ] Create Bureau Notice
- [ ] Create or update Department
- [ ] Select related records
- [ ] Upload preview images
- [ ] Preview generated Markdown
- [ ] Validate against Zod schema
- [ ] Detect duplicate IDs
- [ ] Preview rendered page
- [ ] Create GitHub branch
- [ ] Create pull request
- [ ] Display Cloudflare preview URL
- [ ] Approve or reject
- [ ] Merge only after checks pass

## Admin security

- [ ] Least-privilege GitHub App preferred over a broad personal token
- [ ] No direct writes to `main`
- [ ] CSRF protection
- [ ] Input validation
- [ ] Output encoding
- [ ] Rate limiting
- [ ] Audit log
- [ ] Session expiration
- [ ] File-size restrictions
- [ ] MIME-type checks
- [ ] File-signature validation
- [ ] Image dimension limits
- [ ] Reject or sanitize SVG
- [ ] Generate safe filenames
- [ ] Malware scanning strategy for uploaded files
- [ ] Review and approval before publication
- [ ] Token rotation procedure
- [ ] Backup and restore test
- [ ] Threat-model review before public availability

---

# 15. Final launch gate

The site is ready to go public only when all **Launch Blockers** below are complete.

## Launch blockers

- [x] Production build succeeds
- [x] Every navigation route works
- [x] No dead links
- [x] No fake operational records or statistics
- [x] Search works or is clearly unavailable
- [x] Minimum content inventory is complete
- [x] Emblem refresh complete
- [x] Mobile review complete
- [x] Accessibility review complete
- [x] Security headers deployed and tested
- [x] GitHub and Cloudflare MFA enabled
- [x] Production branch protected
- [x] Dependabot and secret alerts enabled
- [x] Cloudflare preview tested
- [x] HTTPS and custom domain verified
- [x] DNSSEC enabled
- [x] Bot and WAF settings reviewed
- [x] Custom 404 exists
- [x] Privacy and security contact pages exist
- [x] Backup and rollback procedure tested
- [x] Final production smoke test completed

## Launch-day sequence

```text
1. Freeze content changes
2. Run npm ci
3. Run npm run build
4. Run security and dependency checks
5. Review Cloudflare preview
6. Test desktop and mobile
7. Merge release pull request
8. Verify production deployment
9. Verify custom domain and TLS
10. Verify security headers
11. Verify every navigation item
12. Submit sitemap
13. Publish launch Bureau Notice
14. Monitor logs and Security Events
15. Tag the release in Git
```

Recommended Git tag:

```bash
git tag -a v1.0.0 -m "BDA Public Release 1.0"
git push origin v1.0.0
```

## Definition of BDA Public Release 1.0

> A content-complete, truthful, mobile-tested and security-hardened static release, with no dead functionality, protected deployment workflows, tested recovery procedures and enough archival content to demonstrate the Bureau’s full public mission.

The Administration Console then becomes the main goal for **BDA Release 1.1**, without forcing any change to the content-driven architecture already built.
