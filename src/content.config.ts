import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const digitalObjects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/digital-objects",
  }),

  schema: z.object({
    // Identification
    fwxId: z.string(),
    title: z.string(),
    objectType: z.string(),

    // Access
    classification: z.enum(["Public", "Internal", "Restricted"]),

    // Status
    operationalStatus: z.string(),
    preservationStatus: z.string(),

    // Summary
    summary: z.string(),

    // Optional metadata
    creator: z.string().optional(),
    originalUrl: z.string().url().optional(),
    currentUrl: z.string().url().optional(),
    firstPublished: z.string().optional(),
    lastVerified: z.string().optional(),

  preservation: z
  .object({
    accessibility: z.string().optional(),
    integrity: z.string().optional(),
    monitoring: z.string().optional(),
    observingOffice: z.string().optional(),
  })
  .optional(),

    // Tags
    tags: z.array(z.string()).default([]),
  }),
});

const publications = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/publications",
  }),

  schema: z.object({
    id: z.string(),
    title: z.string(),

    type: z.enum([
      "Field Report",
      "Preservation Bulletin",
      "Technical Note",
      "Annual Report",
    ]),

    published: z.string(),
    summary: z.string(),
  }),
});

const exhibitions = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/exhibitions",
  }),

  schema: z.object({
    id: z.string(),
    title: z.string(),
    summary: z.string(),
  }),
});

export const collections = {
  "digital-objects": digitalObjects,
  publications,
  exhibitions,
};