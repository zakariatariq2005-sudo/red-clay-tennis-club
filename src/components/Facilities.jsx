import { motion } from 'framer-motion'

export default function Facilities() {
  const facilities = [
    {
      title: '2 Pro Red Clay Courts',
      benefit: 'ITF-certified surfaces for tournament-level play and training.',
      size: 'large',
      image: 'https://images.unsplash.com/photo-1622279457488736-62f8f24c2a65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: '2 Pro Grass Courts',
      benefit: 'Fast-surface training for serve-and-volley mastery.',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: '250m Pro Jogging Track',
      benefit: 'Conditioning circuits integrated with court training.',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Fully Equipped Athlete Club Rooms',
      benefit: 'Recovery, preparation, and performance analysis spaces.',
      size: 'small',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Cold Plunge',
      benefit: 'Athlete-grade recovery for muscle regeneration.',
      size: 'small',
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Stretch Coach',
      benefit: 'Guided flexibility and mobility sessions.',
      size: 'small',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
  ]

  const getGridClass = (size) => {
    if (size === 'large') return 'md:col-span-2 md:row-span-2'
    if (size === 'medium') return 'md:col-span-1 md:row-span-2'
    return 'md:col-span-1 md:row-span-1'
  }

  return (
    <section id="facilities" className="py-32 bg-warm-white angled-cut">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="club-stamp text-charcoal/60 mb-4 block">FACILITIES</span>
          <h2 className="text-5xl md:text-6xl font-black text-charcoal mb-6">
            Performance Infrastructure
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {facilities.map((facility, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden bg-charcoal ${getGridClass(facility.size)}`}
            >
              <div className="absolute inset-0">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
              </div>
              <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-sand mb-3">
                  {facility.title}
                </h3>
                <p className="text-sand/80 text-sm md:text-base leading-relaxed">
                  {facility.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


