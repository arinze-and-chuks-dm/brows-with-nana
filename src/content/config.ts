import { defineCollection, z } from "astro:content"

// Pages collection schema
const pagesCollection = defineCollection({
  schema: ({ image }) => z.object({
    id: z.string().optional(),
    title: z.string(),
    subtitle: z.string().optional(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.object({
      src: image().refine((img ) => img.width >= 600, {
        message: "Image must be at least 600px wide",
      }),
      alt: z.string(),
    }).optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
    faq: z.array(z.object({ question: z.string(), answer: z.array(z.string()) })).optional()
  }),
});

// Export collections
export const collections = {
  pages: pagesCollection,
};
