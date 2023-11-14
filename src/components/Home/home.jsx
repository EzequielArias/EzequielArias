import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import { AiOutlineDoubleRight, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { FaNodeJs } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';

const Home = () => {
  return (
    <>
    <div className='home'>
      <div className='top_container'>
        <div className='left_container'>
          <div className='img_container'>
              <div className='img_box'>
                <img src='/img/me.jpeg' alt='me'></img>
              </div>
          </div>
          <Link to='/about' className='link'>
          <div className='detail_container'>
            <h4>Fullstack developer</h4>
            <h3>Ezequiel Arias</h3>
            <p>¡Hola! Soy un programador full stack de Argentina.</p>
            <div className='icon'>
            <AiOutlineDoubleRight />
          </div>
          </div>
          </Link>
        </div>
        <div className='right_container'>
          <div className='contant'>
            <div className='top_box'>
              <p>últimos trabajos y destacados</p>
            </div>
            <div className='bottom_box'>
              <div className='box'>
                <div className='img_box'>
                  <img src='/img/Sign.png' alt='sign' id='sign_id'/>
                </div>
                <Link to='/about' className='link'>
                <div className='deatil'>
                  <div className='info'>
                    <p>more about me</p>
                    <h3>credenciales</h3>
                  </div>
                  <div className='icon'>
                    <AiOutlineDoubleRight />
                  </div>
                </div>
                </Link>
              </div>
              <div className='box'>
                <div className='img_box'>
                  <img src='/img/my-works.png' alt='work'></img>
                </div>
                <Link to='/work' className='link'>
                <div className='deatil'>
                  <div className='info'>
                    <p>showcase</p>
                    <h3>proyectos</h3>
                  </div>
                  <div className='icon'>
                    <AiOutlineDoubleRight />
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mid_container'>
        <div className='contant'>
          <div className='box'>
            <div className='img_box'>
              <img src='/img/Github.png' alt='fonts' id='img-github'></img>
            </div>
            <Link to='https://github.com/EzequielArias' className='link' target='_blank'>
            <div className='detail'>
              <div className='info'>
                <p>Github</p>
                <h3>Main</h3>
              </div>
                <div className='icon'>
                    <AiOutlineDoubleRight />
                </div>
            </div>
            </Link>
          </div>
          <div className='box2'>
            <div className='img_box'>
              <div className='img_container'>
                <FaNodeJs />
                <SiMysql />
                <FaReact />
                <BiCodeAlt />
              </div>
            </div>
            <Link to='/services' className='link'>
            <div className='detail'>
              <div className='info'>
                <p>specializations</p>
                <h3>Mis tecnologias</h3>
              </div>
                <div className='icon'>
                    <AiOutlineDoubleRight />
                </div>
            </div>
            </Link>
          </div>
          <div className='box3'>
            <div className='img_box'>
              <div className='img_container'>
                <div className='img'>
                  <AiFillLinkedin />
                </div>
                <div className='img'>
                  <AiFillGithub />
                </div>
              </div>
            </div>
            <Link to='/contact' className='link'>
            <div className='detail'>
              <div className='info'>
                <p>stay with me</p>
                <h3>perfiles</h3>
              </div>
                <div className='icon'>
                    <AiOutlineDoubleRight />
                </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home