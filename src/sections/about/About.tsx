import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Triangle } from '../../components/accents/Triangle';
import { Section } from '../../components/section/Section';
import { Skills } from '../../components/skills/Skills';
import './About.scss';
import { description } from '../../../content/about.json';

export const About: React.FC = () => {
    return (
    <Section>
        <div className='about'>
            <Triangle />
            <h1>About</h1>
            <div className='about__info'>
                <StaticImage className='about__photo' alt='me' src='../../images/me.jpeg' />
                <p className='about__description'>
                    { description }
                </p>
            </div>

            <h1 className='about__stack-heading'>Tech stack</h1>
            <Skills />
        </div>
    </Section>
    )
}