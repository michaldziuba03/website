import React from 'react';
import { SectionProps } from "./Section";
import { Container } from "../shared/Container";
import { Button } from "../shared/Button";
import {ArrowIcon} from "../icons/ArrowIcon";
import {StaticImage} from "gatsby-plugin-image";
import {Dots} from "./Dots";
import {LargeH} from "../shared/Heading";
import {Socials} from "../shared/Socials";
import { person } from "../../config";

export const Hero: React.FC<SectionProps> = (props) => {
    return (
        <section id={props.name} className='min-h-screen relative flex items-center justify-center pt-24'>
            <Container className='md:grid md:grid-cols-2 xl:py-6 xl:gap-10'>
                <div className='mt-8 md:mt-16'>
                    <LargeH>Hello world.</LargeH>
                    <LargeH>My name is</LargeH>
                    <LargeH><span className='text-primary dark:text-primary-dark'>{ person.firstName }</span>.</LargeH>
                    <p className='lg:text-xl mb-6 font-medium'> I'm { person.role }.</p>
                    <div className='inline-block'>
                        <Button href='#projects' variant='primary'>Check projects <ArrowIcon /></Button>
                    </div>
                    <Socials className='mt-28' />
                </div>
                <div className='hidden md:flex'>
                    <Dots className='hidden lg:block text-primary dark:text-primary-dark md:w-20 md:h-70' />
                    <StaticImage
                        className='hero-img mb-8 w-64 h-64 md:w-5/6 md:h-5/6 md:m-0  shadow-primary'
                        src='../../images/me.jpg'
                        alt='my face'
                    />
                    <Dots className='hidden lg:block text-primary dark:text-primary-dark w-20 h-70' />
                </div>
            </Container>
        </section>
    )
}
