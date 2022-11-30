import React, { FC } from 'react';
import { Technologies } from '../../types';
import { TechIcon } from '../technologies';
import './Skills.scss';

interface SkillProps {
    technology: Technologies;
    label: string;
}
export const Skill: FC<SkillProps> = ({ technology, label }) => (
    <div className='skill'>
        <TechIcon technology={technology} />
        <span>{label}</span>
    </div>
)

export const Skills: FC = () => {
    return (
    <div className='skills'>
        <Skill technology='typescript' label='TypeScript' />
        <Skill technology='javascript' label='JavaScript' />
        <Skill technology='node' label='Node.js' />
        <Skill technology='nest' label='Nest.js' />
        <Skill technology='graphql' label='GraphQL' />
        <Skill technology='react' label='React.js' />
        <Skill technology='docker' label='Docker' />
        <Skill technology='postgres' label='PostgreSQL' />
        <Skill technology='mongo' label='MongoDB' />
        <Skill technology='redis' label='Redis' />
        <Skill technology='nginx' label='Nginx' />
        <Skill technology='git' label='Git' />
    </div>
    )
}