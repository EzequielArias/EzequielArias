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
                            <img src='img/me.jpeg' alt='me'></img>
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                    <div className='contant'>
                        <div className='heading'>
                            <img src='img/star-2.png' alt='star'></img>
                            <h2>self-summary</h2>
                            <img src='img/star-2.png' alt='star'></img>
                        </div>
                        <div className='deatil'>
                            <img src='img/icon2.png' alt='icon'></img>
                            <div className='info'>
                                <h3>Ezequiel Arias</h3>
                                <p>Hello, my name is Ezequiel Arias, and I am a full-stack developer with a focus on backend . I have various projects to showcase my experience as a developer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mid_conatiner'>
                <div className='container'>
                    <div className='exp'>
                        <h2>experience</h2>
                        <div className='box'>
                            <p>2023 - current</p>
                            <h3>FullStack Developer</h3>
                            <p>new-work-app</p>
                        </div>
                        <div className='box'>
                            <p>2022 - 2023</p>
                            <h3>React Developer</h3>
                            <p>Pokemon - countries - app's</p>
                        </div>
                    </div>
                    <div className='edu'>
                        <h2>education</h2>
                        <div className='box'>
                            <p>2021 - 2022</p>
                            <h3>FullStack developer</h3>
                            <p>Digital House</p>
                        </div>
                        <div className='box'>
                            <p>2023 - current</p>
                            <h3>computer science</h3>
                            <p>University of Buenos Aires(UBA)</p>
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