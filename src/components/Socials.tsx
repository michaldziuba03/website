import React from "react";
import { Icon } from "./icons/Icon";
import classNames from "classnames";
import { socials } from "../config";

export interface SocialsProps {
    className?: string;
}

export const Socials: React.FC<SocialsProps> = ({ className  }) => {
    const styles = classNames('text-4xl text-heading flex gap-6', className);
    return (
        <div className={styles}>
            { socials.map(social => (
                <a className='hover:scale-110 hover:text-paragraph transition-transform'
                   href={social.url}
                   target="_blank"
                   key={social.name}
                >
                    <Icon name={social.name} />
                </a>
            )) }
        </div>
    )
}
