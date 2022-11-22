import React, { FC } from 'react';
import { SolidButton } from '../../components/buttons';
import { SectionH1 } from '../../components/typography';
import './Contact.scss';

export const Contact: FC = () => {
    return (
        <div className='contact'>
            <SectionH1>Contact</SectionH1>
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
                    <textarea name="message" required  />
                </label>

                <SolidButton type='submit'>Send</SolidButton>
            </form>
        </div>
    )
}