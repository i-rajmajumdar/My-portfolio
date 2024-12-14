import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import ParticlesComponent from './components/particle'
import './App.css'
const App = () => {
  return (
    <div className='overflow-x-hidden text-stone-300 antialiased '>
    
        <ParticlesComponent id='particles' className="z-[-1000] w-full h-full absolute"/>
        <div className='container relative mx-auto '>
          <Navbar/>
          <Hero />
          <Technologies />
          <Projects />
          <Experience />
          <Contact />
        </div>
    </div>
  )
}

export default App
