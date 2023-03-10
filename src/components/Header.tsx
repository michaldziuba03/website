import { Container } from "./Container";
import { Logo } from "./Logo";
import * as React from "react";

export const Header = () => {
    return (
        <header>
            <Container>
                <div className='w-full flex justify-between py-12 items-center'>
                    <Logo />
                    <nav className='flex items-center gap-8 font-medium text-heading dark:text-heading-dark'>
                        <a href='#' className='text-primary dark:text-primary-dark' >Home</a>
                        <a href='#'>Blog</a>
                        <a href='#' className='py-1 flex items-center gap-2 px-5 bg-heading text-body rounded-2xl'>Resume</a>
                    </nav>
                </div>
            </Container>
        </header>
    )
}
