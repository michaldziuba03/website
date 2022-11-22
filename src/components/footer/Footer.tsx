import React from 'react';
import { Logo } from '../logo/Logo';
import { Socials } from '../socials/Socials';
import './Footer.scss';

export const Footer = () => {
    const date = new Date();

    return (
        <footer className='footer'>
            <Logo />
            <Socials />
            <p className='footer__copyright'>&copy; {date.getFullYear()} Michał Dziuba. All rights reserved</p>
        </footer>
    )
}