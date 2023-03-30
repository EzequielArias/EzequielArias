import React, { useRef, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
    const navRef = useRef()
    const [btn,setBtn] = useState(false)
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
        setBtn(!btn)
    }

  return (
    <>
    <div className='Navbar-container_links' ref={navRef}>
          <a>Home</a>
          <a>Sobre mi</a>
          <a>Proyectos</a>
          <a>Contacto</a>
    </div>
    <div className='btn-container'>
    <button 
          className='nav-btn'
          onClick={showNavbar}>
            {btn ?  <FaTimes/> : <FaBars/>}
        </button>
    </div>
    </>
)
}

export default Navbar