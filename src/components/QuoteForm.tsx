import { useState } from 'react'
import { services } from '../data'

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  area: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

const empty: FormState = {
  name: '',
  email: '',
  phone: '',
  service: services[0].title,
  area: '',
  message: '',
}

function validate(values: FormState): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Please tell us your name.'
  if (!values.email.trim()) {
    errors.email = 'An email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.area.trim()) {
    errors.area = 'Let us know the approximate area.'
  }
  return errors
}

export function QuoteForm() {
  const [values, setValues] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState<FormState | null>(null)

  function update<K extends keyof FormState>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }
    setSubmitted(values)
    setValues(empty)
  }

  return (
    <section className="section quote-section" id="quote">
      <div className="container quote-wrap">
        <div>
          <span className="eyebrow">Get started</span>
          <h2 className="section-title">Request your free, no-obligation quote</h2>
          <p className="section-lead">
            Tell us about your project and a flooring designer will reach out
            within one business day with samples and a transparent estimate.
          </p>
          <ul className="quote-info">
            <li>
              <span className="ico" aria-hidden="true">
                📍
              </span>
              <span>
                iStone Design Studio
                <br />
                214 Quarry Lane, Riverside
              </span>
            </li>
            <li>
              <span className="ico" aria-hidden="true">
                📞
              </span>
              <span>(555) 018-2200 · Mon–Sat, 8am–6pm</span>
            </li>
            <li>
              <span className="ico" aria-hidden="true">
                ✉️
              </span>
              <span>hello@istonefloors.com</span>
            </li>
          </ul>
        </div>

        <div className="form-card">
          {submitted ? (
            <div className="form-success" role="status">
              <div className="check" aria-hidden="true">
                ✓
              </div>
              <h3>Thank you, {submitted.name.split(' ')[0]}!</h3>
              <p>
                Your request for <strong>{submitted.service}</strong> (
                {submitted.area} sq ft) has been received. We&apos;ll email{' '}
                {submitted.email} within one business day.
              </p>
              <button
                type="button"
                className="btn btn-ghost"
                style={{ marginTop: 22 }}
                onClick={() => setSubmitted(null)}
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Jane Doe"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <div className="error-text">{errors.name}</div>}
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="jane@example.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <div className="error-text">{errors.email}</div>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone (optional)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="service">Service</label>
                  <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={(e) => update('service', e.target.value)}
                  >
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="area">Approx. area (sq ft)</label>
                  <input
                    id="area"
                    name="area"
                    type="number"
                    min="0"
                    value={values.area}
                    onChange={(e) => update('area', e.target.value)}
                    placeholder="850"
                    aria-invalid={Boolean(errors.area)}
                  />
                  {errors.area && (
                    <div className="error-text">{errors.area}</div>
                  )}
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Project details (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Tell us about your space, timeline and any inspiration…"
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Request my free quote
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
