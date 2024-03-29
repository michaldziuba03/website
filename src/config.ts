import { SocialNames, Technologies } from './types';

interface Person {
    firstName: string;
    secondName: string;
    role: string;
    description: string;
    shortBio: string;
    skills: Technologies[];
    email: string;
    twitter: string;
    mastodonUrl: string;
}

export const person: Person = {
    firstName: 'Michał',
    secondName: 'Dziuba',
    role: 'Node.js backend developer',
    description:
        'I’m 20 years old from Poland. I started with programming in 2018. I’m interested in backend development, operating systems (like Linux) and open-source-software movement. Besides programming I also like video games, history and dogs.',
    shortBio: 'I started with programming in 2018. I’m interested in backend development, operating systems and open-source-software movement.',
    skills: [
        'typescript', 'javascript', 'node', 'nest', 'react', 'nx', 'graphql',
        'docker', 'postgres', 'mongo', 'redis', 'nginx', 'tailwind', 'git',
    ],
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
];

export const meta = {
    siteName: 'Michał Dziuba',
    url: process.env.GATSBY_SITE_URL || 'https://michaldziuba.dev',
}
