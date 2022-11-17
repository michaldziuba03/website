import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import '../styles/404.scss';
import {  SolidButton } from "../components/buttons";
import { Logo } from "../components/logo/Logo";
import { Icon } from "../icons/Icon";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="notfound">
      <Logo />
      <span className="notfound-description">OOPS! PAGE NOT FOUND</span>
      <span className="notfound-status">404</span>
      <SolidButton variant="dark" link="/" stretched>Back to home</SolidButton>

      <div className="links">
        <Icon name="github" size="48"/>
        <Icon name="facebook" size="48"/>
        <Icon name="linkedin" size="48"/>
        <Icon name="dev" size="48"/>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found 😕</title>
