import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Skill } from '../skills/Skill';
import './About.scss';

export const About = () => {
    return (
        <div className='about'>
            <StaticImage 
                className='about__me' 
                alt='me'
                src='../../images/cooler-michal.jpg'
            />
            <div className='about__details'>
                <h1 className='about__headline'>About</h1>
                <p className='about__description'>My name is Michał and I’m 19 years old from Poland. I started with programming in 2018. I’m intested in web development, operating systems (like Linux) and open-source-software movement. Besides programming I also like video games, history and dogs.</p>

                <h1 className='about__headline2'>Tech stack</h1>
                <div className='about__skills'>
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
            </div>
        </div>
    )
}