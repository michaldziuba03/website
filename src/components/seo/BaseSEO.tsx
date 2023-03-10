import React from "react";

export interface BaseSEOProps {
    title: string;
    description: string;
}

export const BaseSEO: React.FC<BaseSEOProps> = (props) => {
    return (
        <>
            <title>{ props.title }</title>
            <meta name='description' content={props.description} />
            {/* Link to verify website ownership on my Mastodon profile */}
            <link rel="me" href="https://fosstodon.org/@michaldziuba" />
        </>
    );
}
