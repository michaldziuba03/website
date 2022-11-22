import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import '../styles/404.scss';
import {  SolidButton } from "../components/buttons";
import { Logo } from "../components/logo/Logo";
import { Socials } from "../components/socials/Socials";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="notfound">
      <Logo />
      <span className="notfound__description">OOPS! PAGE NOT FOUND</span>
      <span className="notfound__status">404</span>
      <div className="notfound__button">
        <SolidButton variant="dark" link="/">Back to home</SolidButton>
      </div>

      <Socials className="notfound__links"/>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found 😕</title>
