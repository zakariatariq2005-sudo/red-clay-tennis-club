import { motion } from 'framer-motion'

export default function Coaching() {
  const programmes = [
    {
      type: 'Private Coaching',
      name: 'One-on-One Performance',
      focus: 'Technique refinement, tactical development, match preparation',
      outcome: 'Personalized training plans aligned with competitive goals.',
    },
    {
      type: 'Private Coaching',
      name: 'Elite Player Development',
      focus: 'Advanced shot selection, movement patterns, mental conditioning',
      outcome: 'Tournament-ready performance through systematic improvement.',
    },
    {
      type: 'Specialised Programmes',
      name: 'Young Adult Performance',
      focus: 'Technique, tactics, conditioning',
      outcome: 'Structured development pathway for competitive tennis.',
    },
    {
      type: 'Specialised Programmes',
      name: 'Junior Academy',
      focus: 'Fundamentals, movement, match play',
      outcome: 'Foundation building for long-term athletic development.',
    },
  ]

  return (
    <section id="coaching" className="py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="club-stamp text-charcoal/60 mb-4 block">COACHING</span>
          <h2 className="text-5xl md:text-6xl font-black text-charcoal mb-6">
            Coaching & Programmes
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Structured, outcome-oriented training. Not casual lessons. Performance development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {programmes.map((programme, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-charcoal p-8 md:p-10 border border-sand/10 group hover:border-clay-red/50 transition-colors"
            >
              <span className="club-stamp text-clay-red mb-4 block">
                {programme.type}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-sand mb-4">
                {programme.name}
              </h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-sand/60 mb-2">Focus</p>
                  <p className="text-sand/90">{programme.focus}</p>
                </div>
                <div>
                  <p className="text-sm text-sand/60 mb-2">Outcome</p>
                  <p className="text-sand/90 font-medium">{programme.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


