import { useState } from 'react'
import { motion } from 'motion/react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', country: '', email: '', phone: '', customerType: '', product: '', message: '',
  })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your enquiry. Our team will get back to you.')
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-emerald-700 font-semibold text-sm tracking-wide">Contact Us</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-stone-900">Let's Discuss Your Requirements</h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Whether you are looking for dehydrated potato products in bulk or exploring our ready-to-eat snack
            range, our team welcomes your enquiry. Please share your product requirements and contact details so we
            can direct your enquiry to the appropriate team.
          </p>

          <div className="mt-8 space-y-4 text-stone-700">
            <div><span className="font-semibold text-stone-900">Company:</span> Vegiloom Foods Private Limited</div>
            <div><span className="font-semibold text-stone-900">Email:</span> [Email]</div>
            <div><span className="font-semibold text-stone-900">Telephone / WhatsApp:</span> [Phone / WhatsApp]</div>
            <div><span className="font-semibold text-stone-900">Registered factory address:</span> [Business Address]</div>
            <div><span className="font-semibold text-stone-900">Website:</span> [Website]</div>
          </div>

          <a href="#" className="mt-8 inline-flex px-6 py-3 rounded-full bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition-colors">
            Download Catalogue
          </a>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-50 rounded-3xl p-8 border border-stone-200 space-y-4"
        >
          {[
            { name: 'name', label: 'Name', type: 'text' },
            { name: 'company', label: 'Company name', type: 'text' },
            { name: 'country', label: 'Country', type: 'text' },
            { name: 'email', label: 'Business email', type: 'email' },
            { name: 'phone', label: 'Contact number', type: 'tel' },
          ].map((f) => (
            <div key={f.name}>
              <label className="block text-sm font-medium text-stone-700 mb-1">{f.label}</label>
              <input
                name={f.name}
                type={f.type}
                value={form[f.name]}
                onChange={onChange}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Customer type</label>
            <select name="customerType" value={form.customerType} onChange={onChange} className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="">Select</option>
              <option>Importer</option>
              <option>Wholesaler</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Product of interest</label>
            <select name="product" value={form.product} onChange={onChange} className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="">Select</option>
              <option>Dehydrated Potato Chips</option>
              <option>Dehydrated Potato Sticks</option>
              <option>Fried Products</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
            <textarea name="message" value={form.message} onChange={onChange} rows={4} className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>

          <button type="submit" className="w-full px-6 py-3 rounded-full bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition-colors">
            Send Enquiry
          </button>
        </motion.form>
      </div>
    </section>
  )
}
