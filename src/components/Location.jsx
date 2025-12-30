import { motion } from 'framer-motion'

export default function Location() {
  return (
    <section id="location" className="py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="club-stamp mb-4 block">LOCATION</span>
          <h2 className="text-5xl md:text-6xl font-black text-sand mb-6">
            Location & Access
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-sand mb-4">Address</h3>
              <p className="text-sand/80 leading-relaxed">
                [Your Address Here]<br />
                [City, State, ZIP]
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sand mb-4">Parking</h3>
              <p className="text-sand/80 leading-relaxed">
                Ample parking available on-site. Reserved spaces for members.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sand mb-4">Hours</h3>
              <p className="text-sand/80 leading-relaxed">
                Monday - Sunday: 6:00 AM - 10:00 PM<br />
                Member access 24/7 with key card
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sand mb-4">Landmarks</h3>
              <p className="text-sand/80 leading-relaxed">
                [Nearby landmark references]
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] bg-charcoal border border-sand/10"
          >
            {/* Map placeholder - replace with actual Google Maps embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-sand/40 text-center">
                Map embed will be placed here<br />
                <span className="text-xs">Google Maps integration</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


