import { testimonials } from '../data'

export default function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Homeowner reviews</p>
          <h2>Loved by neighbors across the region</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                {'★★★★★'}
              </div>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
