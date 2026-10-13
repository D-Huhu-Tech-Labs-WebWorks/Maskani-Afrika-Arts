import { useState, useEffect } from 'react'
import './Navbar.css'
import maskaniLogo from '../images/maskani.jpg'
import { FaFacebookF, FaInstagram, FaTiktok, FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const fbLink = 'https://www.facebook.com/maskaniafrica.arts'
  const igLink = 'https://www.instagram.com/maskaniarts?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw=='
  const tiktokLink = 'https://www.tiktok.com/@maskaniarts'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Check current section
      const sections = ['home', 'about', 'packages', 'contact']
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Packages', href: '#packages', id: 'packages' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo with maskani.jpg */}
        <a href="#home" className="navbar-logo" onClick={(e) => handleLinkClick(e, '#home')}>
          <div className="logo-img-wrapper">
            <img
              src={maskaniLogo}
              alt="Maskani Afrika Art Hub Logo"
              className="navbar-brand-logo-img"
            />
          </div>
          <div className="logo-text-group">
            <span className="brand-main">Maskani Afrika</span>
            <span className="brand-sub">ART HUB</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                  {activeSection === link.id && <span className="nav-dot"></span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Socials & Action Button */}
        <div className="navbar-actions">
          <div className="navbar-socials">
            <a
              href={fbLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Maskani Afrika Art Facebook"
              className="social-nav-link"
            >
              <FaFacebookF />
            </a>
            <a
              href={igLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Maskani Afrika Art Instagram"
              className="social-nav-link"
            >
              <FaInstagram />
            </a>
            <a
              href={tiktokLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Maskani Afrika Art TikTok"
              className="social-nav-link"
            >
              <FaTiktok />
            </a>
          </div>

          <a
            href="#contact"
            className="navbar-cta-btn"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Get In Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay / Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.id} className="mobile-nav-item">
              <a
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <div className="mobile-socials">
            <a
              href={fbLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="mobile-social-icon"
            >
              <FaFacebookF />
            </a>
            <a
              href={igLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="mobile-social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href={tiktokLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="mobile-social-icon"
            >
              <FaTiktok />
            </a>
          </div>
          <a
            href="#contact"
            className="mobile-cta-btn"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Connect With Erick Kyalo
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
