import { SiGithub, SiLinkedin, SiRss } from 'react-icons/si'

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/michaldziuba03",
        icon: SiLinkedin,
        label: "Connect with me on LinkedIn"
    },
    {
        name: "GitHub",
        url: "https://github.com/michaldziuba03",
        icon: SiGithub,
        label: "Visit my GitHub profile"
    },
    {
        name: "RSS",
        url: "/rss.xml",
        icon: SiRss,
        label: "Subscribe to my RSS feed",
    }
];

interface SocialsProps {
    className?: string;
    iconSize?: string;
    children?: React.ReactNode;
}

export function Socials({ className = "flex gap-5 text-2xl", iconSize = "w-6 h-6", children }: SocialsProps) {
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
            {children}
        </div>
    );
}
