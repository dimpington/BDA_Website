# Bureau Publications

The Publications Office produces official Bureau publications intended to document, communicate and preserve information relating to Digital Objects and Bureau activities.

---

## Field Reports

Detailed investigations documenting individual Digital Objects.

Field Reports typically include historical context, provenance, technical examination and preservation assessment.

---

## Preservation Bulletins

Short publications announcing preservation activities, recoveries and notable archival developments.

---

## Technical Notes

Technical publications describing preservation methodology, research findings and digital preservation practices.

---

## Annual Reports

Annual summaries documenting Bureau activities, preservation statistics, organizational developments and significant Digital Objects documented during the reporting period.

---

## Website archive and printing

Publication Markdown remains the source of truth. `published` must be a valid
ISO calendar date (`YYYY-MM-DD`). The site generates `/publications/archive/YYYY`
for each year present in the collection, with newest years and publications first.
Publications sharing a date are ordered by ID. The archive groups by year of issue;
it does not change a publication's document status.

The index and annual archives reuse `PublicationRegister.astro` and
`PublicationCard.astro`. Annual archive links work without JavaScript. Type filters
use the existing `?type=` convention within the selected year; without JavaScript,
all types remain readable. Choosing another year resets the type filter.

Individual publications provide **Print / Save as PDF**, using the browser print
dialog. The same print layout applies to the browser's Print command without
JavaScript. Publication-only print styles remove site navigation and the footer,
retain Bureau identification, document control, full text and related records,
and use monochrome output. No separate PDF files or PDF dependencies are required.

Human visual review: check A4 and US Letter print preview, especially page breaks
in longer reports, and the archive's mobile layout in the target browsers.
