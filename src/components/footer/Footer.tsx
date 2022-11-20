import React from 'react';
import { Logo } from '../logo/Logo';
import { Socials } from '../socials/Socials';
import './Footer.scss';

export const Footer = () => {
    return (
        <footer className='footer'>
            <Logo />
            <Socials />
            <p className='footer__copyright'>&copy; 2022 Michał Dziuba. All rights reserved</p>
        </footer>
    )
}