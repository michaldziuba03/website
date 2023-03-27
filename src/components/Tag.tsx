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

export const BlogTag: React.FC<React.PropsWithChildren> = ({ children }) => {
    const pathname = `/blog/tags/${children}`;

    return (
        <Tag>
            <Link
                className='text-sm md:text-base'
                to={pathname}>{ technologyName(children as Technologies) }</Link>
        </Tag>
    )
}