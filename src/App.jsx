import Defs from './components/Defs'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Divisions from './components/Divisions'
import WhyChoose from './components/WhyChoose'
import ProductsB2B from './components/ProductsB2B'
import RetailSnacks from './components/RetailSnacks'
import Manufacturing from './components/Manufacturing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Defs />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Divisions />
        <WhyChoose />
        <ProductsB2B />
        <RetailSnacks />
        <Manufacturing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
