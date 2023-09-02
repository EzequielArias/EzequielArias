import React, { useState, useRef } from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneInbound } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './contact.css'
const Contact = () => {

    const formRef = useRef(new FormData())

    const [data, setData] = useState({
        user_name: '', user_email: '', subject:'', message:''
    })
    let Name, Value
    const input = (e) => 
    {
        Name = e.target.name
        Value = e.target.value
        setData({...data, [Name]:Value})

    }
    const senddata = async (e) =>
    {
        emailjs.send('service_8k5bdfy','template_4dewpv7',data,'mt4KvFeldx9VABZUB')
        .then((res) => console.log(res.text))
        .catch((err) => consoe.log(err.text))
    }
  return (
    <>
    <div className='contact'>
        <div className='container'>
            <div className='left_box'>
                <h3>contact info</h3>
                <div className='info'>
                    <div className='box'>
                        <div className='icon'>
                            <HiOutlineMail />
                        </div>
                        <div className='detail'>
                            <h4>mail us</h4>
                            <p>ezequielariasdev@gmail.com</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <BsTelephoneInbound />
                        </div>
                        <div className='detail'>
                            <h4>contact us</h4>
                            <p>+54 9 11 3211-0987</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <FiMapPin />
                        </div>
                        <div className='detail'>
                            <h4>location</h4>
                            <p>Ottawa 734, Tortuguitas, Buenos Aires Province</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <img src='img/icon2.png' alt='icon'></img>
                <h2>Let's work <span>together</span></h2>
                    <div className='form'>
                        <input type='text' name='user_name' value={data.Name} placeholder='Name*' onChange={input}></input> 
                        <input type='text' name='user_email' value={data.Email} placeholder='E-mail*' onChange={input}></input> 
                        <input type='text' name='subject' value={data.Subject} placeholder='Subject*' onChange={input}></input> 
                        <textarea placeholder='Message*' name='message' value={data.Message} onChange={input}></textarea>
                        <input type='submit' name="Send" placeholder="Send" onClick={senddata}/>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact