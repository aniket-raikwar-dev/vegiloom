import { motion } from 'motion/react'
import { Pouch } from './Illustrations'

const snacks = [
  { name: 'Fried Dehydrated Potato Chips', desc: 'Crispy potato snacks suitable for convenient everyday enjoyment.', emoji: '🍟' },
  { name: 'Fried Dehydrated Potato Sticks', desc: 'A crunchy potato snack option for consumers who enjoy thin, crisp potato sticks.', emoji: '🍟' },
]

export default function RetailSnacks() {
  return (
    <section id="snacks" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-amber-600 font-semibold text-sm tracking-wide">Retail Snacks</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-stone-900">Discover the Crunch</h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Explore the ready-to-eat side of Vegiloom Foods through our range of fried dehydrated potato chips and
            sticks. Our retail snack range is intended for consumers who enjoy convenient potato-based snacks and
            for commercial partners interested in retail distribution.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {snacks.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="h-56 bg-gradient-to-br from-amber-200 via-orange-200 to-red-100 grid place-items-center relative">
                <Pouch className="h-44" variant={i === 0 ? 'cream' : 'sage'} product="chips" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/80 text-xs font-medium text-stone-700">PHOTO</span>
              </div>
              <div className="p-8 bg-white">
                <h3 className="text-xl font-bold text-stone-900">{s.name}</h3>
                <p className="mt-3 text-stone-600">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="px-6 py-3 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors">
            Explore Our Products
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full border border-amber-600 text-amber-700 font-medium hover:bg-amber-50 transition-colors">
            Enquire About Distribution
          </a>
        </div>
      </div>
    </section>
  )
}
