import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Contact() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const serviceParam = searchParams.get('service') || ''

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    eventType: serviceParam,
    requirement: ''
  })

  const [franchiseData, setFranchiseData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    about: ''
  })

  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({ ...prev, eventType: serviceParam }))
    }
  }, [serviceParam])

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `*Quote Request*%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACity: ${formData.city}%0AEvent Type: ${formData.eventType}%0ARequirement: ${formData.requirement}`
    window.open(`https://wa.me/917842971358?text=${message}`, '_blank')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFranchiseChange = (e) => {
    setFranchiseData({ ...franchiseData, [e.target.name]: e.target.value })
  }

  const handleFranchiseSubmit = (e) => {
    e.preventDefault()
    const message = `*Franchise Enquiry*%0A%0AFull Name: ${franchiseData.fullName}%0AEmail: ${franchiseData.email}%0APhone: ${franchiseData.phone}%0ACity: ${franchiseData.city}%0AAbout: ${franchiseData.about}`
    window.open(`https://wa.me/917842971358?text=${message}`, '_blank')
  }

  const services = ['Weddings', 'Political Events', 'Corporate Events', 'Launches', 'Surprises', 'Birthdays', 'Personal Events', 'Any Kind of Event']

  const pageStyle = {
    backgroundColor: '#0a0a0a',
    minHeight: '100vh',
    paddingTop: '100px',
    paddingBottom: '80px',
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px',
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '80px',
  }

  const titleStyle = {
    fontSize: '4rem',
    fontWeight: 900,
    marginBottom: '20px',
    background: 'linear-gradient(135deg, #1E90FF 0%, #FF8C0A 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }

  const subtitleStyle = {
    color: 'rgba(255,255,255,0.7)',
    fontSize: '1.3rem',
    maxWidth: '700px',
    margin: '0 auto',
  }

  const cardStyle = {
    background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '2px solid rgba(30, 144, 255, 0.3)',
    boxShadow: '0 20px 60px rgba(30, 144, 255, 0.2)',
    marginBottom: '60px',
    transition: 'all 0.4s ease',
  }

  const cardHoverStyle = {
    transform: 'translateY(-8px)',
    boxShadow: '0 24px 80px rgba(30, 144, 255, 0.4)',
    borderColor: '#1E90FF',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: 0,
  }

  const leftPanelStyle = {
    padding: '60px 50px',
    background: 'linear-gradient(135deg, rgba(30,144,255,0.15) 0%, rgba(255,140,10,0.1) 100%)',
    borderRight: '2px solid rgba(30, 144, 255, 0.3)',
  }

  const iconStyle = {
    fontSize: '72px',
    marginBottom: '30px',
  }

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 800,
    marginBottom: '24px',
    color: '#1E90FF',
  }

  const descriptionStyle = {
    fontSize: '1.15rem',
    marginBottom: '40px',
    lineHeight: 1.8,
    color: 'rgba(255,255,255,0.85)',
  }

  const featureItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px',
  }

  const checkIconStyle = {
    color: '#1E90FF',
    fontSize: '32px',
    flexShrink: 0,
  }

  const featureTextStyle = {
    fontWeight: 600,
    fontSize: '1.15rem',
    color: 'rgba(255,255,255,0.9)',
  }

  const infoBoxStyle = {
    marginTop: '40px',
    padding: '24px',
    background: 'rgba(30,144,255,0.1)',
    border: '1px solid rgba(30, 144, 255, 0.3)',
    borderRadius: '12px',
  }

  const infoTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '8px',
    color: '#1E90FF',
  }

  const infoTextStyle = {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '1rem',
  }

  const rightPanelStyle = {
    padding: '60px 50px',
    background: '#1a1a1a',
  }

  const formTitleStyle = {
    fontSize: '2.2rem',
    fontWeight: 700,
    marginBottom: '32px',
    color: '#FF8C0A',
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  }

  const inputStyle = {
    width: '100%',
    padding: '16px 20px',
    borderRadius: '12px',
    border: '2px solid rgba(30, 144, 255, 0.3)',
    fontSize: '1rem',
    transition: 'all 0.3s',
    outline: 'none',
    background: '#0a0a0a',
    color: '#fff',
    fontFamily: 'inherit',
  }

  const buttonStyle = {
    width: '100%',
    padding: '18px 32px',
    background: 'linear-gradient(135deg, #1E90FF, #FF8C0A)',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.2rem',
    fontWeight: 800,
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 8px 32px rgba(30, 144, 255, 0.4)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  }

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>Get In Touch</h1>
          <p style={subtitleStyle}>
            Let's create something extraordinary together. Your vision, our expertise.
          </p>
        </div>

        {/* Quote Section */}
        <div 
          style={cardStyle}
          onMouseEnter={(e) => {
            Object.assign(e.currentTarget.style, cardHoverStyle)
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(30, 144, 255, 0.2)'
            e.currentTarget.style.borderColor = 'rgba(30, 144, 255, 0.3)'
          }}
        >
          <div style={gridStyle}>
            <div style={leftPanelStyle}>
              <div style={iconStyle}>💡</div>
              <h2 style={headingStyle}>Get a Quote</h2>
              <p style={descriptionStyle}>
                Bring your vision to life with aerial LED advertising. From events to campaigns, we create moments that dominate the sky.
              </p>
              
              {['Fast Response', 'Custom Show Planning', 'Pan-India Operations'].map((item, i) => (
                <div key={i} style={featureItemStyle}>
                  <span style={checkIconStyle}>✓</span>
                  <span style={featureTextStyle}>{item}</span>
                </div>
              ))}

              <div style={infoBoxStyle}>
                <h3 style={infoTitleStyle}>Have Questions?</h3>
                <p style={infoTextStyle}>We're here to help you create unforgettable moments</p>
              </div>
            </div>

            <div style={rightPanelStyle}>
              <h3 style={formTitleStyle}>Request Your Quote</h3>
              <form onSubmit={handleSubmit} style={formStyle}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(30, 144, 255, 0.3)'}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(30, 144, 255, 0.3)'}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (10 digits) *"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(30, 144, 255, 0.3)'}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(30, 144, 255, 0.3)'}
                />
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(30, 144, 255, 0.3)'}
                >
                  <option value="">Select Event Type *</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <textarea
                  name="requirement"
                  placeholder="Tell us more about your requirement *"
                  value={formData.requirement}
                  onChange={handleChange}
                  rows="4"
                  required
                  style={{...inputStyle, resize: 'vertical'}}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(30, 144, 255, 0.3)'}
                />
                <button
                  type="submit"
                  style={buttonStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-4px)'
                    e.target.style.boxShadow = '0 12px 40px rgba(30, 144, 255, 0.6)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 8px 32px rgba(30, 144, 255, 0.4)'
                  }}
                >
                  Get Your Quote →
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Franchise Section */}
        {/* <div 
          style={{...cardStyle, borderColor: 'rgba(255, 140, 10, 0.3)'}}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)'
            e.currentTarget.style.boxShadow = '0 24px 80px rgba(255, 140, 10, 0.4)'
            e.currentTarget.style.borderColor = '#FF8C0A'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(30, 144, 255, 0.2)'
            e.currentTarget.style.borderColor = 'rgba(255, 140, 10, 0.3)'
          }}
        >
          <div style={gridStyle}>
            <div style={{...leftPanelStyle, background: 'linear-gradient(135deg, rgba(255,140,10,0.15) 0%, rgba(30,144,255,0.1) 100%)', borderRight: '2px solid rgba(255, 140, 10, 0.3)'}}>
              <div style={iconStyle}>🤝</div>
              <h2 style={{...headingStyle, color: '#FF8C0A'}}>Franchise Enquiry</h2>
              <p style={descriptionStyle}>
                Partner with us to bring aerial LED advertising to your city. We provide the technology, training, and support.
              </p>
              
              {['City-wise Opportunities', 'Complete Training & Support', 'Strong Brand Backing'].map((item, i) => (
                <div key={i} style={featureItemStyle}>
                  <span style={{...checkIconStyle, color: '#FF8C0A'}}>✓</span>
                  <span style={featureTextStyle}>{item}</span>
                </div>
              ))}

              <div style={{...infoBoxStyle, background: 'rgba(255,140,10,0.1)', borderColor: 'rgba(255, 140, 10, 0.3)'}}>
                <h3 style={{...infoTitleStyle, color: '#FF8C0A'}}>Become a Franchise Partner</h3>
                <p style={infoTextStyle}>Join our growing network of successful partners</p>
              </div>
            </div>

            <div style={rightPanelStyle}>
              <h3 style={{...formTitleStyle, color: '#1E90FF'}}>Partner With Us</h3>
              <form onSubmit={handleFranchiseSubmit} style={formStyle}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={franchiseData.fullName}
                  onChange={handleFranchiseChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FF8C0A'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(30, 144, 255, 0.3)'}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={franchiseData.email}
                  onChange={handleFranchiseChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FF8C0A'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(30, 144, 255, 0.3)'}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (10 digits) *"
                  value={franchiseData.phone}
                  onChange={handleFranchiseChange}
                  pattern="[0-9]{10}"
                  required
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FF8C0A'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(30, 144, 255, 0.3)'}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  value={franchiseData.city}
                  onChange={handleFranchiseChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FF8C0A'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(30, 144, 255, 0.3)'}
                />
                <textarea
                  name="about"
                  placeholder="Tell us about yourself and your business experience *"
                  value={franchiseData.about}
                  onChange={handleFranchiseChange}
                  rows="4"
                  required
                  style={{...inputStyle, resize: 'vertical'}}
                  onFocus={(e) => e.target.style.borderColor = '#FF8C0A'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(30, 144, 255, 0.3)'}
                />
                <button
                  type="submit"
                  style={{...buttonStyle, background: 'linear-gradient(135deg, #FF8C0A, #1E90FF)'}}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-4px)'
                    e.target.style.boxShadow = '0 12px 40px rgba(255, 140, 10, 0.6)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 8px 32px rgba(30, 144, 255, 0.4)'
                  }}
                >
                  Submit Enquiry →
                </button>
              </form>
            </div>
          </div>
        </div> */}
      </div>

      <style>{`
        @media (max-width: 968px) {
          div[style*="display: grid"] {
            display: flex !important;
            flex-direction: column !important;
          }
          div[style*="borderRight: '2px solid"] {
            border-right: none !important;
            border-bottom: 2px solid rgba(30, 144, 255, 0.3) !important;
          }
          div[style*="padding: 60px 50px"] {
            padding: 40px 20px !important;
          }
        }
        @media (max-width: 768px) {
          body {
            padding: 0 !important;
            margin: 0 !important;
          }
          div[style*="padding: 0 40px"] {
            padding: 0 !important;
          }
          div[style*="padding: 60px 50px"],
          div[style*="padding: 40px 20px"] {
            padding: 30px 15px !important;
          }
          div[style*="borderRadius: '24px'"] {
            border-radius: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          div[style*="paddingTop: '100px'"] {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Contact
