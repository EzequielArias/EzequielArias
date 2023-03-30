import './App.css'
import Start from './components/Start/Start'
import Navbar from './components/NavBar/Navbar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


function App() {

  return (
    <>
    <Navbar/>
    <Start/>
    <hr/>
    <About/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App
