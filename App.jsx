import Navbar from './Navbar'
import Hero from './Hero'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
