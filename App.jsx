import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right')
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      {/* Background Effects */}
      <div className="bg-grid" />
      <div className="bg-gradient-orb bg-gradient-orb--1" />
      <div className="bg-gradient-orb bg-gradient-orb--2" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
