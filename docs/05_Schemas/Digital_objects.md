# Bureau of Digital Antiquities

**Information Systems Manual**

**Schema Specification**

**Document:** ISM-001  
**Title:** Digital Object Schema  
**Version:** 1.0  
**Status:** Current  

Prepared by: Records & Provenance Division

---

# Purpose

This document defines the canonical public data model used by the Bureau of
Digital Antiquities for the documentation of Digital Objects.

The schema serves as the authoritative model for Digital Object Records
maintained within the Forgotten Web Exchange (FWX) and published through the
Bureau's public catalogue.

The schema may also inform related Bureau archival, preservation and publication
systems.

---

# Definition

A **Digital Object** is a digitally created or digitally preserved entity
determined by the Bureau to possess historical, cultural, educational,
technical or archival significance.

Digital Objects may include:

- Websites
- Personal homepages
- Forums and digital communities
- Network services
- Software
- Games and software environments
- Digital publications
- Documentation
- Multimedia
- Digital archives

A Digital Object is distinct from its **Digital Object Record**.

The Digital Object is the historically significant entity being documented.
The Digital Object Record is the formal FWX record through which the Bureau
documents that object.

---

# Digital Object Records

Each accepted Digital Object is assigned a permanent FWX identifier and
documented through a Digital Object Record.

Digital Object Records provide the Bureau's structured record of the identity,
classification, operational condition and preservation state of a Digital
Object.

Public Digital Object Records may additionally contain historical network
addresses, preservation assessments, relationships, verification information
and other approved metadata.

---

# Required Metadata

Every public Digital Object Record shall contain the following fields:

| Field | Description |
|---|---|
| FWX Identifier | Permanent identifier assigned by the Forgotten Web Exchange |
| Title | Official Bureau title for the Digital Object |
| Object Type | Recorded type or category of Digital Object |
| Classification | Access classification assigned to the record |
| Operational Status | Recorded operational condition of the Digital Object |
| Preservation Status | Recorded preservation condition or method |
| Summary | Public description of the Digital Object |

---

# Optional and Conditional Metadata

Additional metadata may be recorded where relevant or available.

| Field | Description |
|---|---|
| Creator | Known creator, author, organisation or responsible entity |
| Historical Address | Network address historically associated with the Digital Object |
| Historical Address Status | Indicates whether the historical address remains suitable for direct access |
| Current Address | Current network location providing access to the Digital Object or an accepted representation |
| Date of Origin | Known or estimated date of original publication or operation |
| Last Verification | Most recent Bureau verification date |
| Preview Image | Approved representative image associated with the record |
| Preservation Assessment | Structured information concerning accessibility, integrity, monitoring and preservation |
| Related Digital Objects | Relationships to other FWX Digital Object Records |
| Tags | Controlled or descriptive terms used for discovery and organisation |

The absence of optional metadata does not invalidate a Digital Object Record.

---

# Address Metadata

Historical network addresses are preserved as documentary metadata.

A **Historical Address** records an address historically associated with a
Digital Object. Its inclusion does not imply that the present-day destination
remains controlled by, associated with or representative of the original
Digital Object.

Where a historical address now resolves to unrelated material, the address
shall not be presented as an active public link.

A **Current Address** may be recorded where the Bureau has verified a current
network location associated with the Digital Object, reconstruction or
preserved representation.

---

# Status Information

## Classification

Public Digital Object Records use one of the following access classifications:

- Public
- Internal
- Restricted

Only records approved for public access are published through the public FWX
Catalogue.

---

## Operational Status

Operational Status describes the present operational condition of the Digital
Object or associated service.

Operational Status is distinct from Preservation Status.

Values may include, but are not limited to:

- Active
- Active Legacy Site
- Defunct

Additional values may be introduced where required by the nature of the
Digital Object.

---

## Preservation Status

Preservation Status describes the recorded preservation condition or
preservation method associated with the Digital Object.

Preservation Status is distinct from Operational Status.

Values may include:

- Under Assessment
- Stable
- Partial
- Fragmentary
- Unrecoverable
- In Situ Preservation
- Documentary Preservation

Additional preservation states may be introduced where justified by Bureau
preservation practice.

---

# Preservation Assessment

Where applicable, a Digital Object Record may contain a structured Preservation
Assessment.

A Preservation Assessment may document:

| Field | Description |
|---|---|
| Accessibility | Means by which the Digital Object or surviving representation remains available for study |
| Integrity Status | Assessment of completeness, condition or authenticity |
| Monitoring | Continuing verification or monitoring activity |
| Observing Office | Bureau office responsible for the recorded assessment or monitoring activity |

Preservation Assessments may be revised as the condition, availability or
understanding of a Digital Object changes.

---

# Relationships

Digital Object Records may document relationships with other Bureau records.

A Digital Object may:

- relate to multiple Digital Objects
- appear in one or more curated Collections
- be referenced by one or more Bureau Publications
- be subject to preservation monitoring or reassessment
- be associated with relevant Bureau offices according to operational requirements

Relationships do not imply ownership, custody or administrative responsibility
unless explicitly stated.

---

# Collections

Collections are curated groupings of Digital Objects assembled around a shared
historical, technical or thematic context.

Collection membership is separate from the identity of the Digital Object
Record.

A Digital Object may therefore appear in multiple Collections without altering
its permanent FWX identifier or core record.

---

# Publications

Bureau Publications and Digital Object Records are separate institutional
records.

A Publication may reference one or more Digital Objects documented within FWX.

A Publication does not replace the Digital Object Record, and a Digital Object
Record does not replace an associated Publication.

---

# Identifier Convention

Public Digital Object Records use the FWX identifier format:

`FWX-NNNNNN`

Example:

`FWX-000143`

FWX identifiers are permanent institutional identifiers and shall not be reused
for another Digital Object.

---

# Example Record

```yaml
fwxId: FWX-000143

title: The Unofficial X-Files Homepage

objectType: Personal Homepage

classification: Public

operationalStatus: Defunct

preservationStatus: Documentary Preservation

summary: >
  Public summary describing the historical significance and surviving
  documentation of the Digital Object.

creator: Example Creator

originalUrl: "http://example.com/"

firstPublished: "1997"

lastVerified: "2026-09-12"

preservation:
  accessibility: Documentary record
  integrity: Partial
  monitoring: Periodic review
  observingOffice: Office of Digital Preservation

relatedObjects: []

tags:
  - Personal Homepage
  - Early Web

# Schema Governance

The Records & Provenance Division maintains this specification in coordination
with Bureau offices responsible for preservation, technical examination,
archival recovery and public documentation.
Changes to the schema shall preserve compatibility with existing permanent FWX
identifiers wherever practicable.
Future internal systems may extend this specification with additional metadata
without requiring all internal fields to be exposed through the public FWX
Catalogue.
...

# Revision History

| Version | Date | Description |
|---|---|---|
| 1.0 | September 2026 | MK1 Digital Object schema aligned with the public FWX Catalogue |


There are a few deliberate improvements here. The biggest is that we now formally distinguish the **Digital Object itself** from its **Digital Object Record**, which makes the whole BDA information model much clearer. Collections are now many-to-many rather than pretending each object belongs to exactly one, and Operational Status and Preservation Status are explicitly separate concepts. The Historical Address safety rule we've already implemented is now part of the formal specification too.

I also deliberately changed **“Responsible Office”** from required metadata into a more flexible relationship with Bureau offices. That matches the organisational architecture we just established: Digital Objects can involve multiple departments according to operational requirements rather than being permanently “owned” by one department. 

And unlike the old draft, this specification now maps closely to the actual Astro schema—`fwxId`, `title`, `objectType`, `classification`, `operationalStatus`, `preservationStatus`, `summary`, plus the optional metadata and preservation structure. 

Save that, and then we can do one final sanity check before ticking **☑ Confirm FWX terminology matches Digital Object spec**. :D