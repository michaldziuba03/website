import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useAuthorQuery } from '../../hooks/useAuthorQuery';
import { Socials } from '../socials/Socials';

export const ArticleAuthor: React.FC = () => {
    const author = useAuthorQuery();

    return (
        <div className='author'>
             <StaticImage class='author__img' src='../../images/me.jpeg' alt='author' />
             <h4 className='author__fullname'>{author.firstName} {author.secondName}</h4>
             <span className='author__description'>{author.bio}</span>
             <Socials className='author__socials'/>
        </div>
    )
}