import { useState, useEffect } from 'react'
import videoFile from '../assets/video.mp4'

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
  
  const images = [
    'https://res.cloudinary.com/dx3qbzexm/image/upload/v1772548248/pm12_izekdr.jpg',
    'https://res.cloudinary.com/dx3qbzexm/image/upload/v1772548256/pm13_mdrdnb.jpg',
    'https://res.cloudinary.com/dx3qbzexm/image/upload/v1772548265/pm14_bzpnah.jpg',
    'https://res.cloudinary.com/dx3qbzexm/image/upload/v1772548271/pm15_kmxv0c.jpg',
    'https://res.cloudinary.com/dx3qbzexm/image/upload/v1772548104/pm11_q5hvqy.jpg'
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

  return (
    <div>
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source src={videoFile} type="video/mp4" />
        </video>
        
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
            <b>Promo ads<br></br> better dreams deserves better promos.</b>
          </h1>
          <p style={{
            fontSize: '1.5rem',
            maxWidth: '800px',
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
            marginBottom: '1rem'
          }}>
            {/* In a world crowded with traditional advertising, we take your message above the noise — literally. */}
          </p>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '900px',
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
            opacity: 0.95
          }}>
            {/* Through cutting-edge aerial LED technology, we transform the night sky into a powerful branding platform. From real estate launches and large-scale events to political campaigns and corporate activations, we create unforgettable visual experiences that demand attention and drive impact. */}
          </p>
        </div>
      </div>

      <div style={{ background: '#FF8C0A', padding: '5rem 2rem' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '3rem',
          marginBottom: '4rem',
          fontWeight: 700
        }}>
          <span style={{ color: '#1E90FF' }}>Our </span>
          <span style={{ color: '#1E90FF' }}>Services</span>
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {[
            { title: 'Weddings', image: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515317/pm1_fd9py4.jpg' },
            { title: 'Political Events', image: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515323/pm2_vbmn4j.jpg' },
            { title: 'Corporate Events', image: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515329/pm3_qgv8wm.jpg' },
            { title: 'Launches', image: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515336/pm4_k7ij03.jpg' },
            { title: 'Surprises', image: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515344/pm5_l9zthm.jpg' },
            { title: 'Birthdays', image: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515351/pm6_p1rgwv.jpg' },
            { title: 'Personal Events', image: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515359/pm7_un0pjc.jpg' },
            { title: 'Any Kind of Event', image: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515365/pm8_etb0es.jpg' }
          ].map((service, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                borderRadius: '15px',
                overflow: 'hidden',
                height: '350px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 30px rgba(30, 144, 255, 0.2)',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = '0 12px 50px rgba(30, 144, 255, 0.4)'
                e.currentTarget.style.border = '2px solid #1E90FF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(30, 144, 255, 0.2)'
                e.currentTarget.style.border = '2px solid transparent'
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: '#fff',
                  textAlign: 'center'
                }}>{service.title}</h3>
                <button
                  onClick={() => {
                    window.location.href = `/contact?service=${encodeURIComponent(service.title)}`
                  }}
                  style={{
                    padding: '0.8rem 2rem',
                    background: 'linear-gradient(135deg, #1E90FF, #FF0000)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'transform 0.3s',
                    boxShadow: '0 4px 15px rgba(30, 144, 255, 0.4)'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  Get Your Quotation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: '#FF8C0A', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div 
            onMouseEnter={() => setHoveredCard('quote')}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
            background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%)',
            borderRadius: '20px',
            boxShadow: hoveredCard === 'quote' ? '0 20px 70px rgba(193,169,108,0.5), 0 0 0 2px #1E90FF' : '0 20px 60px rgba(193,169,108,0.3)',
            overflow: 'hidden',
            display: 'flex',
            transition: 'all 0.4s ease',
            transform: hoveredCard === 'quote' ? 'translateY(-10px)' : 'translateY(0)'
          }}>
            <div style={{
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
              <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.8', color: '#000' }}>
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
                    background: '#1E90FF',
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
                    background: '#1E90FF',
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
                border: '1px solid #1E90FF'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1E90FF' }}>Have Questions?</h3>
                <p style={{ color: '#000' }}>We're here to help you create unforgettable moments</p>
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
                  list="eventTypes"
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
                <datalist id="eventTypes">
                  <option value="Weddings" />
                  <option value="Political Events" />
                  <option value="Corporate Events" />
                  <option value="Launches" />
                  <option value="Surprises" />
                  <option value="Birthdays" />
                  <option value="Personal Events" />
                  <option value="Any Kind of Event" />
                </datalist>
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
      
      <style>{`
        @media (max-width: 768px) {
          div[style*="display: flex"] > div[style*="borderRight"] {
            border-right: none !important;
            border-bottom: 2px solid #1E90FF !important;
          }
          div[style*="display: flex"][style*="overflow: hidden"] {
            flex-direction: column !important;
          }
          div[style*="flexDirection: index"][style*="row"],
          div[style*="flexDirection: index"][style*="row-reverse"] {
            flex-direction: column !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
