import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import OurWork from './pages/OurWork'
import ContactForm from './pages/ContactForm'
import Oppurtunities from './pages/Oppurtunities'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div >
    <Navbar/>
    <div className='bg-black text-lightGray'>
      <Home />
      <About />
      <Projects/>
      <OurWork/>
      <ContactForm/>
      <Oppurtunities/>
      <Footer/>
    </div>
    </div>
  )
}

export default App