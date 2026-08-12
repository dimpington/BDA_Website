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

    featured: z.boolean().default(false),

    // Optional metadata
    creator: z.string().optional(),
    originalUrl: z.string().url().optional(),
    currentUrl: z.string().url().optional(),
    firstPublished: z.string().optional(),
    lastVerified: z.string().optional(),
    previewImage: z.string().optional(),

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

    issuingOffice: z.string(),
    
    authors: z.array(z.string()).default([]),

    classification: z
      .enum(["Public", "Internal", "Restricted"])
      .default("Public"),

documentReference: z.string(),

revision: z.string().default("1.0"),

documentStatus: z
  .enum([
    "Current",
    "Superseded",
    "Archived",
    "Withdrawn",
  ])
  .default("Current"),

relatedObjects: z.array(z.string()).default([]),

relatedPublications: z.array(z.string()).default([]),

    tags: z.array(z.string()).default([]),
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

const curatedCollections = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/collections",
  }),

  schema: z.object({
    id: z.string(),
    title: z.string(),
    summary: z.string(),
    curator: z.string(),
    published: z.string(),

    status: z
      .enum(["Current", "Archived", "Planned"])
      .default("Current"),

    featuredObjects: z.array(z.string()).default([]),

    relatedPublications: z.array(z.string()).default([]),

    tags: z.array(z.string()).default([]),
  }),
});

const notices = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/notices",
  }),

  schema: z.object({
    id: z.string(),

    title: z.string(),

    published: z.string(),

    summary: z.string(),

    type: z.enum([
      "Bureau Notice",
      "Public Notice",
      "System Notice",
    ]),

    status: z.enum([
      "Current",
      "Archived",
    ]),
  }),
});

export const collections = {
  "digital-objects": digitalObjects,
  departments,
  publications,
  exhibitions,
  collections: curatedCollections,
  notices,
};