import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Hero } from "../sections/hero/Hero"
import { Header } from "../components/header/Header"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Michał Dziuba ✌️</title>
