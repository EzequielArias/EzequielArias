import React from "react";
import Swal from "sweetalert2";
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import "./Contact.css";

const Contact = () => {
  
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.target.textContent)
    Swal.fire({
      title : "Se copio el mail en el clipboard",
      timer : 1500,
      icon : 'success',
      background : "#112240",
      iconColor : '#009846',
      color : '#fff',
    })
  }

  return (
    <div className="contact-container">
      <h2 id="contact">- Contacto</h2>
      <div className="social">
          <p>Enviame un email <span onClick={handleClick}>ezequielariasdev@gmail.com</span> o sigueme en mis redes.</p>
          <div>
            <a href="https://www.linkedin.com/in/ezequiel-arias734/" target='_blank'><BsLinkedin/></a>
            <a href="https://github.com/EzequielArias" target='_blank'><BsGithub/></a>
          </div>
      </div>
    </div>
  );
};

export default Contact;
