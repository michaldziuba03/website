import React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

interface ArticleCardProps {
    title: string;
    description: string;
    featuredImage: any;
    slug: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = (props) => {
    const thumbnail = getImage(props.featuredImage);
    const pathname = `/posts/${props.slug}`;

    return (
        <div>
            <Link to={pathname}>
                <GatsbyImage
                    className='rounded border dark:border-body-dark'
                    alt={props.title}
                    image={thumbnail!}
                />
            </Link>
            <div className='mt-3'>
                <Link
                    className='text-heading font-bold text-xl'
                    to={pathname}>{ props.title }
                </Link>
                <p className='mt-1'>{ props.description }</p>
            </div>
        </div>
    )
}