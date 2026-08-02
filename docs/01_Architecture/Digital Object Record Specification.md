# Digital Object Record Specification

Document Reference
BDA-STD-0001

Version
1.0

Status
Active

Approved By
Office of Digital Preservation

## Purpose

A Digital Object Record defines the information the Bureau records about a Digital Object within FWX.

All FWX records use a shared core schema. Object-type-specific fields may be added where required.

---

## Core Record Fields

### Identification

Required fields:

- FWX ID
- Title
- Object Type
- Classification
- Operational Status
- Preservation Status
- Summary

Optional fields:

- Alternative Titles
- Original URL
- Current URL
- Creator
- First Published
- Last Verified

---

### Significance

Optional fields:

- Historical Significance
- Cultural Significance
- Technical Significance
- Representative Significance
- Significance Notes

---

### Provenance

Optional fields:

- Origin
- Creator / Maintainer
- Ownership History
- Hosting History
- Verification Sources
- Provenance Notes

---

### Technical Profile

Optional fields:

- Technologies
- Markup / Language
- Server Software
- Media Types
- Dependencies
- Known Technical Characteristics

---

### Preservation Record

Optional fields:

- Preservation Status Notes
- Archived Copies
- Screenshots
- Recovered Files
- External Archives
- Preservation Actions

---

### Operational Timeline

Optional fields:

- Date
- Event
- Source
- Notes

---

### Publications

Optional fields:

- Related Field Reports
- Related Preservation Bulletins
- Related Technical Notes
- Related Annual Reports

---

### Related Digital Objects

Optional fields:

- Related FWX ID
- Relationship Type
- Relationship Description
- Notes

Purpose

Related Digital Objects establish navigable relationships between
catalogued records within the Forgotten Web Exchange.

Relationships should describe meaningful historical, technical,
cultural or preservation connections.

---

### Media

Optional fields:

- Screenshots
- Documents
- Video
- Audio
- Recovered Assets

---

### Tags

Optional fields:

- Controlled Tags
- Technology Tags
- Period Tags
- Collection Tags

---

### References

Optional fields:

- Source Title
- Source URL
- Access Date
- Notes

---

### Internal Record

Internal-only fields:

- Investigator Notes
- Verification Notes
- Recovery Notes
- Pending Actions
- Review History
- Access Restrictions

---

## Access Model

Public visibility is determined by classification and publication approval.

The public website shall expose only fields approved for public release.

Internal fields remain restricted to Bureau use.

## Public Record Structure

Every published Digital Object Record shall present information using the
following document structure.

1. Document Header
2. Administrative Record
3. Historical Record
   - Historical Overview
4. Object Documentation
   - Narrative Record
5. Technical Assessment
6. Preservation Assessment
7. Related Records
8. Publication Record

## Public Record Mapping

Not every stored field is intended for public release.

The Bureau maintains a complete internal record for each Digital Object.
Public Digital Object Records expose only information approved for public
distribution.

Examples:

| Internal Field | Public |
|---------------|--------|
| Verification Notes | No |
| Pending Actions | No |
| Review History | No |
| Historical Significance | Yes |
| Preservation Status | Yes |
| Operational Timeline | Yes |

## Editorial Standards

Digital Object Records shall be written in a neutral,
descriptive and institutional tone.

Records describe observations rather than opinions.

The Bureau documents Digital Objects.
It does not review, rank or recommend them.