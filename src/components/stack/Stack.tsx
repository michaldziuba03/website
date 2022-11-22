import React, {FC} from 'react';
import { Skill } from '../skills/Skill';
import './Stack.scss';

export const Stack: FC = () => {
    return (
        <div className='stack'>
            <Skill label='TypeScript' technology='typescript' />
            <Skill label='JavaScript' technology='javascript' />
            <Skill label='Node.js' technology='node' />
            <Skill label='Nest.js' technology='nest' />
            <Skill label='React.js' technology='react' />
            <Skill label='Docker' technology='docker' />
            <Skill label='PostgreSQL' technology='postgres' />
            <Skill label='Redis' technology='redis' />
            <Skill label='MongoDB' technology='mongo' />
            <Skill label='Git' technology='git' />
            <Skill label='Nginx' technology='nginx' />
            <Skill label='Kafka' technology='kafka' />
    </div>
    )
}