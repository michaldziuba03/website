import { SiRss } from "react-icons/si";
import { Container } from "./Container";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const now = new Date();

  return (
    <Container
      as="footer"
      className="p-8 border-t border-gray-300 flex w-full flex-col justify-between gap-4 sm:flex-row text-slate-700"
    >
      <span className="text-sm">
        © {now.getFullYear()}{" "}
        <span className="font-semibold">Michał Dziuba</span>. All rights
        reserved.
      </span>

      <SocialLinks className="flex gap-6 text-xl" iconSize="w-5 h-5">
        <a href="/rss.xml">
          <SiRss className="w-5 h-5 hover:text-[#f26522]" />
        </a>  
      </SocialLinks>
    </Container>
  );
}
