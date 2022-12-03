import { graphql, useStaticQuery } from "gatsby"

export const useLastArticlesQuery = () => {
    const result = useStaticQuery(graphql`
    query {
        allMdx(
            sort:{frontmatter: { date:  DESC}},
            limit: 3
        ) {
            nodes {
            frontmatter {
                title,
                description,
                slug,
                date(formatString: "DD MMM, YYYY"),
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(width: 120, height: 60)
                    }
                }
            },
            fields {
                readingTime {
                    text
                }
            }
        }
    }
}`);

    return result.allMdx.nodes;
}