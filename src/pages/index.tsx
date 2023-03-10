import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {Header} from "../components/Header";
import {Hero} from "../components/Hero";
import {Footer} from "../components/Footer";
import {About} from "../components/About";
import {Contact} from "../components/Contact";
import {BaseSEO} from "../components/seo/BaseSEO";
import {FixedNav} from "../components/FixedNav";
import {Projects} from "../components/Projects";
import {Featured} from "../components/Featured";

const IndexPage: React.FC<PageProps> = () => {
  return (
      <>
          <Header />
          <FixedNav />
          <main className='min-h-screen'>
              <Hero />
              <About />
              <Projects />
              <Featured />
              <Contact />
          </main>
          <Footer />
      </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <BaseSEO title='Michał Dziuba' description='Personal website' />
