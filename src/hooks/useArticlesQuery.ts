import {graphql, useStaticQuery} from "gatsby";

export const useArticlesQuery = () => {
    const result = useStaticQuery(graphql`
        query LatestArticles {
        posts: allMdx (
            filter:{fields: { collection: { eq: "blog" } }}
            sort: { frontmatter: { date: DESC }},
            limit: 3
        ) {
            nodes {
                id
                fields {
                    readingTime
                }
                frontmatter {
                    featuredImage {
                        childImageSharp {
                            gatsbyImageData(width: 600, height: 340)
                        }
                    }
                    title
                    date(formatString: "DD MMM, YYYY")
                    description
                    slug
                    type
                }
            }
        }
    }`);

    return result.posts.nodes.map((node: any) => ({
        id: node.id,
        description: node.frontmatter.description,
        featuredImage: node.frontmatter.featuredImage,
        title: node.frontmatter.title,
        formattedDate: node.frontmatter.date,
        slug: node.frontmatter.slug,
        type: node.frontmatter.type,
        readingTime: node.fields.readingTime,
    }));
}