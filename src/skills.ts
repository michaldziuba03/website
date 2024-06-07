const iconsMappings: Record<string, string> = {
  "JavaScript": "logos:javascript",
  "TypeScript": "logos:typescript-icon",
  "Node.js": "logos:nodejs-icon-alt",
  "NestJS": "logos:nestjs",
  "React.js": "logos:react",
  "Next.js": "logos:nextjs-icon",
  "TailwindCSS": "logos:tailwindcss-icon",
  "Docker": "logos:docker-icon",
  "PostgreSQL": "logos:postgresql",
  "MongoDB": "logos:mongodb-icon",
  "Redis": "logos:redis",
  "Git": "logos:git-icon",
  "C": "logos:c",
  "C++": "logos:c-plusplus",
  "Linux": "logos:linux-tux",
}

export const skills = Object.keys(iconsMappings);

export function mapIcon(skill: string): string {
  return iconsMappings[skill] || ""; // TODO: add fallback icon
}
