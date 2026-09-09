# BDA Editorial Workflow

**Bureau of Digital Antiquities**  
**Internal Development and Editorial Standard**

This document defines the editorial process by which structured Bureau content is researched, drafted, reviewed, validated, published, and subsequently maintained.

The workflow applies principally to Digital Object Records in the Forgotten Web Exchange (FWX), but its general principles also apply to Publications, Collections, Bureau Notices, and other structured institutional content.

---

## 1. Purpose

The Bureau treats published catalogue records and institutional documents as maintained records rather than static website content.

Publication therefore requires more than successful technical validation. A record must also have an identifiable subject, defensible provenance, appropriate classification, meaningful relationships, and a clearly understood preservation state.

The standard editorial lifecycle is:

**Research → ID Assignment → Draft → Schema Validation → Editorial Review → Relationship Review → Preview & Build → Approval → Merge → Public Release → Ongoing Review**

Not every content type requires every stage to the same degree, but the principles of traceability, verification, and deliberate publication apply throughout the Bureau Digital Information Environment.

---

## 2. Research

Research establishes whether sufficient information exists to create a defensible Bureau record.

Before drafting, determine where applicable:

- what the subject is;
- who created, operated, or maintained it;
- when it was created or first published;
- its historical and technical context;
- its original and current locations;
- whether the original object still exists;
- what archival or documentary evidence survives;
- whether reliable sources disagree;
- whether the proposed record duplicates an existing Bureau record; and
- whether publication raises privacy, sensitivity, copyright, or provenance concerns.

Uncertainty should be recorded rather than resolved through unsupported assumptions.

Insufficient provenance is a valid reason to defer accession.

---

## 3. ID Assignment

A unique identifier should normally be assigned before drafting begins.

Identifiers establish the record's stable identity within Bureau systems and should not be casually reused or reassigned.

Current identifier families include:

- `FWX-000000` — Digital Object Records
- `PB-000000` — Preservation Bulletins
- `FR-000000` — Field Reports
- `TN-000000` — Technical Notes
- `AR-000000` — Annual Reports
- `COL-000000` — Curated Collections
- `BN-YYYY-000` — Bureau Notices

Before assigning an identifier:

1. inspect existing content for the relevant record family;
2. confirm that the identifier is not already in use;
3. confirm that the proposed subject does not duplicate an existing record; and
4. record intentionally reserved identifiers where necessary.

A reserved identifier does not imply that a record has been approved for publication.

---

## 4. Draft

Draft content using the appropriate file in the repository's `/templates` directory.

The template defines the Bureau's editorial expectations while the content schema defines what the system technically permits.

During drafting:

- complete all required fields;
- complete applicable optional fields where reliable information exists;
- use established Bureau terminology where appropriate;
- define the scope of the subject clearly;
- distinguish facts from interpretation;
- avoid unsupported claims of continuity or authenticity;
- identify uncertainty where necessary; and
- write for long-term archival clarity rather than temporary promotional relevance.

Instructional comments and internal checklists contained in templates should be removed before publication.

---

## 5. Schema Validation

Structured content must conform to the applicable Astro content schema.

Schema validation confirms that the content can be processed by the Public Access System. It does not establish that the content is historically or editorially correct.

Validation should confirm:

- required fields are present;
- enumerated values are valid;
- URLs are syntactically valid;
- arrays and nested structures use the expected format;
- dates use the expected representation;
- referenced assets use valid paths; and
- the site can process the record without content collection errors.

Where editorial practice has developed terminology not yet enforced by the schema, the established editorial vocabulary should be preferred.

---

## 6. Editorial Review

Editorial review evaluates the meaning and quality of the record rather than merely its technical structure.

Review should consider:

- title accuracy;
- summary accuracy;
- historical claims;
- creator and provenance information;
- publication dates;
- object or document type;
- classification;
- operational status;
- preservation status;
- scope;
- terminology;
- external URLs;
- preservation assessment;
- privacy and sensitivity;
- and consistency with existing Bureau records.

For Digital Object Records in particular, the reviewer should be able to answer:

> What exactly is the Digital Object represented by this record?

If that question cannot be answered clearly, the record's scope requires further work.

---

## 7. Relationship Review

Relationships are semantic assertions and must therefore be reviewed deliberately.

A relationship between two Digital Objects should normally represent a meaningful:

- historical;
- technical;
- provenance;
- derivative;
- operational; or
- preservation relationship.

Objects should not be directly related merely because they share a broad period, subject, technology, or cultural significance.

Broad thematic relationships normally belong in Curated Collections.

When a relationship is added:

1. verify that the referenced record exists;
2. confirm that the relationship is meaningful;
3. consider whether a reciprocal relationship is appropriate; and
4. allow relationship descriptions to differ where each record presents a different historical perspective.

New accessions may reveal relationships that were not apparent when older records were created. Existing records should therefore be reconsidered when relevant new material enters the catalogue.

---

## 8. Preview and Representation Review

Where a record includes a visual preview, the image should accurately and responsibly represent the subject.

The current FWX preview standard is:

**1600 × 1000 px (16:10), WebP**

Recommended filename:

`/images/fwx/fwx-000000.webp`

A preview should:

- represent the Digital Object rather than an unrelated successor;
- avoid unnecessary browser chrome where practical;
- avoid misleading reconstruction;
- avoid unnecessarily reproducing sensitive material;
- be appropriately sourced;
- and reflect the object's verified state where a contemporary capture is used.

The absence of a defensible preview is preferable to the use of a misleading or poorly sourced image.

---

## 9. Build Validation

Before approval, the complete site must build successfully.

Run:

```bash
npm run build

Run `npm run build` before approval.

The build should complete without content schema failures, unresolved application errors, or other errors introduced by the proposed content.

A successful build establishes technical compatibility. It does not replace editorial review.

Where practical, affected pages should also be inspected locally before release.

Where a Cloudflare preview deployment is available, open and review the preview before approval. Confirm that affected routes, assets, relationships, and page presentation behave as expected in the deployed environment.

---

## 10. Approval

Content is ready for approval when:

- research is sufficient;
- the identifier is valid;
- required metadata is complete;
- editorial review is complete;
- relationships have been reviewed;
- visual representation is appropriate;
- and the site builds successfully.

Approval represents a deliberate decision to incorporate the record into the Bureau's maintained body of information.

Content requiring unresolved provenance, privacy, classification, or preservation decisions should remain unpublished.

---

## 11. Merge

Approved changes may be committed and merged into the production branch according to the repository's development process.

Before merge:

- review changed files;
- ensure unrelated work is not accidentally included;
- use a meaningful commit message;
- and confirm that generated or temporary files have not been committed unintentionally.

Continuous Integration must pass before the change is considered technically integrated.

---

## 12. Public Release

Public release occurs when approved content has been successfully incorporated into the production deployment.

Following release, verify where applicable:

- the record resolves at its expected route;
- navigation and internal links work;
- related records resolve correctly;
- images load correctly;
- Collections and Publications display the relationship correctly;
- external links behave as expected; and
- production presentation matches the approved record.

A successful repository merge alone does not establish that public release has been verified.

Significant releases, institutional changes, catalogue milestones, or changes affecting public access should be recorded in a Bureau Notice where appropriate. Routine content additions do not require a Notice unless they have broader institutional significance.

---

## 13. Ongoing Review

Publication does not conclude the lifecycle of a Bureau record.

Digital Objects, preservation conditions, external URLs, historical understanding, and relationships may change over time.

Published records should therefore be reviewed when:

- a scheduled verification date is reached;
- a current URL changes or disappears;
- preservation conditions change;
- new archival evidence becomes available;
- a new accession establishes a significant relationship;
- a Collection or Publication changes the interpretive context;
- an error is identified; or
- classification or sensitivity requires reconsideration.

Ongoing Review may return a record to Research, Editorial Review, Relationship Review, or another earlier stage of the workflow.

The lifecycle is therefore iterative rather than strictly linear.

---

## 14. Digital Object Preservation Principles

The following principles have emerged from practical FWX accession work and should guide future records.

### 14.1 Preservation is not the same as continued operation

A Digital Object may survive through archival capture, documentary evidence, reconstruction, institutional stewardship, or distributed preservation even when the original system no longer operates.

### 14.2 Continued appearance does not prove technical continuity

A website or service that retains a historical appearance should not automatically be described as technically unchanged or continuously hosted on its original infrastructure.

### 14.3 Preservation does not automatically authorise republication

Historically public material may still require careful treatment because of privacy, sensitivity, copyright, or ethical considerations.

### 14.4 External resources are not automatically constituent objects

The preservation integrity of a Digital Object does not necessarily include the continued integrity of external resources to which it refers.

Likewise, content transmitted through a network service is not automatically part of the service as a Digital Object.

### 14.5 Branding does not establish object continuity

A modern service using the name or branding of an earlier system should not automatically be treated as the same Digital Object.

### 14.6 Technical change does not automatically destroy object continuity

Conversely, a continuing Digital Object may undergo changes in hosting, hardware, software, ownership, or infrastructure while retaining meaningful historical continuity.

### 14.7 Uncertainty should remain visible

Where evidence supports only a year, month, approximate date, fragmentary history, or qualified preservation assessment, the record should reflect that uncertainty rather than manufacture precision.

### 14.8 No accession is preferable to an unsupported accession

Catalogue completeness is subordinate to provenance.

A candidate for which the Bureau cannot establish a defensible identity or history should remain pending until sufficient evidence becomes available.

---

## 15. Editorial Authority

Three layers govern structured Bureau content:

**Schema**  
Defines what the information system permits.

**Template**  
Defines what the Bureau expects.

**Editorial Workflow**  
Defines how information becomes an authoritative Bureau record.

These layers should remain related but distinct. Editorial policy should not be encoded into technical validation until the terminology and practice are sufficiently mature to justify enforcement.