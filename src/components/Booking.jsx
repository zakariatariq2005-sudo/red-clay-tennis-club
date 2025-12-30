import { motion } from 'framer-motion'

export default function Booking() {
  return (
    <section id="booking" className="py-32 bg-charcoal">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-sand mb-6">
            Book a Tour
          </h2>
          <p className="text-lg text-sand/70">
            Experience the facilities. See the courts. Meet the team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.a
            href="#contact-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-clay-red text-sand p-8 text-center hover:bg-deep-clay transition-colors group"
          >
            <div className="text-3xl mb-4">→</div>
            <h3 className="text-xl font-bold mb-2">Book a Tour</h3>
            <p className="text-sand/80 text-sm">Schedule a facility visit</p>
          </motion.a>

          <motion.a
            href="#contact-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border-2 border-sand/30 text-sand p-8 text-center hover:border-clay-red hover:text-clay-red transition-all group"
          >
            <div className="text-3xl mb-4">→</div>
            <h3 className="text-xl font-bold mb-2">Coaching Assessment</h3>
            <p className="text-sand/80 text-sm">Request evaluation</p>
          </motion.a>

          <motion.a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-2 border-sand/30 text-sand p-8 text-center hover:border-clay-red hover:text-clay-red transition-all group"
          >
            <div className="text-3xl mb-4">→</div>
            <h3 className="text-xl font-bold mb-2">WhatsApp Contact</h3>
            <p className="text-sand/80 text-sm">Quick response</p>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

