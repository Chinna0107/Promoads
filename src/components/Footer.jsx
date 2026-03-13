import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/Facebook'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import logo from '../assets/logo.jpeg'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerStyle = {
    backgroundColor: '#0a0a0a',
    borderTop: '3px solid transparent',
    borderImage: 'linear-gradient(90deg, #1E90FF, #FF8C0A) 1',
    paddingTop: '80px',
    paddingBottom: '40px',
  }

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 40px',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '60px',
    marginBottom: '60px',
  }

  const logoBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
  }

  const logoImgStyle = {
    height: '64px',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(30, 144, 255, 0.5)',
    border: '2px solid #1E90FF',
  }

  const brandTextStyle = {
    fontSize: '1.5rem',
    fontWeight: 800,
  }

  const descriptionStyle = {
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '32px',
    lineHeight: 1.9,
    fontSize: '1rem',
  }

  const ctaButtonStyle = {
    background: 'linear-gradient(135deg, #1E90FF, #FF8C0A)',
    color: 'white',
    fontWeight: 800,
    padding: '16px 40px',
    fontSize: '1.1rem',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 8px 32px rgba(30, 144, 255, 0.5)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  }

  const headingStyle = {
    fontWeight: 800,
    marginBottom: '32px',
    fontSize: '1.3rem',
    letterSpacing: '1px',
  }

  const linkStyle = {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '1rem',
    fontWeight: 500,
    textDecoration: 'none',
    display: 'block',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
  }

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
  }

  const iconStyle = {
    fontSize: '24px',
  }

  const socialIconStyle = {
    width: '56px',
    height: '56px',
    backgroundColor: '#1a1a1a',
    border: '2px solid rgba(30, 144, 255, 0.5)',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
    marginRight: '16px',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    textDecoration: 'none',
  }

  const dividerStyle = {
    borderTop: '1px solid rgba(30, 144, 255, 0.3)',
    marginBottom: '32px',
  }

  const copyrightStyle = {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.6)',
    fontSize: '1rem',
    fontWeight: 500,
  }

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Our Services', path: '/products' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ]

  const socialLinks = [
    // { icon: <LinkedInIcon />, url: 'https://linkedin.com', color: '#0077B5' },
    { icon: <InstagramIcon />, url: 'https://instagram.com/promoads.ind', color: '#E4405F' },
    { icon: <YouTubeIcon />, url: 'https://youtube.com', color: '#FF0000' },
    { icon: <FacebookIcon />, url: 'https://facebook.com', color: '#1877F2' },
  ]

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* Company Info */}
          <div>
            <div style={logoBoxStyle}>
              <img src={logo} alt="PromoADS Logo" style={logoImgStyle} />
              <div style={brandTextStyle}>
                <span style={{ color: '#1E90FF' }}>Promo</span>
                <span style={{ color: '#FF8C0A' }}>ADS</span>
              </div>
            </div>
            <p style={descriptionStyle}>
              Next-generation aerial advertising and brand activation company. We specialize in high-impact drone-mounted LED displays that transform the night sky into powerful advertising space.
            </p>
            <Link
              to="/contact"
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #4FA8FF, #FFA940)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(30, 144, 255, 0.7)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #1E90FF, #FF8C0A)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(30, 144, 255, 0.5)'
              }}
            >
              Let's Talk <ArrowForwardIcon />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ ...headingStyle, color: '#1E90FF' }}>Quick Links</h3>
            <div>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#1E90FF'
                    e.currentTarget.style.transform = 'translateX(8px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ ...headingStyle, color: '#FF8C0A' }}>Get In Touch</h3>
            <div>
              <div style={contactItemStyle}>
                <PhoneIcon style={{ ...iconStyle, color: '#1E90FF' }} />
                <a
                  href="tel:+919652945626"
                  style={{ ...linkStyle, marginBottom: 0 }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#1E90FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >
                  +91 9652945626
                </a>
              </div>
              <div style={contactItemStyle}>
                <EmailIcon style={{ ...iconStyle, color: '#FF8C0A' }} />
                <a
                  href="mailto:info@promoads.com"
                  style={{ ...linkStyle, marginBottom: 0 }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C0A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >
                  info@promoads.com
                </a>
              </div>
              <div style={contactItemStyle}>
                <LocationOnIcon style={{ ...iconStyle, color: '#1E90FF' }} />
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', fontWeight: 500, lineHeight: 1.9 }}>
                  19-22-10, STV Nagar<br />
                  Tirupathi<br />
                  Based in Bangalore & Chennai
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 style={{ ...headingStyle, color: '#1E90FF' }}>Connect With Us</h3>
            <div>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialIconStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.color
                    e.currentTarget.style.borderColor = social.color
                    e.currentTarget.style.transform = 'translateY(-8px) rotate(5deg)'
                    e.currentTarget.style.boxShadow = `0 12px 32px ${social.color}60`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1a1a1a'
                    e.currentTarget.style.borderColor = 'rgba(30, 144, 255, 0.5)'
                    e.currentTarget.style.transform = 'translateY(0) rotate(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={dividerStyle}></div>

        {/* Copyright */}
        <div style={copyrightStyle}>
          © {currentYear}{' '}
          <span style={{ color: '#1E90FF', fontWeight: 700 }}>Promo</span>
          <span style={{ color: '#FF8C0A', fontWeight: 700 }}>ADS</span>
          . All rights reserved. |{' '}
          <span style={{ color: '#1E90FF' }}>Transforming the sky into your canvas</span>
          <div style={{ marginTop: '12px', color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem' }}>
            Developed with ❤️ by <a href="https://www.staffarc.in" target="_blank" rel="noopener noreferrer"><span style={{ color: '#FF8C0A', fontWeight: 700 }}>StaffArc</span></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
