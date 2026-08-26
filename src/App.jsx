import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Technology from './components/Technology'
import Process from './components/Process'
import WhyCodevyora from './components/WhyCodevyora'
import Philosophy from './components/Philosophy'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import PageLoader from './components/PageLoader'

function App() {
  const [showContact, setShowContact] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const openContact = () => setShowContact(true)

  useEffect(() => {
    const loadDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 250 : 850
    const timer = window.setTimeout(() => setIsLoading(false), loadDuration)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .reveal-stagger')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('reveal-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <PageLoader visible={isLoading} />
      <Navbar openContact={openContact} />
      <main>
        <Hero />
        <Features />
        <Services />
        <Showcase />
        <Technology />
        <Process />
        <WhyCodevyora />
        <Philosophy />
        <CTA openContact={openContact} />
      </main>
      <Footer openContact={openContact} />
      <ContactModal show={showContact} onHide={() => setShowContact(false)} />
      <a
        className="floating-whatsapp"
        href="https://wa.me/919893552904?text=Hi%20Codevyora%2C%20I%27d%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Codevyora on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
    </>
  )
}

export default App
