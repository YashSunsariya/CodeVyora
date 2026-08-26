import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa'

function CTA({ openContact }) {
  return (
    <section id="contact" className="cta section-pad">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={7}>
            <div className="reveal">
              <p className="eyebrow">Get In Touch</p>
              <h2 className="section-title">Ready to Build Something Valuable?</h2>
              <p className="section-lead mb-4">
                Tell us what you are working toward. We will help shape the clearest next step.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button onClick={openContact} className="btn-cv">
                  Start a Conversation <FaArrowRight aria-hidden="true" />
                </Button>
                <a
                  className="btn-cv-outline"
                  href="https://wa.me/919893552904?text=Hi%20Codevyora%2C%20I%27d%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="project-steps" aria-label="Project start process">
                <div className="project-step">
                  <span className="project-step-num">01</span>
                  <span>Share your idea</span>
                </div>
                <div className="project-step">
                  <span className="project-step-num">02</span>
                  <span>Get a clear plan</span>
                </div>
                <div className="project-step">
                  <span className="project-step-num">03</span>
                  <span>Start building</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CTA
