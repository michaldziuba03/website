import React from 'react';
import { DiscussionEmbed } from "disqus-react"
import './Comments.scss';

interface CommentsProps {
    identifier: string;
    title: string;
}

export const Comments: React.FC<CommentsProps> = ({ identifier, title }) => {
    return (
        <div className='comments'>
            <DiscussionEmbed 
                config={{ 
                    title: title,
                    identifier: identifier,
                }}
                shortname={process.env.GATSBY_DISQUS_NAME!}
            />
        </div>
    )
}
