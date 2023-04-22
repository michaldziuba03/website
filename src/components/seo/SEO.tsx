import React from "react";
import { BaseSEO, BaseSEOProps} from "./BaseSEO";

interface SeoProps extends BaseSEOProps {}

export const SEO: React.FC<SeoProps> = (props) => {
    return (
        <>
            <BaseSEO {...props} />
            <meta property="og:type" content='website' />
            <meta name="twitter:card" content='summary' />
        </>
    )
}
