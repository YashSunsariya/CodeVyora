import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import { scrollToSection } from '../utils/navigation'

function Showcase() {
  const concepts = [
    {
      type: 'Local Business Concept',
      title: 'A clearer first impression for growing businesses.',
      text: 'A conversion-focused website concept for a service business that needs more calls and enquiries.',
      tags: 'Responsive UI · Contact flow · SEO foundation',
    },
    {
      type: 'SaaS Product Concept',
      title: 'Complex data, made easier to act on.',
      text: 'A focused dashboard concept designed to help teams understand their work and make faster decisions.',
      tags: 'Dashboard UX · React · Reusable components',
    },
    {
      type: 'E-commerce Concept',
      title: 'A smoother path from discovery to checkout.',
      text: 'A modern storefront concept that puts product clarity, trust, and mobile shopping first.',
      tags: 'Product UI · Mobile-first · Performance',
    },
  ]

  return (
    <section id="solutions" className="showcase section-pad">
      <Container>
        <div className="text-center mb-5 reveal">
          <p className="eyebrow">Featured Work</p>
          <h2 className="section-title">Concepts Built to Perform.</h2>
          <p className="section-lead">Self-initiated projects that show how we think, design, and build.</p>
        </div>

        <Row className="g-4 reveal-stagger">
          {concepts.map((concept, index) => (
            <Col key={concept.type} md={6} lg={4}>
              <article className={`concept-card concept-card-${index + 1} h-100`}>
                <div className="concept-visual" aria-hidden="true">
                  <span className="concept-visual-bar" />
                  <span className="concept-visual-line concept-visual-line-wide" />
                  <span className="concept-visual-line" />
                  <div className="concept-visual-blocks">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <p className="concept-type">{concept.type}</p>
                <h3 className="concept-title">{concept.title}</h3>
                <p className="concept-text">{concept.text}</p>
                <span className="concept-tags">{concept.tags}</span>
              </article>
            </Col>
          ))}
        </Row>

        <Row className="align-items-center g-5 mt-4">
          <Col lg={6}>
            <div className="project-card reveal">
              <div className="browser-chrome">
                <span className="window-dots">
                  <i className="dot-red" />
                  <i className="dot-yellow" />
                  <i className="dot-green" />
                </span>
                <span className="browser-url">codevyora.com</span>
              </div>

              <div className="project-preview" aria-hidden="true">
                <div className="preview-nav">
                  <span className="preview-logo" />
                  <span className="preview-links">
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
                <div className="preview-hero">
                  <span className="preview-title" />
                  <span className="preview-line" />
                  <span className="preview-line short" />
                  <span className="preview-btn" />
                </div>
                <div className="preview-cards">
                  <span className="preview-card" />
                  <span className="preview-card" />
                  <span className="preview-card" />
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="reveal">
              <p className="eyebrow">Our Own Brand Experience</p>
              <h2 className="section-title">
                From Concept to <span className="gradient-br">Product.</span>
              </h2>
              <p className="section-lead text-start">
                This Codevyora website is our first live concept: a responsive brand experience
                designed to turn attention into meaningful conversations.
              </p>
              <Button href="#contact" onClick={(event) => scrollToSection(event, 'contact')} className="btn-cv">
                Discuss Your Project <FaArrowRight aria-hidden="true" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Showcase
