import React from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from 'react-share';
import { Icon } from '../icons/Icon';
import './Share.scss';
import { ShareApiButton } from './ShareApiButton';

interface ShareProps {
    url: string;
}

export const Share: React.FC<ShareProps> = ({ url }) => {
    return (
        <div className='share'>
            <FacebookShareButton url={url}>
                <Icon name='facebook' />
            </FacebookShareButton>

            <LinkedinShareButton url={url} >
                <Icon name='linkedin' />
            </LinkedinShareButton>

            <TwitterShareButton url={url}>
                <Icon name='twitter' />
            </TwitterShareButton>

            <ShareApiButton url={url} />
        </div>
    )
}
