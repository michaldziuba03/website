import React from "react";
import { person } from "../../config";

export interface BaseSEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
}

export const BaseSEO: React.FC<BaseSEOProps> = (props) => {
    return (
        <>
            <title>{props.title}</title>
            <meta property="og:title" content={props.title} />
            <meta name='description' content={props.description} />
            <meta property="og:description" content={props.description} />
            <meta name="keywords" content={props.keywords?.join(", ")} />

            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:site" content={`@${person.twitter}`} />
            <meta name="twitter:creator" content={`@${person.twitter}`} />
            {/* Link to verify website ownership on my Mastodon profile */}
            <link rel="me" href={person.mastodonUrl} />
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
}
