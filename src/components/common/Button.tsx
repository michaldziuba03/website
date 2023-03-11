import React, { PropsWithChildren, RefAttributes } from "react";

// TypeScript will merge interfaces with same name
export interface ButtonProps extends PropsWithChildren {}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children,...props}) => (
    <button {...props} className='px-9 py-3 flex items-center gap-3 justify-center bg-primary border border-2 border-primary hover:text-primary hover:bg-body dark:hover:bg-body-dark rounded dark:bg-primary-dark text-body dark:text-body-dark transition-colors'>
        { children }
    </button>
);
