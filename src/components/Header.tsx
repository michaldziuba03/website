import { Container } from "./common/Container";
import { Logo } from "./Logo";
import * as React from "react";
import {Icon} from "./icons/Icon";

export const Header = () => {
    return (
        <header className='absolute w-full'>
            <Container>
                <div className='w-full flex justify-between py-6 pt-10 md:py-12 items-center'>
                    <Logo />
                    <nav className='hidden md:flex items-center gap-8 font-medium text-heading dark:text-heading-dark'>
                        <a href='#' className='text-primary dark:text-primary-dark' >Home</a>
                        <a href='#'>Blog</a>
                        <a href='#' className='py-1 flex items-center gap-2 px-5 bg-heading hover:bg-primary text-body rounded-2xl'>Resume</a>
                    </nav>
                    <div className='md:hidden text-3xl'>
                        <Icon name='menu' />
                    </div>
                </div>
            </Container>
        </header>
    )
}
