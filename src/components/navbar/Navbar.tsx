import React from 'react';
import { Logo } from '../logo/Logo';
import './Navbar.scss';

export const Navbar = () => {
    return (
        <nav className='nav'>
            <Logo />
        </nav>
    )
}