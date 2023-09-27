import React from "react";
import { H1 } from "../shared/Heading";
import { Paragraph } from "../shared/Paragraph";
import { Input } from "../shared/Input";
import { Button } from "../shared/Button";
import { Section, SectionProps } from "./Section";
import { person } from "../../config";

export const Contact: React.FC<SectionProps> = (props) => (
    <Section {...props}>
        <H1>Contact</H1>
        <Paragraph>Feel free to to contact me any time. My inbox is always open.</Paragraph>

        <div className='grid py-10 grid-cols-1 md:grid-cols-2'>
            <form className='grid grid-cols-1 gap-8'
                  action={`https://formsubmit.co/${person.email}`}
                  method='POST'
            >
                <Input placeholder="johndoe@example.com" required name='email' label='Email' type='email' />
                <Input placeholder="John Doe" required name='name' label='Name' />
                <Input required name='message' label='Message' type='textarea' />

                <div>
                    <Button variant='primary'>Send message</Button>
                </div>
            </form>
        </div>
        <div>

        </div>
    </Section>
);
