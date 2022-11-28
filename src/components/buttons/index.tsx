import React, { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { Link } from 'gatsby';
import './buttons.scss';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    link?: string;
    stretched?: boolean;
    variant?: 'dark' | 'light';
}

const BaseButton: FC<ButtonProps> = ({ children, stretched, variant, className, link, ...attributes }) => {
    const btnClasses = ['btn', className];

    if (stretched) {
        btnClasses.push('stretched-btn');
    }

    if (variant) {
        btnClasses.push(`${variant}-btn`);
    } else {
        btnClasses.push('light-btn');
    }

    const btnClass = btnClasses.join(' ');

    if (link) {
        return (
            <Link className={btnClass} to={link}>{children}</Link>
        )
    }

    return (
        <button className={btnClass} {...attributes}>
            {children}
        </button>
    )
}

export const SolidButton: FC<ButtonProps> = ({ children, className, stretched, ...attributes }) => {
    const classes = ['solid-btn', className].join(' ')

    return (
        <BaseButton className={classes} stretched={stretched} {...attributes} >{children}</BaseButton>
    )
}

export const GhostButton: FC<ButtonProps> = ({ children, className, stretched, ...attributes }) => {
    const classes = ['ghost-btn', className].join(' ')

    return (
        <BaseButton className={classes} stretched={stretched} {...attributes}>{children}</BaseButton>
    )
}