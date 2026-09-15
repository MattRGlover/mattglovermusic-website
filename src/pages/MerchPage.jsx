import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const MerchPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
    <Link
      to="/"
      className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors absolute top-28 left-6"
    >
      <ArrowLeft size={18} />
      Back home
    </Link>

    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-accent-primary tracking-[0.3em] text-sm mb-4 uppercase"
    >
      Merch
    </motion.p>
    <motion.h1
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="font-display text-4xl sm:text-6xl mb-6 gradient-text"
    >
      Matt Glover Merchandise
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-gray-400 text-lg"
    >
      Coming soon.
    </motion.p>
  </div>
)

export default MerchPage
