import { motion } from 'motion/react'

const values = [
  { icon: '✅', title: 'Quality', desc: 'A focus on meeting agreed product specifications and customer expectations.' },
  { icon: '🤝', title: 'Integrity', desc: 'Transparent communication and responsible business practices.' },
  { icon: '💬', title: 'Customer Commitment', desc: 'Understanding customer needs and working towards suitable solutions.' },
  { icon: '💡', title: 'Innovation', desc: 'Exploring product opportunities, applications and packaging solutions.' },
  { icon: '🔗', title: 'Partnership', desc: 'Building lasting relationships based on trust, reliability and mutual growth.' },
  { icon: '📅', title: 'Consistency', desc: 'Round the year supply.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-emerald-700 font-semibold text-sm tracking-wide">About Us</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-stone-900">About Vegiloom Foods Private Limited</h2>
          <p className="mt-6 text-stone-600 leading-relaxed">
            Vegiloom Foods Private Limited is a potato products company focused on the manufacturing and supply
            of dehydrated potato chips and sticks for business customers, alongside fried dehydrated potato chips
            and sticks for the consumer snack market. We serve diverse customer segments, including food
            manufacturers, importers, distributors, wholesalers, retailers and individual consumers.
          </p>
          <p className="mt-4 text-stone-600 leading-relaxed">
            At Vegiloom Foods, we believe in building long-term business relationships through product quality,
            customer-focused service and a commitment to understanding the unique requirements of every customer.
            Our objective is to establish Vegiloom Foods as a trusted name in potato products.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100"
          >
            <h3 className="text-xl font-bold text-emerald-900">Our Vision</h3>
            <p className="mt-3 text-stone-700 leading-relaxed">
              To become a trusted and recognized name in potato products by delivering quality, innovation and
              value to business partners and consumers across domestic and international markets.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-amber-50 border border-amber-100"
          >
            <h3 className="text-xl font-bold text-amber-900">Our Mission</h3>
            <p className="mt-3 text-stone-700 leading-relaxed">
              To provide reliable potato product solutions through consistent quality, customer-focused service
              and long-term partnerships with customers, distributors and business associates.
            </p>
          </motion.div>
        </div>

        <h3 className="mt-16 text-2xl font-bold text-stone-900">Our Core Values</h3>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 grid place-items-center text-2xl">{v.icon}</div>
              <h4 className="mt-4 font-semibold text-stone-900">{v.title}</h4>
              <p className="mt-2 text-sm text-stone-600">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
