import { motion } from 'motion/react'
import { Bag, Pouch } from './Illustrations'

const divisions = [
  {
    title: 'B2B – Dehydrated Potato Products',
    desc: 'We offer dehydrated potato chips and sticks for bulk buyers, food businesses, importers, distributors and other commercial customers.',
    btn: 'Explore B2B Products',
    href: '#b2b',
    color: 'emerald',
  },
  {
    title: 'B2C – Ready-to-Eat Potato Snacks',
    desc: 'Discover our range of fried dehydrated potato chips and sticks, created for convenient snacking and consumer enjoyment.',
    btn: 'Explore Our Snacks',
    href: '#snacks',
    color: 'amber',
  },
]

export default function Divisions() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-stone-900 text-center"
        >
          Two Main Business Divisions
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {divisions.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-8 rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full ${d.color === 'emerald' ? 'bg-emerald-100' : 'bg-amber-100'} blur-2xl`} />
              {d.color === 'emerald' ? <Bag className="w-28 mx-auto mb-4" product="chips" /> : <Pouch className="w-28 mx-auto mb-4" variant="cream" product="chips" />}
              <h3 className="text-2xl font-bold text-stone-900">{d.title}</h3>
              <p className="mt-4 text-stone-600 leading-relaxed">{d.desc}</p>
              <a href={d.href} className={`mt-6 inline-flex px-5 py-2.5 rounded-full font-medium text-white ${d.color === 'emerald' ? 'bg-emerald-700 hover:bg-emerald-800' : 'bg-amber-600 hover:bg-amber-700'} transition-colors`}>
                {d.btn}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
