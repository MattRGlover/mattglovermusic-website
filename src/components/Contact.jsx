import { motion } from 'framer-motion'
import { contactEmail, socialLinks } from '../siteConfig'
import BrandIcon from './BrandIcon'

const Contact = () => (
  <section id="contact" className="relative py-14 px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center"
    >
      <p className="text-accent-primary tracking-[0.3em] text-sm mb-4 uppercase">
        Get In Touch
      </p>
      <h2 className="font-display text-4xl sm:text-5xl mb-6 gradient-text">
        Contact
      </h2>
      <p className="text-gray-300 mb-8">
        Booking, press, or just want to say hi &mdash; reach out.
      </p>
      <a
        href={`mailto:${contactEmail}`}
        className="inline-block text-xl sm:text-2xl text-white font-medium mb-10 hover:text-accent-primary transition-colors"
      >
        {contactEmail}
      </a>

      <div className="flex justify-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.name}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-accent-primary hover:bg-white/10 transition-colors"
          >
            <BrandIcon name={link.icon} className="w-5 h-5" />
          </a>
        ))}
      </div>
    </motion.div>
  </section>
)

export default Contact
