import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import { scrollToSection } from '../utils/navigation'

function Showcase() {
  return (
    <section id="solutions" className="showcase section-pad">
      <Container>
        <div className="text-center mb-5 reveal">
          <p className="eyebrow">Featured Work</p>
          <h2 className="section-title">Built to Perform.</h2>
        </div>

        <Row className="align-items-center g-5">
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
              <p className="eyebrow">From Concept to Product</p>
              <h2 className="section-title">
                From Concept to <span className="gradient-br">Product.</span>
              </h2>
              <p className="section-lead text-start">
                We transform ideas into reliable digital experiences using modern technologies
                and practical engineering.
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
