import {SocialNames, Technologies} from "./types";

interface Person {
    firstName: string;
    secondName: string;
    description: string;
    skills: Technologies[];
    gender: 'Male' | 'Female';
    email: string;
    twitter: string;
    mastodonUrl: string;
}

export const person: Person = {
    firstName: 'Michał',
    secondName: 'Dziuba',
    description:
        'I’m 19 years old from Poland. I started with programming in 2018. I’m interested in backend development, operating systems (like Linux) and open-source-software movement. Besides programming I also like video games, history and dogs.',
    skills: [
        'typescript', 'javascript', 'node', 'nest', 'react', 'preact', 'graphql',
        'docker', 'postgres', 'mongo', 'redis', 'nginx', 'kafka', 'git',
    ],
    gender: 'Male',
    email: 'mail@michaldziuba.dev',
    twitter: 'michaldziuba03',
    mastodonUrl: 'https://fosstodon.org/@michaldziuba',
}

interface SocialProfile {
    name: SocialNames,
    url: string;
}

export const socials: SocialProfile[] = [
    {
        name: 'github',
        url: 'https://github.com/michaldziuba03'
    },
    {
        name: 'twitter',
        url: `https://twitter.com/${person.twitter}`
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/michaldziuba03'
    },
    {
        name: 'youtube',
        url: 'https://www.youtube.com/@michaldziuba-dev'
    },
];
