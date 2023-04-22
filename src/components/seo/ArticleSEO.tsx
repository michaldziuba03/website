import React from "react";
import { BaseSEO, BaseSEOProps } from "./BaseSEO";

interface ArticleSeoProps extends BaseSEOProps {
    previewUrl: string;
}

export const ArticleSEO: React.FC<ArticleSeoProps> = (props) => {
    return (
        <>
            <BaseSEO {...props} />
            <meta property="og:type" content='article' />
            <meta property="og:image" content={props.previewUrl} />
            <meta name="twitter:image" content={props.previewUrl} />
            <meta name="twitter:card" content='summary_large_image' />
        </>
    )
}