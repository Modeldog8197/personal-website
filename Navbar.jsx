import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'about', href: '#about' },
    { label: 'skills', href: '#skills' },
    { label: 'projects', href: '#projects' },
    { label: 'interests', href: '#hobbies' },
    { label: 'contact', href: '#contact' },
  ]

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container navbar__inner">
          <a href="#" className="navbar__logo">avdhoot.</a>
          <div className="navbar__links">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="navbar__link">
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="navbar__mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-menu__close" onClick={() => setMobileOpen(false)}>
          ✕
        </button>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-menu__link"
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
