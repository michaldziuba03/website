import {useArticlesQuery} from "../hooks/useArticlesQuery";
import React from "react";
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import {person} from "../config";

interface SmallArticleCard {
    imageData: any;
    title: string;
    formattedDate: string;
    readingTime: string;
    description: string;
    slug: string;
    type: string;
}

export const SmallArticleCard: React.FC<SmallArticleCard> = (props) => {
    const image = getImage(props.imageData);
    const pathname = `/posts/${props.slug}`;

    return (
        <div className='grid grid-cols-5 gap-4 md:gap-10 xl:gap-4'>
            <Link to={pathname} className='col-span-2 flex items-center'>
                <GatsbyImage
                    className='w-full'
                    alt='article banner'
                    image={image!}
                />
            </Link>

            <div className='col-span-3 flex flex-col justify-center gap-2'>
                <span className='hidden lg:block xl:hidden font-semibold leading-none text-xs uppercase text-primary'>{ props.type }</span>

                <Link
                    className='hover:text-primary transition-colors text-heading block font-semibold text-sm md:text-xl xl:text-sm'
                    to={pathname}
                >
                    { props.title }
                </Link>
                <p className='hidden max-w-md md:block xl:hidden'>
                    { props.description }
                </p>

                <div className='flex gap-3 items-center mt-0 lg:mt-3 xl:mt-0'>
                    <div className='hidden lg:block xl:hidden'>
                        <StaticImage
                            className='rounded-full'
                            width={36}
                            height={36}
                            src='../images/aboutme.jpg'
                            alt='author'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <span className='hidden lg:inline xl:hidden text-sm font-medium'>{ person.firstName } { person.secondName }</span>
                        <span className='text-sm xl:text-xs'>{ props.formattedDate }
                            <span className='xl:hidden 2xl:inline'> · { props.readingTime }</span>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export const LatestArticles: React.FC = () => {
    const posts = useArticlesQuery();
    return (
        <div className='flex flex-col gap-8 2xl:gap-4 mt-6'>
            { posts.map((post: any) => (
                <SmallArticleCard
                    key={post.id}
                    imageData={post.featuredImage}
                    title={post.title}
                    formattedDate={post.formattedDate}
                    readingTime={post.readingTime}
                    slug={post.slug}
                    description={post.description}
                    type={post.type}
                />
            )) }
        </div>
    );
}
