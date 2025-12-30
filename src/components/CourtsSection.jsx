import { motion } from 'framer-motion'

export default function CourtsSection() {
  const surfaces = [
    {
      name: 'Red Clay',
      image: 'https://images.unsplash.com/photo-1622279457488736-62f8f24c2a65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      attributes: ['Endurance', 'Movement', 'Match intelligence'],
      description: 'The foundation of tactical tennis. Longer rallies build conditioning. Sliding develops movement mastery. Every point teaches patience and shot selection.',
    },
    {
      name: 'Grass',
      image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      attributes: ['Serve dominance', 'First-strike tennis', 'Speed & footwork'],
      description: 'Fast-surface training for explosive play. Develop serve-and-volley precision. Train reaction speed and quick footwork. Master first-strike tennis.',
    },
  ]

  return (
    <section className="py-32 bg-charcoal angled-cut-reverse">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="club-stamp mb-4 block">SURFACE PHILOSOPHY</span>
          <h2 className="text-5xl md:text-6xl font-black text-sand mb-6">
            Two Surfaces. One Advantage.
          </h2>
          <p className="text-lg text-sand/70 max-w-2xl mx-auto">
            Surface switching trains adaptability. Master both clay and grass to become a complete player.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {surfaces.map((surface, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative h-[600px] overflow-hidden"
            >
              <div className="absolute inset-0">
                <img
                  src={surface.image}
                  alt={surface.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <h3 className="text-4xl md:text-5xl font-black text-sand mb-6">
                  {surface.name}
                </h3>

                <div className="flex flex-wrap gap-3 mb-6">
                  {surface.attributes.map((attr, j) => (
                    <span
                      key={j}
                      className="px-4 py-2 bg-clay-red/30 border border-clay-red/50 text-sand text-sm font-medium"
                    >
                      {attr}
                    </span>
                  ))}
                </div>

                <p className="text-sand/90 text-lg leading-relaxed max-w-xl">
                  {surface.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


