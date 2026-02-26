function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop'
  ]

  return (
    <div style={{ background: '#808080', minHeight: '100vh', paddingTop: '100px', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          textAlign: 'center', 
          marginBottom: '3rem', 
          color: '#1E90FF',
          textShadow: '0 4px 20px rgba(30, 144, 255, 0.4)',
          fontWeight: 700
        }}>
          Our Gallery
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          {images.map((img, index) => (
            <div 
              key={index}
              style={{ 
                overflow: 'hidden', 
                borderRadius: '16px',
                border: '2px solid #333',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                position: 'relative',
                height: '300px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.borderColor = '#1E90FF'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(30, 144, 255, 0.3)'
                e.currentTarget.querySelector('img').style.transform = 'scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = '#333'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.querySelector('img').style.transform = 'scale(1)'
              }}
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
