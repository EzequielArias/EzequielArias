import React from 'react'
import './footer.css'
import {AiOutlineDoubleRight} from 'react-icons/ai';
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='top_container'>
            <div className='contant'>
                <div className='left_box'>
                    <div className='box'>
                        <div className='detail'>
                            <h3>01</h3>
                            <p>años de experiencia</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='detail'>
                            <h3>+2</h3>
                            <p>projectos freelance</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='detail'>
                            <h3>+5</h3>
                            <p>total de projectos</p>
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                    <img src='../../img/icon2.png' alt='icon'></img>
                    <div className='contant'>
                        <div className='detail'>
                            <h2>Trabajemos<br/><span>juntos</span></h2>
                        </div>
                        <div className='icon'>
                            <AiOutlineDoubleRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bottom_container'>
            <div className='container'>
                <h2>EA</h2>
                <div className='nav'>
                    <ul>
                        <li><Link to='/' className='link'>Inicio</Link></li>
                        <li><Link to='/about' className='link'>Sobre mi</Link></li>
                        <li><Link to='/work' className='link'>Projectos</Link></li>
                        <li><Link to='/contact' className='link'>Contactos</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer