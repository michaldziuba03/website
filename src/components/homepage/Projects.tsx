import React from "react";
import { H1, H2 } from "../shared/Heading";
import { Paragraph } from "../shared/Paragraph";
import { Tag } from "../blog/Tag";
import { Section, SectionProps } from "./Section";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { useProjectsQuery } from "../../hooks/useProjectsQuery";
import { Technologies } from "../../types";
import { LibraryCard } from "./LibraryCard";
import { useLibsQuery } from "../../hooks/useLibsQuery";
import { DeviceMock } from "./DeviceMock";

interface ProjectProps {
    name: string;
    description: string;
    link: string;
    tags: Technologies[];
    images: any[];
}

interface ProjectImageProps {
    image: any;
    alt: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ image, alt }) => {
    const imageData = getImage(image);
    if (!imageData) {
        return (
            <StaticImage
                className='rounded w-full h-full'
                width={600}
                src='../../images/default.png' alt={alt}
            />
        );
    }

    return (
        <GatsbyImage
            className='rounded w-full h-full'
            image={imageData}
            alt={alt}
        />
    )
}

const Project: React.FC<ProjectProps> = ({ name, description, link, tags, images }) => (
    <div className='w-full flex flex-col-reverse lg:flex-row gap-6 lg:gap-16 items-center lg:even:flex-row-reverse'>
        <div className='flex flex-col lg:flex-1'>
            <span className='text-primary font-semibold select-none'>Featured project</span>
            <a href={link} className='font-bold text-2xl hover:text-primary inline-block'>{ name }</a>
            <p className='mt-4 md:text-lg'> { description } </p>

            <div className='flex flex-wrap gap-2 mt-4 md:mt-8'>
                { tags.map(tag => <Tag key={tag} technology={tag} />) }
            </div>
        </div>
        <div className='flex w-full max-w-[570px]'>
            <div className="w-full">
                <DeviceMock>
                    <ProjectImage image={images[0]} alt="project" />
                </DeviceMock>
            </div>
        </div>
    </div>
)

export const Projects: React.FC<SectionProps> = (props) => {
    const projects = useProjectsQuery();
    const libs = useLibsQuery();

    return (
        <Section {...props}>
            <H1>Projects</H1>
            <Paragraph>Applications I wrote as side projects.</Paragraph>

            <div className='flex flex-col gap-20 mt-5'>
                {
                    projects.map((project: any) => <Project
                        name={project.name}
                        images={project.images}
                        description={project.body}
                        link={project.link}
                        tags={project.tags}
                        key={project.name}
                    />)
                }
            </div>

            <div className='mt-16'>
                <H2>Libraries</H2>
                <Paragraph>Libraries and other noteworthy smaller projects.</Paragraph>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:max-2xl:gap-3 gap-10 mt-5'>
                    { libs.map((lib: any) => <LibraryCard
                        name={lib.name}
                        link={lib.link}
                        icon={lib.icon}
                        description={lib.body} />)
                    }
                </div>
            </div>
        </Section>
    );
}
