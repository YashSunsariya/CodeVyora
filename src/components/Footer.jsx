import { Col, Container, Row } from 'react-bootstrap'
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import Brand from './Brand'
import { scrollToSection } from '../utils/navigation'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
]

const socials = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/' },
  { icon: FaXTwitter, label: 'X (Twitter)', href: 'https://x.com/' },
]

function Footer({ openContact }) {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-top align-items-center g-4 text-center text-lg-start">
          <Col lg={4}>
            <a href="#home" onClick={(event) => scrollToSection(event, 'home')} className="brand">
              <Brand />
            </a>
            <p className="footer-tagline">Code • Innovate • Elevate</p>
            <a className="footer-phone" href="tel:+919893552904">+91 98935 52904</a>
          </Col>

          <Col lg={4} className="text-lg-center">
            <nav aria-label="Footer">
              <ul className="footer-links">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(event) => scrollToSection(event, link.href.slice(1))}
                      className="footer-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button type="button" className="footer-link-btn" onClick={openContact}>
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </Col>

          <Col lg={4} className="text-lg-end">
            <ul className="social-list">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="social-link"
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p className="footer-copy mb-0">© 2026 Codevyora. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
