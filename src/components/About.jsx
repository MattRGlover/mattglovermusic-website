import { motion } from 'framer-motion'

const About = () => (
  <section id="about" className="relative py-14 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl overflow-hidden glass"
      >
        <img
          src="/images/matt-guitar.jpg"
          alt="Matt Glover"
          className="w-full h-full object-cover max-h-[560px]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-accent-primary tracking-[0.3em] text-sm mb-4 uppercase">About</p>
        <h2 className="font-display text-4xl sm:text-5xl mb-6 gradient-text">The Story So Far</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Matt Glover is a Nashville-based singer-songwriter, originally from
          New York. After a six-month road trip living and writing in
          different communities across the South, he landed in Nashville, TN
          to record.
        </p>
        <p className="text-gray-400 leading-relaxed">
          He tracked eight songs at Watershed Recording Studio and
          Forty-One Fifteen with Nashville-native producer Dusty Hough,
          alongside a lineup of local, mainstay musicians. His debut single,
          &ldquo;Under Control,&rdquo; released August 28, 2026, followed by
          &ldquo;Decorum&rdquo; on November 12, 2026.
        </p>
      </motion.div>
    </div>
  </section>
)

export default About
