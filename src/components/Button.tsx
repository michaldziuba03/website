import React, { PropsWithChildren } from "react";

export const Button: React.FC<PropsWithChildren> = ({ children }) => (
    <button className='px-9 py-3 flex items-center gap-3 justify-center bg-primary border border-2 border-primary hover:text-primary hover:bg-body dark:hover:bg-body-dark rounded dark:bg-primary-dark text-body dark:text-body-dark transition-colors'>
        { children }
    </button>
);
