import type { SanityDocument } from "@sanity/client";
import { loadQuery } from "./sanity/lib/load-query";

interface Post {
	title: string;
	description: string;
	slug: { current: string };
	mainImage: { asset: { url: string } };
	_createdAt: string;
	_updatedAt: string;
	category: { title: string; slug: { current: string } };
}

export async function getPosts(limit?: number) {
  const { data } = await loadQuery<SanityDocument<Post>[]>({
    query: `*[_type == "post"]${ limit ? `[0...${limit}]` : '' } | order(_createdAt desc) {
			title,
			description,
			slug,
			mainImage,
			_updatedAt,
			_createdAt,
			category->{
				title,
				slug
			},
			author->{
				name,
				image
			}
		}`,
  });

  return data;
}

export async function getCategories() {
	const { data } = await loadQuery<SanityDocument[]>({
		query: `*[_type == "category"] | order(title asc) {
			title,
			slug
		}`,
	});

	return data;
}
