import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    timeframe: z.string().optional(),
    stack: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };

/* ── i18n content helpers ──────────────────────────────────────────
 * Convention: base file = Indonesian, en/ subfolder = English.
 *   e.g. hello-world.md (ID) ↔ en/hello-world.md (EN)
 *
 * Helper: isEnVariant(id) → true if this entry is an English variant.
 * Helper: baseSlug(id)    → strips the en/ prefix to get the shared slug.
 */
export const isEnVariant = (id: string) => id.startsWith('en/');
export const baseSlug = (id: string) => id.replace(/^en\//, '');
