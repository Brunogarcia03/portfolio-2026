import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    titulo: z.string(),
    creado: z.string(),
    descripcion: z.string(),
    imagen: z.string().url(),
    indice: z.number(),
    next: z.string().optional(),
    prev: z.string().optional(),
  }),
});

export const collections = { blog };
