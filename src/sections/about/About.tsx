import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Stack } from '../../components/stack/Stack';
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
                <Stack />
            </div>
        </div>
    )
}