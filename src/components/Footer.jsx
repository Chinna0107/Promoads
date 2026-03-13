import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import logo from '../assets/logo.jpeg'

function Footer() {
  return (
    <footer style={{ width: '100vw', margin: 0, padding: 0, boxSizing: 'border-box', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
      
      {/* Section 1: Company Info & Inquiries */}
      <div style={{ backgroundColor: '#FF8C0A', padding: '4rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <img src={logo} alt="PromoADS Logo" style={{ height: '50px', width: 'auto', borderRadius: '8px' }} />
          </div>
          <p style={{ color: '#FFF', lineHeight: '1.8', fontSize: '1rem', maxWidth: '500px' }}>Next-generation aerial advertising and brand activation company. We specialize in high-impact drone-mounted LED displays that transform the night sky into powerful advertising space.</p>
        </div>
        
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1.5rem' }}>
          <p style={{ color: '#1E90FF', fontSize: '1.0rem', fontWeight: '800', margin: 0, letterSpacing: '2px', textTransform: 'uppercase' }}>Enquiries</p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', color: '#fff', fontSize: '0.9rem', fontWeight: '800', backgroundColor: '#667eea', padding: '1rem 2.5rem', borderRadius: '50px', transition: 'all 0.4s ease', boxShadow: '0 8px 25px rgba(102, 126, 234, 0.5)', textTransform: 'uppercase', letterSpacing: '2px', border: '2px solid transparent' }} onMouseOver={(e) => { e.currentTarget.style.color = '#667eea'; e.currentTarget.style.borderColor = '#667eea'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.7)'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#667eea'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.5)'; }}>Let's Talk Now <FaArrowUp style={{ transform: 'rotate(45deg)' }} /></Link>
        </div>
      </div>

      {/* Section 2: Location, Get In Touch, Explore, Connect */}
      <div style={{ backgroundColor: '#FF8C0A', padding: '4rem 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
        
        {/* Location */}
        <div>
          <h3 style={{ color: '#1E90FF', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>Location</h3>
          <p style={{ color: '#FFF', lineHeight: '1.8', fontSize: '0.95rem' }}>
            19-22-10, STV Nagar<br />
            Tirupathi<br />
            Based in Bangalore & Chennai
          </p>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 style={{ color: '#1E90FF', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>Get In Touch</h3>
          <a href="tel:+919652945626" style={{ color: '#FFF', textDecoration: 'none', fontSize: '1rem', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }} onMouseOver={(e) => { e.currentTarget.style.color = '#1E90FF'; }} onMouseOut={(e) => { e.currentTarget.style.color = '#FFF'; }}><FaPhone /> +91 9652945626</a>
          <a href="mailto:info@promoads.com" style={{ color: '#FFF', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onMouseOver={(e) => { e.currentTarget.style.color = '#1E90FF'; }} onMouseOut={(e) => { e.currentTarget.style.color = '#FFF'; }}><FaEnvelope /> info@promoads.com</a>
        </div>

        {/* Explore */}
        <div>
          <h3 style={{ color: '#1E90FF', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>Explore</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ color: '#FFF', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s', position: 'relative', display: 'inline-block', width: 'fit-content' }} onMouseOver={(e) => { e.target.style.color = '#1E90FF'; e.target.style.textDecoration = 'underline'; e.target.style.textUnderlineOffset = '4px'; }} onMouseOut={(e) => { e.target.style.color = '#FFF'; e.target.style.textDecoration = 'none'; }}>Home</Link>
            <Link to="/products" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ color: '#FFF', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s', position: 'relative', display: 'inline-block', width: 'fit-content' }} onMouseOver={(e) => { e.target.style.color = '#1E90FF'; e.target.style.textDecoration = 'underline'; e.target.style.textUnderlineOffset = '4px'; }} onMouseOut={(e) => { e.target.style.color = '#FFF'; e.target.style.textDecoration = 'none'; }}>Our Services</Link>
            <Link to="/gallery" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ color: '#FFF', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s', position: 'relative', display: 'inline-block', width: 'fit-content' }} onMouseOver={(e) => { e.target.style.color = '#1E90FF'; e.target.style.textDecoration = 'underline'; e.target.style.textUnderlineOffset = '4px'; }} onMouseOut={(e) => { e.target.style.color = '#FFF'; e.target.style.textDecoration = 'none'; }}>Gallery</Link>
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ color: '#FFF', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s', position: 'relative', display: 'inline-block', width: 'fit-content' }} onMouseOver={(e) => { e.target.style.color = '#1E90FF'; e.target.style.textDecoration = 'underline'; e.target.style.textUnderlineOffset = '4px'; }} onMouseOut={(e) => { e.target.style.color = '#FFF'; e.target.style.textDecoration = 'none'; }}>Contact</Link>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h3 style={{ color: '#1E90FF', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>Connect</h3>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF', fontSize: '1.8rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.target.style.color = '#1E90FF'; e.target.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.target.style.color = '#FFF'; e.target.style.transform = 'translateY(0)'; }}><FaLinkedin /></a>
            <a href="https://instagram.com/promoads.ind" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF', fontSize: '1.8rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.target.style.color = '#1E90FF'; e.target.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.target.style.color = '#FFF'; e.target.style.transform = 'translateY(0)'; }}><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF', fontSize: '1.8rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.target.style.color = '#1E90FF'; e.target.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.target.style.color = '#FFF'; e.target.style.transform = 'translateY(0)'; }}><FaYoutube /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF', fontSize: '1.8rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.target.style.color = '#1E90FF'; e.target.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.target.style.color = '#FFF'; e.target.style.transform = 'translateY(0)'; }}><FaFacebook /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: '#FF8C0A', padding: '2rem 5%', textAlign: 'center', borderTop: '1px solid #333' }}>
        <p style={{ color: '#FFF', fontSize: '0.9rem', letterSpacing: '0.5px', margin: 0 }}>© {new Date().getFullYear()} PromoADS. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
