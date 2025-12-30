import { motion } from 'framer-motion'

export default function Membership() {
  const plans = [
    {
      name: 'Individual',
      price: 'Monthly',
      features: [
        'Court access (clay & grass)',
        'Priority booking privileges',
        'Coaching session credits',
        'Recovery facilities access',
        'Guest passes (2/month)',
      ],
      cta: 'Apply',
      featured: false,
    },
    {
      name: 'Family',
      price: 'Monthly',
      features: [
        'All Individual benefits',
        'Up to 4 family members',
        'Junior programme access',
        'Extended guest privileges',
        'Family event participation',
      ],
      cta: 'Apply',
      featured: false,
    },
    {
      name: 'Young Adult Programme',
      price: 'Monthly',
      features: [
        'Full facility access',
        'Structured coaching programme',
        'Performance tracking',
        'Tournament preparation',
        'Recovery protocols included',
      ],
      cta: 'Apply',
      featured: false,
    },
    {
      name: 'Founding Member',
      price: 'Lifetime',
      features: [
        'All Family benefits',
        'Lifetime membership',
        'Founding rates locked',
        'Exclusive events',
        'Priority court reservations',
        'Coaching programme included',
      ],
      cta: 'Apply',
      featured: true,
    },
  ]

  return (
    <section id="membership" className="py-32 bg-warm-white angled-cut">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="club-stamp text-charcoal/60 mb-4 block">MEMBERSHIP</span>
          <h2 className="text-5xl md:text-6xl font-black text-charcoal mb-6">
            Membership Plans
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-charcoal p-8 border-2 ${
                plan.featured
                  ? 'border-clay-red lg:scale-105'
                  : 'border-sand/10 hover:border-clay-red/50'
              } transition-all`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-clay-red text-sand px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                    Founding
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-sand mb-2">{plan.name}</h3>
              <p className="text-sand/60 text-sm mb-6">{plan.price}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-clay-red mt-1">—</span>
                    <span className="text-sand/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`block w-full text-center py-3 text-sm font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-clay-red text-sand hover:bg-deep-clay'
                    : 'border border-sand/30 text-sand hover:border-clay-red hover:text-clay-red'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


