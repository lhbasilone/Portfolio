import me from '../assets/me.png'

const AboutMe = () => {

  const handleDownload = () => {
    window.location.href = 'https://drive.google.com/file/d/1k9BVAnusZaOpZrkD1lmMZzctaW20Vk9R/view?usp=share_link';
  };



  return (
      <div id='about-me-section' className='about-me'>
          <div className='about-me-text'>
          <h1>Sobre Mi</h1>
          <p>Me llamo Lucas Basilone, soy de Argentina, tengo 28 años y soy Developer web con conocimientos en JavaScript, HTML, CSS, ReactJS, NodeJS y varias tecnologías más como Python y MySQL.</p>
          <button className='button-neobrut' onClick={handleDownload}>Descargar CV</button>
          </div>
          <img src={me} className='about-me-img'></img>
          <h1 className='about-me-title'>Sobre Mi</h1>
      </div>
  )
}

export default AboutMe