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
- [ ] Custom Bureau-themed 404 page
- [ ] Verify every internal link
- [ ] Remove obsolete or duplicated routes
- [ ] Confirm all route folders and URLs use lowercase
- [ ] Verify no navigation item leads to an empty page

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
- [ ] Add latest or featured Collection
- [ ] Replace the illustrative browser image with a real record preview
- [ ] Decide whether the featured heading should remain “Featured Digital Object” or become “Curatorial Selection”
- [ ] Add graceful empty states for collections containing no content

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
- [ ] Add a sixth document-control field
- [ ] Recommended field: `documentStatus`
- [ ] Support statuses such as Current, Superseded, Archived and Withdrawn
- [ ] Make issuing office clickable
- [ ] Add “Appears in Collections”
- [ ] Add downloadable or print-friendly rendering
- [ ] Add publication-type filtering
- [ ] Add publication archive by year
- [ ] Add related-publication support
- [ ] Create reusable `PublicationCard.astro`

## Collections

- [x] Collections schema
- [x] Collections index
- [x] Dynamic collection pages
- [x] Resolved featured Digital Objects
- [x] Resolved related Publications
- [ ] Create reusable `CollectionCard.astro`
- [ ] Add featured Collection to homepage
- [ ] Add collection cover or key image
- [ ] Add object count and publication count
- [ ] Link curator to the relevant department
- [ ] Add related Collections
- [ ] Add collection chronology or timeline where appropriate

## Organisation and departments

- [x] Dynamic department collection
- [x] Organisation directory
- [x] Dynamic individual department pages
- [x] Homepage department list
- [ ] Add dynamic institution statistics to the Organisation page
- [ ] Show publications issued by each department
- [ ] Show FWX objects observed or maintained by each department
- [ ] Add organisational chart
- [ ] Add Digital Object lifecycle diagram
- [ ] Add department establishment dates where appropriate
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

- [ ] At least **8 complete FWX records**
- [ ] Include several different object types or historical contexts
- [ ] Every record has a checked title, summary and URL
- [ ] Every record has classification and status values
- [ ] Every record has a preservation assessment
- [ ] Every record has a verification date
- [ ] At least four records include relationships
- [ ] At least three records appear in Collections
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

- [ ] At least **three Publications**
- [x] One Preservation Bulletin
- [ ] One Field Report
- [ ] One Technical Note
- [ ] Optional abbreviated Annual Report or institutional report
- [ ] Every publication links to a real issuing office
- [ ] Every related FWX ID resolves correctly

### Collections

- [ ] At least **two Collections**
- [x] The Dawn of Commercial Websites
- [ ] One additional curated collection
- [ ] Each Collection contains at least two real Digital Objects
- [ ] Each Collection contains a curatorial introduction
- [ ] At least one Collection references a Publication

### Bureau Notices

- [x] Initial public catalogue release
- [ ] One additional launch or institutional notice
- [ ] Optional notice describing the Bureau’s public-access policy

### Institutional content

- [x] Six departments
- [x] About page
- [x] Organisation page
- [ ] Review mission wording across all pages
- [ ] Confirm terminology matches `Lexicon.md`
- [ ] Confirm department responsibilities match `Departments.md`
- [ ] Confirm FWX terminology matches the Digital Object specification
- [ ] Confirm establishment year is consistently 1998
- [ ] Remove any remaining placeholder organisations, IDs and dates

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

- [ ] Required frontmatter
- [ ] Optional frontmatter
- [ ] Example values
- [ ] Writing guidance
- [ ] ID format
- [ ] Allowed enum values
- [ ] Recommended section headings
- [ ] Related-record syntax
- [ ] Image naming convention
- [ ] Verification checklist

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

- [ ] Assign unique IDs before drafting
- [ ] Check for duplicate IDs
- [ ] Validate related records
- [ ] Check external URLs
- [ ] Review facts and citations
- [ ] Run `npm run build`
- [ ] Open the Cloudflare preview
- [ ] Approve and merge
- [ ] Verify the production page
- [ ] Record the release in a Bureau Notice when appropriate

---

# 4. Visual and responsive polish

## Emblems and assets

- [ ] Create final Office of Digital Preservation emblem
- [ ] Rework all department emblems as one consistent set
- [ ] Same canvas size
- [ ] Same apparent emblem size
- [ ] Same border weight
- [ ] Same typography treatment
- [ ] Transparent backgrounds
- [ ] High-resolution source exports
- [ ] Standardize filenames using lowercase kebab-case
- [ ] Move them into:

```text
public/images/emblems/
```

- [ ] Add meaningful alt text
- [ ] Convert large photographic images to WebP or AVIF where suitable
- [X] Define a consistent FWX screenshot directory

## CSS

- [ ] Refactor `global.css`
- [ ] Suggested structure:

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

- [ ] Remove duplicate declarations
- [ ] Standardize spacing values
- [ ] Standardize borders
- [ ] Standardize buttons and text links
- [ ] Equalize card heights where useful
- [ ] Review empty grid cells
- [ ] Review typography hierarchy
- [ ] Review hover and focus states
- [ ] Verify no horizontal overflow

## Responsive testing

Test at minimum:

- [ ] 320 px
- [ ] 375 px
- [ ] 430 px
- [ ] 768 px
- [ ] 1024 px
- [ ] 1440 px
- [ ] Large desktop
- [ ] Real iPhone
- [ ] Real Android device if available
- [ ] Windows Firefox
- [ ] Windows Chromium browser
- [ ] Safari or WebKit

---

# 5. Accessibility

- [ ] One meaningful `<h1>` per page
- [ ] Correct heading hierarchy
- [ ] Every input has a label
- [ ] Every meaningful image has alt text
- [ ] Decorative images use empty alt text where appropriate
- [ ] Full keyboard navigation
- [ ] Visible focus indicators
- [ ] Skip-to-content link
- [ ] Navigation has accessible labels
- [ ] Form errors are announced clearly
- [ ] Colour contrast reviewed
- [ ] Page works at 200% zoom
- [ ] Reduced-motion preference respected
- [ ] Tables use appropriate headers
- [ ] Links make sense out of context
- [ ] Run automated accessibility checks
- [ ] Perform a manual keyboard-only test
- [ ] Test at least one screen reader workflow

---

# 6. SEO and public metadata

- [ ] Unique page title for every route
- [ ] Unique meta description
- [ ] Canonical URL
- [ ] Open Graph title
- [ ] Open Graph description
- [ ] Open Graph image
- [ ] Twitter/X card metadata if desired
- [ ] `robots.txt`
- [ ] XML sitemap
- [ ] Favicon set
- [ ] Web app manifest if useful
- [ ] Structured data for the organisation
- [ ] Structured data for articles or publications where suitable
- [ ] Redirect `www` to the chosen canonical hostname
- [ ] Redirect `pages.dev` production URL to the custom domain
- [ ] Confirm Cloudflare previews remain non-indexed

---

# 7. Project and repository security

## GitHub account and repository

- [ ] Enable MFA on GitHub
- [ ] Enable MFA on Cloudflare
- [ ] Protect the production branch
- [ ] Disallow force pushes
- [ ] Disallow branch deletion
- [ ] Require pull requests for production
- [ ] Require successful build checks
- [X] Use feature branches
- [ ] Review Cloudflare preview before merge
- [ ] Enable Dependabot alerts
- [ ] Enable Dependabot security updates
- [ ] Enable secret scanning where available
- [ ] Review repository security notifications
- [ ] Add `CODEOWNERS` later if additional maintainers join
- [ ] Store secrets only in GitHub or Cloudflare secret storage
- [ ] Never commit `.env` files
- [ ] Confirm `.gitignore` covers environment and generated files
- [ ] Search repository history for accidentally committed tokens
- [ ] Use least-privilege tokens
- [ ] Rotate any token suspected of exposure

## Dependency security

- [ ] Run `npm audit`
- [ ] Review every high or critical result
- [ ] Do not blindly run breaking automatic fixes
- [ ] Remove unused packages
- [ ] Commit `package-lock.json`
- [ ] Pin the Node major version for builds
- [ ] Configure Dependabot for npm
- [ ] Review Astro release notes before major upgrades
- [ ] Add a monthly dependency-review task
- [ ] Confirm production build uses a clean dependency install

Recommended CI sequence:

```bash
npm ci
npm run build
npm audit --audit-level=high
```

Treat `npm audit` carefully: a reported issue should be assessed for actual exposure rather than automatically forcing a disruptive upgrade.

## Content security

- [ ] Do not render untrusted raw HTML from Markdown
- [ ] Avoid `set:html` unless content is fully trusted and reviewed
- [ ] Validate all URLs through Zod
- [ ] Use enums for controlled classifications and statuses
- [ ] Validate all relationship IDs
- [ ] Restrict image types
- [ ] Disallow user-supplied SVG in the future admin console unless sanitized
- [ ] Generate filenames rather than trusting uploaded names
- [ ] Set file-size limits
- [ ] Avoid embedding third-party scripts unless necessary

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

- [ ] Add `_headers`
- [ ] Test all pages
- [ ] Confirm CSS is not blocked
- [ ] Confirm fonts are not blocked
- [ ] Confirm images load
- [ ] Confirm Cloudflare challenges still work
- [ ] Inspect the browser console
- [ ] Confirm iframe embedding is denied
- [ ] Add `Strict-Transport-Security` only after HTTPS is fully verified
- [ ] Consider CSP report-only testing before enforcement
- [ ] Avoid adding `'unsafe-inline'` to scripts

---

# 9. Cloudflare Pages deployment

## Initial Pages project

- [ ] Connect the GitHub repository
- [ ] Framework preset: Astro
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Production branch: `main`
- [ ] Confirm deployment uses the correct Node version
- [ ] Confirm all generated routes exist
- [ ] Verify case-sensitive paths
- [ ] Verify assets resolve on Linux
- [ ] Review production build logs

## Preview environment

- [ ] Enable automatic preview deployments
- [ ] Test feature branches
- [ ] Test pull-request builds
- [ ] Protect preview deployments with Cloudflare Access
- [ ] Optionally create:

```text
staging.digitalantiquities.org
```

- [ ] Point staging to a dedicated branch
- [ ] Verify previews have `noindex`
- [ ] Do not place production secrets in preview environments

## Custom domain

- [ ] Add `digitalantiquities.org` to Pages
- [ ] Confirm Cloudflare nameservers are active
- [ ] Decide canonical hostname:
  - `digitalantiquities.org`
  - or `www.digitalantiquities.org`
- [ ] Redirect the non-canonical hostname
- [ ] Redirect the production `pages.dev` URL
- [ ] Verify certificate issuance
- [ ] Check CAA records if certificate issuance fails
- [ ] Verify apex and `www`
- [ ] Test IPv4 and IPv6
- [ ] Verify DNS propagation

---

# 10. Cloudflare zone security

## DNS and TLS

- [ ] Enable DNSSEC
- [ ] Use HTTPS only
- [ ] Enable Always Use HTTPS
- [ ] Set minimum TLS to 1.2
- [ ] Review TLS 1.3 availability
- [ ] Confirm no mixed content
- [ ] Add HSTS only after stable HTTPS testing
- [ ] Do not preload HSTS until configuration is proven
- [ ] Review certificate renewal status

## DDoS, bots and WAF

For the initial static site:

- [ ] Confirm Cloudflare proxy is active
- [ ] Confirm automatic DDoS protection
- [ ] Enable Bot Fight Mode on Free, or Super Bot Fight Mode on a paid plan
- [ ] Review Security Events after launch
- [ ] Avoid aggressive country blocking
- [ ] Allow verified search crawlers
- [ ] Confirm monitoring services are not challenged
- [ ] Enable the managed protections available on the selected plan
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

- [ ] Publish a Privacy Notice
- [ ] Publish a Cookie Notice only if cookies are introduced
- [ ] Avoid unnecessary analytics identifiers
- [ ] Decide whether Cloudflare Web Analytics is needed
- [ ] Document what logs are retained
- [ ] Do not collect personal data without a defined purpose
- [ ] Provide a contact address
- [ ] Provide a security contact
- [ ] Add:

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

- [ ] Add copyright and content-use information
- [ ] Clarify that BDA is a fictional institution where appropriate
- [ ] Review whether external website screenshots can be reproduced
- [ ] Attribute source material and archival captures properly
- [ ] Avoid presenting fabricated historical claims as real-world fact outside the fictional framing

---

# 12. Testing and quality assurance

## Automated

- [ ] `npm ci`
- [X] `npm run build`
- [ ] TypeScript checks
- [ ] Link checker
- [ ] Accessibility scan
- [ ] Lighthouse run
- [ ] Dependency audit
- [ ] HTML validation where practical
- [ ] Ensure CI fails on build errors

## Manual

- [ ] Click every navigation item
- [ ] Click every card and record
- [ ] Verify all related-record links
- [ ] Verify all publication links
- [ ] Verify every collection member
- [ ] Verify every notice
- [X] Test search
- [ ] Test 404
- [ ] Test keyboard navigation
- [ ] Test browser back and forward
- [ ] Test direct URL entry
- [ ] Test with JavaScript disabled where possible
- [ ] Test at slow connection speed
- [ ] Inspect browser console for errors
- [ ] Inspect network panel for failed assets
- [ ] Check page source for accidentally exposed secrets
- [ ] Verify headers with:

```bash
curl -I https://digitalantiquities.org
```

## Performance

- [ ] Optimize emblem files
- [ ] Optimize screenshot files
- [ ] Add image dimensions to prevent layout shift
- [ ] Lazy-load off-screen images
- [ ] Limit third-party scripts
- [ ] Review font loading
- [ ] Test Core Web Vitals
- [ ] Ensure catalogue pages remain fast with more records

---

# 13. Monitoring, backup and recovery

- [ ] Enable Cloudflare security-event monitoring
- [ ] Review deployment notifications
- [ ] Subscribe to GitHub security alerts
- [ ] Define who receives operational alerts
- [ ] Document rollback procedure
- [ ] Test restoring a previous Cloudflare deployment
- [ ] Confirm Git history contains all content
- [ ] Keep a local clone or secondary backup
- [ ] Export Cloudflare DNS configuration periodically
- [ ] Document custom rules and Access policies
- [ ] Review security settings quarterly
- [ ] Review dependencies monthly
- [ ] Test restore before launch

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

- [ ] Production build succeeds
- [ ] Every navigation route works
- [ ] No dead links
- [ ] No fake operational records or statistics
- [ ] Search works or is clearly unavailable
- [ ] Minimum content inventory is complete
- [ ] Emblem refresh complete
- [ ] Mobile review complete
- [ ] Accessibility review complete
- [ ] Security headers deployed and tested
- [ ] GitHub and Cloudflare MFA enabled
- [ ] Production branch protected
- [ ] Dependabot and secret alerts enabled
- [ ] Cloudflare preview tested
- [ ] HTTPS and custom domain verified
- [ ] DNSSEC enabled
- [ ] Bot and WAF settings reviewed
- [ ] Custom 404 exists
- [ ] Privacy and security contact pages exist
- [ ] Backup and rollback procedure tested
- [ ] Final production smoke test completed

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
