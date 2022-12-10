import { GatsbyImage, getImage, IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Technologies, technologyLabels } from '../../types';
import { Tag } from '../skills/Skills';
import './Project.scss';

interface ProjectProps {
    name: string;
    description: string;
    tags: Technologies[];
    picture: IGatsbyImageData;
}

export const Project: React.FC<ProjectProps> = (props) => {
    const thumbnail = getImage(props.picture);

    return (
            <div className='project'>
                    <GatsbyImage
                        alt='Project picture'
                        className='project__image'
                        image={thumbnail!}
                    />

                    <div className='project__info'>
                        <div className='project__featured'>Featured project</div>
                        <h3 className="project__title">{props.name}</h3>
                        <p className='project__description'>
                        {props.description}
                        </p>

                        <div className='project__tags'>
                            { props.tags.map(tag => (<Tag technology={tag} label={technologyLabels.get(tag)} />)) }
                        </div>
                    </div>
                </div>
    )
}