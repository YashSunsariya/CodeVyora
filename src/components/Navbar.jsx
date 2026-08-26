import { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar as BsNavbar } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import Brand from './Brand'
import { scrollToSection } from '../utils/navigation'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Why Codevyora', href: '#why-codevyora' },
]

function Navbar({ openContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleSection) setActiveSection(visibleSection.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.35, 0.65] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function openContactForm(event) {
    event.preventDefault()
    setExpanded(false)
    openContact()
  }

  return (
    <BsNavbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`site-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <BsNavbar.Brand href="#home" className="brand">
          <Brand />
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="navbar-nav" />
        <BsNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">
            {links.map((link) => (
              <Nav.Link
                key={link.href}
                href={link.href}
                active={activeSection === link.href.slice(1)}
                aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
                className="nav-link-cv"
                onClick={(event) => {
                  setActiveSection(link.href.slice(1))
                  scrollToSection(event, link.href.slice(1), () => setExpanded(false))
                }}
              >
                {link.label}
              </Nav.Link>
            ))}
            <Nav.Link href="#contact" className="nav-link-cv" onClick={openContactForm}>
              Contact
            </Nav.Link>
            <Button className="btn-cv nav-cta ms-lg-3" onClick={openContactForm}>
              Let's Build <FaArrowRight aria-hidden="true" />
            </Button>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}

export default Navbar
