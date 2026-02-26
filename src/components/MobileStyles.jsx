export const mobileStyles = `
  @media (max-width: 768px) {
    /* Hero Section */
    .hero-section h1 {
      font-size: 2rem !important;
      padding: 0 1rem;
    }
    
    .hero-section p {
      font-size: 1rem !important;
      padding: 0 1rem;
    }
    
    /* Product Cards */
    .product-card {
      flex-direction: column !important;
      padding: 1.5rem !important;
      margin: 0 1rem 2rem !important;
    }
    
    .product-card img {
      height: 250px !important;
    }
    
    /* Quote and Franchise Cards */
    .quote-card, .franchise-card {
      flex-direction: column !important;
      margin: 0 1rem !important;
    }
    
    .quote-card > div, .franchise-card > div {
      border-right: none !important;
      border-bottom: 2px solid #1E90FF !important;
      padding: 2rem 1.5rem !important;
    }
    
    /* Forms */
    form input, form textarea {
      font-size: 16px !important;
    }
    
    /* Footer */
    .footer-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
      text-align: center !important;
    }
    
    /* General */
    section {
      padding: 3rem 1rem !important;
    }
    
    h2 {
      font-size: 1.8rem !important;
    }
    
    h3 {
      font-size: 1.3rem !important;
    }
  }
  
  @media (max-width: 480px) {
    .hero-section h1 {
      font-size: 1.5rem !important;
    }
    
    .product-card img {
      height: 200px !important;
    }
  }
`
