import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function PageTransition({ children }) {
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [location])

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInScale {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      .page-content h1, .page-content h2, .page-content h3, .page-content p {
        animation: fadeInUp 0.8s ease forwards;
      }
      .page-content h1 { animation-delay: 0.1s; }
      .page-content h2 { animation-delay: 0.2s; }
      .page-content h3 { animation-delay: 0.3s; }
      .page-content p { animation-delay: 0.4s; }
      .page-content img {
        animation: fadeInScale 1s ease forwards;
        animation-delay: 0.5s;
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  return (
    <div className="page-content" style={{
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.3s ease'
    }}>
      {children}
    </div>
  )
}

export default PageTransition
