import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Điều hướng chính">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src="/image/LogoSataROBO.png" alt="Sata Robo" />
        </Link>

        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <Link
            to="/luyen-thi-robosim-r1-r2"
            className="btn btn-r1 btn-sm"
          >
            Luyện thi Online
          </Link>
          <Link
            to="/khoa-hoc-robosim-offline"
            className="btn btn-r2 btn-sm"
          >
            Học Offline 16 buổi
          </Link>
        </div>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Mở menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
