import { Container } from './Container';
import { Socials } from './landing/Socials';

export function Footer() {
  return (
    <footer className="mx-4 mb-4 px-4 sm:px-6 bg-background-darken/40 rounded-4xl">
      <Container className="py-14">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 border-b border-foreground/10 pb-10">
          <div className="flex flex-col gap-6 max-w-sm">
            <div>
              <a href="/" className="font-bold text-xl">
                mddev_
              </a>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Poland-based software developer and open source contributor building applications for the web.
            </p>
          </div>


          <Socials className="flex gap-5 text-foreground/70" iconSize="w-6 h-6" />
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 mt-6">
          <p className="text-sm text-foreground/50 font-medium">
            &copy; 2022 - {new Date().getFullYear()} Michał Dziuba. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-foreground/50">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <a href="/resume.pdf" className="hover:text-foreground transition-colors">Resume</a>
            <a href="/blog" className="hover:text-foreground transition-colors">Blog</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
