import React from 'react'

import { People, Ai } from '../../assets'
import './header.css'

const Header = () => {
  return (
    <div className='gpt3_header section_padding' id='home'>
      <div className='gpt3_header_content'>
        <h1 className='gradient_text'>
          Let's build something amazing with GPT-3 OpenAI
        </h1>

        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className='gpt3_header_content_input'>
          <input type='email' placeholder='Your email address' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3_header_content_people'>
          <img src={People} alt='People that we have a contact' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3_header_image'>
        <img src={Ai} alt='AI' />
      </div>
    </div>
  )
}

export default Header
