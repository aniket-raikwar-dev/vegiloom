export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-emerald-600 text-white grid place-items-center font-bold">V</span>
            <span className="font-semibold text-white">Vegiloom Foods Private Limited</span>
          </div>
          <p className="mt-4 text-sm text-stone-400">
            Focused on dehydrated potato chips and sticks for business customers and fried dehydrated
            potato snacks for the consumer market.
          </p>
          <p className="mt-3 text-sm font-medium text-emerald-300">Crafting Future Of Food</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About Us', href: '#about' },
              { label: 'B2B Solutions', href: '#b2b' },
              { label: 'Retail Snacks', href: '#snacks' },
              { label: 'Manufacturing & Quality', href: '#quality' },
              { label: 'Contact Us', href: '#contact' },
            ].map((l) => (
              <li key={l.label}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-stone-400">
            <li><a href="mailto:vegiloomfoods@gmail.com" className="hover:text-white transition-colors">vegiloomfoods@gmail.com</a></li>
            <li><a href="tel:+919421502959" className="hover:text-white transition-colors">9421502959</a></li>
            <li>7188, Near Hasti Bank, Satana Road, Pimpalner, Sakri, Dhule - 424306</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-stone-800 text-sm text-stone-500 flex flex-wrap justify-between gap-2">
        <span>© 2026 Vegiloom Foods Private Limited. All rights reserved.</span>
        <span>CIN: U10795MH2025PTC457494</span>
      </div>
    </footer>
  )
}
