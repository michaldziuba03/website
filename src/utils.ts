export function buildArticleUrl(slug: string) {
    return `${process.env['GATSBY_SITE_URL']}/blog/${slug}`;
}