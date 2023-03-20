import React, {useState} from "react";
import { Icon } from "./icons/Icon";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { changeTheme, getSavedTheme } from "../theme";

interface ThemeIndicatorProps {
    isDark: boolean;
}
const ThemeIndicator: React.FC<ThemeIndicatorProps> = ({ isDark }) => {
    if (isDark) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
        )
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
    )
}

export const Header: React.FC = () => {
    const [isDark, setIsDark] = useState(() => {
        const theme = getSavedTheme();
        return theme === 'theme-dark';
    });

    function handleChangeTheme() {
        const currentTheme = changeTheme();
        setIsDark(currentTheme === 'theme-dark');
    }

    return (
        <header className='absolute w-full z-50'>
            <Container>
                <div className='w-full flex justify-between py-6 pt-10 md:py-12 items-center'>
                    <Logo />
                    <nav className='hidden md:flex items-center gap-8 font-medium text-heading dark:text-heading-dark'>
                        <a href='#' className='text-primary dark:text-primary-dark' >Home</a>
                        <a href='#'>Blog</a>
                        <a href='#' className='py-1 flex items-center gap-2 px-5 bg-heading hover:bg-primary text-body rounded-2xl'>Resume</a>
                        <button onClick={handleChangeTheme}>
                            <ThemeIndicator isDark={isDark} />
                        </button>
                    </nav>
                    <div className='md:hidden text-3xl'>
                        <Icon name='menu' />
                    </div>
                </div>
            </Container>
        </header>
    )
}
