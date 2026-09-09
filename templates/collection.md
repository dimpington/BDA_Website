---
# BUREAU OF DIGITAL ANTIQUITIES
# CURATED COLLECTION TEMPLATE
#
# Internal working template for Curated Collections.
#
# Collections provide an interpretive framework across Digital Objects.
# They should not be used merely as folders or categories.
#
# Remove instructional comments before publication.

# ---------------------------------------------------------------------------
# IDENTIFICATION
# ---------------------------------------------------------------------------

# REQUIRED
# Format: COL-000000
# Assign an ID before drafting and verify that it is not already in use.
id: COL-000000

# REQUIRED
title: "Collection Title"

# REQUIRED
# Concisely describe the collection's subject and curatorial purpose.
summary: >
  Concise description of the historical, technical, cultural,
  or preservation theme examined by this Collection.

# ---------------------------------------------------------------------------
# CURATORSHIP
# ---------------------------------------------------------------------------

# REQUIRED
# Must correspond to a recognised Bureau organisational unit.
curator: "Bureau Archives"

# REQUIRED
# Preferred format: YYYY-MM-DD
published: "YYYY-MM-DD"

# Allowed values:
# Current
# Archived
# Planned
status: Current

# ---------------------------------------------------------------------------
# DIGITAL OBJECTS
# ---------------------------------------------------------------------------

# REQUIRED
# Digital Objects selected for inclusion in the Collection.
#
# Every referenced FWX ID must exist.
#
# Selection should support the curatorial thesis rather than merely
# reflect broad similarity between objects.
featuredObjects:
  - FWX-000000
  - FWX-000000

# OPTIONAL
# One of the Collection's featuredObjects may be designated as its
# principal representative object.
#
# Prefer an object with a defensible preview where visual presentation
# is important.
keyObject: FWX-000000

# ---------------------------------------------------------------------------
# RELATIONSHIPS
# ---------------------------------------------------------------------------

# OPTIONAL
# Bureau Publications materially relevant to the Collection.
relatedPublications: []

# OPTIONAL
# Other Collections with a meaningful curatorial relationship.
#
# Do not relate Collections merely because they overlap in period,
# technology, or general Internet history.
relatedCollections: []

# ---------------------------------------------------------------------------
# TAGS
# ---------------------------------------------------------------------------

tags:
  - "Internet History"
---

# Overview

Introduce the Collection and explain the historical, technical, cultural, or preservation question it examines.

A Collection should provide an interpretive lens across multiple Digital Objects rather than function simply as a category or folder.

The reader should be able to understand why these objects have been brought together.

# Curatorial Thesis

State the central idea demonstrated by the selected Digital Objects.

Consider what becomes visible when the objects are examined together that would be less apparent when each record is viewed independently.

A strong Collection may illustrate:

- technological development;
- changing forms of online participation;
- contrasting preservation outcomes;
- relationships between infrastructure and culture;
- evolution of a digital practice;
- historical transition;
- or the reuse and reinterpretation of digital material.

The thesis should be supported by the selected objects rather than imposed upon them.

# Object Selection

Explain why the principal Digital Objects belong in the Collection.

Selection does not establish a direct relationship between the objects.

Two Digital Objects may legitimately appear in the same Collection while having no entry in their respective `relatedObjects` fields.

Use direct FWX relationships only where a meaningful historical, technical, provenance, derivative, operational, or preservation relationship exists.

Collection membership is the appropriate mechanism for broader curatorial association.

# Preservation Perspective

Where relevant, explain how differing preservation states affect interpretation of the Collection.

For example, a Collection may bring together objects surviving through:

- In Situ preservation;
- Institutional Stewardship;
- Institutional Reconstruction;
- Archival Record;
- Distributed Archival Preservation;
- Documentary Preservation; or
- Fragmentary Archival Record.

Different preservation outcomes can themselves form part of the Collection's curatorial argument.

Do not imply that all objects in a Collection survive with equivalent integrity or accessibility.

# Curatorial Note

Provide any final interpretive context necessary to understand the Collection as a whole.

This section may address limitations in the surviving record, intentional exclusions, uncertainties, ethical considerations, or areas where future accessions may expand the Collection.

Collections should remain capable of Ongoing Review as the FWX catalogue develops.

---

## Internal Verification Checklist

Remove this section before publication.

- [ ] COL identifier assigned before drafting.
- [ ] COL identifier checked for duplication.
- [ ] Title accurately represents the Collection.
- [ ] Summary states the curatorial purpose.
- [ ] Curator corresponds to an existing Bureau unit.
- [ ] Publication date recorded.
- [ ] Status reviewed.
- [ ] Collection contains at least two appropriate Digital Objects.
- [ ] Every featured FWX ID exists.
- [ ] Selected objects support a coherent curatorial thesis.
- [ ] Key Object exists in `featuredObjects`.
- [ ] Key Object preview is appropriate where applicable.
- [ ] Collection membership is not being used as a substitute for a meaningful direct relationship.
- [ ] Direct relationships revealed during curation have been considered separately.
- [ ] Related Publication IDs exist.
- [ ] Related Collection IDs exist.
- [ ] Related Collections have a meaningful curatorial relationship.
- [ ] Preservation terminology is consistent with the underlying FWX records.
- [ ] Historical and interpretive claims reviewed.
- [ ] Privacy and sensitivity considered where applicable.
- [ ] Curatorial Note identifies significant limitations where necessary.
- [ ] Template comments and this checklist removed before publication.
- [ ] `npm run build` passes before release.