import {
  FaCheck,
  FaArrowRight,
  FaPaintbrush,
  FaCompassDrafting,
  FaGraduationCap,
  FaBuildingColumns,
  FaWhatsapp
} from 'react-icons/fa6'

const Packages = () => {
  const packagesList = [
    {
      id: 'commission',
      badge: 'Bespoke Artwork',
      title: 'Bespoke Art Commission',
      subtitle: 'Original Heritage Canvases & Tactile Mixed-Media Pieces',
      icon: <FaPaintbrush />,
      description:
        'Collaborate directly with Erick Kyalo to create a one-of-a-kind statement art piece rooted in African storytelling, customized precisely for your home or office.',
      features: [
        'One-on-one vision & concept consultation',
        'Custom canvas sizing (standard to monumental scale)',
        'Selection of medium (acrylics, textured oils, mixed media)',
        'Harmonized color palette matching your interior',
        'Signed Certificate of Authenticity by Erick Kyalo',
        'Curation & installation advice'
      ],
      idealFor: 'Collectors, homeowners, executives & art enthusiasts',
      featured: false
    },
    {
      id: 'space-design',
      badge: 'Signature / Most Popular',
      title: 'Interior Space Design & Art Styling',
      subtitle: 'Transforming Spaces into African Heritage Sanctuaries',
      icon: <FaCompassDrafting />,
      description:
        'A comprehensive design service that redesigns your spatial layout, balances warm African color tones, and curates bespoke art pieces for an inspiring ambiance.',
      features: [
        'On-site or virtual space & lighting assessment',
        'African heritage color scheme & mood-board creation',
        'Curated art piece selection & focal wall staging',
        'Artisanal textures, craft elements & decor styling',
        'Harmony between modern architecture and cultural warmth',
        'Complete turnkey project coordination'
      ],
      idealFor: 'Residences, luxury Airbnbs, boutique hotels & offices',
      featured: true
    },
    {
      id: 'tutoring',
      badge: 'Mentorship & Skills',
      title: 'Art Tutoring & Masterclasses',
      subtitle: 'Hands-on Mentorship for Beginners, Youth & Creatives',
      icon: <FaGraduationCap />,
      description:
        'Personalized art training led by Erick Kyalo. Learn core painting techniques, explore African motif construction, and unleash your creative voice with confidence.',
      features: [
        'Step-by-step drawing & sketching fundamentals',
        'Acrylic painting & color mixing mastery',
        'Introduction to multimedia textures & impasto',
        'Flexible schedules: private 1-on-1 or small group cohorts',
        'All skill levels welcome: kids, teens, and adults',
        'Take home your completed masterpiece'
      ],
      idealFor: 'Aspiring artists, children, hobbyists & team building',
      featured: false
    },
    {
      id: 'corporate-curation',
      badge: 'Commercial & Events',
      title: 'Corporate Curation & Live Art',
      subtitle: 'Cultural Exhibitions, Brand Staging & Live Painting',
      icon: <FaBuildingColumns />,
      description:
        'Elevate corporate launches, cultural galas, and public spaces with live painting performances, rotating African art collections, and team creative retreats.',
      features: [
        'Live painting performance by Erick Kyalo at special events',
        'Corporate gallery staging & rotating artwork displays',
        'Creative wellness workshops for executive teams',
        'Artistic branding collaborations and mural design',
        'Bespoke cultural gift commissions for VIPs',
        'Full logistical coordination & curatorial statements'
      ],
      idealFor: 'Corporates, cultural institutions, galleries & festivals',
      featured: false
    }
  ]

  const handleSelectPackage = (pkgTitle) => {
    const contactSection = document.getElementById('contact')
    const serviceSelect = document.getElementById('service-select')
    if (serviceSelect) {
      serviceSelect.value = pkgTitle
    }
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="packages" className="packages-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-tag">Curated Offerings</span>
          <h2 className="section-title">
            Tailored <span>Service Packages</span>
          </h2>
          <p className="section-subtitle">
            Whether you are looking for an original focal painting, a full interior sanctuary
            transformation, or hands-on art mentorship, we have an offering designed for you.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="packages-grid">
          {packagesList.map((pkg) => (
            <div
              key={pkg.id}
              className={`package-card ${pkg.featured ? 'package-card-featured' : ''}`}
            >
              {pkg.featured && (
                <div className="card-featured-ribbon">
                  <span>Most Popular</span>
                </div>
              )}

              <div className="card-top">
                <div className="card-badge-row">
                  <span className="pkg-badge">{pkg.badge}</span>
                  <div className="pkg-icon-wrap">{pkg.icon}</div>
                </div>

                <h3 className="pkg-title">{pkg.title}</h3>
                <p className="pkg-subtitle">{pkg.subtitle}</p>
                <p className="pkg-description">{pkg.description}</p>
              </div>

              <div className="card-features">
                <h4 className="features-title">What is included:</h4>
                <ul className="features-list">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="feature-item">
                      <div className="check-icon-circle">
                        <FaCheck />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-footer">
                <div className="ideal-for-box">
                  <span className="ideal-label">Best Suited For:</span>
                  <span className="ideal-value">{pkg.idealFor}</span>
                </div>

                <div className="card-actions">
                  <button
                    type="button"
                    onClick={() => handleSelectPackage(pkg.title)}
                    className={`btn-package-select ${
                      pkg.featured ? 'btn-package-featured' : ''
                    }`}
                  >
                    <span>Inquire Package</span>
                    <FaArrowRight />
                  </button>

                  <a
                    href={`https://wa.me/254110125731?text=Hello%20Erick,%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                      pkg.title
                    )}%20package`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pkg-whatsapp-btn"
                    title="Inquire via WhatsApp"
                    aria-label={`Inquire about ${pkg.title} on WhatsApp`}
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution Banner */}
        <div className="custom-solution-banner">
          <div className="banner-content">
            <h3>Need a Custom Solution or Specialized Space Curation?</h3>
            <p>
              Every space has a distinct soul and every art collector has a unique story. Reach out to
              Erick Kyalo for a tailored quote that suits your exact vision and budget.
            </p>
          </div>
          <div className="banner-cta">
            <a href="#contact" className="btn-banner-contact">
              Talk to Erick Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packages
