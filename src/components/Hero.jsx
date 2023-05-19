import { useState } from 'react';

import gmail from '../assets/gmail.svg';
import whatsapp from '../assets/whatsapp.svg';
import linkedin from '../assets/linkedin.svg';
import Modal from '../utils/Modal';

const Hero = () => {

  const [estadoModal, cambiarEstadoModal] = useState(false);


  return (
    <div className="hero">

      <div className="hero-contain">          
          <p> <span>Hola, Soy</span> <span className="hero-name">Lucas Basilone</span> </p>
          <h1 className="hero-title">Web Design</h1>
          <h1 className="hero-title">Desarrollador Front-End</h1>
          <div className="hero-button">
            <a href="#projects-section"><button className='button-neobrut'>Proyectos</button></a>
            <button className='button-neobrut' onClick={() => cambiarEstadoModal(!estadoModal)}>Contacto</button>
          </div>
      </div>
      <div className='modal' >
        <Modal
          state={estadoModal}
          switchState={cambiarEstadoModal}
        >
          <a href="https://www.gmail.com" className='button-modal gmail'>
            <img src={gmail} alt="Gmail" />
          </a>
          <a href="https://www.linkedin.com/in/lucasbasilone" className='button-modal in'>
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="wa.link/be9hsk" className='button-modal  wwp'>
            <img src={whatsapp} alt="whatsapp" />
          </a>

        </Modal>
      </div>
    </div>
  )
}

export default Hero