import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Music', href: '/#music' },
  { name: 'Photos', href: '/#photos' },
  { name: 'Stonebridge Records', href: '/stonebridge' },
  { name: 'Merch', href: '/merch' },
  { name: 'Contact', href: '/#contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (e, href) => {
    if (!href.startsWith('/#')) return
    e.preventDefault()
    const sectionId = href.slice(2)
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
      style={
        isScrolled
          ? { background: 'rgba(12,12,13,0.8)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <div className="flex items-center gap-3 justify-self-start whitespace-nowrap">
          <Link to="/" className="flex items-center">
            <motion.img
              src="/images/matt-glover-logo.png"
              alt="Matt Glover"
              className="h-9 sm:h-11"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>
          <span className="hidden sm:inline-block w-px h-4 bg-white/15" />
          <Link to="/stonebridge" className="hidden sm:inline-block" aria-label="Stonebridge Records">
            <motion.img
              src="/images/stonebridge-logo.png"
              alt="Stonebridge Records"
              className="h-10 w-10 opacity-90"
              whileHover={{ scale: 1.1, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 justify-self-center col-start-2">
          {navItems.map((item, index) =>
            item.href.startsWith('/#') ? (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-400 hover:text-white transition-colors relative group text-sm tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ) : item.href.startsWith('http') ? (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors relative group text-sm tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ) : (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  to={item.href}
                  className="text-gray-400 hover:text-white transition-colors relative group text-sm tracking-wide"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            )
          )}
        </div>

        <button
          className="md:hidden text-white justify-self-end col-start-3"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-800 border-t border-white/10 mt-4"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {navItems.map((item) =>
                item.href.startsWith('/#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                ) : item.href.startsWith('http') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
