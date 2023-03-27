import React, {PropsWithChildren} from 'react';
import { HeadFC } from 'gatsby';
import '../styles/blog.css';
import {Header} from "../components/Header";
import {MDXProvider} from "@mdx-js/react";
import {Container} from "../components/Container";
import {StaticImage} from "gatsby-plugin-image";
import '../styles/prism.css';
import {Footer} from "../components/Footer";
import {Share} from "../components/Share";
import {person} from "../config";
import {BlogTag, Tag} from "../components/Tag";
import {LatestArticles} from "../components/LatestArticles";

interface PostsListTemplateProps extends PropsWithChildren {
    data: any,
    pageContext: any;
}

const BlogPost: React.FC<PostsListTemplateProps> = ({ children, pageContext }) => {
    return (
        <>
            <Header />
            <main className='pt-32 lg:pt-44'>
                <Container className='flex flex-col 2xl:flex-row gap-20'>
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

                        <div className='flex flex-wrap gap-3 mt-5'>
                            { pageContext.frontmatter.tags.map((tag: string) => <BlogTag>{ tag }</BlogTag>) }
                        </div>
                    </article>

                    <div className='2xl:sticky 2xl:top-10 2xl:h-min'>
                        <div className='max-w-lg'>
                            <StaticImage
                                className='rounded-full'
                                width={110}
                                height={110}
                                src='../images/aboutme.jpg' alt='author photo'
                            />

                            <h4 className='mt-4 mb-2 font-bold text-lg text-heading'>{ person.firstName } { person.secondName }</h4>
                            <span className='2xl:text-sm'>{ person.shortBio }</span>
                        </div>


                        <div className='mt-16'>
                            <h2 className='text-heading font-bold text-xl'>Latest posts</h2>
                            <LatestArticles />
                        </div>
                    </div>
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