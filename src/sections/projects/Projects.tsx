import React from 'react';
import { SectionH1 } from '../../components/typography';
import { Project } from './Project';
import './Projects.scss';

export const Projects = () => {
    return (
        <div className='projects'>
            <SectionH1 className='projects__headline'>Projects</SectionH1>

            <Project />
            <Project />
            <Project />
        </div>
    )
}