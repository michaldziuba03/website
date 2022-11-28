import * as React from "react"
import '../styles/404.scss';
import { HeadFC, PageProps } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
     <h1>404</h1>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found 😕</title>
