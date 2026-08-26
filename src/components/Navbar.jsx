import { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar as BsNavbar } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Brand from './Brand'
import { navigateToSection } from '../utils/navigation'

const links = [
  { label: 'Home', route: '/home', section: 'home' },
  { label: 'About', route: '/about', section: 'about' },
  { label: 'Services', route: '/services', section: 'services' },
  { label: 'Projects', route: '/projects', section: 'solutions' },
  { label: 'Why Codevyora', route: '/why-codevyora', section: 'why-codevyora' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.section))
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
    navigate('/contact')
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
        <BsNavbar.Brand href="/home" className="brand" onClick={(event) => navigateToSection(event, navigate, '/home', 'home')}>
          <Brand />
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="navbar-nav" />
        <BsNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">
            {links.map((link) => (
              <Nav.Link
                key={link.route}
                href={link.route}
                active={activeSection === link.section}
                aria-current={activeSection === link.section ? 'location' : undefined}
                className="nav-link-cv"
                onClick={(event) => {
                  setActiveSection(link.section)
                  navigateToSection(event, navigate, link.route, link.section, () => setExpanded(false))
                }}
              >
                {link.label}
              </Nav.Link>
            ))}
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
