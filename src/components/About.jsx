import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaPaintbrush,
  FaCompassDrafting,
  FaGraduationCap,
  FaHeartCircleCheck,
  FaQuoteLeft
} from 'react-icons/fa6'

import maskaniImg from '../images/maskani.jpg'

const About = () => {
  const fbLink = 'https://www.facebook.com/maskaniafrica.arts'
  const igLink = 'https://www.instagram.com/maskaniarts?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw=='
  const tiktokLink = 'https://www.tiktok.com/@maskaniarts'

  const roles = [
    'Founder',
    'Multimedia Artist',
    'Art Tutor',
    'Interior Designer'
  ]

  const pillars = [
    {
      icon: <FaPaintbrush />,
      title: 'Multimedia Artistry',
      description:
        'Crafting bespoke canvas paintings, rich mixed-media works, and tactile wall sculptures incorporating African textures, organic earth pigments, and bold color compositions.'
    },
    {
      icon: <FaCompassDrafting />,
      title: 'Interior Space Design',
      description:
        'Curating harmonious spatial atmospheres that embody warmth and character. We blend functional spatial layouts with authentic African artistic accents for homes, offices, and boutiques.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Art Mentorship & Tutoring',
      description:
        'Guiding emerging artists, young talents, and hobbyists through hands-on masterclasses covering drawing fundamentals, acrylic techniques, color harmonies, and creative confidence.'
    },
    {
      icon: <FaHeartCircleCheck />,
      title: 'Cultural Heritage Celebration',
      description:
        'Preserving and re-imagining centuries of African symbolism, folklore, and indigenous patterns for modern living spaces and global contemporary art collections.'
    }
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-tag">About The Hub & Founder</span>
          <h2 className="section-title">
            The Vision Behind <span>Maskani Afrika</span>
          </h2>
          <p className="section-subtitle">
            "Maskani" is a Swahili term for sanctuary, haven, or dwelling place. At Maskani Afrika Art Hub,
            we shape spaces where African culture is celebrated and lived every single day.
          </p>
        </div>

        {/* Founder Showcase Card & Narrative */}
        <div className="about-grid">
          {/* Artist Card */}
          <div className="artist-profile-card">
            <div className="artist-avatar-wrapper">
              {/* Rounded Image Frame */}
              <div className="artist-avatar-canvas">
                <img
                  src={maskaniImg}
                  alt="Erick Kyalo - Maskani Afrika Art Hub"
                  className="artist-rounded-photo"
                />
                <div className="artist-badge-icon">
                  <FaPaintbrush />
                </div>
              </div>
            </div>

            <div className="artist-details">
              <span className="artist-tagline">Visionary & Creative Director</span>
              <h3 className="artist-name">Erick Kyalo</h3>

              {/* Roles Chips */}
              <div className="artist-roles-list">
                {roles.map((role, idx) => (
                  <span key={idx} className="role-chip">
                    {role}
                  </span>
                ))}
              </div>

              <p className="artist-mini-quote">
                <FaQuoteLeft className="quote-icon" />
                "Art should not only hang on walls — it should speak to who we are, elevate the spaces
                we live in, and anchor our souls to the rich soil of African heritage."
              </p>

              {/* Social Channels with React Icons */}
              <div className="artist-socials-box">
                <span className="socials-label">Connect on Socials:</span>
                <div className="social-links-row">
                  <a
                    href={fbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn facebook"
                    aria-label="Erick Kyalo on Facebook"
                  >
                    <FaFacebookF />
                    <span>Facebook</span>
                  </a>
                  <a
                    href={igLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn instagram"
                    aria-label="Erick Kyalo on Instagram"
                  >
                    <FaInstagram />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={tiktokLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn tiktok"
                    aria-label="Erick Kyalo on TikTok"
                  >
                    <FaTiktok />
                    <span>TikTok</span>
                  </a>
                </div>
              </div>

              {/* Quick Contacts */}
              <div className="artist-quick-contact">
                <a href="tel:+254110125731" className="quick-pill">
                  <FaPhone className="pill-icon" />
                  <span>+254 110 125 731</span>
                </a>
                <a href="mailto:maskaniarthub@gmail.com" className="quick-pill">
                  <FaEnvelope className="pill-icon" />
                  <span>maskaniarthub@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* About Narrative & Pillars */}
          <div className="about-narrative-container">
            <div className="narrative-content">
              <h3 className="narrative-heading">
                Where Heritage Meets Contemporary Innovation
              </h3>
              <p className="narrative-para">
                Founded by Kenyan multimedia artist and interior designer <strong>Erick Kyalo</strong>,
                <strong> Maskani Afrika Art Hub</strong> was born out of a desire to redefine how African
                art interacts with our daily physical environments.
              </p>
              <p className="narrative-para">
                Instead of treating artwork as a mere decorative afterthought, Erick bridges the gap
                between fine art and spatial architecture. Every custom artwork, room transformation,
                and educational workshop is designed to infuse spaces with meaning, dignity, and the
                vibrant rhythm of African life.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="pillars-grid">
              {pillars.map((pillar, index) => (
                <div key={index} className="pillar-card">
                  <div className="pillar-icon-wrapper">{pillar.icon}</div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
