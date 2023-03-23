import React from 'react';
import { graphql, HeadFC } from 'gatsby';
import { PostsListLayout } from '../layouts/PostsListLayout';

interface PostsListTemplateProps {
    data: any,
    pageContext: {
        limit: number,
        skip: number,
        numPages: number,
        currentPage: number,
    }
}

const PostsListTemplate: React.FC<PostsListTemplateProps> = ({ data }) => {
    return (
        <>
            <PostsListLayout articleNodes={data.allMdx.nodes}>
            </PostsListLayout>
        </>
    )
}

export default PostsListTemplate;

export const query = graphql`
    query ($skip: Int!, $limit: Int!) {
        allMdx(
            filter:{
                fields: { collection: { eq: "blog" } }
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
                            gatsbyImageData(width: 400, height: 225)
                        }
                    },
                    tags
                },
                fields {
                    readingTime
                }
            }
        }
    }`;

export const Head: HeadFC = ({ location }) => {
    return <></>
}