import { Link } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import React from 'react';
import { Tags } from '../tags/Tags';
import './ArticleCard.scss';

interface ArticleCardProps {
    title: string;
    description: string;
    date: string;
    readingTime: string;
    tags: string[];
    slug: string;
    featuredImage: ImageDataLike;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ date, title, description, readingTime, tags, slug, featuredImage }) => {
    const thumbnail = getImage(featuredImage);
    const pathname = `/blog/${slug}`;

    return (
        <div className='article-card'>
            <Link to={pathname}>
                <GatsbyImage class='article-card__thumbnail' image={thumbnail!} alt='thumbnail' />
            </Link>
            
            <div className='article-card__container'>
                <span className='article-card__date'>{date} · {readingTime} </span>
                <Link className='article-card__title' to={pathname}>{title}</Link>
                <span className='article-card__description'>{description}</span>
                <Tags wrap={false} tags={tags} />
            </div>
        </div>
    )
}