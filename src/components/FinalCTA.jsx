import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="py-32 bg-charcoal clay-texture">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-black text-sand mb-6 leading-tight">
            Train where champions are built.
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#booking"
              className="px-10 py-5 bg-clay-red text-sand font-semibold hover:bg-deep-clay transition-colors text-lg"
            >
              Book a Tour
            </a>
            <a
              href="#membership"
              className="px-10 py-5 border-2 border-sand/30 text-sand font-semibold hover:border-clay-red hover:text-clay-red transition-all text-lg"
            >
              View Memberships
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


