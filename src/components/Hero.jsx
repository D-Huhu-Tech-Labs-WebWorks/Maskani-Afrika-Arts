import maskaniHeroImg from '../images/maskani.jpg'
import {
  FaArrowRight,
  FaPalette,
  FaCompassDrafting,
  FaChalkboardUser,
  FaWhatsapp,
  FaCertificate
} from 'react-icons/fa6'

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background Watermark Text "Maskani Arts" */}
      <div className="hero-watermark" aria-hidden="true">
        <span>MASKANI</span>
        <span>ARTS</span>
      </div>

      {/* Decorative Heritage Motif Patterns & Ambient Glowing Orbs */}
      <div className="hero-decorations" aria-hidden="true">
        <div className="ambient-orb orb-1"></div>
        <div className="ambient-orb orb-2"></div>
        <div className="ambient-orb orb-3"></div>
        <div className="african-pattern-grid"></div>
      </div>

      {/* Hero Shade Overlay */}
      <div className="hero-color-overlay"></div>

      <div className="container hero-content-wrapper">
        {/* Divided into Left and Right Columns */}
        <div className="hero-two-columns">
          {/* Left Column: Text & CTAs */}
          <div className="hero-col-left">
            <div className="hero-badge">
              <span className="badge-sparkle">✦</span>
              <span>African Heritage & Space Design Sanctuary</span>
            </div>

            <h1 className="hero-main-title">
              Celebrating African Heritage Through{' '}
              <span className="gradient-highlight">Art & Space Design</span>
            </h1>

            <p className="hero-description">
              Welcome to <strong>Maskani Afrika Art Hub</strong>, curated by visionary artist{' '}
              <strong>Erick Kyalo</strong>. We blend indigenous African narratives, tactile
              multimedia art, and bespoke interior aesthetics to transform personal and corporate spaces
              into soulful cultural sanctuaries.
            </p>

            <div className="hero-cta-group">
              <a href="#packages" className="btn-hero-primary">
                <span>Explore Packages</span>
                <FaArrowRight className="btn-icon" />
              </a>

              <a href="#about" className="btn-hero-secondary">
                <span>Meet Erick Kyalo</span>
              </a>

              <a
                href="https://wa.me/254110125731?text=Hello%20Erick,%20I%20am%20interested%20in%20Maskani%20Afrika%20Art%20Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-whatsapp"
                aria-label="Direct WhatsApp Chat"
              >
                <FaWhatsapp className="whatsapp-icon" />
                <span>Quick WhatsApp</span>
              </a>
            </div>

            <div className="hero-trust-tags">
              <span className="trust-tag">
                <FaCertificate className="tag-icon" /> Bespoke Commissions
              </span>
              <span className="trust-tag">
                <FaCompassDrafting className="tag-icon" /> Cultural Space Styling
              </span>
              <span className="trust-tag">
                <FaPalette className="tag-icon" /> Art Tutoring & Mentorship
              </span>
            </div>
          </div>

          {/* Right Column: maskani.jpg with rounded border */}
          <div className="hero-col-right">
            <div className="hero-image-card-container">
              {/* Decorative Backing Glow Card */}
              <div className="hero-image-backdrop-glow"></div>

              {/* Main Rounded Image Frame */}
              <div className="hero-image-frame">
                <img
                  src={maskaniHeroImg}
                  alt="Maskani Afrika Art Hub - African Heritage Art & Space Design"
                  className="hero-rounded-img"
                />

                {/* Floating Badge Top */}
                <div className="hero-floating-badge badge-top">
                  <span className="badge-pulse"></span>
                  <span>Maskani Afrika Arts</span>
                </div>

                {/* Floating Card Bottom */}
                <div className="hero-floating-card badge-bottom">
                  <div className="floating-card-icon">
                    <FaPalette />
                  </div>
                  <div className="floating-card-text">
                    <span className="floating-card-title">Erick Kyalo</span>
                    <span className="floating-card-desc">Founder & Multimedia Artist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="hero-highlights-strip">
          <div className="highlight-card">
            <div className="highlight-icon-box">
              <FaPalette />
            </div>
            <div className="highlight-text">
              <h3>Multimedia Art</h3>
              <p>Original canvas, mixed-media & cultural installations</p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon-box">
              <FaCompassDrafting />
            </div>
            <div className="highlight-text">
              <h3>Interior Space Design</h3>
              <p>Culturally inspired aesthetics for homes & hospitality</p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon-box">
              <FaChalkboardUser />
            </div>
            <div className="highlight-text">
              <h3>Art Tutoring</h3>
              <p>Private coaching & workshops for all creative levels</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
