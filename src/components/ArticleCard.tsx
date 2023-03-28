import React from "react";
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import {person} from "../config";

interface ArticleCardProps {
    title: string;
    description: string;
    featuredImage: any;
    slug: string;
    formattedDate: string;
    readingTime: string;
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
                <p className='text-sm'>{ props.formattedDate } · { props.readingTime }</p>
                <p className=' mt-2'>{ props.description }</p>
            </div>

        </div>
    )
}