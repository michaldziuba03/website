import '../styles/landing.css';
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { PersonJsonLd } from "../components/seo/PersonJsonLd";
import { Hero } from "../components/homepage/Hero";
import { Header } from "../components/shared/Header";
import { SectionIndicator } from "../components/homepage/SectionIndicator";
import { Footer } from "../components/shared/Footer";
import { About } from "../components/homepage/About";
import { Projects } from "../components/homepage/Projects";
import { Contact } from "../components/homepage/Contact";
import {Featured} from "../components/homepage/Featured";
import { SEO } from "../components/seo/SEO";
import {person} from "../config";

const IndexPage: React.FC<PageProps> = () => {
    const sections = [
        'home',
        'about',
        'projects',
        'featured',
        'contact',
    ];

    return (
      <>
          <Header />
          <main>
              <Hero name={sections[0]} />
              <About name={sections[1]} />
              <Projects name={sections[2]} />
              <Featured name={sections[3]} />
              <Contact name={sections[4]} />
          </main>
          <Footer />
          <SectionIndicator sections={sections} />
      </>
    )
}

export default IndexPage

export const Head: HeadFC = () => (
    <>
        <SEO title='Michał Dziuba' description={person.description} />
        <PersonJsonLd />
    </>
)
