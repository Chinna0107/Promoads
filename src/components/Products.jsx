import './Products.css'

function Products() {
  return (
    <div style={{ background: '#FF8C0A', minHeight: '100vh', paddingTop: '100px', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          textAlign: 'center', 
          marginBottom: '3rem', 
          color: '#1E90FF',
          textShadow: '0 4px 20px rgba(30, 144, 255, 0.4)',
          fontWeight: 700
        }}>
          Our Services
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
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
    </div>
  )
}

export default Products
