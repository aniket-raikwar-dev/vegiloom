import { motion } from 'motion/react'
import { Bag } from './Illustrations'

const products = [
  {
    name: 'Dehydrated Potato Chips',
    desc: 'Thinly sliced potato chips, carefully dehydrated to preserve their natural potato characteristics. Ideal for food processing, commercial applications, and further preparation according to customer requirements.',
    specs: [
      ['Available grades', 'A Grade'],
      ['Slice dimensions & thickness', '1mm & 1.5mm'],
      ['Moisture specifications', '5%'],
      ['Packaging options', '1Kg, 2 Kg'],
      ['Storage & shelf life', '12 Months'],
      ['Minimum order quantity', '100Kg'],
    ],
  },
  {
    name: 'Dehydrated Potato Sticks',
    desc: 'Uniformly cut potato sticks, dehydrated for convenient storage and versatile food applications. Suitable for food manufacturers, bulk buyers, and businesses seeking consistent potato product specifications.',
    specs: [
      ['Available grades', 'A Grade'],
      ['Stick dimensions & thickness', '2mm x 2mm & 3mm x 3mm'],
      ['Moisture specifications', '5%'],
      ['Packaging options', '1Kg & 2Kg'],
      ['Storage & shelf life', '12 Months'],
      ['Minimum order quantity', '100 Kg'],
    ],
  },
]

export default function ProductsB2B() {
  return (
    <section id="b2b" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-emerald-700 font-semibold text-sm tracking-wide">Dehydrated Potato Products</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-stone-900">Versatile Potato Products for Business Applications</h2>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-amber-100 to-emerald-100 grid place-items-center">
                <Bag className="h-40" product={p.name.includes('Chips') ? 'chips' : 'sticks'} />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-stone-900">{p.name}</h3>
                <p className="mt-3 text-stone-600 leading-relaxed">{p.desc}</p>
                <dl className="mt-6 divide-y divide-stone-100">
                  {p.specs.map(([k, v]) => (
                    <div key={k} className="py-3 flex justify-between gap-4 text-sm">
                      <dt className="text-stone-500">{k}</dt>
                      <dd className="text-stone-900 font-medium text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
                <a href="#contact" className="mt-6 inline-flex px-5 py-2.5 rounded-full bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition-colors">
                  Enquire About This Product
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
