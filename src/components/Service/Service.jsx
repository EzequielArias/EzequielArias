import './Service.css';
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiTypescript, SiMysql, SiJest, SiHtml5, SiCss3, SiReact } from "react-icons/si";
import { FaSalesforce } from 'react-icons/fa';

const Service = () => {

  const colors = ["yellow", "green"]

  return (
    <div className='Service'>
        <h2 className='title'>Este es mi stack de tecnologias</h2>
        <ul className='icons-container'>
            <li className='item' id='javascript'> <IoLogoJavascript/> </li>
            <li className='item' id='mongodb'> <SiMongodb/> </li>
            <li className='item' id='typescript'> <SiTypescript/> </li>
            <li className='item' id='mysql'> <SiMysql/> </li>
            <li className='item' id='jest'> <SiJest/> </li>
            <li className='item' id='salesforce'> <FaSalesforce/> </li>
            <li className='item' id='html5'> <SiHtml5/> </li>
            <li className='item' id='css3'> <SiCss3/> </li>
            <li className='item' id='react'> <SiReact/> </li>
        </ul>
    </div>
  )

}

export default Service;