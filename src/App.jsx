import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
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
import { pageSeo, siteConfig } from './config/site'

const routeSections = {
  home: 'home',
  about: 'about',
  services: 'services',
  projects: 'solutions',
  solutions: 'solutions',
  'why-codevyora': 'why-codevyora',
}

function App() {
  const [showContact, setShowContact] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()
  const openContact = () => navigate('/contact')

  useEffect(() => {
    const routeKey = location.pathname.split('/').filter(Boolean)[0] || 'home'
    const seo = pageSeo[routeKey] || pageSeo.home
    const canonicalPath = location.pathname === '/' || location.pathname === '/home' ? '/' : location.pathname
    const canonicalUrl = `${siteConfig.url}${canonicalPath}`

    document.title = seo.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', seo.description)
    document.querySelector('meta[name="robots"]')?.setAttribute('content', 'index, follow')
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', seo.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', seo.description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', seo.title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', seo.description)

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
          logo: `${siteConfig.url}${siteConfig.logo}`,
          email: siteConfig.email,
          telephone: siteConfig.phone,
        },
        {
          '@type': 'WebSite',
          name: siteConfig.name,
          url: siteConfig.url,
        },
      ],
    }
    let jsonLd = document.querySelector('script[data-codevyora-schema]')
    if (!jsonLd) {
      jsonLd = document.createElement('script')
      jsonLd.type = 'application/ld+json'
      jsonLd.dataset.codevyoraSchema = 'true'
      document.head.appendChild(jsonLd)
    }
    jsonLd.textContent = JSON.stringify(structuredData)
  }, [location.pathname])

  useEffect(() => {
    const loadDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 250 : 850
    const timer = window.setTimeout(() => setIsLoading(false), loadDuration)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const routeKey = location.pathname.split('/').filter(Boolean)[0] || 'home'
    const section = document.getElementById(routeSections[routeKey])
    if (section) window.setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
    setShowContact(location.pathname === '/contact')
  }, [location.pathname])

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
      <Navbar />
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
      <ContactModal show={showContact} onHide={() => navigate('/why-codevyora')} />
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
