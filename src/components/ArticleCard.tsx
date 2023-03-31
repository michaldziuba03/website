import React from "react";
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import {person} from "../config";

interface ArticleCardProps {
    title: string;
    description: string;
    featuredImage: any;
    slug: string;
    type: string;
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
                    className='rounded border dark:border-body-dark w-full'
                    alt={props.title}
                    image={thumbnail!}
                />
            </Link>
            <div className='mt-4'>
                <span className='mb-2 block font-semibold leading-none text-xs uppercase text-primary'>{ props.type }</span>
                <Link
                    className='hover:text-primary transition-colors text-heading font-semibold text-xl'
                    to={pathname}>{ props.title }
                </Link>
                <p className='mt-2'>{ props.description }</p>

                <div className='mt-4 flex gap-3 items-center'>
                    <StaticImage
                        className='rounded-full'
                        src='../images/aboutme.jpg'
                        alt='author photo'
                        width={36}
                        height={36}
                    />
                    <div className='flex flex-col'>
                        <span className='text-heading text-sm font-medium'>{ person.firstName } { person.secondName }</span>
                        <span className='text-sm text-gray-400'>{ props.formattedDate } · { props.readingTime }</span>
                    </div>
                </div>
            </div>

        </div>
    )
}