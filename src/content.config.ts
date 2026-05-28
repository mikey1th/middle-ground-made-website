import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';



const compendium = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/compendium' }),
    schema: ({ image }) => z.object({
    id: z.number(),
    title: z.string(),
    date: z.string(),
    description: z.string(),
    openNote: z.string().optional(),
    project: z.string().optional(),
    lightBorder: z.boolean().default(false),
    image: image(),
  })
});



const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.string(),
    id: z.number(),
    merch: z.string().optional(),
    coverImage: image(),
    sortDate: z.string(),
    displayTag: z.string(),
    images: z.array(image()),
    tags: z.array(z.string()),
  })
});



const gallery = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/gallery' }),
    schema: ({ image }) => z.object({
    id: z.number(),
    date: z.string(),
    image: image(),
  })
});



const oldGold = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/oldGold' }),
    schema: ({ image }) => z.object({
    id: z.number(),
    type: z.string(),
    image: image(),
  })
});


export const collections = { compendium, projects, gallery, oldGold };
