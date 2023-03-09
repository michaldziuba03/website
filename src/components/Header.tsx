import { Container } from "./Container";
import { Logo } from "./Logo";
import * as React from "react";

export const Header = () => {
    return (
        <header>
            <Container>
                <div className='w-full flex justify-between py-12 items-center'>
                    <Logo />
                    <nav className='flex gap-8 font-medium text-heading dark:text-heading-dark'>
                        <a href='#' className='text-primary dark:text-primary-dark' >Home</a>
                        <a href='#'>About</a>
                        <a href='#'>Contact</a>
                        <a href='#'>Blog</a>
                    </nav>
                </div>
            </Container>
        </header>
    )
}
