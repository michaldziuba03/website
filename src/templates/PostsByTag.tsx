import React from 'react';
import { graphql, HeadFC } from 'gatsby';
import { ArticleListLayout } from '../layouts/ArticleListLayout/ArticleListLayout';
import { SEO } from '../components/seo/SEO';

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
            <ArticleListLayout articles={data.allMdx.nodes}>
              Posts with tag: #{pageContext.tag}
            </ArticleListLayout>
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

export const Head: HeadFC = ({ location, pageContext }) => {
  const description = `Posts with tag: ${(pageContext as any).tag}`;

  return <SEO
    title={`#${(pageContext as any).tag}`}
    description={description}
    keywords={[(pageContext as any).tag]}
    pathname={location.pathname}
  />
}
