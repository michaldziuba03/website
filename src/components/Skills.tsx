import React from "react";
import {TechIcon} from "./technologies";
import { Technologies } from "../types";
import { technologyName } from "../helpers";
import {person} from "../config";

interface SkillProps {
    technology: Technologies;
}

const Skill: React.FC<SkillProps> = ({ technology }) => (
    <div className='bg-body-dark p-4 md:py-6 flex flex-col gap-2 md:gap-3 justify-center items-center rounded'>
        <div className='text-4xl md:text-6xl hover:scale-90 transition-transform'>
            <TechIcon technology={technology} />
        </div>
        <span className='text-xs font-medium text-paragraph md:text-base'>{technologyName(technology)}</span>
    </div>
)

export const Skills: React.FC = () => {
    return (
        <div className='py-5 grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5 2xl:grid-cols-7'>
            { person.skills.map(skill => <Skill key={skill} technology={skill} />) }
        </div>
    );
}
