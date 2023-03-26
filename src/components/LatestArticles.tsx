import {useArticlesQuery} from "../hooks/useArticlesQuery";
import React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

interface SmallArticleCard {
    imageData: any;
    title: string;
    formattedDate: string;
    readingTime: string;
    description: string;
    slug: string;
}

export const SmallArticleCard: React.FC<SmallArticleCard> = (props) => {
    const image = getImage(props.imageData);
    const pathname = `/posts/${props.slug}`;

    return (
        <div className='grid grid-cols-5 gap-4 md:gap-10 2xl:gap-4'>
            <Link to={pathname} className='col-span-2 flex items-center'>
                <GatsbyImage
                    className='w-full'
                    alt='article banner'
                    image={image!}
                />
            </Link>

            <div className='col-span-3 flex flex-col justify-center gap-2'>
                <Link
                    className='text-heading block font-bold text-sm md:text-xl 2xl:text-sm'
                    to={pathname}
                >
                    { props.title }
                </Link>
                <span className='text-xs'>{ props.formattedDate } · { props.readingTime }</span>
                <p className='hidden max-w-md md:block 2xl:hidden'>
                    { props.description }
                </p>
            </div>
        </div>
    )
}

export const LatestArticles: React.FC = () => {
    const posts = useArticlesQuery();
    return (
        <div className='flex flex-col gap-8 2xl:gap-4 mt-4'>
            { posts.map((post: any) => (
                <SmallArticleCard
                    key={post.id}
                    imageData={post.featuredImage}
                    title={post.title}
                    formattedDate={post.formattedDate}
                    readingTime={post.readingTime}
                    slug={post.slug}
                    description={post.description}
                />
            )) }
        </div>
    );
}