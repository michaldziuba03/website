import * as React from "react"
import '../styles/404.scss';
import { HeadFC, PageProps } from "gatsby"
import { Logo } from "../components/logo/Logo";
import { SolidButton } from "../components/buttons";
import { Socials } from "../components/socials/Socials";
import { SEO } from "../components/seo/SEO";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="notfound">
      <Logo />
      <div></div>

      <div className="notfound__info">
        <span className="notfound__description">OOPS! PAGE NOT FOUND</span>
        <span className="notfound__status">404</span>
        <div className="notfound__button">
          <SolidButton variant="dark" link="/">Back to home</SolidButton>
        </div>
      </div>

      <Socials className="notfound__links"/>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <SEO
  title="Not found 😕"
  description="OOPS! Page not found"
  pathname='/404'
/>
