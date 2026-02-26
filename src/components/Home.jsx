import { useState, useEffect } from 'react'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)
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
  
  const images = [
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop'
  ]

  const products = [
    {
      title: 'Sky Advertising',
      description: 'High-impact drone-mounted LED displays that transform the night sky into a powerful advertising space. Perfect for product launches, real estate promotions, political campaigns, and large-scale events. We create experiences that people stop, watch, record, and remember.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop'
    },
    {
      title: 'Promotions',
      description: 'Event & concert brand activations, real estate project promotions, campaign & political messaging, and custom night sky visual experiences. We focus on safety, compliance, and precision execution, ensuring every campaign is impactful and professionally delivered.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

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
    <div>
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }}
          />
        ))}
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 700,
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            CRAFTING MOMENTS WITH PIXELS
          </h1>
          <p style={{
            fontSize: '1.5rem',
            maxWidth: '800px',
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
            marginBottom: '1rem'
          }}>
            Traditional media stops at ground level, we take it to the skyline.
          </p>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '900px',
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
            opacity: 0.95
          }}>
            Next-generation aerial advertising and brand activation company redefining how businesses capture attention.
          </p>
        </div>
      </div>

      <div style={{ background: '#000', padding: '5rem 2rem' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '4rem',
          color: '#c1a96c'
        }}>Our Products</h2>
        
        {products.map((product, index) => (
          <div 
            key={index} 
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
            style={{
            maxWidth: '1200px',
            margin: '0 auto 4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: hoveredProduct === index ? '0 8px 40px rgba(193,169,108,0.6), 0 0 0 2px #c1a96c' : '0 8px 30px rgba(0,0,0,0.5)',
            transition: 'all 0.4s ease',
            transform: hoveredProduct === index ? 'translateY(-10px)' : 'translateY(0)'
          }}>
            <div style={{ flex: 1, overflow: 'hidden', borderRadius: '10px' }}>
              <img 
                src={product.image} 
                alt={product.title}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(193,169,108,0.3)',
                  transition: 'transform 0.4s ease',
                  transform: hoveredProduct === index ? 'scale(1.05)' : 'scale(1)'
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                color: '#c1a96c'
              }}>{product.title}</h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#fff'
              }}>{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: '#000', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div 
            onMouseEnter={() => setHoveredCard('quote')}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            borderRadius: '20px',
            boxShadow: hoveredCard === 'quote' ? '0 20px 70px rgba(193,169,108,0.5), 0 0 0 2px #c1a96c' : '0 20px 60px rgba(193,169,108,0.3)',
            overflow: 'hidden',
            display: 'flex',
            transition: 'all 0.4s ease',
            transform: hoveredCard === 'quote' ? 'translateY(-10px)' : 'translateY(0)'
          }}>
            <div style={{
              flex: 1,
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              padding: '3rem',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRight: '2px solid #c1a96c'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem'
              }}>💡</div>
              <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', fontWeight: 700, color: '#c1a96c' }}>Get a Quote</h2>
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
                    background: '#c1a96c',
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
                  Fast Response
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  fontSize: '1.1rem'
                }}>
                  <span style={{
                    background: '#c1a96c',
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
                  Custom Show Planning
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.1rem'
                }}>
                  <span style={{
                    background: '#c1a96c',
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
                  Pan-India Operations
                </div>
              </div>
              <div style={{
                background: 'rgba(193,169,108,0.1)',
                padding: '1.5rem',
                borderRadius: '10px',
                marginTop: '2rem',
                border: '1px solid #c1a96c'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#c1a96c' }}>Have Questions?</h3>
                <p style={{ color: '#fff' }}>We're here to help you create unforgettable moments</p>
              </div>
            </div>
            
            <div style={{ flex: 1, padding: '3rem', background: '#2d2d2d' }}>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '1.5rem',
                color: '#c1a96c',
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
                    background: '#1a1a1a',
                    color: '#fff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#c1a96c'}
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
                    background: '#1a1a1a',
                    color: '#fff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#c1a96c'}
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
                    background: '#1a1a1a',
                    color: '#fff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#c1a96c'}
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
                    background: '#1a1a1a',
                    color: '#fff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#c1a96c'}
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
                    background: '#1a1a1a',
                    color: '#fff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#c1a96c'}
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
                    background: '#1a1a1a',
                    color: '#fff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#c1a96c'}
                  onBlur={(e) => e.target.style.borderColor = '#3d3d3d'}
                />
                <button
                  type="submit"
                  style={{
                    padding: '1.2rem',
                    background: '#c1a96c',
                    color: '#000',
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

      <div style={{ background: '#000', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div 
            onMouseEnter={() => setHoveredCard('franchise')}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            borderRadius: '20px',
            boxShadow: hoveredCard === 'franchise' ? '0 20px 70px rgba(193,169,108,0.5), 0 0 0 2px #c1a96c' : '0 20px 60px rgba(193,169,108,0.3)',
            overflow: 'hidden',
            display: 'flex',
            transition: 'all 0.4s ease',
            transform: hoveredCard === 'franchise' ? 'translateY(-10px)' : 'translateY(0)'
          }}>
            <div style={{
              flex: 1,
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              padding: '3rem',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRight: '2px solid #c1a96c'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem'
              }}>🤝</div>
              <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', fontWeight: 700, color: '#c1a96c' }}>Franchise Enquiry</h2>
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
                    background: '#c1a96c',
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
                    background: '#c1a96c',
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
                    background: '#c1a96c',
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
                background: 'rgba(193,169,108,0.1)',
                padding: '1.5rem',
                borderRadius: '10px',
                marginTop: '2rem',
                border: '1px solid #c1a96c'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#c1a96c' }}>Become a Franchise Partner</h3>
                <p style={{ color: '#fff' }}>Join our growing network of successful partners</p>
              </div>
            </div>
            
            <div style={{ flex: 1, padding: '3rem', background: '#2d2d2d' }}>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '1.5rem',
                color: '#c1a96c',
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
                  onFocus={(e) => e.target.style.borderColor = '#c1a96c'}
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
                  onFocus={(e) => e.target.style.borderColor = '#c1a96c'}
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
                  onFocus={(e) => e.target.style.borderColor = '#c1a96c'}
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
                  onFocus={(e) => e.target.style.borderColor = '#c1a96c'}
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
                  onFocus={(e) => e.target.style.borderColor = '#c1a96c'}
                  onBlur={(e) => e.target.style.borderColor = '#3d3d3d'}
                />
                <button
                  type="submit"
                  style={{
                    padding: '1.2rem',
                    background: '#c1a96c',
                    color: '#000',
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

      <a
        href="https://wa.me/919177067341"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          background: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          color: 'white',
          textDecoration: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 1000,
          transition: 'transform 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        📱
      </a>
    </div>
  )
}

export default Home
