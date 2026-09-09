---
# BUREAU OF DIGITAL ANTIQUITIES
# PRESERVATION BULLETIN TEMPLATE
#
# Internal working template for Preservation Bulletins issued through
# the Bureau publication system.
#
# Remove instructional comments before publication.

# ---------------------------------------------------------------------------
# IDENTIFICATION
# ---------------------------------------------------------------------------

# REQUIRED
# Format: PB-000000
# Assign an ID before drafting and verify that it is not already in use.
id: PB-000000

# REQUIRED
title: "Preservation Bulletin Title"

# REQUIRED
# Must remain exactly "Preservation Bulletin".
type: "Preservation Bulletin"

# REQUIRED
# Preferred format: YYYY-MM-DD
published: "YYYY-MM-DD"

# REQUIRED
# Concise public description of the bulletin and its purpose.
summary: >
  Concise description of the preservation issue, observation, guidance,
  or change addressed by this bulletin.

# ---------------------------------------------------------------------------
# ISSUANCE
# ---------------------------------------------------------------------------

# REQUIRED
# Must correspond to a recognised Bureau organisational unit.
# Examples:
# Office of Digital Preservation
# Records & Provenance Division
# Recovery Operations Division
# Digital Forensics Unit
# Publications Office
# Bureau Archives
issuingOffice: "Office of Digital Preservation"

# OPTIONAL
# Individual authors or institutional bylines.
authors: []
# Example:
# authors:
#   - "A. V. Waymark"

# ---------------------------------------------------------------------------
# CONTROL
# ---------------------------------------------------------------------------

# OPTIONAL — defaults to Public in the schema.
# Allowed values:
# Public
# Internal
# Restricted
classification: Public

# REQUIRED
# Bureau document reference used for formal identification.
documentReference: "BDA-PB-000000"

# OPTIONAL — defaults to 1.0.
revision: "1.0"

# OPTIONAL — defaults to Current.
# Allowed values:
# Current
# Superseded
# Archived
# Withdrawn
documentStatus: Current

# ---------------------------------------------------------------------------
# RELATIONSHIPS
# ---------------------------------------------------------------------------

# OPTIONAL
# Reference FWX IDs directly affected, examined, or discussed.
relatedObjects: []
# Example:
# relatedObjects:
#   - FWX-000001

# OPTIONAL
# Reference other Bureau publication IDs where a meaningful documentary
# relationship exists.
relatedPublications: []
# Example:
# relatedPublications:
#   - TN-000001

# ---------------------------------------------------------------------------
# TAGS
# ---------------------------------------------------------------------------

tags:
  - "Digital Preservation"
---

# Purpose

State why the Preservation Bulletin has been issued and what preservation matter it addresses.

A Preservation Bulletin should normally concern a preservation condition, policy, observation, risk, intervention, or change relevant to one or more Digital Objects or to Bureau preservation practice.

# Preservation Context

Describe the relevant technical, historical, archival, or operational context.

Where the bulletin concerns a specific Digital Object, distinguish clearly between the object itself and external or constituent material.

Avoid claims of authenticity, continuity, or completeness that exceed the available evidence.

# Assessment

Describe the Bureau's assessment of the preservation issue.

Where appropriate, address:

- accessibility;
- integrity;
- operational condition;
- archival coverage;
- reconstruction;
- external dependencies;
- provenance;
- monitoring;
- and known limitations.

Preservation terminology should be consistent with the applicable FWX Digital Object Records.

# Guidance or Action

Describe any preservation guidance, action, recommendation, monitoring requirement, or institutional response arising from the assessment.

If no intervention is required, state the reason continued observation is considered sufficient.

# Related Records

Explain the significance of any Digital Objects or Bureau Publications referenced in the frontmatter.

Do not add relationships solely to increase cross-linking. References should have a meaningful documentary or preservation purpose.

---

## Internal Verification Checklist

Remove this section before publication.

- [ ] PB identifier assigned before drafting.
- [ ] PB identifier checked for duplication.
- [ ] Title accurately describes the bulletin.
- [ ] Publication date recorded.
- [ ] Summary clearly states the bulletin's purpose.
- [ ] Issuing office corresponds to an existing Bureau unit.
- [ ] Authors checked where applicable.
- [ ] Classification reviewed.
- [ ] Document reference assigned.
- [ ] Revision number reviewed.
- [ ] Document status reviewed.
- [ ] Preservation terminology is consistent with affected FWX records.
- [ ] Historical and technical claims reviewed.
- [ ] Related FWX IDs exist.
- [ ] Related Publication IDs exist.
- [ ] Relationships are meaningful.
- [ ] Privacy, sensitivity, and republication concerns considered.
- [ ] External resources verified where applicable.
- [ ] Template comments and this checklist removed before publication.
- [ ] `npm run build` passes before release.