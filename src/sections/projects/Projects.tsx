import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Section } from '../../components/section/Section';
import { Tag } from '../../components/skills/Skills';
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
                        <h3 className="project__title">Elegant homepage</h3>
                        <p className='project__description'>
                        A minimal and elegant homepage for browser written in Preact nad TypeScript.
                        </p>

                        <div className='project__tags'>
                            <Tag label='TypeScript' technology='typescript' />
                            <Tag label='React' technology='react' />
                            <Tag label='GraphQL' technology='graphql' />
                            <Tag label='Nest.js' technology='nest' />
                        </div>
                    </div>
                </div>

                <div className='project'>
                    <StaticImage 
                        alt='Project: elegant-homepage'
                        className='project__image'
                        src='https://user-images.githubusercontent.com/43048524/205111792-d573b026-9847-4533-afea-4b56df23b91b.png' 
                    />

                    <div className='project__info'>
                        <div className='project__featured'>Featured project</div>
                        <h3 className="project__title">Whiteboard</h3>
                        <p className='project__description'>
                        My major project - big fullstack real time application written in Nest.js with many services.
                        </p>

                        <div className='project__tags'>
                            <Tag label='TypeScript' technology='typescript' />
                            <Tag label='MongoDB' technology='mongo' />
                            <Tag label='Redis' technology='redis' />
                            <Tag label='Docker' technology='docker' />
                            <Tag label='Nest.js' technology='nest' />
                        </div>
                    </div>
                </div>
            </div>

        </Section>
    )
} 