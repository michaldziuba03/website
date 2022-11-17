import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Landing } from "../components/landing/Landing"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Landing />
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Michał Dziuba ✌️</title>
