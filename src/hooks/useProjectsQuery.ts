import { useStaticQuery, graphql } from "gatsby";

export function useProjectsQuery() {
    const result = useStaticQuery(graphql`
        query ProjectsQuery {
            allMdx(filter: {fields: {collection: {eq: "projects"}}}) {
                nodes {
                frontmatter {
                    name
                    tags
                    featuredImage {
                    childImageSharp {
                        gatsbyImageData(width: 600)
                    }
                    }
                }
                body
                }
            }
        }
    `);

    return result.allMdx.nodes;
}