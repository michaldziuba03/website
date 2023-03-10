import React from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { StaticImage } from "gatsby-plugin-image";
import { Dots } from "./Dots";
import { Socials } from "./Socials";
import {ArrowIcon} from "./icons/ArrowIcon";

export const Hero: React.FC = () => (
    <section className='mt-20'>
        <Container>
            <div className='grid grid-cols-2'>
                <div className='mt-16'>
                    <h1 className='heading fadein text-7xl leading-tight'>Hello world.</h1>
                    <h1 className='heading fadein text-7xl leading-tight'>My name is</h1>
                    <h1 className='heading fadein text-7xl leading-tight'>
                        <span className='text-primary dark:text-primary-dark'>Michał</span>.
                    </h1>
                    <p className='text-xl mb-6 font-medium'>I am aspiring backend developer.</p>
                    <Button>Check projects <ArrowIcon /></Button>
                    <Socials className='mt-28' />
                </div>
                <div className='flex'>
                    <Dots className='text-primary dark:text-primary-dark w-20 h-70' />
                    <StaticImage
                        className='hero-img w-5/6 h-5/6 border shadow-primary'
                        src='../images/me.jpg'
                        alt='my face'
                        loading='eager'
                    />
                    <Dots className='text-primary dark:text-primary-dark w-20 h-70' />
                </div>
            </div>
        </Container>
    </section>
);
