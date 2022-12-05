import React from 'react';
import { graphql, HeadFC } from 'gatsby';
import { SEO } from '../components/seo/SEO';
import { ArticleListLayout } from '../layouts/ArticleListLayout/ArticleListLayout';

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
            <ArticleListLayout articles={data.allMdx.nodes}>
              All blog posts
            </ArticleListLayout>
        </>
    )
}

export default PostsListTemplate;

export const query = graphql`
query ($skip: Int!, $limit: Int!) {
  allMdx(
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
            gatsbyImageData(width: 500, height: 250)
          }
        },
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

export const Head: HeadFC = ({ location }) => {
  return <SEO
    title="Michał Dziuba Blog"
    description="Welcome to my blog about programming and technology"
    type='website'
    pathname={location.pathname}
  />
}
