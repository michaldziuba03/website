import { Link } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useLastArticlesQuery } from '../../hooks/useLastArticlesQuery';

interface LatestArticleProps {
    title: string;
    date: string;
    readingTime: string;
    slug: string;
    featuredImage: any;
}
const LatestArticle: React.FC<LatestArticleProps> = ({ title, date, readingTime, featuredImage, slug }) => {
    const thumbnail = getImage(featuredImage?.childImageSharp?.gatsbyImageData);
    const pathname = `/blog/${slug}`;

    return (
    <div className='latest-article'>
        <Link to={pathname}>
            <GatsbyImage className='thumbnail' image={thumbnail!} alt='thumbnail' />
        </Link>
        <div>
            <Link className='latest-article__title' to={pathname}>{title}</Link>
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
                    slug={article.frontmatter.slug}
                />) }
            </div>
        </div>
    )
}