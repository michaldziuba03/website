import { useStaticQuery, graphql } from 'gatsby';

export const useLinksQuery = () => {
    const { site } = useStaticQuery(graphql`
        query LinksQuery {
            site {
                siteMetadata {
                    links {
                            icon,
                            url
                        }
                    }
                }
            }
    `);

    
    return site.siteMetadata.links;
}