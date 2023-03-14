import React from "react";
import { H1, H2 } from "../common/Heading";
import { Paragraph } from "../common/Paragraph";
import { Icon } from "../icons/Icon";
import { Tag } from "../Tag";
import { Section, SectionProps } from "./Section";
import { StaticImage } from "gatsby-plugin-image";

interface ProjectProps {
    githubUrl: string;
}

const Project: React.FC<ProjectProps> = ({ githubUrl }) => (
    <div className='w-full flex flex-col md:grid md:grid-cols-9 gap-6 md:gap-16 items-center'>
        <div className='flex md:col-span-4 md:grid md:grid-cols-2 md:gap-3'>
            <a href={githubUrl} className='flex md:col-span-full'>
                <StaticImage
                    className='hover:opacity-70 transition-opacity rounded'
                    src='../../images/screen1.png'
                    alt='screen1'
                />
            </a>

            <a href={githubUrl} className='hidden md:flex rounded'>
                <StaticImage
                    className='hover:opacity-70 transition-opacity rounded'
                    src='../../images/screen3.png'
                    alt='screen1'
                />
            </a>

            <a href={githubUrl} className='inline-block hidden md:flex rounded'>
                <StaticImage
                    className='hover:opacity-70 transition-opacity rounded'
                    src='../../images/screen2.png'
                    alt='screen1'
                />
            </a>
        </div>
        <div className='flex flex-col md:col-span-5'>
            <span className='text-primary font-bold select-none'>Featured project</span>
            <a href={githubUrl} className='heading text-2xl hover:text-primary'>URL Shortener</a>
            <p className='mt-4 md:text-lg'>
                Sed metus est, bibendum vitae lacus nec, imperdiet sagittis lacus. Maecenas molestie dolor dui, ut ullamcorper tortor varius rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras felis ex, congue vitae iaculis eu.
            </p>

            <div className='flex flex-wrap gap-2 mt-4 md:mt-8'>
                <Tag technology='typescript' />
                <Tag technology='node' />
                <Tag technology='nest' />
                <Tag technology='redis' />
                <Tag technology='mongo' />
                <Tag technology='docker' />
                <Tag technology='react' />
                <Tag technology='nginx' />
            </div>
        </div>
    </div>
)

export const Projects: React.FC<SectionProps> = (props) => (
    <Section {...props}>
            <H1>Projects</H1>
            <Paragraph>Applications I wrote as side projects.</Paragraph>

            <div className='flex flex-col gap-20 mt-5'>
                <Project githubUrl='https://github.com/michaldziuba03/url-shortener' />
                <Project githubUrl='https://github.com/michaldziuba03/url-shortener' />
                <Project githubUrl='https://github.com/michaldziuba03/url-shortener' />
            </div>

            <div className='mt-16'>
                <H2>Libraries</H2>
                <Paragraph>Libraries and other noteworthy smaller projects.</Paragraph>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-5'>

                    <div className='flex flex-col justify-between w-full text-body p-7 bg-heading border rounded shadow'>
                        <div>
                            <div className='text-3xl'><Icon name='lock' /></div>
                            <h2 className='font-bold mt-8'>Passport.js social</h2>
                            <p className='mt-3'>Social login providers monorepo for Passport.js with REST API in mind.</p>
                        </div>
                        <a className='flex font-medium rounded w-full mt-16 items-center justify-center py-2 px-5 border border-2 border-body'
                           href='https://github.com/michaldziuba03/passport-social'>
                            Learn more
                        </a>
                    </div>

                    <div className='flex flex-col justify-between w-full text-body p-7 bg-nestjs border rounded shadow'>
                        <div>
                            <div className='text-3xl'><Icon name='database' /></div>
                            <h2 className='font-bold mt-8'>Nest.js connectors</h2>
                            <p className='mt-3'>Database connectors monorepo for NestJS.</p>
                        </div>
                        <a className='flex font-medium rounded w-full mt-16 items-center justify-center py-2 px-5 border border-2 border-body'
                           href='https://github.com/michaldziuba03/nestjs-connectors'>
                            Learn more
                        </a>
                    </div>

                    <div className='flex flex-col justify-between w-full text-body p-7 bg-tor border rounded shadow'>
                        <div>
                            <div className='text-3xl'><Icon name='tor' /></div>
                            <h2 className='font-bold mt-8'>Tor client</h2>
                            <p className='mt-3'>Node.js TOR client written in TypeScript. It is based on my implementation of SOCKS5 protocol.</p>
                        </div>
                        <a className='flex font-medium rounded w-full mt-16 items-center justify-center py-2 px-5 border border-2 border-body'
                           href='https://github.com/michaldziuba03/tor-client'>
                            Learn more
                        </a>
                    </div>

                    <div className='flex flex-col justify-between w-full text-body p-7 bg-peach border rounded shadow'>
                        <div>
                            <div className='text-3xl'><Icon name='websocket' /></div>
                            <h2 className='font-bold mt-8'>Websockets client</h2>
                            <p className='mt-3'>Websockets protocol implementation for server in TypeScript without dependencies.</p>
                        </div>
                        <a className='flex font-medium rounded w-full mt-16 items-center justify-center py-2 px-5 border border-2 border-body'
                           href='https://github.com/michaldziuba03/websockets'>
                            Learn more
                        </a>
                    </div>

                </div>
            </div>
    </Section>
);
