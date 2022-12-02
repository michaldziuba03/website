import { MDXProvider } from '@mdx-js/react';
import React, { PropsWithChildren } from 'react';
import { graphql } from 'gatsby';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { Section } from '../components/section/Section';
import { Comments } from '../components/comments/Comments';


interface BlogPostTemplateProps extends PropsWithChildren {
    data: any,
    pageContext: { id: string }
}
const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data, children }) => {
    return (
        <>
            <Header />
            <Section>
                <article>
                    <MDXProvider>
                        { children }
                    </MDXProvider>
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
        title
      }
    }
  }
`

export default BlogPostTemplate;
