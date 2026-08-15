import { Col, Container, Row } from 'react-bootstrap'

function Philosophy() {
  return (
    <section className="philosophy section-pad">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5 reveal">
              <p className="eyebrow">Our Philosophy</p>
              <h2 className="section-title">Good Software Starts With Good Thinking.</h2>
            </div>

            <div className="code-panel philosophy-code reveal">
              <div className="code-window">
                <span className="window-dots">
                  <i className="dot-red" />
                  <i className="dot-yellow" />
                  <i className="dot-green" />
                </span>
                <span className="editor-file">product.js</span>
              </div>

              <div className="code-lines">
                <div className="line-nums" aria-hidden="true">{'1\n2\n3\n4\n5\n'}</div>
                <pre className="code-body">
                  <code>
                    <span className="tok-keyword">function</span> <span className="tok-fn">buildProduct</span>(<span className="tok-var">idea</span>) {'{'}{'\n'}
                    {'  '}<span className="tok-keyword">const</span> <span className="tok-var">solution</span> = <span className="tok-fn">design</span>(<span className="tok-var">idea</span>);{'\n'}
                    {'  '}<span className="tok-keyword">return</span> <span className="tok-fn">build</span>(<span className="tok-var">solution</span>);{'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>

              <span className="editor-caret" aria-hidden="true" />
            </div>

            <p className="philosophy-text section-lead">
              We believe great software isn't about writing more code. It's about writing the
              right code.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Philosophy
