import classNames from 'classnames';
import { Link } from 'gatsby-link';
import React from 'react';
import { CloseIcon } from '../icons/CloseIcon';
import './Menu.scss';

interface MenuProps {
    show?: boolean;
    onClose: () => void;
}

export const Menu: React.FC<MenuProps> = ({ show, onClose }) => {
    const classes = classNames({
        'menu': true,
        'menu--show': show,
    })

    return (
        <div className={classes}>
            <nav className='menu__nav'>
                <div className='menu__close' onClick={onClose}>
                    <CloseIcon />
                </div>
                <Link to='/' activeClassName='active' >Home</Link>
                <Link to='/blog' activeClassName='active' >Blog</Link>
            </nav>
        </div>
    )
}