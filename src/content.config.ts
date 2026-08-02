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

      // Related Digital Objects
    relatedObjects: z
      .array(
        z.object({
          fwxId: z.string(),
          relationship: z.string().optional(),
        })
      )
      .default([]),

    // Tags
    tags: z.array(z.string()).default([]),
  }),
});

const departments = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/departments",
  }),

  schema: z.object({
    id: z.string(),
    name: z.string(),
    motto: z.string(),
    summary: z.string(),
    mission: z.string(),

    responsibilities: z.array(z.string()),

    emblem: z.string(),

    officeType: z.enum([
      "Office",
      "Division",
      "Unit",
      "Archives",
    ]),
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
  departments,
  publications,
  exhibitions,
};