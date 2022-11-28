import React, { FC } from 'react'
import './Socials.scss';
import { Icon } from "../icons/Icon";
import { useLinksQuery } from '../../hooks/useLinks';
import { IconNames } from '../../types';

interface SocialsProps {
    className?: string;
}

interface SocialLinkProps {
    icon: IconNames;
    url: string;
}

const SocialLink: FC<SocialLinkProps> = ({ icon, url }) => {
    return (
    <a className='socials__link' href={url} target="_blank">
        <Icon name={icon} />
    </a>
    )
}

export const Socials: FC<SocialsProps> = ({ className }) => {
    const classes = `socials ${className}`
    const links = useLinksQuery();

    return (
    <div className={classes}>
        { 
            links.map((link: any) => <SocialLink key={link.url} icon={link.icon} url={link.url} />) 
        }
    </div>
  )
}
