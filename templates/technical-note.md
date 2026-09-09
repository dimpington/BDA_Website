---
# BUREAU OF DIGITAL ANTIQUITIES
# TECHNICAL NOTE TEMPLATE
#
# Internal working template for Technical Notes issued through
# the Bureau publication system.
#
# Remove instructional comments before publication.

# ---------------------------------------------------------------------------
# IDENTIFICATION
# ---------------------------------------------------------------------------

# REQUIRED
# Format: TN-000000
# Assign an ID before drafting and verify that it is not already in use.
id: TN-000000

# REQUIRED
title: "Technical Note Title"

# REQUIRED
# Must remain exactly "Technical Note".
type: "Technical Note"

# REQUIRED
# Preferred format: YYYY-MM-DD
published: "YYYY-MM-DD"

# REQUIRED
# Concise description of the technical subject and purpose of the note.
summary: >
  Concise description of the technical system, method, format,
  behavior, or preservation issue examined by this note.

# ---------------------------------------------------------------------------
# ISSUANCE
# ---------------------------------------------------------------------------

# REQUIRED
# Must correspond to a recognised Bureau organisational unit.
issuingOffice: "Digital Forensics Unit"

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
documentReference: "BDA-TN-000000"

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
# Digital Objects directly examined or technically relevant to the note.
relatedObjects: []
# Example:
# relatedObjects:
#   - FWX-000001

# OPTIONAL
# Other Bureau publications directly relevant to the technical subject.
relatedPublications: []
# Example:
# relatedPublications:
#   - FR-000001

# ---------------------------------------------------------------------------
# TAGS
# ---------------------------------------------------------------------------

tags:
  - "Technical Analysis"
---

# Purpose

State the technical question, problem, method, or behavior addressed by the note.

Technical Notes should normally have a deliberately narrow scope. They document technical understanding rather than provide a general history of the subject.

# Technical Context

Describe the system, technology, protocol, format, architecture, software, hardware, or preservation environment necessary to understand the note.

Where historical systems are involved, distinguish documented historical behavior from assumptions based on modern equivalents.

# Method or Analysis

Describe the technical examination or reasoning used.

Depending on the subject, this may include:

- software or protocol analysis;
- file-format examination;
- infrastructure analysis;
- archival comparison;
- reconstruction;
- metadata examination;
- dependency analysis;
- integrity verification;
- compatibility testing;
- or preservation methodology.

Document significant limitations in the available evidence or testing environment.

# Findings

Record the technical findings.

Prefer precise descriptions over unsupported certainty.

Where relevant, distinguish between:

- observed behavior;
- documented historical behavior;
- reconstructed behavior;
- inferred behavior;
- and behavior of later successor systems.

A modern implementation using the same name or branding should not automatically be treated as technically continuous with an earlier Digital Object.

# Preservation Implications

Explain whether the technical findings affect preservation, interpretation, accessibility, reconstruction, or monitoring.

Consider where applicable:

- dependencies;
- obsolete formats;
- unavailable infrastructure;
- server-side components;
- client requirements;
- network services;
- external resources;
- emulation or reconstruction;
- data integrity;
- and long-term accessibility.

Technical change does not automatically destroy the continuity of a Digital Object, just as visual continuity does not automatically prove technical continuity.

# Recommendations

Record any technical recommendation arising from the analysis.

Recommendations may include:

- additional investigation;
- preservation action;
- monitoring;
- metadata amendment;
- reconstruction;
- format migration;
- documentation;
- relationship review;
- or no further technical action.

# Related Records

Explain why any referenced Digital Objects or Bureau Publications are relevant to the technical analysis.

References should represent substantive technical or documentary relationships rather than general thematic similarity.

---

## Internal Verification Checklist

Remove this section before publication.

- [ ] TN identifier assigned before drafting.
- [ ] TN identifier checked for duplication.
- [ ] Title accurately describes the technical subject.
- [ ] Publication date recorded.
- [ ] Summary clearly states the purpose of the note.
- [ ] Issuing office corresponds to an existing Bureau unit.
- [ ] Authors checked where applicable.
- [ ] Classification reviewed.
- [ ] Document reference assigned.
- [ ] Revision number reviewed.
- [ ] Document status reviewed.
- [ ] Technical scope is clearly defined.
- [ ] Historical behavior is distinguished from modern behavior where necessary.
- [ ] Method or analysis is sufficiently documented.
- [ ] Limitations and uncertainty are recorded.
- [ ] Findings are supported by the analysis.
- [ ] Preservation implications have been considered.
- [ ] Recommendations are supported by the findings.
- [ ] Related FWX IDs exist.
- [ ] Related Publication IDs exist.
- [ ] Relationships are technically or documentarily meaningful.
- [ ] Technical terminology reviewed.
- [ ] External resources verified where applicable.
- [ ] Template comments and this checklist removed before publication.
- [ ] `npm run build` passes before release.