import React, {PropsWithChildren} from "react";
import {Header} from "../components/Header";
import {Paragraph} from "../components/Paragraph";
import {H1} from "../components/Heading";
import {Container} from "../components/Container";
import {Footer} from "../components/Footer";
import {BlogTag, Tag} from "../components/Tag";
import {ArticleCard} from "../components/ArticleCard";
import {ArticlesGrid} from "../components/ArticlesGrid";

interface PostsListLayoutProps extends PropsWithChildren {
    articleNodes: any[];
    tags: string[];
}

export const PostsListLayout: React.FC<PostsListLayoutProps> = ({ articleNodes, tags }) => {
    return (
        <>
            <Header />
            <div className='pt-32 lg:pt-44 pb-16'>
                <Container>
                    <H1>Blog</H1>
                    <Paragraph className='max-w-xl'>
                        Articles about web dev, computer science concepts, networking and operating systems.
                    </Paragraph>

                    <div className='flex flex-wrap gap-3 mt-5'>
                        <BlogTag path='/blog'>All</BlogTag>
                        { tags.map(tag => <BlogTag>{ tag }</BlogTag>) }
                    </div>
                </Container>
            </div>
            <div className='min-h-screen'>
                <Container>
                    <ArticlesGrid>
                        { articleNodes.map((node) => (
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
                </Container>
            </div>
            <Footer />
        </>
    );
}