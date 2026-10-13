import maskaniLogo from '../images/maskani.jpg'
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaHeart,
  FaArrowUp
} from 'react-icons/fa6'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const fbLink = 'https://www.facebook.com/maskaniafrica.arts'
  const igLink = 'https://www.instagram.com/maskaniarts?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw=='
  const tiktokLink = 'https://www.tiktok.com/@maskaniarts'

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <div className="footer-logo-img-wrap">
                <img
                  src={maskaniLogo}
                  alt="Maskani Afrika Art Hub"
                  className="footer-logo-img"
                />
              </div>
              <div className="footer-logo-text">
                <span className="brand-title">Maskani Afrika</span>
                <span className="brand-tag">ART HUB</span>
              </div>
            </div>

            <p className="footer-tagline">
              "Celebrating African Heritage Through Art & Space Design"
            </p>

            <p className="footer-bio">
              Founded by <strong>Erick Kyalo</strong> — bridging timeless African heritage, tactile
              multimedia artistry, and bespoke spatial harmony.
            </p>

            <div className="footer-social-row">
              <a
                href={fbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={igLink}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Erick Kyalo</a>
              </li>
              <li>
                <a href="#packages">Service Packages</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Specializations</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#packages">Bespoke Canvas Commissions</a>
              </li>
              <li>
                <a href="#packages">Interior Space Art Styling</a>
              </li>
              <li>
                <a href="#packages">Multimedia Art & Murals</a>
              </li>
              <li>
                <a href="#packages">Art Tutoring & Mentorship</a>
              </li>
              <li>
                <a href="#packages">Corporate & Event Curation</a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Direct Inquiries</h4>
            <ul className="footer-contact-list">
              <li>
                <FaPhone className="footer-icon" />
                <a href="tel:+254110125731">+254 110 125 731</a>
              </li>
              <li>
                <FaEnvelope className="footer-icon" />
                <a href="mailto:maskaniarthub@gmail.com">maskaniarthub@gmail.com</a>
              </li>
              <li className="location-item">
                <span>Nairobi, Kenya • Studio visits by appointment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Maskani Afrika Art Hub. All Rights Reserved. Crafted with{' '}
            <FaHeart className="heart-icon" /> celebrating African heritage.
          </p>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
