import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useLastArticlesQuery } from '../../hooks/useLastArticlesQuery';

interface LatestArticleProps {
    title: string;
    date: string;
    readingTime: string;
    featuredImage: any;
}
const LatestArticle: React.FC<LatestArticleProps> = ({ title, date, readingTime, featuredImage }) => {
    const thumbnail = getImage(featuredImage?.childImageSharp?.gatsbyImageData);

    return (
    <div className='latest-article'>
        <GatsbyImage className='thumbnail' image={thumbnail!} alt='thumbnail' />
        <div>
            <b>{title}</b>
            <span>{date} · {readingTime}</span>
        </div>
    </div>)
}

export const LatestArticles: React.FC = () => {
    const articles = useLastArticlesQuery();

    return (
        <div className='latest-articles'>
            <h3>Latest articles</h3>

            <div className='list'>
                { articles.map((article: any) => <LatestArticle 
                    date={article.frontmatter.date}
                    title={article.frontmatter.title}
                    readingTime={article.fields.readingTime.text}
                    featuredImage={article.frontmatter.featuredImage}
                />) }
            </div>
        </div>
    )
}