import React from 'react';
import { graphql, HeadFC } from 'gatsby';
import { PostsListLayout } from '../layouts/PostsListLayout';
import {SEO} from "../components/seo/SEO";

interface PostsByTagTemplateProps {
    data: any,
    pageContext: {
        limit: number,
        skip: number,
        numPages: number,
        currentPage: number,
        tags: string[];
        basePath: string;
    }
}

const PostsByTagTemplate: React.FC<PostsByTagTemplateProps> = ({ data, pageContext }) => {
    return <PostsListLayout
        numPages={pageContext.numPages}
        basePath={pageContext.basePath}
        currentPage={pageContext.currentPage}
        articleNodes={data.allMdx.nodes}
        tags={pageContext.tags}
        isTag={true}
    />
}

export default PostsByTagTemplate;

export const query = graphql`
    query ($skip: Int!, $limit: Int!, $tag: String) {
        allMdx(
            filter:{
                fields: { collection: { eq: "blog" } },
                frontmatter: { tags: { eq: $tag} },
            }
            sort: { frontmatter: { date: DESC }}
            limit: $limit
            skip: $skip
        ) {
            nodes {
                frontmatter {
                    date(formatString: "DD MMM, YYYY")
                    title,
                    slug,
                    description,
                    featuredImage {
                        childImageSharp {
                            gatsbyImageData(width: 600, height: 340)
                        }
                    },
                    tags,
                    type
                },
                fields {
                    readingTime
                }
            }
        }
    }`;

export const Head: HeadFC = ({ location }) => {
    return <SEO title='Blog posts' />
}