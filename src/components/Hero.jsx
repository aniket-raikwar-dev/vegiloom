import { motion } from 'motion/react'
import { Pouch } from './Illustrations'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide"
          >
            Vegiloom Foods Private Limited
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-4xl md:text-6xl font-bold leading-tight text-stone-900"
          >
            Potato Innovation. <span className="text-emerald-700">Endless Possibilities.</span>
            <br />Crafting Future Of Food
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-stone-600 max-w-xl"
          >
            From dehydrated potato products for businesses to crispy, ready-to-enjoy snacks for consumers,
            Vegiloom Foods brings versatility and value to the potato products industry.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#b2b" className="px-6 py-3 rounded-full bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-700/20">
              Explore B2B Products
            </a>
            <a href="#snacks" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-medium border border-emerald-700 hover:bg-emerald-50 transition-colors">
              Explore Our Snacks
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-100 to-emerald-100 shadow-2xl grid place-items-center overflow-hidden p-6">
            <Pouch className="w-full max-w-sm" variant="deep" product="chips" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 grid place-items-center text-amber-700 font-bold">★</div>
            <div>
              <div className="text-sm font-semibold text-stone-900">12 Months Shelf Life</div>
              <div className="text-xs text-stone-500">Consistent quality, year round</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
