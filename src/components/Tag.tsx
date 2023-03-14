import React from "react";
import {TechIcon} from "./technologies";
import { Technologies } from "../types";
import {technologyName} from "../helpers";

interface TagProps extends React.PropsWithChildren {
    technology?: Technologies;
}

export const Tag: React.FC<TagProps> = ({ technology, children }) => (
    <div className='flex gap-2 border font-medium items-center justify-center px-2 md:px-4 py-2 bg-body-darken rounded'>
        { technology && <>
            <TechIcon technology={technology} />
            <span className='text-xs md:text-sm'>{ technologyName(technology) }</span>
        </>}

        { !technology && children }
    </div>
)