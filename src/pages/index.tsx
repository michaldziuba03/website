import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Main } from "../sections/main/Main";
import { About } from "../sections/about/About";
import { Projects } from "../sections/projects/Projects";
import { Footer } from "../components/footer/Footer";
import { Contact } from "../sections/contact/Contact";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Michał Dziuba ✌️</title>
