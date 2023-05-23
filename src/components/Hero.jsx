import { useState } from 'react';

import gmail from '../assets/gmail.svg';
import whatsapp from '../assets/whatsapp.svg';
import linkedin from '../assets/linkedin.svg';
import Modal from '../utils/Modal';
import { motion} from 'framer-motion'



const variants = {
  hidden:{
    delayChildren: 0.5,
    opacity:0,
    scale:0,
  },

  visible: ({delay}) => ({
    delayChildren: 1,
    opacity:1,
    scale:1,
    transition:{
      delay,
      duration:0.5,    
    },
  })
}


const Hero = () => {

  const [estadoModal, cambiarEstadoModal] = useState(false);


  return (
    <div className="hero">
      <div className="hero-contain">
        <motion.p
              custom={{delay: 0.2}}
              initial="hidden"
              whileInView="visible"
              variants={variants}
        >

          <span>Hola, Soy</span> <span className="hero-name">Lucas Basilone</span> 
        </motion.p>
          <motion.h1 className="hero-title"
              custom={{delay: 0.3}}
              initial="hidden"
              whileInView="visible"
              variants={variants}>
            Web Design
          </motion.h1>
          <motion.h1 className="hero-title"
            custom={{delay: 0.4}}
            initial="hidden"
            whileInView="visible"
            variants={variants}>
              Desarrollador Front-End
          </motion.h1>
        <motion.div className="hero-button"
            custom={{delay: 0.5}}
            initial="hidden"
            whileInView="visible"
            variants={variants}
        >
            
          <motion.a href="#projects-section"
            drag
            dragConstraints={{ left:0, right: 0, top:0, bottom:0}}
            dragTransition={{ bounceStiffness: 900, bounceDamping: 10 }}
            whileTap={{ opacity: 1.2 }}
          >
              <button className='button-neobrut'>Proyectos</button>
          </motion.a>
          <motion.button className='button-neobrut' onClick={() => cambiarEstadoModal(!estadoModal)}
            drag
            dragConstraints={{ left:0, right: 0, top:0, bottom:0}}
            dragTransition={{ bounceStiffness: 900, bounceDamping: 10 }}
            whileTap={{ opacity: 1.2 }}
          >
            Contacto
          </motion.button>

        </motion.div>
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