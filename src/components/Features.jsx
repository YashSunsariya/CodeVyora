import { Col, Container, Row } from 'react-bootstrap'
import { FaCode, FaDesktop, FaLightbulb } from 'react-icons/fa'

const features = [
  {
    num: '01',
    icon: FaLightbulb,
    title: 'Innovation',
    text: 'Turning ideas into modern digital products.',
  },
  {
    num: '02',
    icon: FaCode,
    title: 'Engineering',
    text: 'Writing clean, scalable and maintainable solutions.',
  },
  {
    num: '03',
    icon: FaDesktop,
    title: 'Experience',
    text: 'Creating interfaces people actually enjoy using.',
  },
]

function Features() {
  return (
    <section id="about" className="section-pad">
      <Container>
        <div className="text-center mb-5 reveal">
          <p className="eyebrow">About Codevyora</p>
          <h2 className="section-title">Technology Built With Purpose.</h2>
          <p className="section-lead">
            Codevyora combines modern development, thoughtful design and practical engineering
            to create digital solutions that solve real problems.
          </p>
        </div>

        <Row className="justify-content-center g-4 reveal-stagger">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Col key={feature.num} md={6} lg={4}>
                <div className="glass-card feature-card h-100">
                  <span className="feature-num">{feature.num}</span>
                  <div className="feature-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-text">{feature.text}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Features
