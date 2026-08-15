import { Col, Container, Row } from 'react-bootstrap'
import { FaBolt, FaCode, FaExpandArrowsAlt, FaShieldAlt } from 'react-icons/fa'

const points = [
  {
    icon: FaCode,
    title: 'Clean Code',
    text: 'Simple and maintainable architecture.',
  },
  {
    icon: FaBolt,
    title: 'Performance',
    text: 'Fast experiences with efficient implementation.',
  },
  {
    icon: FaShieldAlt,
    title: 'Security',
    text: 'Security considered throughout development.',
  },
  {
    icon: FaExpandArrowsAlt,
    title: 'Scalability',
    text: 'Solutions designed to grow with your requirements.',
  },
]

function WhyCodevyora() {
  return (
    <section id="why-codevyora" className="why section-pad">
      <Container>
        <div className="text-center mb-5 reveal">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="section-title">Why Choose Codevyora?</h2>
        </div>

        <Row className="justify-content-center g-4 reveal-stagger">
          {points.map((point) => {
            const Icon = point.icon
            return (
              <Col key={point.title} xs={12} sm={6} xl={3}>
                <div className="why-card h-100">
                  <div className="why-head">
                    <span className="why-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3 className="why-title">{point.title}</h3>
                  </div>
                  <p className="why-text">{point.text}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default WhyCodevyora
