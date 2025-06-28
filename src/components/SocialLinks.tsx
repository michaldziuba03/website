import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/michaldziuba03",
    icon: SiGithub,
    label: "Visit my GitHub profile"
  },
  {
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/michaldziuba03",
    icon: SiLinkedin,
    label: "Connect with me on LinkedIn"
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/michaldziuba03", 
    icon: SiX,
    label: "Follow me on X"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/michaldziuba03",
    icon: SiInstagram,
    label: "Follow me on Instagram"
  }
];

interface SocialLinksProps {
  className?: string;
  iconSize?: string;
}

export function SocialLinks({ className = "flex gap-6 text-2xl", iconSize = "w-6 h-6" }: SocialLinksProps) {
  return (
    <div className={className}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="hover:text-primary transition-colors"
          >
            <IconComponent className={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
