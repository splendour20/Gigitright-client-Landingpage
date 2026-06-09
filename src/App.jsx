import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import WhyClients from './components/WhyClients'
import Domains from './components/Domains'
import HowItWorks from './components/HowItWorks'
import GlobalReach from './components/GlobalReach'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      <Navbar />
      <Hero />
      <Problem />
      <WhyClients />
      <div id="services"><Domains /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <GlobalReach />
      <div id="testimonials"><Testimonials /></div>
      <div id="faqs"><FAQ /></div>
      <CTA />
      <Footer />
    </div>
  )
}

export default App