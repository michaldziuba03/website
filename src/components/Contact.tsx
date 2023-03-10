import React from "react";
import { Container } from "./Container";
import { H1 } from "./Heading";
import { Paragraph } from "./Paragraph";
import { Input } from "./Input";
import { Button } from "./Button";

export const Contact: React.FC = () => (
    <section className='mt-20'>
        <Container>
            <H1>Contact</H1>
            <Paragraph>Feel free to to contact me any time. My inbox is always open.</Paragraph>

            <form className='py-16 grid grid-cols-1 gap-8'
                  action='https://formsubmit.co/mail@michaldziuba.dev'
                  method='POST'
            >
                <Input required name='email' label='Email' type='email' />
                <Input required name='name' label='Name' />
                <Input required name='message' label='Message' type='textarea' />

                <div>
                    <Button>Send message</Button>
                </div>
            </form>
        </Container>
    </section>
);
