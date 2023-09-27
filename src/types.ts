import type { GatsbyConfig as BaseGatsbyConfig } from "gatsby";
import {PropsWithChildren} from "react";

export type SocialNames = 'twitter' | 'linkedin' | 'youtube' | 'github' | 'facebook';

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
    | 'kafka'
    | 'tailwind'
    | 'nx';

export interface PropsWitchClassName {
    className?: string;
}

export type PropsWithChildrenAndClass = PropsWithChildren & PropsWitchClassName;
