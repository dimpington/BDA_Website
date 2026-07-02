# Architecture Decisions

---

## ADR-001 — Core Domain Entity

**Status:** Accepted

### Decision

The Bureau shall use **Digital Object** as the primary domain entity for modeling, software architecture and internal documentation.

Public-facing content may use more specific terminology depending on context, including:

- Digital Site
- Forum
- Software
- Webring
- Archive
- Digital Collection
- Service
- Personal Homepage

### Rationale

The Bureau documents a broad range of historically significant digital heritage.

A single abstract entity provides a flexible software model while allowing public-facing language to remain natural and context-specific.

This approach separates implementation from presentation and supports future expansion without requiring structural changes to the underlying model.