import React from 'react';
import { Section } from '../../components/section/Section';
import { Description, SectionH1 } from '../../components/typography';
import './Projects.scss';
import { Project } from '../../components/project/Project';
import { Technologies } from '../../types';
import { useProjectsQuery } from '../../hooks/useProjectsQuery';

export const Projects: React.FC = () => {
    const projects = useProjectsQuery();

    return (
        <Section>
            <SectionH1>Projects</SectionH1>
            <Description>Some applications I’ve built</Description>

            <div className='projects'>
                { projects.map((project: any) => <Project 
                    name={project.frontmatter.name}
                    description={project.body}
                    picture={project.frontmatter.featuredImage}
                    tags={project.frontmatter.tags as Technologies[]}
                    link={project.frontmatter.link}
                    key={project.frontmatter.name}
                />) }
            </div>

        </Section>
    )
} 