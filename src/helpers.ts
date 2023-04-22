import {Technologies} from "./types";

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase()
        + str.slice(1)
}

export function technologyName(technology: Technologies) {
    switch (technology) {
        case 'typescript':
            return 'TypeScript';
        case 'javascript':
            return 'JavaScript';
        case 'graphql':
            return 'GraphQL';
        case 'postgres':
            return 'PostgreSQL';
        case 'node':
            return 'Node.js';
        case 'mongo':
            return 'MongoDB';
        case 'nest':
            return 'NestJS';
        case 'tailwind':
            return 'TailwindCSS';
        default:
            return capitalize(technology);
    }
}
