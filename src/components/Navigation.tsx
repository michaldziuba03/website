import { Container } from "./Container";

export function Navigation() {
  return (
    <Container
      as="nav"
      className="flex p-8 w-full items-center justify-between"
    >
      <span className="font-black text-xl">MD_</span>

      <span className="flex items-center justify-between gap-8 font-medium">
        <a href="/">Home</a>
        <a href="/resume.pdf">Resume</a>
        <a href="/blog">Blog</a>
      </span>
      <div>ss</div>
    </Container>
  );
}
