import React from 'react'
import CardProject from '../utils/CardProject'
import project1 from '../assets/shopNow.png'
import club from '../assets/club.png'
import tracker from '../assets/Tracker.png'
import {motion} from "framer-motion"






const Projects = () => {


  const DataProject = [
    {id: 1, name:"El club", img:club, url:"https://lhbasilone.github.io/clubBajonFinal/index.html"},
    {id: 2, name:"Gastos", img:tracker, url:"https://expense-tracker-amber-ten.vercel.app/"},
    {id: 3, name:"proyecto 3", img:project1, url:"https://lhbasilone.github.io/clubBajonFinal/index.html"},
  ]

  return (
    <>
    <div  id='projects-section'>
    <motion.h1 className='project-title'
    >Proyectos
    </motion.h1>
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