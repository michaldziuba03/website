import React from "react";
import { Container } from "../common/Container";
import { H1 } from "../common/Heading";
import { Paragraph } from "../common/Paragraph";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { Section, SectionProps } from "./Section";

export const Contact: React.FC<SectionProps> = (props) => (
    <Section {...props}>
            <H1>Contact</H1>
            <Paragraph>Feel free to to contact me any time. My inbox is always open.</Paragraph>

            <div className='grid py-10 grid-cols-1 md:grid-cols-2'>
                <form className='grid grid-cols-1 gap-8'
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
            </div>
            <div>

            </div>
    </Section>
);
