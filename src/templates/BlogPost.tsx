import React, { PropsWithChildren } from 'react';
import { graphql, HeadFC } from 'gatsby';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { Comments } from '../components/comments/Comments';
import { SEO } from '../components/seo/SEO';
import { Article } from '../components/article/Article';
import "../styles/prism.scss";
import { ArticleLayout } from '../layouts/ArticleLayout/ArticleLayout';

interface BlogPostTemplateProps extends PropsWithChildren {
    data: any,
    pageContext: { id: string }
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data, children }) => {
    return (
        <>
            <Header />
            <ArticleLayout>
              <Article 
                slug={data.mdx.frontmatter.slug}
                tags={data.mdx.frontmatter.tags}
                title={data.mdx.frontmatter.title}
                description={data.mdx.frontmatter.description}
                readingTime={data.mdx.fields.readingTime.text}
                date={data.mdx.frontmatter.date}
              > {children} </Article>
              <Comments
                 title={data.mdx.frontmatter.title}
                 identifier={data.mdx.frontmatter.slug}
              />
            </ArticleLayout>
            <Footer />
        </>
    )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug,
        date(formatString: "DD MMM, YYYY")
        title,
        description,
        tags,
        featuredImage {
          publicURL
        }
      },
      fields {
        readingTime {
          text,
        }
      }
    }
  }
`

export default BlogPostTemplate;

export const Head: HeadFC = ({ data, location }) => {
  const post = (data as any).mdx;

  return <SEO
    title={post.frontmatter.title}
    description={post.frontmatter.description}
    keywords={post.frontmatter.tags}
    image={post.frontmatter.featuredImage.publicURL}
    type='article'
    pathname={location.pathname}
  />
}
