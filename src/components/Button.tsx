import React, { PropsWithChildren } from "react";

export const Button: React.FC<PropsWithChildren> = ({ children }) => (
    <button className='px-11 py-3 bg-primary rounded dark:bg-primary-dark text-body dark:text-body-dark'>
        { children }
    </button>
);
