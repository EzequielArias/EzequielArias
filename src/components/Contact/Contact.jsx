import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill , BsLinkedin, BsGithub } from 'react-icons/bs'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
        <h2>- Contacto</h2>
        <ul>
            <li><AiOutlineMail/> ezequielariasdev@gmail.com</li>
            <li><BsFillTelephoneFill/> +54 9 11 3211-0987</li>
            <li><BsLinkedin/> <a href='https://www.linkedin.com/in/ezequiel-arias734/' target='_blan
            '>Mi linkedin</a></li>
            <li><BsGithub/> <a href='https://github.com/EzequielArias' target='_blank'>Mi github</a></li>
        </ul>
    </div>
  )
}

export default Contact