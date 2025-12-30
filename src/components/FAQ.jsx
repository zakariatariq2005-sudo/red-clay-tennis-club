import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What are the membership rules?',
      answer: 'Memberships are annual commitments with monthly payment options. Court booking privileges depend on membership tier. All members must follow club etiquette and court maintenance protocols.',
    },
    {
      question: 'What are the court booking limits?',
      answer: 'Individual members can book up to 4 hours per week in advance. Family memberships allow 8 hours per week. Founding members receive priority booking and extended limits.',
    },
    {
      question: 'How available is coaching?',
      answer: 'Coaching availability varies by programme. Private coaching sessions are scheduled based on coach and member availability. Young Adult Programme includes structured weekly sessions.',
    },
    {
      question: 'What is the rain policy for clay courts?',
      answer: 'Clay courts require maintenance after rain. Courts are closed during and immediately after precipitation. Members receive notifications about court availability. Indoor training facilities remain available.',
    },
    {
      question: 'Are there shoe requirements?',
      answer: 'Non-marking tennis shoes are required on all courts. Clay-specific shoes are recommended but not mandatory. Street shoes are prohibited on court surfaces.',
    },
    {
      question: 'What are the family plan rules?',
      answer: 'Family plans cover up to 4 family members. All members must be registered. Junior programme access is included. Guest privileges are shared across the family membership.',
    },
  ]

  return (
    <section className="py-32 bg-warm-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="club-stamp text-charcoal/60 mb-4 block">FAQ</span>
          <h2 className="text-5xl md:text-6xl font-black text-charcoal mb-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-b border-charcoal/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left py-6 flex justify-between items-center group"
              >
                <h3 className="text-xl font-semibold text-charcoal pr-8 group-hover:text-clay-red transition-colors">
                  {faq.question}
                </h3>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  className="text-2xl text-charcoal/40 flex-shrink-0"
                >
                  ↓
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? 'auto' : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-charcoal/70 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

