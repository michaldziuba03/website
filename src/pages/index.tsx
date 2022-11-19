import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Main } from "../components/main/Main";
import { About } from "../components/about/About";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Main />
      <About />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Michał Dziuba ✌️</title>
