import React, { FC } from 'react';
import './Navbar.scss';
import { Logo } from '../logo/Logo';
import { Icon } from '../../icons/Icon';

export interface NavbarProps {
}

export const Navbar: FC<NavbarProps> = ({  }) => {
    return (
        <div className='navbar'>
            <Logo />
            <div className='navbar__menu-icon'>
                <Icon name='menu' size='32' />
            </div>
            <nav className='navbar__navigation'>
                <span className='navbar_link'>About</span>
                <span className='navbar_link'>Projects</span>
                <span className='navbar_link'>Blog</span>
                <span className='navbar_link'>Contact</span>
            </nav>
        </div>
    )
}