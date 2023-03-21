import '../styles/landing.css';
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { BaseSEO } from "../components/seo/BaseSEO";
import { PersonJsonLd } from "../components/seo/PersonJsonLd";
import { Hero } from "../landing/Hero";
import { Header } from "../components/Header";
import { SectionIndicator } from "../components/SectionIndicator";
import { Footer } from "../components/Footer";
import { About } from "../landing/About";
import { Projects } from "../landing/Projects";
import { Contact } from "../landing/Contact";

const IndexPage: React.FC<PageProps> = () => {
    const sections = [
        'hero',
        'about',
        'projects',
        'contact',
    ];

    return (
      <>
          <Header />
          <main>
              <Hero name={sections[0]} />
              <About name={sections[1]} />
              <Projects name={sections[2]} />
              <Contact name={sections[3]} />
          </main>
          <Footer />
          <SectionIndicator sections={sections} />
      </>
    )
}

export default IndexPage

export const Head: HeadFC = () => (
    <>
        <BaseSEO title='Michał Dziuba' description='Personal website' />
        <PersonJsonLd />
    </>
)
