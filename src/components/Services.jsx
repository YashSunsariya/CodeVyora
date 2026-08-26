import { Col, Container, Row } from 'react-bootstrap'
import {
  FaArrowRight,
  FaGlobe,
  FaPalette,
  FaReact,
  FaRocket,
  FaServer,
  FaTools,
} from 'react-icons/fa'

const services = [
  {
    num: '01',
    icon: FaGlobe,
    title: 'Web Development',
    text: 'Conversion-focused websites and web apps that are fast on every screen.',
  },
  {
    num: '02',
    icon: FaPalette,
    title: 'UI/UX Development',
    text: 'Clear, intuitive interfaces that make complex products easy to use.',
  },
  {
    num: '03',
    icon: FaReact,
    title: 'Frontend Development',
    text: 'Responsive frontends that feel polished, quick and dependable.',
  },
  {
    num: '04',
    icon: FaServer,
    title: 'Backend Development',
    text: 'Reliable APIs and systems that keep your product ready for growth.',
  },
  {
    num: '05',
    icon: FaTools,
    title: 'Developer Tools',
    text: 'Reusable foundations that help your team ship better, faster.',
  },
  {
    num: '06',
    icon: FaRocket,
    title: 'Digital Solutions',
    text: 'Practical technology choices tied to your goals, budget and timeline.',
  },
]

function Services() {
  return (
    <section id="services" className="services section-pad">
      <Container>
        <div className="text-center mb-5 reveal">
          <p className="eyebrow">What We Do</p>
          <h2 className="section-title">Services Built Around Your Goals.</h2>
          <p className="section-lead">
            From the first line of code to a fully shipped product, we cover the full
            development lifecycle.
          </p>
        </div>

        <Row className="justify-content-center g-4 reveal-stagger">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Col key={service.num} xs={12} md={6} lg={4}>
                <div className="service-card h-100">
                  <div className="service-top">
                    <span className="service-num">{service.num}</span>
                    <div className="service-icon">
                      <Icon aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-text">{service.text}</p>
                  <span className="service-arrow" aria-hidden="true">
                    <FaArrowRight />
                  </span>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Services
