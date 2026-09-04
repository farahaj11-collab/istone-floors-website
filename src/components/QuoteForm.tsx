import { useMemo, useState } from 'react'
import { collections, roomTypes } from '../data'

interface FormState {
  name: string
  email: string
  room: string
  material: string
  squareFeet: string
}

interface Errors {
  name?: string
  email?: string
  squareFeet?: string
}

const emptyForm: FormState = {
  name: '',
  email: '',
  room: roomTypes[0],
  material: collections[0].id,
  squareFeet: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const selectedMaterial = useMemo(
    () => collections.find((c) => c.id === form.material) ?? collections[0],
    [form.material],
  )

  const estimate = useMemo(() => {
    const sqft = Number(form.squareFeet)
    if (!sqft || sqft <= 0) return null
    const unit = Number(selectedMaterial.priceFrom.replace(/[^0-9.]/g, ''))
    const materials = sqft * unit
    const install = sqft * 3.25
    return {
      materials,
      install,
      total: materials + install,
    }
  }, [form.squareFeet, selectedMaterial])

  function validate(state: FormState): Errors {
    const next: Errors = {}
    if (!state.name.trim()) next.name = 'Please tell us your name.'
    if (!emailPattern.test(state.email))
      next.email = 'Enter a valid email address.'
    const sqft = Number(state.squareFeet)
    if (!state.squareFeet.trim() || Number.isNaN(sqft) || sqft <= 0)
      next.squareFeet = 'Enter the approximate square footage.'
    return next
  }

  function handleChange(
    field: keyof FormState,
  ): (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void {
    return (e) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  function reset() {
    setForm(emptyForm)
    setErrors({})
    setSubmitted(false)
  }

  const currency = (value: number) =>
    value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    })

  return (
    <section className="section quote" id="quote">
      <div className="container quote__inner">
        <div className="quote__intro">
          <p className="eyebrow">Free, no-obligation quote</p>
          <h2>Get a project estimate in under a minute</h2>
          <p className="section__sub">
            Tell us about your space and we&apos;ll follow up within one business
            day to schedule your free in-home design visit.
          </p>
          <ul className="quote__perks">
            <li>Instant ballpark estimate</li>
            <li>Free samples shipped to your door</li>
            <li>No pushy sales — ever</li>
          </ul>
        </div>

        <div className="quote__card">
          {submitted ? (
            <div className="quote__success" role="status">
              <span className="quote__success-check" aria-hidden="true">
                ✓
              </span>
              <h3>Thanks, {form.name.split(' ')[0]}!</h3>
              <p>
                Your request for <strong>{selectedMaterial.name}</strong> in your{' '}
                <strong>{form.room.toLowerCase()}</strong> is on its way to our
                design team. We&apos;ll email <strong>{form.email}</strong> within
                one business day.
              </p>
              {estimate && (
                <div className="quote__estimate quote__estimate--final">
                  <span>Preliminary estimate</span>
                  <strong>{currency(estimate.total)}</strong>
                  <small>
                    {form.squareFeet} sq ft · materials + installation
                  </small>
                </div>
              )}
              <button className="btn btn--ghost" type="button" onClick={reset}>
                Start another quote
              </button>
            </div>
          ) : (
            <form className="quote__form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange('name')}
                  placeholder="Jordan Rivera"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className="field__error">{errors.name}</span>}
              </div>

              <div className="field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  placeholder="jordan@email.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <span className="field__error">{errors.email}</span>
                )}
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="room">Room</label>
                  <select
                    id="room"
                    name="room"
                    value={form.room}
                    onChange={handleChange('room')}
                  >
                    {roomTypes.map((room) => (
                      <option key={room} value={room}>
                        {room}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="material">Material</label>
                  <select
                    id="material"
                    name="material"
                    value={form.material}
                    onChange={handleChange('material')}
                  >
                    {collections.map((collection) => (
                      <option key={collection.id} value={collection.id}>
                        {collection.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="squareFeet">Approx. square footage</label>
                <input
                  id="squareFeet"
                  name="squareFeet"
                  type="number"
                  min="1"
                  value={form.squareFeet}
                  onChange={handleChange('squareFeet')}
                  placeholder="e.g. 320"
                  aria-invalid={!!errors.squareFeet}
                />
                {errors.squareFeet && (
                  <span className="field__error">{errors.squareFeet}</span>
                )}
              </div>

              {estimate && (
                <div className="quote__estimate" aria-live="polite">
                  <span>Live estimate</span>
                  <strong>{currency(estimate.total)}</strong>
                  <small>
                    {currency(estimate.materials)} materials +{' '}
                    {currency(estimate.install)} install
                  </small>
                </div>
              )}

              <button className="btn btn--primary btn--lg btn--block" type="submit">
                Request my free quote
              </button>
              <p className="quote__disclaimer">
                Estimates are preliminary and confirmed during your design visit.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
