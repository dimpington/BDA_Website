---
# BUREAU OF DIGITAL ANTIQUITIES
# BUREAU NOTICE TEMPLATE
#
# Internal working template for formal Bureau Notices.
#
# Bureau Notices communicate institutional announcements, decisions,
# changes, policies, or other matters requiring an official record.
#
# Remove instructional comments before publication.

# ---------------------------------------------------------------------------
# IDENTIFICATION
# ---------------------------------------------------------------------------

# REQUIRED
# Format: BN-YYYY-000
# Example: BN-2026-001
#
# Assign an ID before drafting and verify that it is not already in use.
id: BN-YYYY-000

# REQUIRED
title: "Bureau Notice Title"

# REQUIRED
# Preferred format: YYYY-MM-DD
published: "YYYY-MM-DD"

# REQUIRED
# Concise description of the purpose of the Notice.
summary: >
  Concise description of the institutional announcement, decision,
  change, policy, or other matter recorded by this Notice.

# ---------------------------------------------------------------------------
# NOTICE TYPE
# ---------------------------------------------------------------------------

# REQUIRED
# Allowed values:
# Bureau Notice
# Public Notice
# System Notice
type: "Bureau Notice"

# ---------------------------------------------------------------------------
# STATUS
# ---------------------------------------------------------------------------

# REQUIRED
# Allowed values:
# Current
# Archived
status: Current
---

# Notice

State the institutional matter being announced or recorded.

The opening should make the purpose and effect of the Notice understandable without requiring extensive background knowledge.

Bureau Notices should use clear institutional language and distinguish decisions from proposals, observations, or future intentions.

# Background

Provide the context necessary to understand why the Notice has been issued.

Where appropriate, identify:

- the institutional or operational circumstances;
- affected Bureau functions;
- relevant Digital Objects;
- relevant Publications or Collections;
- previous decisions;
- or changes requiring a formal public record.

Avoid unnecessary historical detail better documented elsewhere.

# Decision or Announcement

State precisely what the Bureau has decided, established, changed, announced, or recorded.

Where applicable, identify:

- effective date;
- affected records or systems;
- responsible Bureau unit;
- transitional arrangements;
- restrictions;
- and any required follow-up action.

A Notice should not imply that a proposed action has occurred unless the decision has actually been made.

# Effect

Explain what the Notice changes, if anything.

This may include effects on:

- public access;
- classification;
- catalogue practice;
- preservation activity;
- institutional organisation;
- publication status;
- collections;
- or Bureau procedures.

If the Notice is informational and creates no operational change, state that clearly where useful.

# Further Review

Record any expected review, follow-up, or conditions that may cause the matter to be reconsidered.

Where no further review is planned, this section may be removed before publication.

---

## Internal Verification Checklist

Remove this section before publication.

- [ ] BN identifier assigned before drafting.
- [ ] Identifier year corresponds to the Notice year.
- [ ] BN identifier checked for duplication.
- [ ] Title accurately describes the institutional matter.
- [ ] Publication date recorded.
- [ ] Summary clearly states the Notice's purpose.
- [ ] Notice type is appropriate: Bureau Notice, Public Notice, or System Notice.
- [ ] Status reviewed.
- [ ] Decision or announcement is stated unambiguously.
- [ ] Effective date recorded where applicable.
- [ ] Affected records, systems, or organisational units identified where applicable.
- [ ] Proposed actions are distinguished from completed decisions.
- [ ] Privacy and sensitivity implications considered.
- [ ] Institutional terminology reviewed.
- [ ] Further review requirements recorded where applicable.
- [ ] Template comments and this checklist removed before publication.
- [ ] `npm run build` passes before release.