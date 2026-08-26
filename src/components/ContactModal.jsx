import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { FaCheckCircle, FaPaperPlane, FaWhatsapp } from 'react-icons/fa'

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

    const subject = encodeURIComponent(`New project inquiry from ${form.name.trim()}`)
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\nProject details:\n${form.message.trim()}`,
    )
    window.location.href = `mailto:codevyora@gmail.com?subject=${subject}&body=${body}`
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
        <p className="contact-phone">
          Prefer a quick call? <a href="tel:+919893552904">+91 98935 52904</a>
        </p>
        <a
          className="contact-whatsapp"
          href="https://wa.me/919893552904?text=Hi%20Codevyora%2C%20I%27d%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp aria-hidden="true" />
          Chat on WhatsApp
        </a>
        {submitted ? (
          <div className="success-box" role="status">
            <FaCheckCircle className="success-icon" aria-hidden="true" />
            <p className="success-text mb-0">Your email app is opening with your project message ready to send.</p>
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
