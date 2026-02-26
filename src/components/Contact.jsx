import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    eventType: '',
    requirement: ''
  })

  const [franchiseData, setFranchiseData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    about: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `*Quote Request*%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACity: ${formData.city}%0AEvent Type: ${formData.eventType}%0ARequirement: ${formData.requirement}`
    window.open(`https://wa.me/919177067341?text=${message}`, '_blank')
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
    window.open(`https://wa.me/919177067341?text=${message}`, '_blank')
  }

  return (
    <div style={{ background: '#808080', minHeight: '100vh', paddingTop: '80px' }}>
      <style>{`
        @media (max-width: 768px) {
          .contact-card { flex-direction: column !important; }
          .contact-desc { border-right: none !important; border-bottom: 2px solid #1E90FF !important; }
        }
      `}</style>

      <div style={{ background: '#808080', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="contact-card" style={{
            background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%)',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(193,169,108,0.3)',
            overflow: 'hidden',
            display: 'flex'
          }}>
            <div className="contact-desc" style={{
              flex: 1,
              background: 'linear-gradient(135deg, #f0f8ff 0%, #1E90FF 100%)',
              padding: '3rem',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRight: '2px solid #1E90FF'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem'
              }}>💡</div>
              <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', fontWeight: 700, color: '#1E90FF' }}>Get a Quote</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.8', color: '#fff' }}>
                Bring your vision to life with aerial LED advertising. From events to campaigns, we create moments that dominate the sky.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  fontSize: '1.1rem'
                }}>
                  <span style={{
                    background: '#1E90FF',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    color: '#fff',
                    fontWeight: 'bold'
                  }}>✓</span>
                  Fast Response
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  fontSize: '1.1rem'
                }}>
                  <span style={{
                    background: '#1E90FF',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    color: '#fff',
                    fontWeight: 'bold'
                  }}>✓</span>
                  Custom Show Planning
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.1rem'
                }}>
                  <span style={{
                    background: '#1E90FF',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    color: '#fff',
                    fontWeight: 'bold'
                  }}>✓</span>
                  Pan-India Operations
                </div>
              </div>
              <div style={{
                background: 'rgba(193,169,108,0.1)',
                padding: '1.5rem',
                borderRadius: '10px',
                marginTop: '2rem',
                border: '1px solid #1E90FF'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1E90FF' }}>Have Questions?</h3>
                <p style={{ color: '#fff' }}>We're here to help you create unforgettable moments</p>
              </div>
            </div>
            
            <div style={{ flex: 1, padding: '3rem', background: '#e6f2ff' }}>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '1.5rem',
                color: '#1E90FF',
                fontWeight: 600
              }}>Request Your Quote</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '2px solid #3d3d3d',
                    fontSize: '1rem',
                    transition: 'border 0.3s',
                    outline: 'none',
                    background: '#f0f8ff',
                    color: '#000'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = '#3d3d3d'}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '2px solid #3d3d3d',
                    fontSize: '1rem',
                    transition: 'border 0.3s',
                    outline: 'none',
                    background: '#f0f8ff',
                    color: '#000'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = '#3d3d3d'}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (10 digits) *"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '2px solid #3d3d3d',
                    fontSize: '1rem',
                    transition: 'border 0.3s',
                    outline: 'none',
                    background: '#f0f8ff',
                    color: '#000'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = '#3d3d3d'}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '2px solid #3d3d3d',
                    fontSize: '1rem',
                    transition: 'border 0.3s',
                    outline: 'none',
                    background: '#f0f8ff',
                    color: '#000'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = '#3d3d3d'}
                />
                <input
                  type="text"
                  name="eventType"
                  placeholder="Event Type *"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '2px solid #3d3d3d',
                    fontSize: '1rem',
                    transition: 'border 0.3s',
                    outline: 'none',
                    background: '#f0f8ff',
                    color: '#000'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = '#3d3d3d'}
                />
                <textarea
                  name="requirement"
                  placeholder="Tell us more about your requirement *"
                  value={formData.requirement}
                  onChange={handleChange}
                  rows="4"
                  required
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '2px solid #3d3d3d',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    transition: 'border 0.3s',
                    outline: 'none',
                    background: '#f0f8ff',
                    color: '#000'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = '#3d3d3d'}
                />
                <button
                  type="submit"
                  style={{
                    padding: '1.2rem',
                    background: '#1E90FF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    boxShadow: '0 4px 15px rgba(193,169,108,0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 6px 20px rgba(193,169,108,0.6)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 4px 15px rgba(193,169,108,0.4)'
                  }}
                >
                  Get Your Quote →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#808080', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="contact-card" style={{
            background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%)',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(193,169,108,0.3)',
            overflow: 'hidden',
            display: 'flex'
          }}>
            <div className="contact-desc" style={{
              flex: 1,
              background: 'linear-gradient(135deg, #f0f8ff 0%, #1E90FF 100%)',
              padding: '3rem',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRight: '2px solid #1E90FF'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem'
              }}>🤝</div>
              <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', fontWeight: 700, color: '#1E90FF' }}>Franchise Enquiry</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.8', color: '#fff' }}>
                Partner with us to bring aerial LED advertising to your city. We provide the technology, training, and support — you grow the business locally.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  fontSize: '1.1rem'
                }}>
                  <span style={{
                    background: '#1E90FF',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    color: '#fff',
                    fontWeight: 'bold'
                  }}>✓</span>
                  City-wise Opportunities
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  fontSize: '1.1rem'
                }}>
                  <span style={{
                    background: '#1E90FF',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    color: '#fff',
                    fontWeight: 'bold'
                  }}>✓</span>
                  Complete Training & Support
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.1rem'
                }}>
                  <span style={{
                    background: '#1E90FF',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    color: '#fff',
                    fontWeight: 'bold'
                  }}>✓</span>
                  Strong Brand Backing
                </div>
              </div>
              <div style={{
                background: 'rgba(193,169,108,0.1)',
                padding: '1.5rem',
                borderRadius: '10px',
                marginTop: '2rem',
                border: '1px solid #1E90FF'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1E90FF' }}>Become a Franchise Partner</h3>
                <p style={{ color: '#fff' }}>Join our growing network of successful partners</p>
              </div>
            </div>
            
            <div style={{ flex: 1, padding: '3rem', background: '#e6f2ff' }}>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '1.5rem',
                color: '#1E90FF',
                fontWeight: 600
              }}>Partner With Us</h3>
              <form onSubmit={handleFranchiseSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={franchiseData.fullName}
                  onChange={handleFranchiseChange}
                  required
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '2px solid #3d3d3d',
                    fontSize: '1rem',
                    transition: 'border 0.3s',
                    outline: 'none',
                    background: '#f0f8ff',
                    color: '#000'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = '#3d3d3d'}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={franchiseData.email}
                  onChange={handleFranchiseChange}
                  required
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '2px solid #3d3d3d',
                    fontSize: '1rem',
                    transition: 'border 0.3s',
                    outline: 'none',
                    background: '#f0f8ff',
                    color: '#000'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = '#3d3d3d'}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (10 digits) *"
                  value={franchiseData.phone}
                  onChange={handleFranchiseChange}
                  pattern="[0-9]{10}"
                  required
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '2px solid #3d3d3d',
                    fontSize: '1rem',
                    transition: 'border 0.3s',
                    outline: 'none',
                    background: '#f0f8ff',
                    color: '#000'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = '#3d3d3d'}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  value={franchiseData.city}
                  onChange={handleFranchiseChange}
                  required
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '2px solid #3d3d3d',
                    fontSize: '1rem',
                    transition: 'border 0.3s',
                    outline: 'none',
                    background: '#f0f8ff',
                    color: '#000'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = '#3d3d3d'}
                />
                <textarea
                  name="about"
                  placeholder="Tell us a little about yourself and why you're interested in partnering with us. *"
                  value={franchiseData.about}
                  onChange={handleFranchiseChange}
                  rows="4"
                  required
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '2px solid #3d3d3d',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    transition: 'border 0.3s',
                    outline: 'none',
                    background: '#f0f8ff',
                    color: '#000'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1E90FF'}
                  onBlur={(e) => e.target.style.borderColor = '#3d3d3d'}
                />
                <button
                  type="submit"
                  style={{
                    padding: '1.2rem',
                    background: '#1E90FF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    boxShadow: '0 4px 15px rgba(193,169,108,0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 6px 20px rgba(193,169,108,0.6)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 4px 15px rgba(193,169,108,0.4)'
                  }}
                >
                  Submit Enquiry →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
