import React from "react";
import {Icon} from "./icons/Icon";

export interface SocialsProps {
    className?: string;
}

export const Socials: React.FC<SocialsProps> = ({ className= '' }) => {
    return (
        <div className={`text-4xl text-heading dark:text-heading-dark flex gap-6 ${className}`}>
            <a href='https://github.com/michaldziuba03' target="_blank">
                <Icon name='github' />
            </a>
            <a href='https://twitter.com/michaldziuba03' target="_blank">
                <Icon name='twitter' />
            </a>
            <a href='https://www.linkedin.com/in/michaldziuba03' target="_blank">
                <Icon name='linkedin' />
            </a>
            <a href='https://dev.to/michaldziuba' target="_blank">
                <Icon name='dev' />
            </a>
        </div>
    )
}
