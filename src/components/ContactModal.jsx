import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const EMPTY_FORM = { name: '', email: '', message: '' }

function ContactModal({ show, onHide }) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email address.'
    else if (!EMAIL_PATTERN.test(form.email)) nextErrors.email = 'Please enter a valid email address.'
    if (!form.message.trim()) nextErrors.message = 'Please enter a message.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitted(true)
  }

  function handleClose() {
    setForm(EMPTY_FORM)
    setErrors({})
    setSubmitted(false)
    onHide()
  }

  return (
    <Modal show={show} onHide={handleClose} centered className="contact-modal">
      <Modal.Header closeButton>
        <Modal.Title>
          <span className="brand-c">C</span>
          <span className="brand-o">o</span>devyora — Contact
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {submitted ? (
          <div className="success-box" role="status">
            <FaCheckCircle className="success-icon" aria-hidden="true" />
            <p className="success-text mb-0">Thanks! Your message has been noted. We'll get back to you soon.</p>
          </div>
        ) : (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="contact-name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="contact-email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="contact-message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" className="btn-cv w-100">
              Send Message <FaPaperPlane aria-hidden="true" />
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default ContactModal
