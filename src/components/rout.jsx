import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/home'
import About from './About/about'
import Work from './Work/work'
import Contact from './Contact/contact'
const Rout = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/work' element={<Work />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    </>
  )
}

export default Rout