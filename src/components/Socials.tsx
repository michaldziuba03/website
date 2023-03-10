import React from "react";
import {Icon} from "./icons/Icon";

export interface SocialsProps {
    className?: string;
}

export const Socials: React.FC<SocialsProps> = ({ className= '' }) => {
    return (
        <div className={`text-4xl text-heading dark:text-heading-dark flex gap-6 ${className}`}>
            <a className='hover:scale-110 hover:text-paragraph transition-transform'
               href='https://github.com/michaldziuba03'
               target="_blank"
            >
                <Icon name='github' />
            </a>
            <a className='hover:scale-110 hover:text-paragraph transition-transform'
               href='https://twitter.com/michaldziuba03'
               target="_blank"
            >
                <Icon name='twitter' />
            </a>
            <a className='hover:scale-110 hover:text-paragraph transition-transform'
               href='https://www.linkedin.com/in/michaldziuba03'
               target="_blank"
            >
                <Icon name='linkedin' />
            </a>
            <a className='hover:scale-110 hover:text-paragraph transition-transform'
               href='https://dev.to/michaldziuba'
               target="_blank">
                <Icon name='youtube' />
            </a>
        </div>
    )
}
