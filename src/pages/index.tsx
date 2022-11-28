import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Hero } from "../sections/hero/Hero"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { About } from "../sections/about/About"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Michał Dziuba ✌️</title>
