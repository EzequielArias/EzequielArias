import React from 'react'
import Nav from './components/Navbar/nav'
import Footer from './components/Footer/footer'
import Rout from './components/rout'
import { BrowserRouter} from 'react-router-dom'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Rout/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App