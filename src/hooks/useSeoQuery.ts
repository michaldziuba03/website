import { useStaticQuery, graphql } from 'gatsby';

export const useSeoQuery = () => {
    const { site } = useStaticQuery(graphql`
    query SeoQuery {
        site {
            siteMetadata {
                title,
                description,
                siteUrl,
                siteName
            }
        }
    }
    `);

    
    return site.siteMetadata;
}