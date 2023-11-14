import React from 'react'
import './about.css'

const About = () => {

    return (
    <>
    <div className='about'>
        <div className='container'>
            <div className='top_container'>
                <div className='left_box'>
                    <div className='contant'>
                        <div className='img_box'>
                            <img src='/img/me.jpeg' alt='me'></img>
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                    <div className='contant'>
                        <div className='heading'>
                            <img src='/img/star-2.png' alt='star'></img>
                            <h2>Sobre mi</h2>
                            <img src='/img/star-2.png' alt='star'></img>
                        </div>
                        <div className='deatil'>
                            <img src='/img/icon2.png' alt='icon'></img>
                            <div className='info'>
                                <h3>Ezequiel Arias</h3>
                                <p>Estoy emocionado/a de seguir
                                    creciendo profesionalmente,
                                    enfrentando nuevos desafíos y
                                    contribuyendo al éxito de la
                                    organización que me brinda la
                                    oportunidad. Mi objetivo es aplicar
                                    mis habilidades y experiencia para
                                    impulsar la innovación y lograr
                                    resultados excepcionales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mid_conatiner'>
                <div className='container'>
                    <div className='exp'>
                        <h2>Experiencia</h2>
                        <div className='box'>
                            <p>2023 - En curso</p>
                            <h3>Programador Fullstack</h3>
                            <p>FOR - IT</p>
                        </div>
                        <div className='box'>
                            <p>2023 - En curso</p>
                            <h3>Salesforce developer</h3>
                            <p>Coder house</p>
                        </div>
                    </div>
                    <div className='edu'>
                        <h2>Educacion</h2>
                        <div className='box'>
                            <p>2021 - 2022</p>
                            <h3>Programador web FullStack</h3>
                            <p>Digital House</p>
                        </div>
                        <div className='box'>
                            <p>2023 - En curso</p>
                            <h3>Ingenieria en Informatica</h3>
                            <p>Universidad de Buenos Aires(UBA)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About