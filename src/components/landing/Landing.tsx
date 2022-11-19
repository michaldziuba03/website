import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import { GhostButton, SolidButton } from '../buttons';
import { Navbar } from '../navbar/Navbar';
import { Socials } from '../socials/Socials';
import './Landing.scss';

export const Landing = () => {
  return (
    <div className='landing-section'>
        <Navbar />
        <div className='first-panel'></div>
        <StaticImage className='me' alt='me' src='../../images/michal.jpeg' />
        <div className='second-panel'>
            <div className='landing-info'>
                <h1 className='hello'>&lt;HELLO /&gt;</h1>
                <h1 className='main-h1'>I'm <span className='name'>Michał</span></h1>
                <h1>programming enjoyer</h1>

                <div className='buttons-group'>
                  <SolidButton stretched>Check projects</SolidButton>
                  <GhostButton stretched>Contact me</GhostButton>
                </div>
            </div>

            <Socials className='social-links' />
        </div>
    </div>
  )
}
