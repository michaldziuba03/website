import React, { PropsWithChildren } from 'react';
import { ArticleCard } from '../../components/article-card/ArticleCard';
import { Container } from '../../components/container/Container';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import './ArticleListLayout.scss';

interface ArticleListProps extends PropsWithChildren {
    articles: any[];
}

export const ArticleListLayout: React.FC<ArticleListProps> = ({ articles, children }) => {
    return (
        <>
            <Header />
            <main className='article-list'>
                <Container>{children}</Container>
                <Container>
                { articles.map((node: any) => 
                    <ArticleCard
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        description={node.frontmatter.description}
                        featuredImage={node.frontmatter.featuredImage}
                        readingTime={node.fields.readingTime.text}
                        tags={node.frontmatter.tags}
                        slug={node.frontmatter.slug}
                        key={node.frontmatter.slug}
                    />)
                }
                </Container>
            </main>
            <Footer />
        </>
    )
}