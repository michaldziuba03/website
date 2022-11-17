import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import { GhostButton, SolidButton } from '../buttons';
import { Socials } from '../socials/Socials';
import './Landing.scss';

export const Landing = () => {
  return (
    <section className='landing-section'>
        <div className='first-panel'></div>
        <StaticImage className='me' alt='me' src='../../images/michal.jpeg' />
        <div className='second-panel'>
            <div className='landing-info'>
                <h1 className='hello'>&lt;HELLO/&gt;</h1>
                <h1 className='main-h1'>I'm <span className='name'>Michał</span></h1>
                <h1>programming enjoyer</h1>

                <SolidButton stretched>Check projects</SolidButton>
                <GhostButton stretched>Contact me</GhostButton>
            </div>

            <Socials className='social-links' />
        </div>
    </section>
  )
}
