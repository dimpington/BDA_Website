---
# BUREAU OF DIGITAL ANTIQUITIES
# FWX DIGITAL OBJECT RECORD TEMPLATE
#
# Internal working template for accessioning Digital Objects into the
# Forgotten Web Exchange (FWX).
#
# Remove instructional comments before publication.

# ---------------------------------------------------------------------------
# IDENTIFICATION
# ---------------------------------------------------------------------------

# REQUIRED
# Format: FWX-000000
# Assign an ID before drafting and verify that it is not already in use.
fwxId: FWX-000000

# REQUIRED
title: "Digital Object Title"

# REQUIRED
# Describe the object itself, not merely its historical subject.
# Examples:
# Website
# Web Search Service
# Web Directory Service
# Web Hosting Service
# Networked Imaging Service
# Peer-to-Peer Network Service
# Lifecasting Website
# Web Artwork
objectType: "Website"

# ---------------------------------------------------------------------------
# ACCESS AND STATUS
# ---------------------------------------------------------------------------

# REQUIRED
# Allowed values:
# Public
# Internal
# Restricted
classification: Public

# REQUIRED
# Describes whether the original or continuing Digital Object remains
# operational.
#
# Existing catalogue terminology includes:
# Active
# Active Legacy Site
# Active Legacy Service
# Defunct
# Superseded
# Reconstructed
operationalStatus: "Defunct"

# REQUIRED
# Describes the principal preservation condition of the object.
#
# Existing catalogue terminology includes:
# In Situ
# Documentary Preservation
# Archival Record
# Distributed Archival Preservation
# Institutional Reconstruction
# Institutional Stewardship
# Fragmentary Archival Record
preservationStatus: "Archival Record"

# REQUIRED
# Concise public description of the Digital Object and its significance.
summary: >
  Concise description of the Digital Object, its historical context,
  and why it is represented in the FWX catalogue.

# OPTIONAL
# Only one or a very small number of records should normally be featured.
featured: false

# ---------------------------------------------------------------------------
# PROVENANCE
# ---------------------------------------------------------------------------

# OPTIONAL
creator: "Creator or responsible organisation"

# OPTIONAL
# Use only where historically defensible.
originalUrl: "https://example.com/"

# OPTIONAL
# Use when the Digital Object, an official reconstruction, or another
# appropriate continuing representation is currently available.
currentUrl: "https://example.com/"

# OPTIONAL
# ISO-style date preferred where known:
# YYYY-MM-DD
# YYYY-MM
# YYYY
firstPublished: "1998"

# OPTIONAL
# Date on which the record, URL, preservation state, or other relevant
# information was last verified.
# Preferred format: YYYY-MM-DD
lastVerified: "YYYY-MM-DD"

# ---------------------------------------------------------------------------
# PREVIEW
# ---------------------------------------------------------------------------

# OPTIONAL
# Standard filename:
# /images/fwx/fwx-000000.webp
#
# Current capture standard:
# 1600 × 1000 px (16:10), WebP
#
# A preview should represent the Digital Object without unnecessarily
# reproducing sensitive, misleading, or poorly sourced constituent material.
previewImage: "/images/fwx/fwx-000000.webp"

# ---------------------------------------------------------------------------
# PRESERVATION ASSESSMENT
# ---------------------------------------------------------------------------

# OPTIONAL AS A BLOCK, BUT RECOMMENDED FOR ALL PUBLIC FWX RECORDS.
preservation:
  # Examples:
  # Publicly Accessible
  # Partially Accessible
  # Not Publicly Accessible
  accessibility: "Publicly Accessible"

  # Describe the confidence or condition of the preserved representation.
  # Example:
  # Verified Legacy Presentation
  integrity: "Verified Legacy Presentation"

  # Example:
  # Routine Observation
  monitoring: "Routine Observation"

  # Must correspond to a recognised Bureau organisational unit.
  # Examples:
  # Office of Digital Preservation
  # Bureau Archives
  # Records & Provenance Division
  # Digital Forensics Unit
  observingOffice: "Office of Digital Preservation"

# ---------------------------------------------------------------------------
# RELATIONSHIPS
# ---------------------------------------------------------------------------

# Use only for meaningful historical, technical, provenance, derivative,
# or preservation relationships.
#
# Do NOT relate records merely because they share a broad subject,
# time period, or general historical significance. Broad thematic
# relationships normally belong at Collection level.
#
# Relationship descriptions may be asymmetric when the historical
# perspective differs between the two records.
relatedObjects: []
# Example:
# relatedObjects:
#   - fwxId: FWX-000001
#     relationship: "Historical Predecessor"

# ---------------------------------------------------------------------------
# TAGS
# ---------------------------------------------------------------------------

# Use concise descriptive terms useful for discovery and curation.
tags:
  - "Internet History"
---

# Overview

Describe what the Digital Object was or is, who created or operated it, when it appeared, and why it is historically significant.

Prefer a clear archival description over nostalgia or promotional language.

# Object Scope

Define exactly what the FWX record considers to be the Digital Object.

This section is especially important for network services, distributed systems, reconstructed websites, archival corpora, and objects whose boundaries may otherwise be ambiguous.

Distinguish the Digital Object from related but non-constituent material where necessary.

For example, content transmitted through a network service is not automatically part of the Digital Object itself, and external resources linked from a website are not automatically constituent parts of that website.

# Preservation Note

Describe what survives, how it survives, and what the assigned preservation status means for this specific object.

Distinguish where relevant between:

- continued operation of the original or continuing object;
- institutional reconstruction;
- archival capture;
- documentary evidence;
- distributed preservation;
- fragmentary survival; and
- later interpretation or reuse.

Do not imply uninterrupted technical continuity merely because a legacy presentation remains publicly accessible.

Do not imply that preservation necessarily authorises republication of all constituent material.

---

## Internal Verification Checklist

Remove this section before publication.

- [ ] FWX ID assigned before drafting.
- [ ] FWX ID checked for duplication.
- [ ] Title checked.
- [ ] Object type accurately describes the Digital Object.
- [ ] Classification assigned.
- [ ] Operational status assigned and supported.
- [ ] Preservation status assigned and supported.
- [ ] Summary describes both object and significance.
- [ ] Creator/provenance checked where applicable.
- [ ] Original URL checked where applicable.
- [ ] Current URL checked where applicable.
- [ ] First publication date checked to the available level of precision.
- [ ] Last verification date recorded.
- [ ] Object Scope clearly defines the boundaries of the Digital Object.
- [ ] Preservation Note accurately describes what survives.
- [ ] Preview image is representative and appropriately sourced.
- [ ] Preview filename follows FWX naming convention.
- [ ] Sensitive or unnecessary constituent material is not reproduced.
- [ ] Related FWX IDs exist.
- [ ] Relationships are historically or technically meaningful.
- [ ] Reciprocal relationship considered where appropriate.
- [ ] Collection membership considered separately from object relationships.
- [ ] Observing office corresponds to an existing Bureau unit.
- [ ] Facts and historical claims reviewed.
- [ ] External resources verified where practical.
- [ ] `npm run build` passes before release.