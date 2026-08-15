import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Technology from './components/Technology'
import WhyCodevyora from './components/WhyCodevyora'
import Philosophy from './components/Philosophy'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function App() {
  const [showContact, setShowContact] = useState(false)
  const openContact = () => setShowContact(true)

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
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Showcase />
        <Technology />
        <WhyCodevyora />
        <Philosophy />
        <CTA openContact={openContact} />
      </main>
      <Footer openContact={openContact} />
      <ContactModal show={showContact} onHide={() => setShowContact(false)} />
    </>
  )
}

export default App
