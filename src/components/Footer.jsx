import React from 'react'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <>
      <div className='footer' id='footer-section'>
        <aside>
          <motion.h2 className='footer-title'
            initial={{x:-500}}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >¿TIENES UN PROYECTO? HABLEMOS
          </motion.h2>
            <motion.div className='footer-separate'
              initial={{x:500}}
              whileInView={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <p className='footer-text'>Estoy disponible para trabajar en sus increíbles proyectos. Un desarrollador front-end de Argentina apasionado por crear webs funcionales</p>        
              <p className='footer-follow'>Seguime</p>
              <div className='footer-button-div'>
                <motion.a href="https://github.com/lhbasilone" className='footer-button'drag >
                  <motion.img src={github} alt="" drag/>
                </motion.a>
                <motion.a href="https://www.instagram.com/lucsbasilone/" className='footer-button' drag><motion.img src={instagram} alt="" drag/></motion.a>
                <motion.a href="https://www.linkedin.com/in/lucasbasilone" className='footer-button' drag><motion.img src={linkedin} alt="" drag/></motion.a>
              </div>
            </motion.div>
        </aside>
      </div>
    </>
  )
}

export default Footer