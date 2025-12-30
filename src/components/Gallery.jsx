import { motion } from 'framer-motion'

export default function Gallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1622279457488736-62f8f24c2a65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Clay court close-up',
      category: 'Clay Detail',
    },
    {
      src: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Court lines and net',
      category: 'Court Lines',
    },
    {
      src: 'https://images.unsplash.com/photo-1622163642999-9586b5e2b0c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Night lighting',
      category: 'Night Lighting',
    },
    {
      src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Athlete room',
      category: 'Recovery',
    },
    {
      src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Jogging track',
      category: 'Track',
    },
    {
      src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Coaching moment',
      category: 'Coaching',
    },
  ]

  return (
    <section className="py-32 bg-warm-white angled-cut-reverse">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="club-stamp text-charcoal/60 mb-4 block">GALLERY</span>
          <h2 className="text-5xl md:text-6xl font-black text-charcoal mb-6">
            Curated Moments
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-sand text-sm font-medium">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


