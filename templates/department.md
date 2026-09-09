---
# BUREAU OF DIGITAL ANTIQUITIES
# DEPARTMENT TEMPLATE
#
# Internal working template for Bureau organisational units.
#
# Department records define the institutional structure presented by
# the Public Access System. Changes should remain consistent with the
# wider Bureau organisational model.
#
# Remove instructional comments before publication.

# ---------------------------------------------------------------------------
# IDENTIFICATION
# ---------------------------------------------------------------------------

# REQUIRED
# Stable machine-readable identifier used by the department route.
# Format: lowercase kebab-case
# Example: office-of-digital-preservation
id: "department-id"

# REQUIRED
# Formal name of the organisational unit.
name: "Department Name"

# REQUIRED
# Short institutional motto.
motto: "Department motto."

# REQUIRED
# Concise public description of the unit and its principal function.
summary: >
  Concise description of the organisational unit and its role
  within the Bureau of Digital Antiquities.

# ---------------------------------------------------------------------------
# MANDATE
# ---------------------------------------------------------------------------

# REQUIRED
# Formal description of the unit's institutional mission.
mission: >
  Describe the organisational unit's mandate, purpose, and principal
  role within the Bureau.

# REQUIRED
# Bureau organisational units currently share the institutional
# establishment year of 1998.
established: 1998

# REQUIRED
# List the unit's principal responsibilities.
#
# Responsibilities should describe enduring functions rather than
# temporary projects or individual tasks.
responsibilities:
  - "Primary responsibility"
  - "Secondary responsibility"
  - "Additional responsibility"

# ---------------------------------------------------------------------------
# PRESENTATION
# ---------------------------------------------------------------------------

# REQUIRED
# Path to the unit's official emblem.
#
# Example using the current repository convention:
# /images/Office_of_Digital_Preservation.png
#
# Emblem filenames are scheduled for later standardization.
# Do not rename an existing emblem without updating all references.
emblem: "/images/Office_of_Digital_Preservation.png"

# ---------------------------------------------------------------------------
# ORGANISATIONAL TYPE
# ---------------------------------------------------------------------------

# REQUIRED
# Allowed values:
# Office
# Division
# Unit
# Archives
officeType: "Office"
---

# Overview

Introduce the organisational unit and explain its place within the Bureau.

The description should be consistent with the unit's structured metadata, mission, and responsibilities.

# Mandate

Describe the unit's institutional authority and principal area of responsibility.

Avoid assigning overlapping authority unnecessarily. Where multiple Bureau units participate in the same lifecycle activity, distinguish their respective roles.

# Responsibilities

Provide additional context for the responsibilities declared in the frontmatter where useful.

Responsibilities should describe stable organisational functions rather than temporary assignments, individual Digital Objects, or implementation details.

# Role in the Digital Object Lifecycle

Describe where the unit principally contributes to the Bureau's Digital Object lifecycle where applicable.

The current lifecycle is:

1. Discovery
2. Assessment
3. Acquisition
4. Verification
5. Preservation
6. Cataloguing
7. Public Access
8. Ongoing Review

A unit may participate in multiple stages. Do not imply exclusive responsibility unless that distinction is institutionally meaningful.

# Institutional Relationships

Describe significant working relationships with other Bureau organisational units where useful.

All currently established Bureau units are peers within the present organisational model. Do not invent parent-child relationships unless the organisational architecture is formally changed.

---

## Internal Verification Checklist

Remove this section before publication.

- [ ] Department ID checked for duplication.
- [ ] Department ID follows the existing route convention.
- [ ] Formal unit name checked.
- [ ] Motto reviewed.
- [ ] Summary accurately describes the unit.
- [ ] Mission clearly defines the unit's institutional purpose.
- [ ] Establishment year is consistent with Bureau history.
- [ ] Responsibilities describe enduring organisational functions.
- [ ] Responsibilities do not unnecessarily duplicate another unit's mandate.
- [ ] Emblem asset exists.
- [ ] Emblem path is correct.
- [ ] Emblem naming convention reviewed.
- [ ] Office type is one of: Office, Division, Unit, or Archives.
- [ ] Lifecycle responsibilities are consistent with existing Bureau documentation.
- [ ] Institutional relationships are consistent with the current organisational model.
- [ ] No unsupported parent-unit relationship has been introduced.
- [ ] Terminology is consistent with other Bureau records.
- [ ] Template comments and this checklist removed before publication.
- [ ] `npm run build` passes before release.