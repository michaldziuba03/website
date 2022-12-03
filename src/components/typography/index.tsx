import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';
import './Typography.scss';

interface CustomTypography extends PropsWithChildren {
    className?: string;
}

export const SectionH1: FC<CustomTypography> = (props) => {
    const className = classNames('section-h1', props.className);

    return (
        <h1 className={className}>
            { props.children }
        </h1>
    )
}

export const Description: FC<CustomTypography> = (props) => {
    const className = classNames('paragraph', props.className);

    return (
        <p className={className}>
            { props.children }
        </p>
    )
}

export const Figcaption = () => {
    
} 