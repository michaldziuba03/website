import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Container } from '../container/Container';
import { Icon } from '../icons/Icon';
import { Logo } from '../logo/Logo';
import { Menu } from '../menu/Menu';
import './Header.scss';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    function handleOpenMenu() {
        setShowMenu(true);
    }

    function handleCloseMenu() {
        setShowMenu(false);
    }

    return (
        <header className='header'>
            <Container>
                <div className='header__block'>
                    <Logo />
                    
                    <div className='header__menu' onClick={handleOpenMenu}>
                        <Icon name='menu' />
                    </div>

                    <nav className='header__nav'>
                        <Link to='/' activeClassName='active' >Home</Link>
                        <Link to='/blog' activeClassName='active' >Blog</Link>
                    </nav>

                    <Menu show={showMenu} onClose={handleCloseMenu} />
                </div>
            </Container>
        </header>
    )
}