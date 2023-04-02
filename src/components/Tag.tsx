import React from "react";
import { TechIcon } from "./technologies";
import { Technologies } from "../types";
import { technologyName } from "../helpers";
import {Link} from "gatsby";

interface TagProps extends React.PropsWithChildren {
    technology?: Technologies;
}

export const Tag: React.FC<TagProps> = ({ technology, children }) => (
    <div className='flex gap-2 font-medium items-center justify-center px-2 md:px-4 py-2 bg-body-dark rounded'>
        { technology && <>
            <TechIcon technology={technology} />
            <span className='text-xs md:text-sm'>{ technologyName(technology) }</span>
        </>}

        { !technology && children }
    </div>
)

interface BlogTagProps extends React.PropsWithChildren {
    path?: string;
}

export const BlogTag: React.FC<BlogTagProps> = ({ children, path }) => {
    const pathname = path || `/blog/tags/${children}`;

    return (
            <Link
                activeClassName='bg-paragraph text-body'
                partiallyActive={true}
                className='bg-body-dark text-sm md:text-base flex gap-2 font-medium items-center justify-center px-2 md:px-4 py-2 rounded'
                to={pathname}>{ technologyName(children as Technologies) }
            </Link>
    )
}