import React from 'react'
import { Link } from 'react-router-dom'
import './work.css'

const Work = () => {

  const redirectToCountries = () => <Link to=""/>

  return (
    <>
    <div className='work'>
        <div className='container'>
            <div className='left'>
                <div className='conatnt'>
                    <div className='box'>
                        <Link className='img_box' id='chillApp' to="https://github.com/EzequielArias/ChillApp" target='_blank'>
                            <img src='img/ChillApp.png' alt='project'></img>
                        </Link>
                        <p>Aplicacion de chat</p>
                        <h3>ChillApp</h3>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='heading'>
                    <img src='img/star-2.png' alt='star'></img>
                    <h2>mis proyectos</h2>
                    <img src='img/star-2.png' alt='star'></img>
                </div>
                <div className='contant'>
                    <div className='box'>
                        <div className='img_box'>
                            <Link to="https://dashing-chimera-c833f2.netlify.app/" target='_blank'>
                                <img src='img/Project2.png' alt='project'></img>
                            </Link>
                        </div>
                        <p>Fullstack Challenge app</p>
                        <h3>Countries catalogue</h3>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <Link to="https://superlative-kangaroo-46251c.netlify.app/" target='_blank'>
                                <img src='img/Project1.png' alt='project'></img>
                            </Link>
                        </div>
                        <p>For-IT challenge</p>
                        <h3>Pokemon catalogue</h3>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='img/ComingSoon.png' alt='project'></img>
                        </div>
                        <p>Awesome project</p>
                        <h3>Ultimate enterprise</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Work