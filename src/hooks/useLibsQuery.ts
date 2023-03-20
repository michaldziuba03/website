import { useStaticQuery, graphql } from "gatsby";

export function useLibsQuery() {
    const result = useStaticQuery(graphql`
        query LibsQuery {
            allMdx(filter: {
                fields: {
                    collection: {
                        eq: "libs"
                    }
                }
            }) {
                nodes {
                    frontmatter {
                        name
                        icon
                        link
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