import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'

function CTA({ openContact }) {
  return (
    <section id="contact" className="cta section-pad">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={7}>
            <div className="reveal">
              <p className="eyebrow">Get In Touch</p>
              <h2 className="section-title">Have an Idea?</h2>
              <p className="section-lead mb-4">Let's turn your idea into something real.</p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button onClick={openContact} className="btn-cv">
                  Start a Project <FaArrowRight aria-hidden="true" />
                </Button>
                <Button onClick={openContact} className="btn-cv-outline">
                  Contact Us
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CTA
