import { useEffect, useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('')
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-15% 0px -60% 0px' },
    )
    document
      .querySelectorAll('main > section[id]')
      .forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#home" aria-label="Avdhoot Gupta, home">
          ag<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a
            href="#projects"
            aria-current={active === 'projects' ? 'location' : undefined}
          >
            Work
          </a>
          <a
            href="#about"
            aria-current={active === 'about' ? 'location' : undefined}
          >
            About
          </a>
          <a
            href="#contact"
            aria-current={active === 'contact' ? 'location' : undefined}
          >
            Contact <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
