import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Tag } from '../skills/Skill';

export const Project = () => {
    return (
        <div className='project'>
            <StaticImage 
                alt='Project: elegant-homepage'
                className='project__image'
                src='https://user-images.githubusercontent.com/43048524/144280803-99b12a2e-5df9-482d-9064-7d0971280d77.png' 
            />

            <div className='project__info'>
                <div className='project__featured'>Featured project</div>
                <h2>Elegant homepage</h2>
                <p>Sed metus est, bibendum vitae lacus nec, imperdiet sagittis lacus. Maecenas molestie dolor dui, ut ullamcorper tortor varius rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras felis ex, congue vitae iaculis eu.</p>

                <div className='project__tags'>
                    <Tag label='JavaScript' technology='javascript' />
                    <Tag label='React' technology='react' />
                </div>
            </div>
        </div>
    )
}