import { MDXProvider } from '@mdx-js/react';
import React, { PropsWithChildren } from 'react';
import { graphql, HeadFC } from 'gatsby';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { Section } from '../components/section/Section';
import { Comments } from '../components/comments/Comments';
import "../styles/prism.scss";
import { SEO } from '../components/seo/SEO';

interface BlogPostTemplateProps extends PropsWithChildren {
    data: any,
    pageContext: { id: string }
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data, children }) => {
    return (
        <>
            <Header />
            <Section>
                <p>Posted on {data.mdx.frontmatter.date} · {data.mdx.fields.readingTime.minutes} minutes </p>
                <article>
                    { data.mdx.frontmatter.tags.map((tag: string) => (<div>#{tag}</div>)) }
                    <h1>{data.mdx.frontmatter.title}</h1>
                    <p>{data.mdx.frontmatter.description}</p>
                    <MDXProvider>{ children }</MDXProvider>
                </article>
                <Comments 
                    identifier={data.mdx.frontmatter.slug} 
                    title={data.mdx.frontmatter.title}
                />
            </Section>
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
          minutes,
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
