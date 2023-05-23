import me from '../assets/me.png'
import {motion} from "framer-motion"









const AboutMe = () => {

  const handleDownload = () => {
    window.location.href = 'https://drive.google.com/file/d/1k9BVAnusZaOpZrkD1lmMZzctaW20Vk9R/view?usp=share_link';
  };



  return (
      <div id='about-me-section' className='about-me'>
          <div className='about-me-text'>
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
          Sobre Mi
          </motion.h1>
          <motion.p
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Me llamo Lucas Basilone, soy de Argentina, tengo 28 años y soy Developer web con conocimientos en JavaScript, HTML, CSS, ReactJS, NodeJS y varias tecnologías más como Python y MySQL.
          </motion.p>
          <motion.button className='button-neobrut' onClick={handleDownload}
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Descargar CV
          </motion.button>
          </div>
          <motion.img src={me} className='about-me-img'
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <h1 className='about-me-title'>Sobre Mi</h1>
      </div>
  )
}

export default AboutMe