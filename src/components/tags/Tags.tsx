import { Link } from 'gatsby';
import React from 'react';
import './Tags.scss';

interface TagsProps {
    tags: string[];
}

export const Tags: React.FC<TagsProps> = ({ tags }) => {
    return (
        <div className='article-tags'>
            { tags.map(tag => <Link className='article-tag' to={`/blog/tags/${tag}`}>#{tag}</Link>) }
        </div>
    )
}