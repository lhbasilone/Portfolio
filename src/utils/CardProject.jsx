import flecha from '../assets/arrow.svg'

const CardProject = (propsProject) => {
  return (

        <div class="project-card">
            <div className="project-img-card"><img src={propsProject.img}/></div>
            <div className="project-info-card">
                <p>{propsProject.name}</p>
                <div className="project-info-card-button">
                <button className='button-neobrut'> <img src={flecha}/></button>
                </div>
            </div>  
        </div>

  )
}

export default CardProject