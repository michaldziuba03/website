import React from "react";
import { H1 } from "../common/Heading";
import { Paragraph } from "../common/Paragraph";
import { Section, SectionProps } from "./Section";

export const Featured: React.FC<SectionProps> = (props) => (
    <Section {...props}>
            <H1>Featured</H1>
            <Paragraph>Check out my YouTube videos and blog posts.</Paragraph>

            <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='animate-pulse w-full h-72 bg-gray-400 rounded'></div>
                <div className='animate-pulse w-full h-72 bg-gray-400 rounded'></div>
                <div className='animate-pulse w-full h-72 bg-gray-400 rounded'></div>
            </div>
    </Section>
);
