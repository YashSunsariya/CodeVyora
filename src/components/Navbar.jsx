import { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar as BsNavbar } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import Brand from './Brand'

const links = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'Solutions', href: 'solutions' },
  { label: 'Why Codevyora', href: 'why-codevyora' },
]

function Navbar({ openContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function openContactForm() {
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
          <Nav className="ms-auto align-items-lg-center gap-lg-1" onSelect={() => setExpanded(false)}>
            {links.map((link) => (
              <Nav.Link key={link.href} href={link.href} className="nav-link-cv">
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
