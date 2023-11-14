import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
const Nav = () => {
  return (
    <>
    <div className='nav_container'>
        <div className='logo'>
            <h2>EA</h2>
        </div>
        <div className='links'>
            <ul>
                <li>
                    <Link to='/' className='link'>Inicio</Link>
                    <Link to='/about' className='link'>Sobre mi</Link>
                    <Link to='/work' className='link'>Projectos</Link>
                    <Link to='/contact' className='link'>Contactos</Link>
                </li>
            </ul>
        </div>
        <div className='btn'>
            <Link to='/contact' className='btnlink'>Hablemos</Link>
        </div>
    </div>
    </>
  )
}

export default Nav