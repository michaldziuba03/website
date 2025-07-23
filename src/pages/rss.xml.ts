import rss, { type RSSFeedItem } from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../content';
import { format } from 'date-fns';

export async function GET(context: APIContext) {
  const now = new Date();
  const posts = await getPosts(10);
  const items: RSSFeedItem[] = posts.map((post) => ({
    title: `<![CDATA[ ${post.title} ]]>`,
    description: `<![CDATA[ ${post.description} ]]>`,
    link: `/blog/${post.slug.current}`,
    pubDate: new Date(post.publishedAt),
    updated: new Date(post._updatedAt),
    categories: [post.category.title],
    author: 'mail@michaldziuba.dev (Michał Dziuba)',
  }));

  const custom: string[] = [
      `<language>en-US</language>`,
      `<atom:link href="${new URL('rss.xml', context.site!)}" rel="self" type="application/rss+xml"/>`,
      `<copyright>Michał Dziuba</copyright>`,
      `<lastBuildDate>${format(now, 'EEE, dd MMM yyyy HH:mm:ss xx')}</lastBuildDate>`
  ];

  return rss({
    title: 'Michał Dziuba - Blog',
    xmlns: {
      'atom': 'http://www.w3.org/2005/Atom',
    },
    description: 'Explore my latest posts, guides, and personal stories.',
    site: context.site!,
    trailingSlash: false,
    items,
    customData: custom.join('\n'),
  });
}
