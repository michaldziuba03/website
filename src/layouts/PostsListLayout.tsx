import React, { PropsWithChildren } from "react";
import { Header } from "../components/Header";
import { Paragraph } from "../components/Paragraph";
import { H1 } from "../components/Heading";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { BlogTag } from "../components/Tag";
import { ArticleCard } from "../components/ArticleCard";
import { ArticlesGrid } from "../components/ArticlesGrid";
import {Pagination} from "../components/Pagination";

interface PostsListLayoutProps extends PropsWithChildren {
    articleNodes: any[];
    basePath: string;
    currentPage: number;
    numPages: number;
    tags: string[];
    isTag?: boolean;
}

export const PostsListLayout: React.FC<PostsListLayoutProps> = (props) => {
    return (
        <>
            <Header />
            <div className='pt-32 lg:pt-44'>
                <Container>
                    <H1>Blog</H1>
                    <Paragraph className='max-w-xl'>
                        Articles about web dev, computer science concepts, networking and operating systems.
                    </Paragraph>

                    <div className='flex flex-wrap gap-3 mt-5'>
                        <BlogTag partiallyActive={!props.isTag} path='/blog'>All</BlogTag>
                        { props.tags.map(tag => <BlogTag partiallyActive={true}>{ tag }</BlogTag>) }
                    </div>
                </Container>
            </div>
            <div className='py-16'>
                <Container>
                    <ArticlesGrid>
                        { props.articleNodes.map((node) => (
                            <ArticleCard
                                title={node.frontmatter.title}
                                featuredImage={node.frontmatter.featuredImage}
                                slug={node.frontmatter.slug}
                                description={node.frontmatter.description}
                                formattedDate={node.frontmatter.date}
                                readingTime={node.fields.readingTime}
                                type={node.frontmatter.type}
                            />
                        )) }
                    </ArticlesGrid>

                    <div className='pt-16 pb-16'>
                        <div className='border-t border-gray-200 dark:border-gray-800 mb-8'></div>
                        <Pagination
                            currentPage={props.currentPage}
                            numPages={props.numPages}
                            basePath={props.basePath}
                        />
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    );
}