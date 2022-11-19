import React, { FC } from "react";
import { DockerIcon } from "./DockerIcon";
import { GitIcon } from "./GitIcon";
import { JavascriptIcon } from "./JavascriptIcon";
import { MongoIcon } from "./MongoIcon";
import { NestIcon } from "./NestIcon";
import { NginxIcon } from "./NginxIcon";
import { NodeIcon } from "./NodeIcon";
import { PostgresIcon } from "./PostgresIcon";
import { RedisIcon } from "./RedisIcon";
import { TypescriptIcon } from "./TypescriptIcon";
import './Skill.scss';

type Technologies = 'typescript' | 'javascript' | 'docker' | 'nest' | 'node' | 'postgres' | 'redis' | 'mongo' | 'git' | 'nginx';

export interface SkillIconProps {
    technology: Technologies;
}

export const SkillIcon: FC<SkillIconProps> = ({ technology }) => {
    switch (technology) {
        case 'typescript':
            return <TypescriptIcon />
        case 'javascript':
            return <JavascriptIcon />
        case 'docker':
            return <DockerIcon />
        case 'nest':
            return <NestIcon />
        case 'node':
            return <NodeIcon />
        case 'postgres':
            return <PostgresIcon />
        case 'redis':
            return <RedisIcon />
        case 'mongo':
            return <MongoIcon />
        case 'git':
            return <GitIcon />
        case 'nginx':
            return <NginxIcon />
    }
}

export interface SkillProps {
    technology: Technologies;
    label: string;
}

export const Skill: FC<SkillProps> = ({ technology, label }) => {
    return (
        <div className="skill">
            <SkillIcon technology={technology} />
            <span className="skill__label">{label}</span>
        </div>
    )   
}