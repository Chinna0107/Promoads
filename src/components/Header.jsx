import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'transparent',
      padding: '1rem 0',
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.8rem',
          fontWeight: 700,
          color: 'white',
          letterSpacing: '1px',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onClick={() => window.location.reload()}
        onMouseEnter={(e) => {
          e.target.style.color = '#FFD700'
          e.target.style.transform = 'scale(1.05)'
          e.target.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.5)'
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'white'
          e.target.style.transform = 'scale(1)'
          e.target.style.textShadow = 'none'
        }}
        >PromoADS</div>
        
        <nav style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#FFD700'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'white'
            e.target.style.transform = 'translateY(0)'
          }}
          ><b>Home</b></Link>
          
          <Link to="/products" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#FFD700'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'white'
            e.target.style.transform = 'translateY(0)'
          }}
          ><b>Products</b></Link>
          
          <Link to="/metrics" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#FFD700'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'white'
            e.target.style.transform = 'translateY(0)'
          }}
          ><b>Metrics</b></Link>
          <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#FFD700'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'white'
            e.target.style.transform = 'translateY(0)'
          }}
          ><b>Contact Us</b></Link>
          <Link to="/franchise" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#FFD700'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'white'
            e.target.style.transform = 'translateY(0)'
          }}
          ><b>For Franchise</b></Link>
          <Link to="/gallery" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#FFD700'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'white'
            e.target.style.transform = 'translateY(0)'
          }}
          ><b>Gallery</b></Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
