import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Products from './components/Products'
import Metrics from './components/Metrics'
import Contact from './components/Contact'
import Franchise from './components/Franchise'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'

function App() {
  return (
    <Router>
      <Header />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </PageTransition>
      <Footer />
    </Router>
  )
}

export default App
