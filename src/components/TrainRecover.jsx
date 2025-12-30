import { motion } from 'framer-motion'

export default function TrainRecover() {
  const cycle = [
    {
      step: '01',
      title: 'Train on Court',
      description: 'Performance-focused sessions on red clay and grass.',
    },
    {
      step: '02',
      title: 'Guided Stretching',
      description: 'Movement preparation and recovery protocols.',
    },
    {
      step: '03',
      title: 'Cold Plunge Recovery',
      description: 'Athlete-grade muscle regeneration.',
    },
    {
      step: '04',
      title: 'Athlete Club Room Reset',
      description: 'Preparation, analysis, and recovery space.',
    },
  ]

  return (
    <section className="py-32 bg-charcoal clay-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="club-stamp mb-4 block">PERFORMANCE SYSTEM</span>
          <h2 className="text-5xl md:text-6xl font-black text-sand mb-6">
            Train + Recover
          </h2>
          <p className="text-lg text-sand/70 max-w-2xl mx-auto">
            A performance ecosystem. Not isolated sessions. Training flows into recovery. Recovery enables training.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
          {cycle.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connection Line */}
              {i < cycle.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 w-8 lg:w-12 h-0.5 bg-clay-red/30 z-0" />
              )}

              <div className="relative bg-charcoal border border-sand/10 p-6 md:p-8 group hover:border-clay-red/50 transition-colors">
                <div className="text-clay-red text-4xl font-black mb-4 opacity-50">
                  {item.step}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-sand mb-3">
                  {item.title}
                </h3>
                <p className="text-sand/70 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sand/60 text-lg italic">
            The loop repeats. Performance compounds.
          </p>
        </motion.div>
      </div>
    </section>
  )
}


