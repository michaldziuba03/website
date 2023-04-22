import React, { PropsWithChildren } from "react";
import { Container } from "../Container";

export interface SectionProps extends PropsWithChildren {
    name?: string;
}

export const Section: React.FC<SectionProps> = ({ children, name }) => {
    return (
        <section id={name} className='py-8 md:py-16'>
            <Container>
                {children}
            </Container>
        </section>
    );
};
