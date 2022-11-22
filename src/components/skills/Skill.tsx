import React, { FC } from "react";
import { TechIcon, Technologies } from "../technologies";

import './Skill.scss';

export interface SkillProps {
    technology: Technologies;
    label: string;
}

export const Skill: FC<SkillProps> = ({ technology, label }) => {
    return (
        <div className="skill">
            <TechIcon technology={technology} />
            <span className="skill__label">{label}</span>
        </div>
    )   
}

export const Tag: FC<SkillProps> = ({ technology, label }) => {
    return (
        <div className="tag">
            <TechIcon technology={technology} />
            <span className="tag__label">{label}</span>
        </div>
    )
}
