import { defineCollection, z } from 'astro:content';

const compendium = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    id: z.number(),
    title: z.string(),
    date: z.string(),
    description: z.string(),
    openNote: z.string().optional(),
    project: z.string().optional(),
    image: image(),
  })
});


const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: image(),
    tags: z.array(z.string()),
  })
});

export const collections = { compendium, projects };