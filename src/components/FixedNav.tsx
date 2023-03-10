import React from "react";

const NavDot: React.FC = () => (
    <a href='#' className='flex w-7 h-7 border border-gray-500 border-2 rounded-full'></a>
);

export const FixedNav: React.FC = () => {
    return (
        <nav className='fixed top-2/4 left-24 -translate-y-1/2 flex flex-col gap-6'>
            <NavDot />
            <NavDot />
            <NavDot />
            <NavDot />
        </nav>
    )
}
