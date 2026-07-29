# Bureau of Digital Antiquities

**Information Systems Manual**

**Schema Specification**

**Document:** ISM-001  
**Title:** Digital Object Schema  
**Version:** 1.0 (Draft)  
**Status:** Active Draft  

Prepared by: Records & Provenance Division

---

# Purpose

This document defines the canonical schema used by the Bureau of Digital Antiquities for cataloguing Digital Objects.

The schema serves as the authoritative data model for:

- Forgotten Web Exchange (FWX)
- Bureau Archives
- Bureau Publications
- Internal preservation systems
- Future database implementations

All Digital Objects shall conform to this specification.

---

# Definition

A **Digital Object** is any digitally created or digitally preserved entity determined to possess historical, cultural, educational, technical, or archival significance.

Examples include:

- Websites
- Personal homepages
- Forums
- Network services
- Software
- Games
- Digital publications
- Documentation
- Multimedia
- Digital archives

---

# Required Metadata

| Field | Description |
|--------|-------------|
| Identifier | Permanent FWX identifier |
| Title | Official Bureau title |
| Object Type | Type of digital object |
| Classification | Public or restricted classification |
| Collection | Assigned Bureau collection |
| Preservation Status | Current preservation status |
| Responsible Office | Bureau department responsible |
| Date of Origin | Original publication date |
| Accession Date | Date entered into Bureau custody |
| Summary | Public summary |

---

# Optional Metadata

| Field | Description |
|--------|-------------|
| Original URL | Known original address |
| Hosting Provider | GeoCities, Tripod, etc. |
| Author | Known creator |
| Operating Period | Years active |
| Subjects | Keywords |
| Language | Primary language |
| Related Objects | References to other Digital Objects |
| Related Publications | Bureau publications |
| Preservation Notes | Curator notes |
| External References | Outside archival references |

---

# Controlled Vocabulary

## Preservation Status

- Under Assessment
- Stable
- Partial
- Fragmentary
- Unrecoverable

---

## Object Types

- Personal Homepage
- Corporate Website
- Government Website
- Educational Website
- Forum
- Network Service
- Software
- Game
- Digital Publication
- Documentation
- Archive
- Unknown

---

## Asset Status

- Recovered
- Verified
- Damaged
- Missing
- Reconstructed
- Unknown

---

# Relationships

A Digital Object may:

- belong to one Collection
- reference multiple Publications
- contain multiple Assets
- contain multiple Preservation Events
- relate to multiple Digital Objects
- be managed by one Responsible Office

---

# Example Record

```yaml
id: FWX-000143

title: The Unofficial X-Files Homepage

objectType: Personal Homepage

classification: Public Cultural Record

collection: Personal Homepages

preservationStatus: Stable

responsibleOffice: Office of Digital Preservation

dateOfOrigin: 1997

accessionDate: 2026-02-18
```

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | July 2026 | Initial schema definition |