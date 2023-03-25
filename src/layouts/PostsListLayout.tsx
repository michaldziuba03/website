import React, {PropsWithChildren} from "react";
import {Header} from "../components/Header";
import {Paragraph} from "../components/Paragraph";
import {H1} from "../components/Heading";
import {Container} from "../components/Container";
import {Footer} from "../components/Footer";
import {Tag} from "../components/Tag";
import {ArticleCard} from "../components/ArticleCard";

interface PostsListLayoutProps extends PropsWithChildren {
    articleNodes: any[];
}

export const PostsListLayout: React.FC<PostsListLayoutProps> = ({ articleNodes }) => {
    return (
        <>
            <Header />
            <div className='pt-52 pb-24'>
                <Container>
                    <H1>Blog</H1>
                    <Paragraph className='max-w-xl'>
                        Articles about web dev, computer science concepts, networking and operating systems.
                    </Paragraph>

                    <div className='flex flex-wrap gap-3 mt-5'>
                        <Tag>Node.js</Tag>
                        <Tag>TypeScript</Tag>
                        <Tag>React.js</Tag>
                        <Tag>Personal</Tag>
                    </div>
                </Container>
            </div>
            <div className='min-h-screen'>
                <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    { articleNodes.map((node) => (
                        <ArticleCard
                            title={node.frontmatter.title}
                            featuredImage={node.frontmatter.featuredImage}
                            slug={node.frontmatter.slug}
                            description={node.frontmatter.description}
                        />
                    )) }
                </Container>
            </div>
            <Footer />
        </>
    );
}