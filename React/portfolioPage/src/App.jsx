import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousel from './components/carousel/Carousel'
import Navbar from './components/Navbar'
import About from './components/About'
import Educational from './components/Educational'
import Partner from './components/Partner'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className='overflow-hidden'>
      <Navbar />
      <div className='w-[90%] sm:w-[80%] mx-auto'>
        <Carousel />
        <About />

      </div>
      <Educational />
      <div className='w-[90%] sm:w-[80%] mx-auto'>
        <Partner />
      </div>
      <Contact />
      <Footer />
    </div>

  )
}

export default App
