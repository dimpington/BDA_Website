# Bureau Collections

Collections are curated thematic groups of Digital Objects and supporting
Publications. Markdown in `src/content/collections/` remains the source of truth.
The existing `featuredObjects` and `relatedPublications` ID lists define membership.

## Cards and document control

`CollectionCard.astro` is used by the Collections index and related-Collections
sections. Cards and full records share `getCollectionDetails()` so they show the
same counts, curator and key image. Counts include unique, resolved records only;
duplicates and unavailable IDs never inflate the totals. Unavailable references
are listed without links on the full collection page.

The `curator` field accepts an existing department's name or route ID. A matching
department is linked using its content entry ID; unmatched names remain plain text.

## Key image

An optional `keyObject` selects a member of `featuredObjects` whose existing
`previewImage` should represent the collection:

```yaml
keyObject: FWX-000001
```

The image is identified as a member preview, not a preservation copy. No duplicate
asset is required. If the selection is missing, unresolved, not a member, or has
no preview, the first resolved member with a preview is used. Local preview URLs
must resolve to existing files inside `public/`; missing files and directories
are skipped. If no usable preview exists, the image is omitted. Existing FWX
image dimensions and file conventions still apply.

## Related Collections

Optional `relatedCollections` contains collection IDs, using the same explicit
relationship convention as Publications. Links are directional; add the reverse
reference in the other record if desired. Duplicate IDs and self-references are
ignored. Missing collections appear as unavailable text, never dead links.
Related cards do not recursively display further related collections, so mutual
references cannot produce recursion.

## Chronology

The full record derives its chronology from resolved members' `firstPublished`
values, oldest first with FWX ID as the tie-breaker. It preserves the recorded
precision (`YYYY`, `YYYY-MM` or `YYYY-MM-DD`); a year-only record is not presented
as an exact date. Missing, invalid and free-text dates are omitted from the
chronology while their objects remain in the holdings. The chronology section is
omitted when no suitable dates exist. These are object-origin dates, not dates of
accession to the collection.

## Visual review

Review the key-image choice and crop, card spacing at narrow widths, curator
links, counts and chronology on the Collections index and full record. The current
single collection has no related collection; additional launch content is a
separate milestone.
