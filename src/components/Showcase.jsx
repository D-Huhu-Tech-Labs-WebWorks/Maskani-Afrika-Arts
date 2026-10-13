import { useState } from 'react'
import { FaEye } from 'react-icons/fa6'
import afrokaImg from '../images/afroka.jpg'
import masaaiImg from '../images/masaai.jpeg'
import maskaniImg from '../images/maskani.jpg'

const Showcase = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const showcaseItems = [
    {
      id: 1,
      title: 'Ancestral Resonance',
      category: 'art',
      categoryLabel: 'Multimedia Art',
      medium: 'Textured Acrylic, Ochre & Reclaimed Fiber',
      dimensions: '120cm × 150cm',
      story: 'A powerful homage to African lineage, woven with organic textures and warm earth tones.',
      colorScheme: ['#c81c69', '#541763', '#d97706'],
      gradient: 'linear-gradient(135deg, #2a0833 0%, #751a5a 50%, #c81c69 100%)',
      image: afrokaImg
    },
    {
      id: 2,
      title: 'Maasai Heritage Form',
      category: 'art',
      categoryLabel: 'Multimedia Art',
      medium: 'Traditional Pigments & Contemporary Canvas',
      dimensions: '100cm × 140cm',
      story: 'Evocative figurative portraiture honoring cultural warrior regalia and sacred beadwork.',
      colorScheme: ['#350f42', '#c81c69', '#eab308'],
      gradient: 'linear-gradient(135deg, #1b0a24 0%, #461453 50%, #9e1f5e 100%)',
      image: masaaiImg
    },
    {
      id: 3,
      title: 'Maskani Sanctuary Collection',
      category: 'design',
      categoryLabel: 'Space Design',
      medium: 'Bespoke Interior Harmonization & Wall Installation',
      dimensions: 'Bespoke Staging',
      story: 'Transforming an urban living room into a serene African haven with warm lighting and bold focal art.',
      colorScheme: ['#c81c69', '#8b185b', '#f43f5e'],
      gradient: 'linear-gradient(135deg, #380d3d 0%, #9c1553 50%, #e11d48 100%)',
      image: maskaniImg
    },
    {
      id: 4,
      title: 'Executive Suite Curation',
      category: 'design',
      categoryLabel: 'Space Design',
      medium: 'Corporate Office Heritage Styling',
      dimensions: 'Turnkey Installation',
      story: 'An executive boardroom infused with cultural dignity, African geometric woodwork, and focal canvases.',
      colorScheme: ['#1d0825', '#574c64', '#c81c69'],
      gradient: 'linear-gradient(135deg, #180620 0%, #3d1049 60%, #761858 100%)'
    },
    {
      id: 5,
      title: 'The Young Visionaries',
      category: 'tutoring',
      categoryLabel: 'Art Tutoring',
      medium: 'Hands-on Mentorship & Studio Practice',
      dimensions: 'Group Cohort',
      story: 'Youth and adult learners discovering color harmonies, canvas prep, and expressive freedom under Erick Kyalo.',
      colorScheme: ['#c81c69', '#3b0764', '#ec4899'],
      gradient: 'linear-gradient(135deg, #2b0b35 0%, #681552 50%, #c81c69 100%)'
    },
    {
      id: 6,
      title: 'Heritage Focal Mural',
      category: 'art',
      categoryLabel: 'Multimedia Art',
      medium: 'Bespoke Interior Wall Mural',
      dimensions: 'Full Wall Installation',
      story: 'An expansive mural honoring Maasai and Kikuyu beadwork motifs rendered in contemporary pink and plum tones.',
      colorScheme: ['#831843', '#c81c69', '#4a044e'],
      gradient: 'linear-gradient(135deg, #200627 0%, #520f45 50%, #b8175d 100%)'
    }
  ]

  const filteredItems =
    activeFilter === 'all'
      ? showcaseItems
      : showcaseItems.filter((item) => item.category === activeFilter)

  return (
    <section className="showcase-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag">Visual Portfolio</span>
          <h2 className="section-title">
            Artistic Expressions & <span>Spatial Creations</span>
          </h2>
          <p className="section-subtitle">
            Explore a curated glimpse of original canvas creations, tactile multimedia compositions,
            and inspiring interior transformations crafted by Erick Kyalo.
          </p>

          {/* Filter Pills */}
          <div className="portfolio-filter-row">
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Works
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'art' ? 'active' : ''}`}
              onClick={() => setActiveFilter('art')}
            >
              Multimedia Art
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`}
              onClick={() => setActiveFilter('design')}
            >
              Space Design
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'tutoring' ? 'active' : ''}`}
              onClick={() => setActiveFilter('tutoring')}
            >
              Tutoring & Mentorship
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="showcase-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="showcase-card">
              <div
                className="showcase-visual"
                style={{ background: item.gradient }}
              >
                {item.image ? (
                  <img src={item.image} alt={item.title} className="showcase-card-img" />
                ) : (
                  <div className="showcase-center-symbol">
                    <span className="symbol-glyph">MASKANI</span>
                  </div>
                )}
                <div className="showcase-visual-overlay"></div>
                <div className="showcase-art-badge">
                  <span>{item.categoryLabel}</span>
                </div>
              </div>

              <div className="showcase-content">
                <div className="showcase-meta-row">
                  <span className="showcase-medium">{item.medium}</span>
                  <span className="showcase-dimension">{item.dimensions}</span>
                </div>

                <h3 className="showcase-title">{item.title}</h3>
                <p className="showcase-story">{item.story}</p>

                <div className="showcase-footer-row">
                  <div className="color-palette-dots">
                    {item.colorScheme.map((c, i) => (
                      <span
                        key={i}
                        className="palette-dot"
                        style={{ backgroundColor: c }}
                        title={c}
                      ></span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="showcase-inquire-link"
                    title={`Inquire about ${item.title}`}
                  >
                    <span>Inquire</span>
                    <FaEye />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
