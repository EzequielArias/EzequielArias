import React from 'react'
import Default from '../../assets/default.jpg'
import { BiRightArrow } from 'react-icons/bi'
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
        <h2>- Sobre mi</h2>
        <div className='about-section'>
        <p>Hola, mi nombre es Ezequiel Arias. Soy un apasionado por la programacion y el "Ethical Hacking".
           A finales del 2021 empecé a estudiar de manera autodidacta, e investigar sobre el infinito mundo de la tecnología
           en diciembre del 2022 me inscribi a un BootCamp para consolidar mis conocimientos y poder conseguir mi primer trabajo IT 
           aplicando las mejores practicas para devolver un codigo de la mejor calidad.
        </p>
        <img src={Default} alt=''/>
        </div>
        <p>Estan son las tecnologias que utilizo actualmente.</p>
        <ul className='technologies'>
            <li><BiRightArrow/> Javascript (ES6+)</li>
            <li><BiRightArrow/> Node.js</li>
            <li><BiRightArrow/> React</li>
            <li><BiRightArrow/> Redux</li>
            <li><BiRightArrow/> PostgreSQL</li>
            <li><BiRightArrow/> Typescript</li>
        </ul>
    </div>
  )
}

export default About