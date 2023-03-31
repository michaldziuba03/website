import React from "react";
import {useArticlesQuery} from "../hooks/useArticlesQuery";
import {Section, SectionProps} from "./Section";
import {H1} from "../components/Heading";
import {Paragraph} from "../components/Paragraph";
import {ArticleCard} from "../components/ArticleCard";
import {ArticlesGrid} from "../components/ArticlesGrid";

export const Featured: React.FC<SectionProps> = ({ name }) => {
    const articles = useArticlesQuery();

    return (
        <Section name={name}>
            <H1>Featured</H1>
            <Paragraph>My recent blog posts.</Paragraph>

            <ArticlesGrid className='mt-3'>
                    { articles.map((article: any) => <ArticleCard
                        title={article.title}
                        description={article.description}
                        featuredImage={article.featuredImage}
                        slug={article.slug}
                        type={article.type}
                        formattedDate={article.formattedDate}
                        readingTime={article.readingTime} />)
                    }
            </ArticlesGrid>
        </Section>
    )
}