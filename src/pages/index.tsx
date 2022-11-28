import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Socials } from "../components/socials/Socials"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Socials />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Michał Dziuba ✌️</title>
