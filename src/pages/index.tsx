import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Main } from "../components/main/Main";
import { About } from "../components/about/About";
import { Projects } from "../components/projects/Projects";
import { Footer } from "../components/footer/Footer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Main />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Michał Dziuba ✌️</title>
