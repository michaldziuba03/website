import React from "react";
import {TechIcon} from "./technologies";
import { Technologies } from "../types";
import { technologyName } from "../helpers";

interface SkillProps {
    technology: Technologies;
}

const Skill: React.FC<SkillProps> = ({ technology }) => (
    <div className='bg-body-darken p-4 flex flex-col gap-2 justify-center items-center rounded'>
        <div className='text-4xl md:text-7xl hover:scale-90 transition-transform'>
            <TechIcon technology={technology} />
        </div>
        <span className='text-sm md:text-base'>{technologyName(technology)}</span>
    </div>
)

export const Skills: React.FC = () => {
   return (
       <div className='py-5 grid grid-cols-3 gap-3 md:grid-cols-7 md:gap-8'>
           <Skill technology='typescript'></Skill>
           <Skill technology='javascript'></Skill>
           <Skill technology='node'></Skill>
           <Skill technology='nest'></Skill>
           <Skill technology='react'></Skill>
           <Skill technology='docker'></Skill>
           <Skill technology='graphql'></Skill>
           <Skill technology='postgres'></Skill>
           <Skill technology='mongo'></Skill>
           <Skill technology='redis'></Skill>
           <Skill technology='nginx'></Skill>
           <Skill technology='git'></Skill>
           <Skill technology='preact'></Skill>
           <Skill technology='kafka'></Skill>
       </div>
   ); 
}
