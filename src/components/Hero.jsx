import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero({ opacity }) {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  const trustChips = [
    '2 Pro Red Clay Courts',
    '2 Pro Grass Courts',
    'Athlete Recovery Facilities',
  ]

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal">
          {/* Hero clay court image */}
          <div className="absolute inset-0 bg-[url('/images/hero-clay.jpg')] bg-cover bg-center opacity-50" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="absolute inset-0 clay-overlay" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-sand mb-6 leading-tight tracking-tight"
        >
          Built on red clay.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-sand/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          Elite courts, professional coaching, recovery, and a performance-driven tennis community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#booking"
            className="px-8 py-4 bg-clay-red text-sand font-semibold hover:bg-deep-clay transition-colors text-lg"
          >
            Book a Tour
          </a>
          <a
            href="#membership"
            className="px-8 py-4 border-2 border-sand/30 text-sand font-semibold hover:border-clay-red hover:text-clay-red transition-all text-lg"
          >
            View Memberships
          </a>
        </motion.div>

        {/* Trust Chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-sand/60"
        >
          {trustChips.map((chip, i) => (
            <span key={i} className="px-4 py-2 border border-sand/20">
              {chip}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-sand/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-sand/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

