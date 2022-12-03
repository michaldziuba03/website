import { MDXProvider } from '@mdx-js/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { PropsWithChildren } from 'react';
import './Article.scss';

interface ArticleProps extends PropsWithChildren {
    readingTime: string;
    tags: string[];
    title: string;
    slug: string;
    description: string;
    date: string;
}

export const Article: React.FC<ArticleProps> = (props) => {
    return <article className='article'>
        <h1 className='article__title'>{props.title}</h1>
        <div className='article__author'>
            <StaticImage class='article__author-img' src='../../images/me.jpeg' alt='author' />
            <div className='article__author-info'>
                <p>Michał Dziuba</p>
                <span>Published on {props.date} · {props.readingTime} </span>
            </div>
        </div>
        
        <div className='content-wrapper'>
            <MDXProvider>{ props.children }</MDXProvider>
        </div>
    </article>
}

// { props.tags.map((tag: string) => (<div>#{tag}</div>)) }