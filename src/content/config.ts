import { defineCollection, z } from "astro:content";
import { slug } from "@/utils/slug";

/* ===== Shared helpers ===== */
const urlOrPath = z.string().url().or(z.string().startsWith("/"));

/* ===== Canonical blog categories (used by routes to validate params) ===== */
export const BLOG_CATEGORIES = [
  "cv-tips",
  "linkedin",
  "career-growth",
  "kenya-market",
] as const;

/* ===== Blog collection ===== */
const ctaSchema = z.object({
  label: z.string().min(2),
  url: urlOrPath,
});

const sourceSchema = z.object({
  label: z.string().min(2),
  url: z.string().url(),
});

const blog = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string().min(5),
      description: z.string().min(20),

      // Dates: coerce from strings; allow optional updated
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),

      author: z.string().default("Sev"),

      // Hard enum to align with category routes (already slugged)
      category: z.enum(BLOG_CATEGORIES),

      // Free-form tags. We also cache slugged variants below.
      tags: z.array(z.string()).default([]),

      // rely on file-path slugs (no frontmatter slug)
      draft: z.boolean().default(false),

      // absolute or site-relative URLs
      canonical: urlOrPath.optional(),
      image: urlOrPath.optional(),
      ogImage: urlOrPath.optional(),

      // Optional metadata
      schemaType: z.string().optional(),
      readingTimeMinutes: z.coerce.number().int().positive().optional(),
      ctaPrimary: ctaSchema.optional(),
      ctaSecondary: ctaSchema.optional(),
      sources: z.array(sourceSchema).optional(),
    })
    // Ensure updated >= date when provided
    .refine((v) => !v.updated || v.updated >= v.date, {
      message: "updated must be the same day or after date",
    })
    // Fix Plan 128: add normalized slug caches for category and tags
    .transform((v) => ({
      ...v,
      categorySlug: slug(v.category),
      tagSlugs: (v.tags ?? []).map((t) => slug(t)),
    })),
});

/* ===== Services collection ===== */
const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Use path-based slug; keep optional for legacy content
    slug: z.string().min(3).optional(),
    order: z.number().int().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, services };
