import React, { PropsWithChildren } from "react"
import { Container } from "../container/Container";
import './Section.scss';

export const Section: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="section">
        <Container>
            { children }
        </Container>
    </section>
  )
}

