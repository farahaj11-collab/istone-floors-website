import { testimonials } from '../data'

export function Testimonials() {
  return (
    <section className="section quotes" id="testimonials">
      <div className="container">
        <span className="eyebrow">Loved by clients</span>
        <h2 className="section-title">Craftsmanship that speaks for itself</h2>

        <div className="quotes__grid">
          {testimonials.map((testimonial) => (
            <figure className="quote" key={testimonial.name}>
              <div className="quote__stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote>
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>
              <figcaption>
                <div className="quote__who">{testimonial.name}</div>
                <div className="quote__role">{testimonial.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
