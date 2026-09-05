import { getCollection, type CollectionEntry } from "astro:content";
import { statSync } from "node:fs";
import { resolve, sep } from "node:path";

const publicDirectory = resolve("public");

/** Local preview URLs refer to files in Astro's public directory. */
function hasPreviewImage(previewImage: string | undefined): boolean {
  if (!previewImage) return false;
  // Preserve existing handling of non-local images.
  if (!previewImage.startsWith("/") || previewImage.startsWith("//")) return true;
  try {
    const pathname = decodeURIComponent(previewImage.split(/[?#]/, 1)[0]);
    const imagePath = resolve(publicDirectory, `.${pathname}`);
    return imagePath.startsWith(`${publicDirectory}${sep}`) && statSync(imagePath).isFile();
  } catch {
    return false;
  }
}

/** Resolve collection relationships once for a consistent card and record view. */
export async function getCollectionDetails(collection: CollectionEntry<"collections">) {
  const [objects, publications, departments, collections] = await Promise.all([
    getCollection("digital-objects"),
    getCollection("publications"),
    getCollection("departments"),
    getCollection("collections"),
  ]);

  const objectIds = [...new Set(collection.data.featuredObjects)];
  const publicationIds = [...new Set(collection.data.relatedPublications)];
  const collectionIds = [...new Set(collection.data.relatedCollections)]
    .filter((id) => id !== collection.data.id);
  const resolvedObjects = objectIds.flatMap((id) => {
    const record = objects.find((entry) => entry.data.fwxId === id);
    return record ? [record] : [];
  });
  const resolvedPublications = publicationIds.flatMap((id) => {
    const record = publications.find((entry) => entry.data.id === id);
    return record ? [record] : [];
  });
  const resolvedCollections = collectionIds.flatMap((id) => {
    const record = collections.find((entry) => entry.data.id === id);
    return record ? [record] : [];
  });

  const curator = departments.find((entry) =>
    entry.id === collection.data.curator || entry.data.name === collection.data.curator
  );
  const keyObject = resolvedObjects.find((entry) =>
    entry.data.fwxId === collection.data.keyObject && hasPreviewImage(entry.data.previewImage)
  ) ?? resolvedObjects.find((entry) => hasPreviewImage(entry.data.previewImage));

  // Keep the date precision recorded by FWX; do not invent month/day values.
  const chronology = resolvedObjects.flatMap((record) => {
    const date = record.data.firstPublished;
    if (!date || !/^\d{4}(?:-\d{2}(?:-\d{2})?)?$/.test(date)) return [];
    const fullDate = date.length === 4 ? `${date}-01-01` : date.length === 7 ? `${date}-01` : date;
    const parsed = new Date(`${fullDate}T00:00:00Z`);
    if (!Number.isFinite(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== fullDate) return [];
    return [{ date, record }];
  }).sort((a, b) => a.date.localeCompare(b.date) || a.record.data.fwxId.localeCompare(b.record.data.fwxId));

  return {
    curator,
    keyObject,
    chronology,
    resolvedObjects,
    resolvedPublications,
    resolvedCollections,
    missingObjects: objectIds.filter((id) => !resolvedObjects.some((entry) => entry.data.fwxId === id)),
    missingPublications: publicationIds.filter((id) => !resolvedPublications.some((entry) => entry.data.id === id)),
    missingCollections: collectionIds.filter((id) => !resolvedCollections.some((entry) => entry.data.id === id)),
  };
}
