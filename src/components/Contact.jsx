import { useState } from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPaperPlane,
  FaCheck,
  FaClock
} from 'react-icons/fa6'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Bespoke Art Commission',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate inquiry submission
    setSubmitted(true)
    setTimeout(() => {
      // open WhatsApp or mailto as a friendly convenience
    }, 500)
  }

  const whatsappDirectUrl = `https://wa.me/254110125731?text=Hello%20Erick,%20my%20name%20is%20${encodeURIComponent(
    formData.name || 'a client'
  )}.%20I%20am%20interested%20in%20${encodeURIComponent(
    formData.service
  )}%20at%20Maskani%20Afrika%20Art%20Hub.`

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">
            Start Your Creative <span>Journey With Us</span>
          </h2>
          <p className="section-subtitle">
            Whether you want to commission a focal masterpiece, reimagine your interior space,
            enroll in an art class, or simply say hello — Erick Kyalo is excited to collaborate with you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Socials Card */}
          <div className="contact-info-card">
            <div className="info-header">
              <span className="info-badge">Direct Contact</span>
              <h3 className="info-title">Maskani Afrika Art Hub</h3>
              <p className="info-artist-name">
                Founder: <strong>Erick Kyalo</strong>
              </p>
              <p className="info-artist-titles">
                Multimedia Artist • Art Tutor • Interior Designer
              </p>
            </div>

            <div className="contact-channels-list">
              {/* Phone */}
              <a href="tel:+254110125731" className="channel-item">
                <div className="channel-icon-box">
                  <FaPhone />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Call / Direct Line</span>
                  <span className="channel-val">+254 110 125 731</span>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:maskaniarthub@gmail.com" className="channel-item">
                <div className="channel-icon-box">
                  <FaEnvelope />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Official Email</span>
                  <span className="channel-val">maskaniarthub@gmail.com</span>
                </div>
              </a>

              {/* WhatsApp Quick Chat */}
              <a
                href="https://wa.me/254110125731?text=Hello%20Erick,%20I'm%20reaching%20out%20from%20Maskani%20Afrika%20Art%20Hub%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-item whatsapp-highlight"
              >
                <div className="channel-icon-box whatsapp-box">
                  <FaWhatsapp />
                </div>
                <div className="channel-text">
                  <span className="channel-label">WhatsApp Consultation</span>
                  <span className="channel-val">Chat directly on WhatsApp</span>
                </div>
              </a>

              {/* Location & Hours */}
              <div className="channel-item static-item">
                <div className="channel-icon-box">
                  <FaLocationDot />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Location</span>
                  <span className="channel-val">Nairobi, Kenya (By Appointment)</span>
                </div>
              </div>

              <div className="channel-item static-item">
                <div className="channel-icon-box">
                  <FaClock />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Working Hours</span>
                  <span className="channel-val">Mon – Sat: 8:00 AM – 6:00 PM EAT</span>
                </div>
              </div>
            </div>

            {/* Social Accounts Strip */}
            <div className="contact-socials-wrapper">
              <span className="socials-heading">Follow Erick Kyalo & The Hub:</span>
              <div className="social-icons-bar">
                <a
                  href="https://www.facebook.com/maskaniafrica.arts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-circle facebook"
                  aria-label="Facebook Profile"
                  title="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/maskaniarts?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-circle instagram"
                  aria-label="Instagram Profile"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tiktok.com/@maskaniarts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-circle tiktok"
                  aria-label="TikTok Profile"
                  title="TikTok"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form Card */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-box">
                <div className="success-icon-wrap">
                  <FaCheck />
                </div>
                <h3>Thank You, {formData.name || 'Friend'}!</h3>
                <p>
                  Your message has been received. Erick Kyalo will get back to you shortly via{' '}
                  <strong>{formData.email || 'email'}</strong> or{' '}
                  <strong>{formData.phone || 'phone'}</strong>.
                </p>
                <div className="success-actions">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-continue"
                  >
                    <FaWhatsapp />
                    <span>Send Message via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Bespoke Art Commission',
                        message: ''
                      })
                    }}
                    className="btn-reset-form"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="inquiry-form">
                <div className="form-card-header">
                  <h3 className="form-title">Send a Direct Inquiry</h3>
                  <p className="form-subtitle">
                    Fill in your details below and we will get back to you within 24 hours.
                  </p>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Wangari Maathai"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+254 7XX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service-select">Interested Package / Service</label>
                    <select
                      id="service-select"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="Bespoke Art Commission">
                        Bespoke Art Commission (Canvas/Mixed Media)
                      </option>
                      <option value="Interior Space Design & Art Styling">
                        Interior Space Design & Art Styling
                      </option>
                      <option value="Art Tutoring & Masterclasses">
                        Art Tutoring & Masterclasses
                      </option>
                      <option value="Corporate Curation & Live Art">
                        Corporate Curation & Live Art
                      </option>
                      <option value="Other Custom Collaboration">
                        Other Custom Collaboration
                      </option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Project or Vision *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Describe your space dimensions, preferred color palette, desired canvas style, or tutoring goals..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-actions-row">
                  <button type="submit" className="btn-submit-inquiry">
                    <span>Send Inquiry</span>
                    <FaPaperPlane />
                  </button>

                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-instant"
                    title="Chat via WhatsApp"
                  >
                    <FaWhatsapp />
                    <span>Instant WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
