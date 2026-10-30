import { motion } from 'motion/react'

const items = [
  { icon: '🥔', title: 'A focused range of potato products' },
  { icon: '🏭', title: 'Solutions for both business and consumer markets' },
  { icon: '📦', title: 'Customer-oriented product and packaging discussions' },
  { icon: '🤝', title: 'A commitment to building long-term business relationships' },
]

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-stone-900 text-center"
        >
          Why Choose Vegiloom Foods?
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center hover:border-emerald-300 transition-colors"
            >
              <div className="text-4xl">{it.icon}</div>
              <p className="mt-4 text-stone-700 font-medium">{it.title}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-10 rounded-3xl bg-gradient-to-br from-emerald-700 to-emerald-900 text-white"
        >
          <h3 className="text-3xl font-bold">Let's Grow Together.</h3>
          <p className="mt-4 text-emerald-100 max-w-2xl mx-auto">
            Whether you are looking for a reliable bulk supplier or exploring opportunities in the potato snack
            market, Vegiloom Foods welcomes the opportunity to connect with you.
          </p>
          <a href="#contact" className="mt-6 inline-flex px-6 py-3 rounded-full bg-white text-emerald-800 font-medium hover:bg-emerald-50 transition-colors">
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
