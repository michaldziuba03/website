import { useStaticQuery, graphql } from 'gatsby';

export const useAuthorQuery = () => {
    const { site } = useStaticQuery(graphql`
        query AuthorQuery {
            site {
                siteMetadata {
                    author {
                            firstName,
                            secondName,
                            bio
                        }
                    }
                }
            }
    `);

    
    return site.siteMetadata.author;
}