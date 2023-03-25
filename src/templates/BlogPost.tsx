import React, {PropsWithChildren} from 'react';
import { graphql, HeadFC } from 'gatsby';
import '../styles/blog.css';
import {Header} from "../components/Header";
import {MDXProvider} from "@mdx-js/react";
import {Container} from "../components/Container";
import {StaticImage} from "gatsby-plugin-image";
import '../styles/prism.css';
import {Footer} from "../components/Footer";
import {Share} from "../components/Share";
import {person} from "../config";

interface PostsListTemplateProps extends PropsWithChildren {
    data: any,
    pageContext: any;
}

const BlogPost: React.FC<PostsListTemplateProps> = ({ children, pageContext }) => {
    return (
        <>
            <Header />
            <main className='pt-44'>
                <Container>
                    <article>
                        <h1 className='font-bold text-4xl lg:text-5xl text-heading'>{ pageContext.frontmatter.title }</h1>
                        <div className='flex flex-wrap justify-between items-center py-5 gap-6'>
                            <div className='flex gap-3'>
                                <StaticImage
                                    className='rounded-full'
                                    width={45}
                                    height={45}
                                    src='../images/aboutme.jpg' alt='author photo'
                                />

                                <div className='flex flex-col'>
                                    <span className='font-medium text-heading'>{ person.firstName } { person.secondName }</span>
                                    <span className='text-sm'>{ pageContext.formattedDate } · { pageContext.readingTime }</span>
                                </div>
                            </div>
                            <Share url={'https://michaldziuba.dev/posts/2022-sample'} />
                        </div>
                        <div className='post'>
                            <MDXProvider>{ children }</MDXProvider>
                        </div>
                    </article>
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default BlogPost;

export const Head: HeadFC = ({ location }) => {
    return <></>
}