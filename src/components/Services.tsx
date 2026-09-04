import { services } from '../data'

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <span className="eyebrow">What we do</span>
        <h2 className="section-title">
          A complete flooring service, from stone to finish
        </h2>
        <p className="section-lead">
          Whether you are building, renovating or restoring, our specialists
          handle every step with materials sourced from the world&apos;s finest
          quarries and mills.
        </p>

        <div className="grid-3">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <div className="card__icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card__price">{service.price}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
