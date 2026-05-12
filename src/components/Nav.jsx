import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    // Reset on route change
    setScrolled(window.scrollY > 40)
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  // Always show solid nav style
  const solid = true

  return (
    <nav className={`nav${solid ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">

        <Link to="/" className="nav__wordmark" onClick={() => setMenuOpen(false)}>
          <span className="nav__wordmark--accent">Sabrina's</span> Janitorial Maintenance
        </Link>

        <ul className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'nav__link--active' : ''} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'nav__link--active' : ''} onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li className="nav__links-book">
            <Link to="/book" className="btn btn--dark nav__links-book-btn" onClick={() => setMenuOpen(false)}>Book a Clean</Link>
          </li>
        </ul>

        <Link to="/book" className="btn btn--outline nav__cta" onClick={() => setMenuOpen(false)}>
          Book a Clean
        </Link>

        <button
          className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
