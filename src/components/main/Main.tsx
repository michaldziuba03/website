import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import { GhostButton, SolidButton } from '../buttons';
import { Navbar } from '../navbar/Navbar';
import { Socials } from '../socials/Socials';
import './Main.scss';

export const Main = () => {
  return (
    <div className='main'>
        <Navbar />
        <div className='main__first-panel'></div>
        <StaticImage className='main__me' alt='me' src='../../images/michal.jpeg' />
        <div className='main__second-panel'>
            <div className='main__headlines'>
                <h1 className='main__hello'>&lt;HELLO /&gt;</h1>
                <h1 className='main__headline'>I'm <span className='name'>Michał</span></h1>
                <h1>programming enjoyer</h1>

                <div className='buttons-group'>
                  <SolidButton stretched>Check projects</SolidButton>
                  <GhostButton stretched>Contact me</GhostButton>
                </div>
            </div>

            <Socials className='main__links' />
        </div>
    </div>
  )
}
