import { motion } from 'framer-motion'
import { latestRelease, streamingLinks } from '../siteConfig'
import BrandIcon from './BrandIcon'

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/matt-couch.jpg)', backgroundPosition: '50% 20%' }}
    />
    <div className="absolute inset-0 bg-dark-900/70" />
    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-dark-900/60" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid xl:grid-cols-2 gap-10 xl:gap-16 items-center min-w-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: -3 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        className="rounded-2xl overflow-hidden glass shadow-2xl mx-auto w-full max-w-sm xl:max-w-none order-1"
      >
        <img
          src={latestRelease.cover}
          alt={`${latestRelease.title} cover art`}
          className="w-full"
        />
      </motion.div>

      <div className="order-2 text-center xl:text-left min-w-0">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-accent-primary tracking-[0.3em] text-sm mb-3 uppercase"
        >
          New Single &middot; {latestRelease.releaseDate}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-display text-6xl sm:text-7xl gradient-text mb-4"
          style={{ lineHeight: 1.25 }}
        >
          {latestRelease.title.toUpperCase()}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.6 }}
          className="text-gray-500 text-sm tracking-[0.2em] uppercase mb-8"
        >
          Nashville &middot; Singer-Songwriter
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex flex-col gap-3 max-w-sm mx-auto xl:mx-0"
        >
          <a
            href={streamingLinks[0].href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent-primary to-accent-tertiary text-dark-900 font-semibold hover:opacity-90 transition-opacity text-center"
          >
            <BrandIcon name={streamingLinks[0].icon} className="w-5 h-5" />
            Play on Spotify
          </a>
          <div className="flex flex-wrap gap-3 justify-center xl:justify-start">
            {streamingLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-full glass text-gray-300 text-sm hover:bg-white/10 hover:text-white transition-colors"
              >
                <BrandIcon name={link.icon} className="w-4 h-4" />
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default Hero
