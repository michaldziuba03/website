import React from "react";
import { Logo } from "./Logo";
import {Socials} from "./Socials";

export const Footer: React.FC = () => {
    const date = new Date();
    return (
        <footer className='w-full flex flex-col items-center justify-center gap-4 py-8'>
            <Logo />
            <Socials />
            <p className='font-medium text-xs md:text-sm'>
                &copy; {date.getFullYear()} Michał Dziuba. All rights reserved.
            </p>
        </footer>
    )
}
