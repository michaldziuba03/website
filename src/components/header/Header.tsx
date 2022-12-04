import { Link } from 'gatsby';
import React from 'react';
import { GhostButton } from '../buttons';
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

                    <nav>
                        <Link to='/' activeClassName='active' >Home</Link>
                        <Link to='/blog' activeClassName='active' >Blog</Link>
                        <Link to='/resume' activeClassName='active' >Resume</Link>
                    </nav>
                </div>
            </Container>
        </header>
    )
}