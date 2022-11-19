import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Main } from "../components/main/Main";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Main />
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Michał Dziuba ✌️</title>
