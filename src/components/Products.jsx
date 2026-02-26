import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Products.css'

function Products() {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="products-page">
      <div className="products-grid">
        <div className="product-card">
          <div className="product-image">
            <img 
              src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=600&h=400&fit=crop" 
              alt="Skyvertising Metrics" 
            />
          </div>
          <div className="product-content">
            <h2>Skyvertising Metrics</h2>
            <p>
              Discover the power of data-driven sky advertising. Our advanced metrics system helps you 
              understand visibility, reach, and physical impressions based on altitude, canvas size, and 
              city density.
            </p>
            <p>
              Calculate real-time estimates of how your aerial campaigns translate into actual impressions 
              on the ground. Make informed decisions with our comprehensive analytics tools.
            </p>
            <ul>
              <li>Real-time visibility calculations</li>
              <li>Altitude and canvas size optimization</li>
              <li>City density impact analysis</li>
              <li>Physical impression estimates</li>
            </ul>
            <button className="cta-button" onClick={() => navigate('/metrics')}>View Metrics</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop" 
              alt="Promotional advertising" 
            />
          </div>
          <div className="product-content">
            <h2>Promotions</h2>
            <p>
              Take your brand to new heights with our innovative sky advertising solutions. 
              Our promotional campaigns deliver unmatched visibility and engagement, ensuring 
              your message reaches thousands of potential customers.
            </p>
            <p>
              With customizable flight paths, strategic timing, and eye-catching displays, 
              we help you create memorable marketing moments that stand out from traditional 
              advertising methods.
            </p>
            <ul>
              <li>High-impact visual presence</li>
              <li>Flexible campaign duration</li>
              <li>Real-time tracking and analytics</li>
              <li>Cost-effective reach</li>
            </ul>
            <button className="cta-button" onClick={() => setShowModal(true)}>Learn More</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <h2>Promotional Campaigns</h2>
            <p>
              Our promotional sky advertising campaigns are designed to maximize your brand's visibility 
              and create lasting impressions. We offer comprehensive packages that include:
            </p>
            <div className="modal-features">
              <div className="feature-item">
                <h3>🎯 Strategic Planning</h3>
                <p>Custom flight paths targeting high-traffic areas and events</p>
              </div>
              <div className="feature-item">
                <h3>📊 Analytics Dashboard</h3>
                <p>Real-time tracking with detailed impression reports and ROI metrics</p>
              </div>
              <div className="feature-item">
                <h3>🎨 Creative Design</h3>
                <p>Professional design services for eye-catching aerial displays</p>
              </div>
              <div className="feature-item">
                <h3>⏱️ Flexible Scheduling</h3>
                <p>Choose from hourly, daily, or extended campaign durations</p>
              </div>
            </div>
            <p className="modal-cta">Contact us today to launch your sky advertising campaign!</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products
