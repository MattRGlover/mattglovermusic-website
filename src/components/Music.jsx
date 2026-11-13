import { motion } from 'framer-motion'
import { previousReleases, credits } from '../siteConfig'
import BrandIcon from './BrandIcon'

const Music = () => (
  <section id="music" className="relative py-14 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent-primary tracking-[0.3em] text-sm mb-4 uppercase text-center"
      >
        Previous Releases
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl mb-10 gradient-text text-center"
      >
        Listen
      </motion.h2>

      {previousReleases.map((r) => (
        <motion.div
          key={r.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass p-6 sm:p-8 mb-10"
        >
          <div className="min-w-0">
            <h3 className="font-display text-3xl text-white mb-1">{r.title}</h3>
            <p className="text-gray-400 text-sm tracking-[0.15em] uppercase mb-4">
              Debut Single &middot; {r.releaseDate}
            </p>
            <iframe
              title={`${r.title} on Spotify`}
              style={{ borderRadius: '12px' }}
              src={r.spotifyEmbedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
            <div className="flex flex-wrap gap-3 mt-3">
              {r.links.slice(1).map((link) => (
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
          </div>
        </motion.div>
      ))}

      <p className="text-accent-primary tracking-[0.3em] text-sm mb-4 mt-14 uppercase text-center">
        Decorum &amp; Under Control
      </p>
      <h2 className="font-display text-3xl sm:text-4xl mb-8 gradient-text text-center">Credits</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl glass p-8 sm:p-10"
      >
        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <p className="text-accent-primary text-xs tracking-[0.2em] uppercase mb-3">
              Songwriters
            </p>
            <ul className="space-y-1.5">
              {credits.songwriters.map((c) => (
                <li key={c.name} className="text-gray-300 text-sm">
                  <span className="text-white">{c.name}</span> &mdash; {c.role}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-accent-primary text-xs tracking-[0.2em] uppercase mb-3">
              Performers
            </p>
            <ul className="space-y-1.5">
              {credits.performers.map((c) => (
                <li key={c.name} className="text-gray-300 text-sm">
                  <span className="text-white">{c.name}</span> &mdash; {c.role}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-2 sm:gap-8 justify-center text-center">
          {credits.studios.map((s) => (
            <p key={s.name} className="text-gray-400 text-sm">
              <span className="text-white">{s.name}</span> &mdash; {s.role}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

export default Music
