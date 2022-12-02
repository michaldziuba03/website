import React from 'react';
import { graphql } from 'gatsby';

interface PostsListTemplateProps {
    data: any,
    pageContext: { 
        limit: number,
        skip: number,
        numPages: number,
        currentPage: number,
        tag: string;
    }
}

const PostsListTemplate: React.FC<PostsListTemplateProps> = ({ data, pageContext }) => {
    return (
        <>
            <h1>Blog posts for tag: #{pageContext.tag}</h1>
            { data.allMdx.nodes.map((node: any) => 
            <div>
                <h3> {node.frontmatter.title}</h3>
                <p>{node.frontmatter.description}</p>
            </div>)
            }

            <p>Current page: {pageContext.currentPage}</p>
        </>
    )
}

export default PostsListTemplate;

export const query = graphql`
query ($skip: Int!, $limit: Int!, $tag: String) {
  allMdx(
    sort: { frontmatter: { date: DESC }},
    filter: { 
    	frontmatter: { tags: { eq: $tag} }
    },
    limit: $limit
    skip: $skip
  ) {
    nodes {
      frontmatter {
        date(formatString: "DD MMM, YYYY")
        title,
        description,
        tags
      },
      fields {
        readingTime{
          text,
          minutes
        }
      }
    }
  }
}`;