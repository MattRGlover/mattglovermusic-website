import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { stonebridgeEmail } from '../siteConfig'

const StonebridgePage = () => (
  <div className="min-h-screen px-6 pt-32 pb-24">
    <div className="max-w-3xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
      >
        <ArrowLeft size={18} />
        Back home
      </Link>

      <div className="text-center">
        <motion.img
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          src="/images/stonebridge-logo.png"
          alt="Stonebridge Records"
          className="w-64 sm:w-80 mb-6 mx-auto"
        />

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display text-4xl sm:text-5xl mb-8 gradient-text-accent"
        >
          Stonebridge Records
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-300 leading-relaxed space-y-5 max-w-2xl mx-auto"
        >
          <p>
            Stonebridge Records is Matt Glover's independent record label,
            founded in 2024 for the distribution and management of all the
            music he writes and produces.
          </p>
          <p>
            Inquiries to join are open.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-16 rounded-2xl glass p-8 sm:p-10 text-center"
      >
        <h2 className="font-display text-2xl mb-3 text-white tracking-wide">Demos &amp; Inquiries</h2>
        <p className="text-gray-400 mb-4">
          Looking to submit music or talk business? Reach out below.
        </p>
        <a
          href={`mailto:${stonebridgeEmail}`}
          className="text-lg text-accent-secondary hover:text-accent-primary transition-colors font-medium"
        >
          {stonebridgeEmail}
        </a>
      </motion.div>
    </div>
  </div>
)

export default StonebridgePage
