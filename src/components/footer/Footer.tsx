import React from 'react';
import { useAuthorQuery } from '../../hooks/useAuthorQuery';
import { Logo } from '../logo/Logo';
import { Socials } from '../socials/Socials';
import './Footer.scss';

export const Footer = () => {
    const date = new Date();
    const author = useAuthorQuery();

    return (
        <footer className='footer'>
            <Logo />
            <Socials />
            <p className='footer__copyright'>&copy; {date.getFullYear()} { author.firstName } { author.secondName }. All rights reserved</p>
        </footer>
    )
}