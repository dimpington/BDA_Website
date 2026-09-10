# Bureau of Digital Antiquities

Repository for the **Bureau of Digital Antiquities (BDA)** public website and its associated archival content.

The Bureau of Digital Antiquities is a fictional institution established in 1998 to identify, document, preserve, and provide public access to historically significant digital objects and web heritage.

The project combines institutional worldbuilding with a functional, content-driven archival website.

---

## Public Access System

The website is the public-facing component of the Bureau's digital information environment.

It provides access to:

- the Forgotten Web Exchange catalogue;
- Digital Object records;
- curated Collections;
- Bureau Publications;
- Bureau Notices;
- organisational records;
- department information;
- preservation and provenance information.

The public website is implemented as a static Astro site.

---

## Forgotten Web Exchange

The **Forgotten Web Exchange (FWX)** is the Bureau's archival catalogue for registered Digital Objects.

Each Digital Object receives a stable identifier using the format:

`FWX-000000`

FWX records may document websites, network services, web communities, digital artworks, software-related systems, and other historically significant digital objects.

Preservation does not necessarily imply continued operation or republication. FWX records distinguish between the historical object, its present operational condition, and the evidence available to the Bureau.

---

## Repository Structure

```text
docs/
  Institutional specifications, development documentation,
  architecture, terminology, and project planning.

templates/
  Editorial templates for creating authoritative Bureau records.

src/content/
  Structured Bureau records and archival content.

src/components/
  Reusable presentation components.

src/layouts/
  Shared page layouts and institutional navigation.

src/pages/
  Public routes and views.

src/styles/
  Site-wide presentation and visual rules.

public/images/
  Bureau branding, department emblems, FWX branding,
  and Digital Object preview images.
```

The project follows the principle:

> **If the Bureau already knows something, don't hardcode it.**

Structured institutional information should therefore live in the appropriate content collection rather than being duplicated in page or component code.

---

## Content Model

The repository currently contains structured collections for:

- Digital Objects
- Publications
- Collections
- Departments
- Bureau Notices

Content is primarily maintained as Markdown with validated frontmatter.

The Astro content schemas define what the system permits.

Repository templates define what the Bureau expects.

The editorial workflow defines how information becomes an authoritative Bureau record.

See:

`docs/04_Development/BDA_Editorial_Workflow.md`

and:

`templates/`

for the current editorial process.

---

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

A successful production build is required before repository changes are considered ready for release.

---

## Development Workflow

The general implementation workflow is:

```text
Documentation
↓
Schema
↓
Content
↓
Component
↓
CSS
↓
Build / Test
↓
Commit / Push
```

Content follows the Bureau editorial workflow:

```text
Research
↓
ID Assignment
↓
Draft
↓
Schema Validation
↓
Editorial Review
↓
Relationship Review
↓
Preview & Build
↓
Approval
↓
Merge
↓
Public Release
↓
Ongoing Review
```

GitHub Actions performs continuous integration builds for repository changes.

---

## Asset Structure

Institutional and archival assets are separated by purpose.

```text
public/images/
├── emblems/
│   └── Department emblems
├── fwx/
│   └── Digital Object preview images
├── bda-emblem.png
├── bda-banner.png
└── fwx-logo.png
```

Department emblem filenames use lowercase kebab-case.

FWX preview images follow the convention:

`fwx-000000.webp`

The current FWX preview capture standard is **1600 × 1000 pixels (16:10), WebP**.

---

## Documentation

Project documentation is maintained under:

`docs/`

The launch and development roadmap is tracked in:

`docs/04_Development/BDA_Launch_TODO.md`

Documentation should be updated when architectural, institutional, editorial, or content-model decisions change.

---

## Project Status

The Bureau website is under active development toward its first public release.

The current release strategy is:

- **0.9** — Private production preview
- **1.0** — Public Bureau website
- **1.1** — Bureau Administration Console

The planned public domain is:

`digitalantiquities.org`

---

## Bureau of Digital Antiquities

**Preserving historically significant digital heritage since 1998.**