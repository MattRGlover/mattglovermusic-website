import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const StonebridgeTeaser = () => (
  <section className="relative py-10 px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto rounded-2xl glass p-10 sm:p-14 text-center"
    >
      <img
        src="/images/stonebridge-logo.png"
        alt="Stonebridge Records logo"
        className="w-28 sm:w-32 mx-auto mb-6"
      />
      <h2 className="font-display text-4xl sm:text-5xl mb-6 gradient-text-accent">
        Stonebridge Records
      </h2>
      <p className="text-gray-300 max-w-xl mx-auto mb-8">
        Matt's independent record label, founded in 2024 for the
        distribution and management of all the music he writes and
        produces. Inquiries to join are open.
      </p>
      <Link
        to="/stonebridge"
        className="inline-block px-7 py-3 rounded-full bg-gradient-to-r from-accent-secondary to-lilac-dark text-dark-900 font-semibold hover:opacity-90 transition-opacity"
      >
        Visit Stonebridge Records
      </Link>
    </motion.div>
  </section>
)

export default StonebridgeTeaser
