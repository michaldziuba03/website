import { SiLinkedin, SiInstagram, SiX, SiGithub } from "react-icons/si";
import { Container } from "./Container";

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

      <div className="flex gap-6 text-xl">
        <SiGithub />
        <SiLinkedin />
        <SiX />
        <SiInstagram />
      </div>
    </Container>
  );
}
