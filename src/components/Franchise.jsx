import { useState } from 'react'

function Franchise() {
  const [franchiseData, setFranchiseData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    about: ''
  })

  const handleFranchiseChange = (e) => {
    setFranchiseData({ ...franchiseData, [e.target.name]: e.target.value })
  }

  const handleFranchiseSubmit = (e) => {
    e.preventDefault()
    const message = `*Franchise Enquiry*%0A%0AFull Name: ${franchiseData.fullName}%0AEmail: ${franchiseData.email}%0APhone: ${franchiseData.phone}%0ACity: ${franchiseData.city}%0AAbout: ${franchiseData.about}`
    window.open(`https://wa.me/919177067341?text=${message}`, '_blank')
  }

  return (
    <div style={{ background: '#000', minHeight: '100vh', paddingTop: '80px' }}>
      <div style={{ background: '#000', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(255,215,0,0.3)',
            overflow: 'hidden',
            display: 'flex'
          }}>
            <div style={{
              flex: 1,
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              padding: '3rem',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRight: '2px solid #FFD700'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem'
              }}>🤝</div>
              <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', fontWeight: 700, color: '#FFD700' }}>Franchise Opportunity</h2>
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
                    background: '#FFD700',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    color: '#000',
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
                    background: '#FFD700',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    color: '#000',
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
                    background: '#FFD700',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    color: '#000',
                    fontWeight: 'bold'
                  }}>✓</span>
                  Strong Brand Backing
                </div>
              </div>
              <div style={{
                background: 'rgba(255,215,0,0.1)',
                padding: '1.5rem',
                borderRadius: '10px',
                marginTop: '2rem',
                border: '1px solid #FFD700'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#FFD700' }}>Become a Franchise Partner</h3>
                <p style={{ color: '#fff' }}>Join our growing network of successful partners</p>
              </div>
            </div>
            
            <div style={{ flex: 1, padding: '3rem', background: '#2d2d2d' }}>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '1.5rem',
                color: '#FFD700',
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
                    background: '#1a1a1a',
                    color: '#fff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
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
                    background: '#1a1a1a',
                    color: '#fff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
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
                    background: '#1a1a1a',
                    color: '#fff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
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
                    background: '#1a1a1a',
                    color: '#fff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
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
                    background: '#1a1a1a',
                    color: '#fff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                  onBlur={(e) => e.target.style.borderColor = '#3d3d3d'}
                />
                <button
                  type="submit"
                  style={{
                    padding: '1.2rem',
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    color: '#000',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    boxShadow: '0 4px 15px rgba(255,215,0,0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 6px 20px rgba(255,215,0,0.6)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 4px 15px rgba(255,215,0,0.4)'
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

export default Franchise
