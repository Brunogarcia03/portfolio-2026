import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    titulo: z.string(),
    creado: z.string(),
    descripcion: z.string(),
    imagen: z.string().url(),
    indice: z.number(),
  }),
});

export const collections = { blog };
