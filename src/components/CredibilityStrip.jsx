import { motion } from 'framer-motion'

export default function CredibilityStrip() {
  const items = [
    'Founding Memberships Now Open',
    'Coaching-Led Programmes',
    'Tournament-Ready Courts',
    'Performance & Recovery Integrated',
  ]

  return (
    <section className="bg-charcoal border-y border-sand/10 py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-sm md:text-base text-sand/70 font-medium"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


