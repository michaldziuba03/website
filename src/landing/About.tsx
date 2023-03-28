import React from "react";
import { Section, SectionProps } from "./Section";
import {Paragraph} from "../components/Paragraph";
import {H1, H2} from "../components/Heading";
import {StaticImage} from "gatsby-plugin-image";
import {person} from "../config";
import {Skills} from "../components/Skills";

export const About: React.FC<SectionProps> = (props) => {
    return (
        <Section {...props}>
            <div className='flex flex-col-reverse gap-8 md:flex-row md:justify-between md:items-center md:gap-20'>
                <div className='md:pt-10'>
                    <div>
                        <H1>About</H1>
                        <Paragraph>{ person.description }</Paragraph>
                    </div>
                    <div className='mt-20'>
                        <H2>Tech stack</H2>
                        <Paragraph>Some technologies I use on daily basis.</Paragraph>
                    </div>
                </div>
                <div>
                    <StaticImage
                        className='w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 border border-8 border-accent rounded-full'
                        src='../images/aboutme.jpg'
                        alt='my face'
                        loading='eager'
                    />
                </div>
            </div>

            <Skills />
        </Section>
    )
}