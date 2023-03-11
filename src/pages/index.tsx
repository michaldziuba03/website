import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {Header} from "../components/Header";
import {Hero} from "../components/sections/Hero";
import {Footer} from "../components/Footer";
import {About} from "../components/sections/About";
import {Contact} from "../components/sections/Contact";
import {BaseSEO} from "../components/seo/BaseSEO";
import {FixedNav} from "../components/FixedNav";
import {Projects} from "../components/sections/Projects";
import {Featured} from "../components/sections/Featured";

/*
              <About name={sections[1]} />
              <Projects name={sections[2]} />
              <Featured name={sections[3]} />
              <Contact name={sections[4]} />
 */

const IndexPage: React.FC<PageProps> = () => {
    const sections = [
        'hero',
        'about',
        'projects',
        'featured',
        'contact',
    ];

    return (
      <>
          <Header />
          <FixedNav sections={sections} />
          <main className='min-h-screen'>
              <Hero name={sections[0]} />
          </main>
          <Footer />
      </>
    )
}

export default IndexPage

export const Head: HeadFC = () => <BaseSEO title='Michał Dziuba' description='Personal website' />
