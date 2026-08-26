import { Container } from 'react-bootstrap'
import { FaComments, FaLightbulb, FaRocket } from 'react-icons/fa'

const steps = [
  {
    number: '01',
    icon: FaComments,
    title: 'Understand the goal',
    text: 'We learn what you are building, who it is for, and what success should look like.',
  },
  {
    number: '02',
    icon: FaLightbulb,
    title: 'Shape the right plan',
    text: 'We turn the idea into a focused scope, clear priorities, and practical next steps.',
  },
  {
    number: '03',
    icon: FaRocket,
    title: 'Build and improve',
    text: 'We create, test, and refine the product so it is ready for real people and real growth.',
  },
]

function Process() {
  return (
    <section className="process section-pad">
      <Container>
        <div className="text-center mb-5 reveal">
          <p className="eyebrow">How We Work</p>
          <h2 className="section-title">A Clear Path From Idea to Launch.</h2>
          <p className="section-lead">
            Simple communication, focused decisions, and thoughtful engineering at every stage.
          </p>
        </div>

        <div className="process-grid reveal-stagger">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <article className="process-card" key={step.number}>
                <div className="process-card-top">
                  <span className="process-number">{step.number}</span>
                  <span className="process-icon"><Icon aria-hidden="true" /></span>
                </div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-text">{step.text}</p>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Process