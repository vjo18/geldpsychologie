import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['geldpsychologie', 'beleggen-begrijpen', 'financiele-keuzes', 'mentale-modellen']),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { blog };
