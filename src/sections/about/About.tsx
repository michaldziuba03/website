import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Stack } from '../../components/stack/Stack';
import './About.scss';
import { SectionH1, SectionH2 } from '../../components/typography';

export const About = () => {
    return (
        <div className='about'>
            <StaticImage 
                className='about__me' 
                alt='me'
                src='../../images/cooler-michal.jpg'
            />
            <div className='about__details'>
                <SectionH1 className='about__headline'>About</SectionH1>
                <p className='about__description'>My name is Michał and I’m 19 years old from Poland. I started with programming in 2018. I’m intested in web development, operating systems (like Linux) and open-source-software movement. Besides programming I also like video games, history and dogs.</p>

                <SectionH2 className='about__headline2'>Tech stack</SectionH2>
                <Stack />
            </div>
        </div>
    )
}