import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import './Tags.scss';

interface TagsProps {
    tags: string[];
    wrap?: boolean;
}

export const Tags: React.FC<TagsProps> = ({ tags, wrap }) => {
    

    return (
        <div className={classNames({
            'article-tags': true,
            'article-tags--wrap': wrap,
        })}>
            { tags.map(tag => <Link className='article-tag' to={`/blog/tags/${tag}`}>#{tag}</Link>) }
        </div>
    )
}

Tags.defaultProps = {
    wrap: true,
}