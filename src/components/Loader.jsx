import { motion } from 'framer-motion'

const Loader = () => (
  <motion.div
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="fixed inset-0 z-[2000] flex items-center justify-center bg-dark-900"
  >
    <motion.img
      src="/images/matt-glover-logo.png"
      alt="Matt Glover"
      className="w-56 sm:w-64"
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
    />
  </motion.div>
)

export default Loader
