import React, { PropsWithChildren } from 'react';
import { useSeoQuery } from '../../hooks/useSeoQuery';

// values shared with OpenGraph protocol AND Twitter
interface SocialMediaTagProps {
    name: 'description' | 'title' | 'image' | 'url',
    content: string;
}

const SharedSocialMediaTag: React.FC<SocialMediaTagProps> = ({ name, content }) => {
    return (
        <>
             <meta property={`og:${name}`} content={content} />
             <meta name={`twitter:${name}`} content={content} />
        </>
    )
}

type OGTypes = 'website' | 'article';

interface SeoProps extends PropsWithChildren {
    title: string;
    description: string;
    image?: string;
    type?: OGTypes;
    pathname?: string;
    keywords?: string[];
}

function getTwitterCard(type?: OGTypes) {
    switch (type) {
        case 'article':
            return 'summary_large_image';
        default:
            return 'summary';
    }
}

export const SEO: React.FC<SeoProps> = (props) => {
    const metadata = useSeoQuery();

    return (
        <>
            <title>{ props.title }</title>
            <meta name='description' content={props.description} />
            <SharedSocialMediaTag name='title' content={props.title} />
            <SharedSocialMediaTag name='description' content={props.description} />
            <SharedSocialMediaTag name='url' content={`${metadata.siteUrl}${props.pathname}`} />
            <link rel="canonical" href={`${metadata.siteUrl}${props.pathname}`} />
            { 
                props.image && 
                <SharedSocialMediaTag name="image" content={`${metadata.siteUrl}${props.image}`} /> 
            }
            <meta property="og:site_name" content={metadata.siteName} />
            <meta property="og:type" content={props.type} />
            <meta name="twitter:card" content={getTwitterCard(props.type)} />
            <meta name="keywords" content={props.keywords?.join(", ")} />

            { props.children }
        </>
     )
}

SEO.defaultProps = {
    type: 'website',
    pathname: '',
    keywords: ['programming', 'tech', 'web development'],
}
