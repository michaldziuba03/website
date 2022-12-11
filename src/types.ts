export type IconNames = 'linkedin' | 'facebook' | 'github' | 'dev' | 'menu' | 'email' | 'twitter' | 'link' | 'close';
export type Technologies = 'typescript' 
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
| 'preact';

export const technologyLabels = new Map<Technologies, string>();
technologyLabels.set('docker', "Docker");
technologyLabels.set('git', "Git");
technologyLabels.set('graphql', "GraphQL");
technologyLabels.set('javascript', "JavaScript");
technologyLabels.set('mongo', "MongoDB");
technologyLabels.set('nest', "Nest.js");
technologyLabels.set('nginx', "Nginx");
technologyLabels.set('node', "Node.js");
technologyLabels.set('postgres', "PostgreSQL");
technologyLabels.set('react', "React.js");
technologyLabels.set('redis', "Redis");
technologyLabels.set('typescript', "TypeScript");
technologyLabels.set('preact', 'Preact.js')