import React from 'react'
import CardProject from '../utils/CardProject'
import project1 from '../assets/shopNow.png'


const Projects = () => {


  const DataProject = [
    {id: 2, name:"proyecto 1", img:project1},
    {id: 1, name:"proyecto 2", img:project1},
    {id: 3, name:"proyecto 3", img:project1},
  ]

  return (
    <>
    <div  id='projects-section'>
    <h1 className='project-title'>Proyectos</h1>
    <div className='project-container'>
      {DataProject.map((propsProject, id) => (
        <CardProject key={propsProject.id} {...propsProject}/>
      ))}
    </div>
    </div>
    </>
  )
}

export default Projects;