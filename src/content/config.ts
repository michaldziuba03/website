import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
});

const blog = defineCollection({
	type: 'content',
	schema: blogSchema,
});

export type BlogPost = z.infer<typeof blogSchema>;
export const collections = { blog };
