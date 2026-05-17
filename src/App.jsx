import React, { useEffect } from 'react'
import Lenis from 'lenis'
import './App.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Stats from './components/sections/Stats'
import Algorithm from './components/sections/Algorithm'
import CTA from './components/sections/CTA'
import Footer from './components/layout/Footer'
import ScrollIndicator from './components/layout/ScrollIndicator'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
  return (
    <div className="bg-[#fbfbfe] min-h-screen font-sans antialiased text-gray-900">
      <ScrollIndicator />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Stats />
        <Algorithm />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
