import React, { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import './typography.scss';

export interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {

}

export const SectionH1: FC<HeadingProps> = ({ children, className, ...attributes  }) => {
    const h1Class = `section-h1 ${className}`;

    return <h1 className={h1Class} {...attributes}>{ children }</h1>
}

export const SectionH2: FC<HeadingProps> = ({ children, className, ...attributes  }) => {
    const h2Class = `section-h2 ${className}`;

    return <h2 className={h2Class} {...attributes}>{ children }</h2>
}