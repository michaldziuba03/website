import React, {useState} from "react";
import classNames from "classnames";
import {changeTheme, getSavedTheme} from "../../theme";
import {Icon} from "../icons/Icon";
import {Link} from "gatsby";
import {Container} from "./Container";

interface ThemeIndicatorProps {
    isDark: boolean;
}
const ThemeIndicator: React.FC<ThemeIndicatorProps> = ({ isDark }) => {
    if (isDark) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
        );
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
    );
}

export const NavLinks: React.FC = () => {
    return (
        <>
            <Link to='/' activeClassName='text-primary' className='hover:text-primary transition-colors' >Home</Link>
            <Link to='/blog' partiallyActive activeClassName='text-primary' className='hover:text-primary transition-colors'>Blog</Link>
        </>
    )
}

interface MenuProps {
    isOpen: boolean;
    onClose: () => any;
}

const menuStyles = 'flex flex-col items-center justify-between md:hidden w-full h-full fixed text-2xl bg-body-dark top-0 left-0';

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
    const [isDark, setIsDark] = useState(() => {
        const theme = getSavedTheme();
        return theme === 'theme-dark';
    });

    function handleChangeTheme() {
        const currentTheme = changeTheme();
        setIsDark(currentTheme === 'theme-dark');
    }

    const mobileStyles = classNames(menuStyles, {
        '-translate-y-full transition-transform': !isOpen,
        'translate-y-0  transition-transform': isOpen,
    });

    return (
        <div>
            <nav className='hidden text-base md:flex justify-center items-center gap-8 font-medium text-heading'>
                <NavLinks />
                <button className='hover:text-primary transition-colors flex gap-3 items-center' onClick={handleChangeTheme}>
                    <ThemeIndicator isDark={isDark} />
                </button>
            </nav>

            <nav className={mobileStyles}>
                <Container className='flex pt-10 justify-end'>
                    <button onClick={onClose} className='self-end text-2xl top-10 right-6 flex-col'>
                        <Icon name='close' />
                    </button>
                </Container>

                <div className='flex flex-col font-medium gap-10'>
                    <NavLinks />
                    <button className='hover:text-primary transition-colors flex gap-3 items-center' onClick={handleChangeTheme}>
                        Theme
                        <ThemeIndicator isDark={isDark} />
                    </button>
                </div>

                <div></div>
            </nav>
        </div>
    )
}
