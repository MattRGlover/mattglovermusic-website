import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Music from './components/Music'
import Photos from './components/Photos'
import StonebridgeTeaser from './components/StonebridgeTeaser'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import StonebridgePage from './pages/StonebridgePage'
import MerchPage from './pages/MerchPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="noise" />
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <main>
                    <Hero />
                    <About />
                    <Music />
                    <Photos />
                    <StonebridgeTeaser />
                    <Contact />
                  </main>
                }
              />
              <Route path="/stonebridge" element={<StonebridgePage />} />
              <Route path="/merch" element={<MerchPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  )
}

export default App
