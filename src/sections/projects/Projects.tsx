import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Section } from '../../components/section/Section';
import { Description, SectionH1 } from '../../components/typography';
import './Projects.scss';

export const Projects: React.FC = () => {
    return (
        <Section>
            <SectionH1>Projects</SectionH1>
            <Description>Some applications I’ve built</Description>

            <div className='projects'>
                <div className='project'>
                    <StaticImage 
                        alt='Project: elegant-homepage'
                        className='project__image'
                        src='https://user-images.githubusercontent.com/43048524/144280803-99b12a2e-5df9-482d-9064-7d0971280d77.png' 
                    />

                    <div className='project__info'>
                        <div className='project__featured'>Featured project</div>
                        <h3>Elegant homepage</h3>
                        <Description>
                        Sed metus est, bibendum vitae lacus nec, imperdiet sagittis lacus. Maecenas molestie dolor dui, ut ullamcorper tortor varius rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras felis ex, congue vitae iaculis eu.
                        </Description>
                    </div>
                </div>
            </div>

        </Section>
    )
} 