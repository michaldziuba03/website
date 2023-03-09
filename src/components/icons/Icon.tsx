import React, { FC } from 'react';
import { DevIcon } from './DevIcon';
import { FacebookIcon } from './FacebookIcon';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { MenuIcon } from './MenuIcon';
import { EmailIcon } from './EmailIcon';
import { TwitterIcon } from './TwitterIcon';
import { LinkIcon } from './LinkIcon';
import { CloseIcon } from './CloseIcon';

export type IconNames = 'linkedin' | 'facebook' | 'github' | 'dev' | 'menu' | 'email' | 'twitter' | 'link' | 'close';

interface IconProps {
    name: IconNames;
}

export const Icon: FC<IconProps> = ({ name }) => {
    switch(name) {
        case 'facebook':
            return <FacebookIcon />
        case 'dev':
            return <DevIcon />
        case 'github':
            return <GithubIcon />
        case 'linkedin':
            return <LinkedinIcon />
        case 'menu':
            return <MenuIcon />
        case 'email':
            return <EmailIcon />
        case 'twitter':
            return <TwitterIcon />
        case 'link':
            return <LinkIcon />
        case 'close':
            return <CloseIcon />
    }
}
