import { motion } from 'framer-motion'

const photos = [
  { src: '/images/matt-guitar.jpg', alt: 'Matt Glover writing with a guitar' },
  { src: '/images/matt-couch.jpg', alt: 'Matt Glover in the studio' },
]

const Photos = () => (
  <section id="photos" className="relative py-14 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent-primary tracking-[0.3em] text-sm mb-4 uppercase text-center"
      >
        Gallery
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl mb-10 gradient-text text-center"
      >
        Photos
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl overflow-hidden glass aspect-square"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
      <p className="text-gray-500 text-sm text-center mt-8">
        More photos coming soon &mdash; drop new images into{' '}
        <code className="text-gray-400">public/images</code> and add them here.
      </p>
    </div>
  </section>
)

export default Photos
