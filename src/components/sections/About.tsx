import React from "react";
import { Paragraph } from "../common/Paragraph";
import { StaticImage } from "gatsby-plugin-image";
import { H1, H2 } from "../common/Heading";
import { Skills } from "../Skills";
import { Section, SectionProps } from "./Section";

export const About: React.FC<SectionProps> = (props) => (
    <Section {...props}>
            <div className='flex justify-between items-center gap-20'>
                <div className='pt-10'>
                    <div>
                        <H1>About</H1>
                        <Paragraph>
                            I’m 19 years old from Poland. I started with programming in 2018. I’m interested in backend development, operating systems (like Linux) and open-source-software movement. Besides programming I also like video games, history and dogs.
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
                        src='../../images/aboutme.jpg'
                        alt='my face'
                        loading='eager'
                    />
                </div>
            </div>

            <Skills />
    </Section>
);
