import React from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from 'react-share';
import { Icon } from './icons/Icon';
import {ShareApiButton} from "./ShareApiButton";

interface ShareProps {
    url: string;
}

export const Share: React.FC<ShareProps> = ({ url }) => {
    return (
        <div className='flex gap-6 text-2xl items-center'>
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
