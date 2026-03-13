import { useState } from 'react'

function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const images = [
    'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515317/pm1_fd9py4.jpg',
    'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515323/pm2_vbmn4j.jpg',
    'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515329/pm3_qgv8wm.jpg',
    'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515336/pm4_k7ij03.jpg',
    'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515344/pm5_l9zthm.jpg',
    'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515351/pm6_p1rgwv.jpg',
    'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515359/pm7_un0pjc.jpg',
    'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772515365/pm8_etb0es.jpg',
    'https://res.cloudinary.com/dx3qbzexm/image/upload/v1772548248/pm12_izekdr.jpg',
    'https://res.cloudinary.com/dx3qbzexm/image/upload/v1772548256/pm13_mdrdnb.jpg',
    'https://res.cloudinary.com/dx3qbzexm/image/upload/v1772548265/pm14_bzpnah.jpg',
    'https://res.cloudinary.com/dx3qbzexm/image/upload/v1772548271/pm15_kmxv0c.jpg',
  ]

  const pageStyle = {
    backgroundColor: '#0a0a0a',
    minHeight: '100vh',
    paddingTop: '100px',
    paddingBottom: '80px',
  }

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 40px',
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '80px',
  }

  const titleStyle = {
    fontSize: '4.5rem',
    fontWeight: 900,
    marginBottom: '20px',
    background: 'linear-gradient(135deg, #1E90FF 0%, #FF8C0A 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '2px',
  }

  const subtitleStyle = {
    color: 'rgba(255,255,255,0.7)',
    fontSize: '1.4rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontWeight: 500,
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
  }

  const cardStyle = (index) => ({
    position: 'relative',
    height: '400px',
    borderRadius: '20px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    border: hoveredIndex === index ? '3px solid #1E90FF' : '3px solid transparent',
    boxShadow: hoveredIndex === index 
      ? '0 20px 60px rgba(30, 144, 255, 0.6), 0 0 40px rgba(255, 140, 10, 0.3)' 
      : '0 10px 30px rgba(0, 0, 0, 0.5)',
    transform: hoveredIndex === index ? 'translateY(-15px) scale(1.03)' : 'translateY(0) scale(1)',
  })

  const imageStyle = (index) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease',
    transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)',
  })

  const overlayStyle = (index) => ({
    position: 'absolute',
    inset: 0,
    background: hoveredIndex === index 
      ? 'linear-gradient(135deg, rgba(30,144,255,0.7) 0%, rgba(255,140,10,0.7) 100%)'
      : 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)',
    opacity: hoveredIndex === index ? 1 : 0.6,
    transition: 'all 0.4s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })

  const overlayTextStyle = {
    color: 'white',
    fontSize: '2.5rem',
    fontWeight: 800,
    textShadow: '0 4px 20px rgba(0,0,0,0.8)',
    opacity: 1,
    transform: 'scale(1)',
    transition: 'all 0.3s ease',
  }

  const numberBadgeStyle = (index) => ({
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: hoveredIndex === index 
      ? 'linear-gradient(135deg, #1E90FF, #FF8C0A)'
      : 'rgba(0,0,0,0.7)',
    border: '2px solid rgba(255,255,255,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 800,
    transition: 'all 0.3s ease',
    zIndex: 2,
  })

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>Our Gallery</h1>
          <p style={subtitleStyle}>
            Witness the magic of aerial LED advertising through our stunning portfolio of unforgettable moments
          </p>
        </div>

        <div style={gridStyle}>
          {images.map((img, index) => (
            <div
              key={index}
              style={cardStyle(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                style={imageStyle(index)}
              />
              {/* <div style={overlayStyle(index)}>
                {hoveredIndex === index && (
                  <div style={overlayTextStyle}>
                    View
                  </div>
                )}
              </div> */}
              {/* <div style={numberBadgeStyle(index)}>
                {index + 1}
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          div[style*="padding: 0 40px"] {
            padding: 0 20px !important;
          }
          h1[style*="fontSize: '4.5rem'"] {
            font-size: 2.5rem !important;
          }
          p[style*="fontSize: '1.4rem'"] {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Gallery
