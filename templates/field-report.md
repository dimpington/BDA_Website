---
# BUREAU OF DIGITAL ANTIQUITIES
# FIELD REPORT TEMPLATE
#
# Internal working template for Field Reports issued through
# the Bureau publication system.
#
# Remove instructional comments before publication.

# ---------------------------------------------------------------------------
# IDENTIFICATION
# ---------------------------------------------------------------------------

# REQUIRED
# Format: FR-000000
# Assign an ID before drafting and verify that it is not already in use.
id: FR-000000

# REQUIRED
title: "Field Report Title"

# REQUIRED
# Must remain exactly "Field Report".
type: "Field Report"

# REQUIRED
# Preferred format: YYYY-MM-DD
published: "YYYY-MM-DD"

# REQUIRED
# Concise description of the investigation, survey, recovery,
# verification exercise, or examination documented by this report.
summary: >
  Concise description of the assignment, the subject examined,
  and the principal purpose of the field work.

# ---------------------------------------------------------------------------
# ISSUANCE
# ---------------------------------------------------------------------------

# REQUIRED
# Must correspond to a recognised Bureau organisational unit.
issuingOffice: "Records & Provenance Division"

# OPTIONAL
# Personnel responsible for the investigation or report.
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
documentReference: "BDA-FR-000000"

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
# Digital Objects directly examined, discovered, recovered,
# verified, or otherwise materially relevant to the assignment.
relatedObjects: []
# Example:
# relatedObjects:
#   - FWX-000001

# OPTIONAL
# Other Bureau publications directly relevant to the work.
relatedPublications: []
# Example:
# relatedPublications:
#   - PB-000001

# ---------------------------------------------------------------------------
# TAGS
# ---------------------------------------------------------------------------

tags:
  - "Field Investigation"
---

# Assignment

Describe why the work was undertaken.

Identify the subject of the investigation, survey, recovery operation, verification exercise, or examination and define the intended scope.

Where appropriate, state what question the investigation was intended to answer.

# Method

Describe how the work was conducted.

Depending on the assignment, this may include:

- examination of a live Digital Object;
- archival research;
- comparison of historical captures;
- provenance research;
- technical inspection;
- recovery or reconstruction work;
- examination of documentation or surviving artifacts;
- external-source verification; or
- comparison with existing Bureau records.

The method should be sufficiently clear that the basis of the report's findings can be understood.

# Findings

Record the material findings of the investigation.

Separate observed or documented facts from interpretation where necessary.

Where evidence is incomplete, conflicting, or uncertain, preserve that uncertainty rather than manufacture precision.

Relevant negative findings may also be recorded. Failure to establish provenance, continuity, authorship, or another expected fact can itself be significant.

# Assessment

Explain what the findings mean in the context of the Bureau's archival and preservation responsibilities.

Where applicable, consider:

- historical significance;
- provenance;
- object identity and scope;
- operational continuity;
- preservation condition;
- archival coverage;
- relationships to existing Digital Objects;
- classification;
- sensitivity;
- and suitability for accession or continued publication.

# Disposition

Record the outcome of the assignment.

Possible outcomes may include:

- accession recommended;
- accession deferred;
- additional research required;
- preservation monitoring recommended;
- record amendment recommended;
- relationship review required;
- recovery work completed;
- no further action required; or
- matter referred to another Bureau unit.

A deferred or negative disposition is a valid result. Field work does not need to produce an accession or publication change to be useful.

# Related Records

Explain the significance of Digital Objects or Bureau Publications referenced by the report.

Relationships should reflect the actual investigation rather than merely thematic similarity.

---

## Internal Verification Checklist

Remove this section before publication.

- [ ] FR identifier assigned before drafting.
- [ ] FR identifier checked for duplication.
- [ ] Title accurately describes the assignment.
- [ ] Publication date recorded.
- [ ] Summary identifies the work and its purpose.
- [ ] Issuing office corresponds to an existing Bureau unit.
- [ ] Authors checked where applicable.
- [ ] Classification reviewed.
- [ ] Document reference assigned.
- [ ] Revision number reviewed.
- [ ] Document status reviewed.
- [ ] Assignment and scope are clearly defined.
- [ ] Method accurately describes how the work was conducted.
- [ ] Findings distinguish evidence from interpretation where necessary.
- [ ] Uncertainty and conflicting evidence are preserved.
- [ ] Assessment is supported by the findings.
- [ ] Disposition is explicitly stated.
- [ ] Related FWX IDs exist.
- [ ] Related Publication IDs exist.
- [ ] Relationships are meaningful to the investigation.
- [ ] Privacy and sensitivity concerns considered.
- [ ] Historical and technical claims reviewed.
- [ ] External resources verified where applicable.
- [ ] Template comments and this checklist removed before publication.
- [ ] `npm run build` passes before release.