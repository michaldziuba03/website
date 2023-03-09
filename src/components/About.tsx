import React from "react";
import { Container } from "./Container";
import {Paragraph} from "./Paragraph";
import {StaticImage} from "gatsby-plugin-image";
import {H1, H2} from "./Heading";
import {Skills} from "./Skills";

export const About: React.FC = () => (
    <section className='mt-20'>
        <Container>
            <div className='flex justify-between items-center gap-20'>
                <div>
                    <div>
                        <H1>About</H1>
                        <Paragraph>
                            I’m 19 years old from Poland. I started with programming in 2018. I’m intested in backend development, operating systems (like Linux) and open-source-software movement. Besides programming I also like video games, history and dogs.
                        </Paragraph>
                    </div>
                    <div className='mt-20'>
                        <H2>Tech stack</H2>
                        <Paragraph>Some technologies I use on daily basis.</Paragraph>
                    </div>
                </div>
                <div>
                    <StaticImage
                        className='about-img rounded-full'
                        src='../images/aboutme.jpg'
                        alt='my face'
                        loading='eager'
                    />
                </div>
            </div>

            <Skills />
        </Container>
    </section>
);
