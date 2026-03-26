import {
  SiRedis,
  SiNestjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiC,
  SiCplusplus,
  SiLinux,
} from "react-icons/si";
import type { IconType } from "react-icons";

const skills: { label: string; Icon: IconType }[] = [
  { label: "JavaScript", Icon: SiJavascript },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "Node.js", Icon: SiNodedotjs },
  { label: "NestJS", Icon: SiNestjs },
  { label: "React.js", Icon: SiReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "MongoDB", Icon: SiMongodb },
  { label: "Redis", Icon: SiRedis },
  { label: "Docker", Icon: SiDocker },
  { label: "Linux", Icon: SiLinux },
  { label: "C", Icon: SiC },
  { label: "C++", Icon: SiCplusplus },
];

export function TechStack() {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map(({ label, Icon }) => (
        <div
          key={label}
          className="flex items-center gap-2 px-2.5 py-2.5 rounded-md bg-background-darken
                     font-semibold transition-opacity duration-150"
        >
          <Icon className="w-4 h-4 shrink-0" />
          <span className="text-xs">{label}</span>
        </div>
      ))}
    </div>
  );
}
