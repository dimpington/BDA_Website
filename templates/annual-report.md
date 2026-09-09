---
# BUREAU OF DIGITAL ANTIQUITIES
# ANNUAL REPORT TEMPLATE
#
# Internal working template for Annual Reports issued through
# the Bureau publication system.
#
# Annual Reports provide a high-level institutional record of Bureau
# activity during a defined reporting period.
#
# Remove instructional comments before publication.

# ---------------------------------------------------------------------------
# IDENTIFICATION
# ---------------------------------------------------------------------------

# REQUIRED
# Format: AR-000000
# Assign an ID before drafting and verify that it is not already in use.
id: AR-000000

# REQUIRED
title: "Bureau Annual Report — YYYY"

# REQUIRED
# Must remain exactly "Annual Report".
type: "Annual Report"

# REQUIRED
# Date on which the report is formally published.
# Preferred format: YYYY-MM-DD
published: "YYYY-MM-DD"

# REQUIRED
# Concise description of the reporting period and principal activities.
summary: >
  Annual institutional report summarising Bureau activity,
  preservation work, catalogue development, and significant
  developments during the reporting period.

# ---------------------------------------------------------------------------
# ISSUANCE
# ---------------------------------------------------------------------------

# REQUIRED
# Annual Reports should normally be issued by the Publications Office
# unless Bureau practice later establishes another responsible unit.
issuingOffice: "Publications Office"

# OPTIONAL
authors: []

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
documentReference: "BDA-AR-000000"

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
# Include only Digital Objects materially discussed in the report.
# An Annual Report does not need to reference every object accessioned
# during the reporting period.
relatedObjects: []

# OPTIONAL
# Significant Bureau publications may be referenced where useful.
relatedPublications: []

# ---------------------------------------------------------------------------
# TAGS
# ---------------------------------------------------------------------------

tags:
  - "Annual Report"
---

# Executive Summary

Provide a concise overview of the Bureau's principal activities and developments during the reporting period.

This section should allow a reader to understand the year's major institutional developments without reading the complete report.

# Bureau Activity

Summarise significant Bureau activity during the reporting period.

This may include:

- institutional development;
- catalogue growth;
- preservation work;
- archival research;
- recovery operations;
- technical investigations;
- publication activity;
- curated Collections;
- and development of public-access services.

The Annual Report should emphasise significant developments rather than attempt to reproduce every operational event.

# Forgotten Web Exchange

Summarise significant FWX activity during the reporting period.

Where appropriate, discuss:

- new accessions;
- significant preservation assessments;
- changes in operational or preservation status;
- important relationship discoveries;
- ongoing review;
- and notable deferred accessions.

Catalogue totals should be verified against the current source of truth before publication.

# Preservation and Archival Work

Summarise significant preservation, recovery, archival, and verification work performed during the reporting period.

Distinguish preservation activity from simple continued public availability.

# Publications and Collections

Summarise significant Bureau Publications and Curated Collections issued or developed during the reporting period.

Highlight work that materially changed public understanding of the catalogue or documented important Bureau findings.

# Public Access and Systems

Summarise significant developments affecting the Bureau's public information systems and access services.

Technical detail should remain proportionate to an institutional Annual Report. Detailed engineering findings should normally be documented separately in Technical Notes or other appropriate records.

# Priorities for the Next Reporting Period

Identify significant planned priorities where appropriate.

These should represent institutional direction rather than promises that cannot be reliably maintained.

# Closing Statement

Provide a brief institutional conclusion to the reporting period.

---

## Internal Verification Checklist

Remove this section before publication.

- [ ] AR identifier assigned before drafting.
- [ ] AR identifier checked for duplication.
- [ ] Reporting period clearly identified.
- [ ] Publication date recorded.
- [ ] Summary accurately reflects the report.
- [ ] Issuing office reviewed.
- [ ] Authors checked where applicable.
- [ ] Classification reviewed.
- [ ] Document reference assigned.
- [ ] Revision number reviewed.
- [ ] Document status reviewed.
- [ ] Catalogue statistics verified against current source data.
- [ ] Significant accession activity reviewed.
- [ ] Significant preservation activity reviewed.
- [ ] Publications and Collections reviewed.
- [ ] Deferred or unresolved matters described accurately where included.
- [ ] Related FWX IDs exist.
- [ ] Related Publication IDs exist.
- [ ] Historical and institutional claims reviewed.
- [ ] Forward-looking statements do not create unsupported commitments.
- [ ] Template comments and this checklist removed before publication.
- [ ] `npm run build` passes before release.