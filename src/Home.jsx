import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Techs from './components/Techs'
import Projects from './components/Projects'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
        <NavBar/>    
        <Hero/>
        <AboutMe/>
        <Techs/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default Home