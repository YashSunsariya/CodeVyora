import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { navigateToSection } from '../utils/navigation'

const PARTICLES = [
  { left: '6%', top: '18%', size: 4, delay: '0s' },
  { left: '14%', top: '72%', size: 3, delay: '1.1s' },
  { left: '26%', top: '10%', size: 3, delay: '.5s' },
  { left: '42%', top: '82%', size: 4, delay: '1.6s' },
  { left: '64%', top: '12%', size: 3, delay: '.3s' },
  { left: '90%', top: '64%', size: 3, delay: '1.9s' },
]

function Hero() {
  const navigate = useNavigate()

  return (
    <section id="home" className="hero d-flex align-items-center">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow glow-blue" aria-hidden="true" />
      <div className="hero-glow glow-red" aria-hidden="true" />
      <span className="hero-code hero-code-left" aria-hidden="true">{"{ }"}</span>
      <span className="hero-code hero-code-right" aria-hidden="true">{"</>"}</span>

      <div className="hero-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <Container className="position-relative">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <p className="hero-label">Digital Product Studio</p>

            <h1 className="hero-title">
              Build Digital Products
              <br />
              <span className="gradient-br">People Choose.</span>
            </h1>

            <p className="hero-subtitle">
              We turn ambitious ideas into fast, reliable digital products that help businesses
              launch with confidence and grow without costly rewrites.
            </p>

            <div className="hero-actions d-flex flex-column flex-sm-row gap-3">
              <Button href="/projects" onClick={(event) => navigateToSection(event, navigate, '/projects', 'solutions')} className="btn-cv">
                Explore Our Work <FaArrowRight aria-hidden="true" />
              </Button>
              <Button href="/contact" onClick={(event) => { event.preventDefault(); navigate('/contact') }} className="btn-cv-outline">
                Let's Build Together
              </Button>
            </div>

            <div className="hero-trust" aria-label="What you can expect">
              <span>Clear scope</span>
              <span>Thoughtful design</span>
              <span>Built to scale</span>
            </div>
          </Col>

          <Col lg={6}>
            <div className="code-card" aria-hidden="true">
              <span className="hero-card-badge">Web · Product · Tools</span>
              <div className="code-card-head">
                <span className="window-dots">
                  <i className="dot-red" />
                  <i className="dot-yellow" />
                  <i className="dot-green" />
                </span>
                <span className="code-card-file">vision.js</span>
              </div>
              <pre className="code-card-body">
                <code>
                  <span className="tok-keyword">const</span> <span className="tok-var">vision</span> = {'{'}{'\n'}
                  {'  '}<span className="tok-prop">innovation</span>: <span className="tok-val">true</span>,{'\n'}
                  {'  '}<span className="tok-prop">performance</span>: <span className="tok-val">true</span>,{'\n'}
                  {'  '}<span className="tok-prop">scalability</span>: <span className="tok-val">true</span>{'\n'}
                  {'}'};{'\n\n'}
                  <span className="tok-fn">Codevyora.build</span>(<span className="tok-var">vision</span>);
                </code>
              </pre>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
