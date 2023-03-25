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
import {ArrowIcon} from "./ArrowIcon";
import {LockIcon} from "./LockIcon";
import {DatabaseIcon} from "./DatabaseIcon";
import {TorIcon} from "./TorIcon";
import {WebsocketIcon} from "./WebsocketIcon";
import {YoutubeIcon} from "./YoutubeIcon";
import {SocialNames} from "../../types";

export type IconNames =
    | SocialNames
    | 'menu'
    | 'email'
    | 'link'
    | 'close'
    | 'arrow'
    | 'lock'
    | 'database'
    | 'tor'
    | 'websocket'

interface IconProps {
    name: IconNames;
}

export const Icon: FC<IconProps> = ({ name }) => {
    switch(name) {
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
        case 'arrow':
            return <ArrowIcon />
        case 'lock':
            return <LockIcon />
        case 'database':
            return <DatabaseIcon />
        case 'tor':
            return <TorIcon />
        case 'websocket':
            return <WebsocketIcon />
        case 'youtube':
            return <YoutubeIcon />
        case 'facebook':
            return <FacebookIcon />
    }
}
