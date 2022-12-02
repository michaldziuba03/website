import React, { FC } from 'react';
import { ReactIcon } from "./ReactIcon";
import { GraphqlIcon } from "./GraphqlIcon";
import { DockerIcon } from "../technologies/DockerIcon";
import { GitIcon } from "./GitIcon";
import { JavascriptIcon } from "./JavascriptIcon";
import { MongoIcon } from "./MongoIcon";
import { NestIcon } from "./NestIcon";
import { NginxIcon } from "./NginxIcon";
import { NodeIcon } from "./NodeIcon";
import { PostgresIcon } from "./PostgresIcon";
import { RedisIcon } from "./RedisIcon";
import { TypescriptIcon } from "../technologies/TypescriptIcon";
import { Technologies } from '../../types';

export interface TechIconProps {
    technology: Technologies;
}

export const TechIcon: FC<TechIconProps> = ({ technology }) => {
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
        case 'react':
            return <ReactIcon />
        case 'graphql':
            return <GraphqlIcon />
    }
}