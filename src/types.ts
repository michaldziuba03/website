import type { GatsbyConfig as BaseGatsbyConfig } from "gatsby";
import {PropsWithChildren} from "react";

export type SocialNames = 'twitter' | 'linkedin' | 'youtube' | 'github';

export type Technologies =
    | 'typescript'
    | 'javascript'
    | 'docker'
    | 'nest'
    | 'node'
    | 'postgres'
    | 'redis'
    | 'mongo'
    | 'git'
    | 'nginx'
    | 'react'
    | 'graphql'
    | 'preact'
    | 'kafka';

export interface MetaDataType {
    title: string;
    siteUrl: string;
    author: {
        firstName: string;
        secondName: string;
        skills: Technologies[];
    }
}

export interface GatsbyConfig extends Omit<BaseGatsbyConfig, 'siteMetadata'> {
    siteMetadata?: MetaDataType;
}

export interface PropsWitchClassName {
    className?: string;
}

export type PropsWithChildrenAndClass = PropsWithChildren & PropsWitchClassName;
