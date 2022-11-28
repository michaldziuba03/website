import React from 'react';
import { Container } from '../container/Container';
import { Icon } from '../icons/Icon';
import { Logo } from '../logo/Logo';
import './Header.scss';

export const Header = () => {
    return (
        <header className='header'>
            <Container>
                <div className='header__block'>
                    <Logo />
                    
                    <div className='header__menu'>
                        <Icon name='menu' />
                    </div>
                </div>
            </Container>
        </header>
    )
}