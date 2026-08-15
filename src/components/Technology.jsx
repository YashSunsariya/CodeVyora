import { Container } from 'react-bootstrap'

const technologies = [
  { name: 'React', color: '#61dafb' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Express', color: '#ffffff' },
  { name: 'MongoDB', color: '#47a248' },
  { name: 'Bootstrap', color: '#7952b3' },
  { name: 'Git', color: '#f05032' },
  { name: 'GitHub', color: '#ffffff' },
]

function Technology() {
  return (
    <section id="technology" className="technology section-pad">
      <Container>
        <div className="text-center mb-5 reveal">
          <p className="eyebrow">Our Stack</p>
          <h2 className="section-title">Built With Modern Technology</h2>
        </div>

        <div className="tech-list reveal">
          {technologies.map((tech) => (
            <span key={tech.name} className="tech-badge">
              <i className="tech-dot" style={{ background: tech.color }} aria-hidden="true" />
              {tech.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Technology
