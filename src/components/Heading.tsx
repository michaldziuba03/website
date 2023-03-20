import React from "react";
import classNames from "classnames";
import { PropsWithChildrenAndClass } from "../types";

const headingStyles = 'text-heading font-bold leading-normal';

export const H1: React.FC<PropsWithChildrenAndClass> = (props) => {
    const styles = classNames(headingStyles, 'text-3xl md:text-4xl', props.className);
    return (
        <h1 className={styles}> {props.children} </h1>
    );
}

export const H2: React.FC<PropsWithChildrenAndClass> = (props) => {
    const styles = classNames(headingStyles, 'text-2xl md:text-3xl', props.className);
    return (
        <h2 className={styles}> {props.children} </h2>
    );
}

export const H3: React.FC<PropsWithChildrenAndClass> = (props) => {
    const styles = classNames(headingStyles, 'text-xl md:text-2xl', props.className);
    return (
        <h3 className={styles}> {props.children} </h3>
    );
}

export const LargeH: React.FC<PropsWithChildrenAndClass> = (props) => {
    const styles = classNames(headingStyles, 'text-5xl leading-tight xl:text-7xl xl:leading-tight', props.className);
    return (
        <h1 className={styles}> {props.children} </h1>
    )
}
