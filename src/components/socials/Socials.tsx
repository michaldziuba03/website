import React, { FC } from 'react'
import './Socials.scss';
import { Icon } from "../../icons/Icon";

interface SocialsProps {
    className?: string;
}

export const Socials: FC<SocialsProps> = ({ className }) => {
    const classes = `social-links ${className}`

    return (
    <div className={classes}>
        <a href='https://github.com/mchldziuba' target="_blank">
            <Icon name="github" size="48"/>
        </a>
        
        <a href='https://www.facebook.com/profile.php?id=100048691100562' target="_blank">
            <Icon name="facebook" size="48"/>
        </a>
        
        <a href='https://www.linkedin.com/in/micha%C5%82-dziuba-74b29a244/' target="_blank">
            <Icon name="linkedin" size="48"/>
        </a>
    
        <a href='https://dev.to/michaldziuba' target="_blank">
            <Icon name="dev" size="48"/>
        </a>
    </div>
  )
}
