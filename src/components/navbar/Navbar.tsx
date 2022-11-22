import React, { FC } from 'react';
import './Navbar.scss';
import { Logo } from '../logo/Logo';
import { Icon } from '../icons/Icon';

export const Navbar: FC = () => {
    return (
        <div className='navbar'>
            <Logo />
            <div className='navbar__menu-icon'>
                <Icon name='menu' size='32' />
            </div>
            <nav className='navbar__navigation'>
                <a className='navbar_link' href='#'>About</a>
                <a className='navbar_link' href='#'>Projects</a>
                <a className='navbar_link' href='#'>Contact</a>
            </nav>
        </div>
    )
}