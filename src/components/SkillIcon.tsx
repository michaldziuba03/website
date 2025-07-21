import {
  SiRedis,
  SiNestjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiC,
  SiCplusplus,
  SiLinux,
} from "react-icons/si";

const iconsMappings = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  TailwindCSS: SiTailwindcss,
  Docker: SiDocker,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Git: SiGit,
  C: SiC,
  "C++": SiCplusplus,
  Linux: SiLinux,
};

export const skills = Object.keys(iconsMappings) as Skill[];

export type Skill = keyof typeof iconsMappings;

export function SkillIcon({ skill, ...props }: { skill: Skill } & React.ComponentProps<"svg">) {
  const Icon = iconsMappings[skill];
  if (!Icon) return null;
  return <Icon {...props} />;
}
