import React from "react";
import { Container } from "./Container";
import { H1 } from "./Heading";
import { Paragraph } from "./Paragraph";

export const Featured: React.FC = () => (
    <section className='mt-20'>
        <Container>
            <H1>Featured</H1>
            <Paragraph>Check out my YouTube videos and blog posts.</Paragraph>

            <div className='mt-5 grid grid-cols-3 gap-8'>
                <div className='animate-pulse w-full h-72 bg-gray-400 rounded'></div>
                <div className='animate-pulse w-full h-72 bg-gray-400 rounded'></div>
                <div className='animate-pulse w-full h-72 bg-gray-400 rounded'></div>
            </div>
        </Container>
    </section>
);
