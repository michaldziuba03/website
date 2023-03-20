import { useStaticQuery, graphql } from "gatsby";

export function useProjectsQuery() {
    const result = useStaticQuery(graphql`
        query ProjectsQuery {
            allMdx(filter: {
                fields: {
                    collection: {
                        eq: "projects"
                    }
                }
            }) {
                nodes {
                    frontmatter {
                        name
                        tags
                        link
                        images {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 700
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                    body
                }
            }
        }`);

    return result.allMdx.nodes.map((node: any) => ({
        ...node.frontmatter,
        body: node.body,
    }));
}