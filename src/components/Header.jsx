import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.jpeg'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: '0.8rem 0',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
          <img 
            src={logo} 
            alt="PromoADS Logo" 
            style={{
              height: '60px',
              width: 'auto',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(30, 144, 255, 0.3)'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
          <div style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            letterSpacing: '0.5px'
          }}>
            <span style={{ color: '#1E90FF' }}>Promo</span>
            <span style={{ color: '#FF0000' }}>ADS</span>
          </div>
        </Link>
        
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: '#000',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-menu-btn"
        >
          ☰
        </button>

        <nav style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }} className="desktop-nav">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: '#000',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#1E90FF'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#000'
            e.target.style.transform = 'translateY(0)'
          }}
          ><b>Home</b></Link>
          
          <Link to="/products" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: '#000',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#1E90FF'}
          onMouseLeave={(e) => e.target.style.color = '#000'}
          ><b>Our Services</b></Link>
          
          <Link to="/metrics" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: '#000',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#1E90FF'}
          onMouseLeave={(e) => e.target.style.color = '#000'}
          ><b>Metrics</b></Link>
          
          <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: '#000',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#1E90FF'}
          onMouseLeave={(e) => e.target.style.color = '#000'}
          ><b>Contact Us</b></Link>
          
          <Link to="/franchise" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: '#000',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#1E90FF'}
          onMouseLeave={(e) => e.target.style.color = '#000'}
          ><b>For Franchise</b></Link>
          
          <Link to="/gallery" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: '#000',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#1E90FF'}
          onMouseLeave={(e) => e.target.style.color = '#000'}
          ><b>Gallery</b></Link>
        </nav>

        {menuOpen && (
          <>
            <div 
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.7)',
                zIndex: 9998
              }}
            />
            <nav 
              style={{
                position: 'fixed',
                top: '80px',
                right: '1rem',
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(30, 144, 255, 0.2))',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                zIndex: 9999,
                animation: 'slideIn 0.3s ease',
                boxShadow: '0 10px 40px rgba(30, 144, 255, 0.3)',
                border: '1px solid rgba(30, 144, 255, 0.3)'
              }}
            >
              <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} style={{ color: '#000', textDecoration: 'none', padding: '0.8rem 1.5rem', fontWeight: 700, fontSize: '1.2rem', transition: 'all 0.3s', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)' }} onMouseEnter={(e) => { e.target.style.color = '#1E90FF'; e.target.style.background = 'rgba(30, 144, 255, 0.2)'; e.target.style.transform = 'translateX(5px)'; }} onMouseLeave={(e) => { e.target.style.color = '#000'; e.target.style.background = 'rgba(255, 255, 255, 0.05)'; e.target.style.transform = 'translateX(0)'; }}><b>Home</b></Link>
              <Link to="/products" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} style={{ color: '#000', textDecoration: 'none', padding: '0.8rem 1.5rem', fontWeight: 700, fontSize: '1.2rem', transition: 'all 0.3s', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)' }} onMouseEnter={(e) => { e.target.style.color = '#1E90FF'; e.target.style.background = 'rgba(30, 144, 255, 0.2)'; e.target.style.transform = 'translateX(5px)'; }} onMouseLeave={(e) => { e.target.style.color = '#000'; e.target.style.background = 'rgba(255, 255, 255, 0.05)'; e.target.style.transform = 'translateX(0)'; }}><b>Our Services</b></Link>
              <Link to="/metrics" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} style={{ color: '#000', textDecoration: 'none', padding: '0.8rem 1.5rem', fontWeight: 700, fontSize: '1.2rem', transition: 'all 0.3s', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)' }} onMouseEnter={(e) => { e.target.style.color = '#1E90FF'; e.target.style.background = 'rgba(30, 144, 255, 0.2)'; e.target.style.transform = 'translateX(5px)'; }} onMouseLeave={(e) => { e.target.style.color = '#000'; e.target.style.background = 'rgba(255, 255, 255, 0.05)'; e.target.style.transform = 'translateX(0)'; }}><b>Metrics</b></Link>
              <Link to="/contact" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} style={{ color: '#000', textDecoration: 'none', padding: '0.8rem 1.5rem', fontWeight: 700, fontSize: '1.2rem', transition: 'all 0.3s', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)' }} onMouseEnter={(e) => { e.target.style.color = '#1E90FF'; e.target.style.background = 'rgba(30, 144, 255, 0.2)'; e.target.style.transform = 'translateX(5px)'; }} onMouseLeave={(e) => { e.target.style.color = '#000'; e.target.style.background = 'rgba(255, 255, 255, 0.05)'; e.target.style.transform = 'translateX(0)'; }}><b>Contact Us</b></Link>
              <Link to="/franchise" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} style={{ color: '#000', textDecoration: 'none', padding: '0.8rem 1.5rem', fontWeight: 700, fontSize: '1.2rem', transition: 'all 0.3s', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)' }} onMouseEnter={(e) => { e.target.style.color = '#1E90FF'; e.target.style.background = 'rgba(30, 144, 255, 0.2)'; e.target.style.transform = 'translateX(5px)'; }} onMouseLeave={(e) => { e.target.style.color = '#000'; e.target.style.background = 'rgba(255, 255, 255, 0.05)'; e.target.style.transform = 'translateX(0)'; }}><b>For Franchise</b></Link>
              <Link to="/gallery" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} style={{ color: '#000', textDecoration: 'none', padding: '0.8rem 1.5rem', fontWeight: 700, fontSize: '1.2rem', transition: 'all 0.3s', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)' }} onMouseEnter={(e) => { e.target.style.color = '#1E90FF'; e.target.style.background = 'rgba(30, 144, 255, 0.2)'; e.target.style.transform = 'translateX(5px)'; }} onMouseLeave={(e) => { e.target.style.color = '#000'; e.target.style.background = 'rgba(255, 255, 255, 0.05)'; e.target.style.transform = 'translateX(0)'; }}><b>Gallery</b></Link>
            </nav>
          </>
        )}
      </div>
      
      <style>{`
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateX(20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          header img { height: 45px !important; }
          header > div { padding: 0 1rem !important; }
        }
      `}</style>
    </header>
  )
}

export default Header
