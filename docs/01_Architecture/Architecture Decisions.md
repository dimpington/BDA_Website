# Architecture Decisions

---

## ADR-001 — Core Domain Entity

**Status:** Accepted

### Decision

The Bureau shall use **Digital Object** as the primary domain entity for modeling, software architecture and internal documentation.

Public-facing content may use more specific terminology depending on context, including:

- Digital Site
- Forum
- Software
- Webring
- Archive
- Digital Collection
- Service
- Personal Homepage

### Rationale

The Bureau documents a broad range of historically significant digital heritage.

A single abstract entity provides a flexible software model while allowing public-facing language to remain natural and context-specific.

This approach separates implementation from presentation and supports future expansion without requiring structural changes to the underlying model.

## ADR-002 — FWX Access Model

**Status:** Accepted

### Decision

FWX shall support both public and internal records.

Access to FWX information shall be determined by record classification and field-level publication approval.

The public website shall provide access only to FWX records and data approved for public release.

### Rationale

FWX is the Bureau's central archival and records management system, while the website is only the public-facing portal.

This separation allows the Bureau to maintain internal research, verification notes and restricted archival material without exposing it through the public website.

## ADR-003 — Digital Object Record Schema

**Status:** Accepted

### Decision

All FWX records shall be based on a shared **Digital Object** core schema.

The core schema defines fields common to all Digital Objects. Additional object-type-specific fields may be added where required.

Some fields shall be mandatory. Others shall remain optional.

### Rationale

A shared schema ensures consistency across FWX while allowing the Bureau to document different forms of digital heritage, including websites, forums, software, archives and online services.

This structure also supports future administrative tools such as a “New Digital Object” interface where Bureau personnel can create records through a guided form.

---

## ADR-004 — Public Portal

**Status:** Accepted

### Decision

The Bureau website serves two primary purposes:

1. Present the Bureau of Digital Antiquities as a public institution.
2. Provide public access to approved FWX records, publications and collections.

### Rationale

The website is not the Bureau itself.

It is the public-facing interface to the Bureau and selected information contained within the Forgotten Web Exchange (FWX).

---

## ADR-005 — Information Architecture

**Status:** Accepted

### Decision

The public website shall be organized around five primary destinations:

- Home
- FWX
- Publications
- Collections
- About

### Rationale

The Bureau website exists to orient visitors to the institution while providing structured access to the public archival collection.

Additional pages shall support these primary destinations rather than replace them.

