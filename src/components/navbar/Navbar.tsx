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
            <div>
                <Icon name='menu' size='32' />
            </div>
        </div>
    )
}