import React from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Algorithm from './components/sections/Algorithm'
import CTA from './components/sections/CTA'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="bg-[#fbfbfe] min-h-screen font-sans antialiased text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Algorithm />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
