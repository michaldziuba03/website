import React from "react";
import {meta, person} from "../../config";

export interface BaseSEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
    pathname?: string;
}

export const BaseSEO: React.FC<BaseSEOProps> = (props) => {
    return (
        <>
            <title>{props.title}</title>
            <meta name='description' content={props.description} />

            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:url" content={`${meta.url}${props.pathname}`} />
            <meta name="keywords" content={props.keywords?.join(", ")} />

            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:site" content={`@${person.twitter}`} />
            <meta name="twitter:url" content={`${meta.url}${props.pathname}`} />
            <meta name="twitter:creator" content={`@${person.twitter}`} />
            {/* Link to verify website ownership on my Mastodon profile */}
            <link rel="me" href={person.mastodonUrl} />
            <link rel="canonical" href={`${meta.url}${props.pathname}`} />
        </>
    );
}

const DEFAULT_KEYWORDS: string[] = [
    'Michał',
    'Dziuba',
    'developer',
    'portfolio',
    'blog',
    'personal',
    'dev',
    'michaldziuba03',
    'github',
];

BaseSEO.defaultProps = {
    keywords: DEFAULT_KEYWORDS,
    title: `${person.firstName} ${person.secondName} - Website`,
    description: person.description,
    pathname: '',
}
