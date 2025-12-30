import { motion } from 'framer-motion'

export default function RedClayCode() {
  const principles = [
    'Longer rallies. Better conditioning.',
    'Movement mastery through sliding.',
    'Tactical patience and shot selection.',
    'A surface that trains the athlete — not just the stroke.',
  ]

  return (
    <section className="py-32 bg-charcoal clay-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] md:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-clay-red/20 to-deep-clay/20 clay-overlay" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622279457488736-62f8f24c2a65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-mode-overlay opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 bg-charcoal/60 backdrop-blur-sm border border-sand/10">
                <h3 className="text-2xl font-bold text-sand mb-4">Clay Benefits</h3>
                <div className="space-y-3 text-sm text-sand/80">
                  <div className="flex justify-between">
                    <span>Bounce Height:</span>
                    <span className="font-semibold">Higher</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Movement:</span>
                    <span className="font-semibold">Sliding Enabled</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Endurance:</span>
                    <span className="font-semibold">Enhanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Impact:</span>
                    <span className="font-semibold">Reduced</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="club-stamp mb-4 block">THE PHILOSOPHY</span>
              <h2 className="text-5xl md:text-6xl font-black text-sand mb-6 leading-tight">
                The Red Clay Code
              </h2>
              <p className="text-lg text-sand/70 leading-relaxed">
                Red clay is not a surface, it's a training philosophy. Every slide, every rally, every point builds the athlete.
              </p>
            </div>

            <ul className="space-y-6">
              {principles.map((principle, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-1 h-1 rounded-full bg-clay-red mt-3 flex-shrink-0" />
                  <p className="text-xl text-sand/90 font-medium">{principle}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


