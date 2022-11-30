import React from 'react';
import { SolidButton } from '../../components/buttons';
import { Icon } from '../../components/icons/Icon';
import { Section } from '../../components/section/Section';
import { Description, SectionH1 } from '../../components/typography';
import './Contact.scss';

export const Contact: React.FC = () => {
    return (
    <Section>
        <SectionH1>Contact</SectionH1>
        <Description>Feel free to to contact me any time, my inbox is always open.</Description>
        <div className='contact'>
            <form action="https://formsubmit.co/mail@michaldziuba.dev" method="POST">
                <label>
                    Email
                    <input type='email' name="email" required />
                </label>
                    
                <label>
                    Name
                    <input type='text' name="name" required />
                </label>
                    
                <label>
                    Message
                    <textarea name="message" required />
                </label>

                <SolidButton type='submit'>Send</SolidButton>
            </form>

            <div className='contact__alternatives'>
                    <a className='contact__alternative' href="mailto:mail@michaldziuba.dev">
                        <Icon name='email' />
                        mail@michaldziuba.dev
                    </a>
                    <a className='contact__alternative' href='https://github.com/mchldziuba'>
                        <Icon name='github' />
                        GitHub
                    </a>
                    <a className='contact__alternative' href='https://www.facebook.com/michaldziuba03'>
                        <Icon name='facebook' />
                        Facebook
                    </a>
                    <a className='contact__alternative' href='https://www.linkedin.com/in/micha%C5%82-dziuba-74b29a244/'>
                        <Icon name='linkedin' /> 
                        LinkedIn
                    </a>
                </div>
        </div>
    </Section>
    )
}