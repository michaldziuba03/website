import React from "react";
import {PropsWithChildrenAndClass} from "../../types";
import classNames from "classnames";

// TypeScript will merge interfaces with same name
export interface ButtonProps extends PropsWithChildrenAndClass {
    variant: 'primary' | 'secondary';
    href?: string;
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const btnStyles = 'px-9 py-3 flex items-center gap-3 justify-center border border-2 rounded transition-colors';
const btnPrimary = 'bg-primary border-primary text-body hover:bg-body hover:text-primary';
const btnSecondary = 'bg-body border-primary text-primary hover:bg-primary hover:text-body';

export const Button: React.FC<ButtonProps> = ({ children,...props}) => {
    const styles = classNames(btnStyles, props.className, {
        [btnPrimary]: props.variant === 'primary',
        [btnSecondary]: props.variant === 'secondary',
    });

    if (props.href) {
        return (
            <a href={props.href} className={styles}>{children}</a>
        );
    }

    return (
        <button {...props} className={styles}>
            { children }
        </button>
    );
}
