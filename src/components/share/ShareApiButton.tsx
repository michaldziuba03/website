import React, { useState } from 'react';
import { Icon } from '../icons/Icon';

interface ShareApiProps {
    url: string;
}

export const ShareApiButton: React.FC<ShareApiProps> = ({ url }) => {
    const [showInfo, setShowInfo] = useState(false);

    function useShareApi() {
        try {
            navigator.share({ url });
        } catch {
            // do nothing...
        }
    }

    async function useClipboard() {
        try {
            await navigator.clipboard.writeText(url);
            setShowInfo(true);
            setTimeout(() => setShowInfo(false), 3000);
        } catch {
            // do nothing...
        }
    }

    function handleClick() {
        // @ts-ignore - navigator.share IS NOT always definied. Example? Firefox
        if (navigator.share) {
            useShareApi();
        } else if (navigator.clipboard) {
            useClipboard();
        }
    }

    return (
        <>
            { showInfo && <div>Link copied</div> }
            <button className='share-button' onClick={handleClick}>
                <Icon name='link' />
            </button>
        </>
    )
}