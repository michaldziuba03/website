import React from 'react';
import { Project } from './Project';
import './Projects.scss';

export const Projects = () => {
    return (
        <div className='projects'>
            <h1 className='projects__headline'>Projects</h1>

            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    )
}