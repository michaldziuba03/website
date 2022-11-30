import React, { FC } from 'react';
import { Technologies } from '../../types';
import { TechIcon } from '../technologies';
import './Skills.scss';
import { skills } from '../../../content/about.json';

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
        { 
            skills.map(skill => <Skill technology={skill.technology as Technologies} label={skill.label} />) 
        }
    </div>
    )
}