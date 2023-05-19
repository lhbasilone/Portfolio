import React from 'react'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'

const Footer = () => {
  return (
    <>
      <div className='footer' id='footer-section'>
        <aside>
          <h2 className='footer-title'>¿TIENES UN PROYECTO? HABLEMOS</h2>
            <div className='footer-separate'>
              <p className='footer-text'>Estoy disponible para trabajar en sus increíbles proyectos. Un desarrollador front-end de Argentina apasionado por crear webs funcionales</p>        
              <p className='footer-follow'>Seguime</p>
              <div className='footer-button-div'>
                <a href="https://github.com/lhbasilone" className='footer-button'><img src={github} alt="" /></a>
                <a href="https://www.instagram.com/lucsbasilone/" className='footer-button'><img src={instagram} alt="" /></a>
                <a href="https://www.linkedin.com/in/lucasbasilone" className='footer-button'><img src={linkedin} alt="" /></a>
              </div>
            </div>
        </aside>
      </div>
    </>
  )
}

export default Footer