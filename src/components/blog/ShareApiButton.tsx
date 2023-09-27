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
            <button className='relative' onClick={handleClick}>
                { showInfo && <div className='select-none z-50 -right-0 -bottom-10 absolute p-2 rounded text-xs font-medium bg-black text-gray-100'>Copied</div> }
                <Icon name='link' />
            </button>
        </>
    )
}