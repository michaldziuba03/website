import React from "react";
import { Button } from "../common/Button";
import { StaticImage } from "gatsby-plugin-image";
import { Dots } from "../Dots";
import { Socials } from "../Socials";
import { ArrowIcon } from "../icons/ArrowIcon";
import { SectionProps } from "./Section";
import {Container} from "../common/Container";

export const Hero: React.FC<SectionProps> = (props) => {
    function handleCallToAction() {
        const projectsEl = document.getElementById('projects');
        if (projectsEl) {
            projectsEl.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section id={props.name} className='min-h-screen flex items-center justify-center pt-24'>
            <Container>
            <div className='md:grid md:grid-cols-2'>
                <div className='mt-8 md:mt-16'>
                    <h1 className='heading fadein text-5xl leading-tight xl:text-7xl xl:leading-tight'>Hello world.</h1>
                    <h1 className='heading fadein text-5xl leading-tight xl:text-7xl xl:leading-tight'>My name is</h1>
                    <h1 className='heading fadein text-5xl leading-tight xl:text-7xl xl:leading-tight'>
                        <span className='text-primary dark:text-primary-dark'>Michał</span>.
                    </h1>
                    <p className='lg:text-xl mb-6 font-medium'>I am aspiring backend developer.</p>
                    <Button onClick={handleCallToAction}>Check projects <ArrowIcon /></Button>
                    <Socials className='mt-28' />
                </div>
                <div className='hidden md:flex'>
                    <Dots className='hidden md:block text-primary dark:text-primary-dark md:w-20 md:h-70' />
                    <StaticImage
                        className='hero-img mb-8 w-64 h-64 md:w-5/6 md:h-5/6 md:m-0 border shadow-primary'
                        src='../../images/me.jpg'
                        alt='my face'
                        loading='eager'
                    />
                    <Dots className='hidden md:block text-primary dark:text-primary-dark w-20 h-70' />
                </div>
            </div>
            </Container>
        </section>
    );
}
