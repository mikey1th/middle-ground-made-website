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
    id: z.number(),
    merch: z.string().optional(),
    coverImage: image(),
    sortDate: z.string(),
    /* array fields to pass however many you need */
    images: z.array(image()),
    tags: z.array(z.string()),
  })
});

export const collections = { compendium, projects };