import React from "react";
import {useArticlesQuery} from "../hooks/useArticlesQuery";
import {Section, SectionProps} from "./Section";
import {H1} from "../components/Heading";
import {Paragraph} from "../components/Paragraph";
import {ArticleCard} from "../components/ArticleCard";

export const Featured: React.FC<SectionProps> = ({ name }) => {
    const articles = useArticlesQuery();

    return (
        <Section name={name}>
            <H1>Featured</H1>
            <Paragraph>My recent blog posts.</Paragraph>

            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                { articles.map((article: any) => <ArticleCard
                    title={article.title}
                    description={article.description}
                    featuredImage={article.featuredImage}
                    slug={article.slug}
                    formattedDate={article.formattedDate}
                    readingTime={article.readingTime} />)
                }
            </div>
        </Section>
    )
}