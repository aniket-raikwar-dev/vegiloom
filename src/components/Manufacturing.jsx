import { motion } from 'motion/react'

const steps = [
  { n: '01', title: 'Raw Material Sourcing and Inspection', desc: 'We carefully select potatoes based on their suitability for processing and product requirements. Incoming raw materials are inspected to ensure they meet our quality standards.' },
  { n: '02', title: 'Product Preparation and Processing', desc: 'Potatoes are cleaned, peeled, sliced or cut into sticks according to the required specifications. Each stage is handled with a focus on product consistency and quality.' },
  { n: '03', title: 'Dehydration and Frying Processes', desc: 'Our dehydration process helps reduce moisture content to support product stability and storage. For fried snack products, frying is carried out to achieve the desired crispness, texture and taste.' },
  { n: '04', title: 'Quality Inspection and Testing', desc: 'Our quality checks focus on product specifications, appearance, texture and other relevant quality parameters. Testing is conducted as applicable to help ensure consistency and customer satisfaction.' },
  { n: '05', title: 'Packaging and Storage', desc: 'Products are packed in suitable packaging to help protect their quality during handling, storage and transportation. Appropriate storage conditions are followed to maintain product integrity.' },
  { n: '06', title: 'Food Safety Certifications', desc: 'We prioritize food safety, hygiene and quality management throughout our operations. Applicable certifications such as FSSAI, ISO, GMP and HACCP are displayed according to the company certification status.' },
]

const certs = ['FSSAI', 'ISO', 'GMP', 'HACCP']

export default function Manufacturing() {
  return (
    <section id="quality" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-emerald-700 font-semibold text-sm tracking-wide">Manufacturing & Quality</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-stone-900">A Commitment to Product Quality</h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            At Vegiloom Foods, we recognize the importance of product specifications, appropriate handling,
            packaging and storage in delivering potato products to different customers and markets. Our approach
            focuses on understanding customer requirements and maintaining agreed product standards throughout
            the relevant production and supply processes.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-white border border-stone-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-emerald-600 font-mono text-sm font-bold">{s.n}</div>
              <h3 className="mt-2 font-semibold text-stone-900">{s.title}</h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {certs.map((c) => (
            <span key={c} className="px-5 py-2 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm border border-emerald-200">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
