import React from 'react'
import Hero from './components/section1/Hero'
import Navbar from './components/section1/Navbar'
import About from './components/section2/About'
import Skills from './components/section3/Skill'
import Projects from './components/section4/Projects'
import Certificates from './components/section4/Certificates'
import Contact from './components/section4/Contect'
import Footer from './components/section4/Footer'



const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
       <Hero />
       <About/>
       <Skills/>
       <Projects/>
       <Certificates/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App