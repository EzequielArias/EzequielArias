import React from 'react'
import { TfiWorld } from 'react-icons/tfi'
import './Card.css'

const Card = ({title, description, link, technologies}) => {
  return (
    <div className='card-container'>
        <TfiWorld/>
    <a href={link} target="_blank">
        <h3>{title}</h3>
        <p>{description}</p>
    </a>
    <span>{technologies}</span>
    </div>
  )
}

export default Card