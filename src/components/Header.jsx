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
      background: 'linear-gradient(135deg, rgba(8, 12, 20, 0.55) 0%, rgba(30, 144, 255, 0.18) 100%)',
      backdropFilter: 'blur(18px) saturate(140%)',
      WebkitBackdropFilter: 'blur(18px) saturate(140%)',
      padding: '0.9rem 0',
      zIndex: 1000,
      boxShadow: '0 12px 32px rgba(0,0,0,0.35)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.18)'
    }}>
      <div style={{
        position: 'absolute',
        inset: '0 0 auto 0',
        height: '2px',
        background: 'linear-gradient(90deg, #1E90FF, #FF8C0A, #1E90FF)',
        opacity: 0.9
      }} />
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
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
              boxShadow: '0 10px 25px rgba(30, 144, 255, 0.45)',
              border: '1px solid rgba(255, 255, 255, 0.35)'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
          <div style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            letterSpacing: '0.5px',
            color: '#fff',
            textShadow: '0 2px 10px rgba(0,0,0,0.45)'
          }}>
            <span style={{ color: '#1E90FF' }}>Promo </span>
            <span style={{ color: '#df6a11' }}>ads</span>
          </div>
        </Link>
        
        <button 
          className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            position: 'relative',
            width: '30px',
            height: '30px'
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }} className="desktop-nav">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            position: 'relative',
            padding: '0.4rem 0.6rem',
            borderRadius: '10px',
            textShadow: '0 2px 10px rgba(0,0,0,0.45)'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#1E90FF'
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.background = 'rgba(255, 255, 255, 0.12)'
            e.target.style.boxShadow = '0 8px 20px rgba(30, 144, 255, 0.35)'
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#fff'
            e.target.style.transform = 'translateY(0)'
            e.target.style.background = 'transparent'
            e.target.style.boxShadow = 'none'
          }}
          ><b>Home</b></Link>
          
          <Link to="/products" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            padding: '0.4rem 0.6rem',
            borderRadius: '10px',
            textShadow: '0 2px 10px rgba(0,0,0,0.45)'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#1E90FF'
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.background = 'rgba(255, 255, 255, 0.12)'
            e.target.style.boxShadow = '0 8px 20px rgba(30, 144, 255, 0.35)'
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#fff'
            e.target.style.transform = 'translateY(0)'
            e.target.style.background = 'transparent'
            e.target.style.boxShadow = 'none'
          }}
          ><b>Our Services</b></Link>
          
          <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            padding: '0.4rem 0.6rem',
            borderRadius: '10px',
            textShadow: '0 2px 10px rgba(0,0,0,0.45)'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#1E90FF'
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.background = 'rgba(255, 255, 255, 0.12)'
            e.target.style.boxShadow = '0 8px 20px rgba(30, 144, 255, 0.35)'
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#fff'
            e.target.style.transform = 'translateY(0)'
            e.target.style.background = 'transparent'
            e.target.style.boxShadow = 'none'
          }}
          ><b>Contact Us</b></Link>
          
          <Link to="/gallery" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            padding: '0.4rem 0.6rem',
            borderRadius: '10px',
            textShadow: '0 2px 10px rgba(0,0,0,0.45)'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#1E90FF'
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.background = 'rgba(255, 255, 255, 0.12)'
            e.target.style.boxShadow = '0 8px 20px rgba(30, 144, 255, 0.35)'
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#fff'
            e.target.style.transform = 'translateY(0)'
            e.target.style.background = 'transparent'
            e.target.style.boxShadow = 'none'
          }}
          ><b>Gallery</b></Link>
        </nav>

        {menuOpen && (
          <>
            <div 
              className="menu-backdrop"
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
                background: 'linear-gradient(145deg, rgba(30, 144, 255, 0.98), rgba(255, 140, 10, 0.98))',
                backdropFilter: 'blur(20px)',
                borderRadius: '25px',
                padding: '2.5rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                zIndex: 9999,
                animation: 'slideIn 0.3s ease',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                minWidth: '250px'
              }}
            >
              <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} style={{ color: '#fff', textDecoration: 'none', padding: '1rem 1.5rem', fontWeight: 700, fontSize: '1.1rem', transition: 'all 0.3s', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }} onMouseEnter={(e) => { e.target.style.color = '#000'; e.target.style.background = 'rgba(255, 255, 255, 0.95)'; e.target.style.transform = 'translateX(8px) scale(1.05)'; e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)'; }} onMouseLeave={(e) => { e.target.style.color = '#fff'; e.target.style.background = 'rgba(255, 255, 255, 0.15)'; e.target.style.transform = 'translateX(0) scale(1)'; e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'; }}><b>Home</b></Link>
              <Link to="/products" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} style={{ color: '#fff', textDecoration: 'none', padding: '1rem 1.5rem', fontWeight: 700, fontSize: '1.1rem', transition: 'all 0.3s', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }} onMouseEnter={(e) => { e.target.style.color = '#000'; e.target.style.background = 'rgba(255, 255, 255, 0.95)'; e.target.style.transform = 'translateX(8px) scale(1.05)'; e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)'; }} onMouseLeave={(e) => { e.target.style.color = '#fff'; e.target.style.background = 'rgba(255, 255, 255, 0.15)'; e.target.style.transform = 'translateX(0) scale(1)'; e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'; }}><b>Our Services</b></Link>
              <Link to="/contact" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} style={{ color: '#fff', textDecoration: 'none', padding: '1rem 1.5rem', fontWeight: 700, fontSize: '1.1rem', transition: 'all 0.3s', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }} onMouseEnter={(e) => { e.target.style.color = '#000'; e.target.style.background = 'rgba(255, 255, 255, 0.95)'; e.target.style.transform = 'translateX(8px) scale(1.05)'; e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)'; }} onMouseLeave={(e) => { e.target.style.color = '#fff'; e.target.style.background = 'rgba(255, 255, 255, 0.15)'; e.target.style.transform = 'translateX(0) scale(1)'; e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'; }}><b>Contact Us</b></Link>
              <Link to="/gallery" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} style={{ color: '#fff', textDecoration: 'none', padding: '1rem 1.5rem', fontWeight: 700, fontSize: '1.1rem', transition: 'all 0.3s', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }} onMouseEnter={(e) => { e.target.style.color = '#000'; e.target.style.background = 'rgba(255, 255, 255, 0.95)'; e.target.style.transform = 'translateX(8px) scale(1.05)'; e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)'; }} onMouseLeave={(e) => { e.target.style.color = '#fff'; e.target.style.background = 'rgba(255, 255, 255, 0.15)'; e.target.style.transform = 'translateX(0) scale(1)'; e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'; }}><b>Gallery</b></Link>
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
          .mobile-menu-btn span {
            display: block;
            width: 25px;
            height: 2px;
            background: #fff;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            transition: all 0.3s ease;
          }
          .mobile-menu-btn span:nth-child(1) {
            top: 8px;
          }
          .mobile-menu-btn span:nth-child(2) {
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .mobile-menu-btn span:nth-child(3) {
            bottom: 8px;
          }
          .mobile-menu-btn.active span:nth-child(1) {
            top: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
          }
          .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
          }
          .mobile-menu-btn.active span:nth-child(3) {
            bottom: 50%;
            transform: translate(-50%, 50%) rotate(-45deg);
          }
          header img { height: 45px !important; }
          header > div { padding: 0 1rem !important; }
        }
      `}</style>
    </header>
  )
}

export default Header
