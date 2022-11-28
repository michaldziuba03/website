import { StaticImage } from 'gatsby-plugin-image';
import React, { FC } from 'react';
import { Dots } from '../../components/accents/Dots';
import { SolidButton } from '../../components/buttons';
import { Section } from '../../components/section/Section';
import { Socials } from '../../components/socials/Socials';
import { useAuthorQuery } from '../../hooks/useAuthorQuery';
import './Hero.scss';

export const Hero: FC<{}> = () => {
    const author = useAuthorQuery();

    return (
        <Section>
            <div className='hero'>
                <div className='hero__first-panel'>
                    <StaticImage className='hero__me' loading='eager' alt='me' src='../../images/cooler-me.png' />
                </div>

                <div className='hero__second-panel'>
                    <div className='hero__info'>
                        <Dots />
                        <h1>Hello world.</h1>
                        <h1>My name is <span className='hero__name'>{author.firstName}</span>.</h1>
                        <p>I am aspiring backend developer.</p>
                        <SolidButton className='hero__btn'>Check projects</SolidButton>
                    </div>
                    
                    <Socials className='hero__socials' />
                </div>
            </div>
        </Section>
    )
} 
