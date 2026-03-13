import { useState } from "react"

function Products() {

  const [hoveredIndex, setHoveredIndex] = useState(null)

  const services = [
    {
      title: "Weddings",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    },
    {
      title: "Political Events",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800",
    },
    {
      title: "Corporate Events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    },
    {
      title: "Launch Events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    },
    {
      title: "Surprise Events",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
    },
    {
      title: "Birthday Celebrations",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
    },
    {
      title: "Personal Events",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
    },
    {
      title: "Any Event",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
    },
  ]

  const pageStyle = {
    backgroundColor: "#0a0a0a",
    minHeight: "100vh",
    paddingTop: "100px",
    paddingBottom: "80px",
  }

  const containerStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 40px",
  }

  const headerStyle = {
    textAlign: "center",
    marginBottom: "80px",
  }

  const titleStyle = {
    fontSize: "4.5rem",
    fontWeight: 900,
    marginBottom: "20px",
    background: "linear-gradient(135deg, #1E90FF 0%, #FF8C0A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "2px",
  }

  const subtitleStyle = {
    color: "rgba(255,255,255,0.7)",
    fontSize: "1.4rem",
    maxWidth: "800px",
    margin: "0 auto",
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 products per row
    gap: "30px",
  }

  const cardStyle = (index) => ({
    position: "relative",
    height: "420px",
    borderRadius: "20px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.5s ease",
    border:
      hoveredIndex === index
        ? "3px solid #1E90FF"
        : "3px solid transparent",
    boxShadow:
      hoveredIndex === index
        ? "0 20px 60px rgba(30,144,255,0.6)"
        : "0 10px 30px rgba(0,0,0,0.5)",
    transform:
      hoveredIndex === index
        ? "translateY(-15px) scale(1.03)"
        : "translateY(0)",
  })

  const imageStyle = (index) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.6s",
    transform:
      hoveredIndex === index
        ? "scale(1.2)"
        : "scale(1)",
  })

  const overlayStyle = (index) => ({
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)",
    opacity: 0.7,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.4s",
  })

  const titleOverlay = {
    color: "white",
    fontSize: "2rem",
    fontWeight: 800,
    textShadow: "0 4px 20px rgba(0,0,0,0.9)",
  }

  const buttonStyle = {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "12px 28px",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(135deg,#1E90FF,#FF8C0A)",
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
  }

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>

        <div style={headerStyle}>
          <h1 style={titleStyle}>Our Premium Services</h1>
          <p style={subtitleStyle}>
            Cutting-edge aerial LED advertising solutions for every type of event
          </p>
        </div>

        <div style={gridStyle}>
          {services.map((service, index) => (
            <div
              key={index}
              style={cardStyle(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >

              <img
                src={service.image}
                alt={service.title}
                style={imageStyle(index)}
              />

              <div style={overlayStyle(index)}>
                <div style={titleOverlay}>{service.title}</div>
              </div>

              <button
                style={buttonStyle}
                onClick={() =>
                  window.location.href = `/contact?service=${encodeURIComponent(service.title)}`
                }
              >
                Get Quotation
              </button>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(2,1fr) !important;
          }
        }

        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }

          h1[style*="fontSize"]{
            font-size:2.5rem !important;
          }
        }
      `}</style>

    </div>
  )
}

export default Products
