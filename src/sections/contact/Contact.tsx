import React, { FC } from 'react';
import { SolidButton } from '../../components/buttons';
import { Icon } from '../../components/icons/Icon';
import { SectionH1, SectionH2 } from '../../components/typography';
import './Contact.scss';

export const Contact: FC = () => {
    return (
        <div className='contact'>
            <SectionH1 className='contact__headline'>Contact</SectionH1>
            <div className='contact__form-container'>
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
                    <SectionH2>Or get in touch another way...</SectionH2>
                    <a className='contact__alternative' href="mailto:mail@michaldziuba.dev">
                        <Icon name='email' size='32' />
                        mail@michaldziuba.dev
                    </a>
                    <a className='contact__alternative' href='https://github.com/mchldziuba'>
                        <Icon name='github' size='32' />
                        GitHub
                    </a>
                    <a className='contact__alternative' href='https://www.facebook.com/michaldziuba03'>
                        <Icon name='facebook' size='32' />
                        Facebook
                    </a>
                    <a className='contact__alternative' href='https://www.linkedin.com/in/micha%C5%82-dziuba-74b29a244/'>
                        <Icon name='linkedin' size='32' /> 
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}