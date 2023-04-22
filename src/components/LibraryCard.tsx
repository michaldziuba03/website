import React from "react";
import { Icon, IconNames } from "./icons/Icon";

interface LibraryCardProps {
    name: string;
    link: string;
    icon: IconNames;
    description: string;
}

export const LibraryCard: React.FC<LibraryCardProps> = (props) => {
    return (
        <div className='flex flex-col justify-between w-full text-paragraph p-7 bg-body-dark rounded shadow'>
            <div>
                <div className='text-3xl text-heading'><Icon name={props.icon} /></div>
                <h2 className='text-heading font-bold mt-8'>{ props.name }</h2>
                <p className='mt-3'>{ props.description }</p>
            </div>
            <a className='flex font-medium rounded w-full mt-16 items-center text-heading hover:bg-heading hover:text-body-dark  justify-center py-2 px-5 border border-2 border-heading transition-colors'
               href={props.link}>
                Learn more
            </a>
        </div>
    );
}
