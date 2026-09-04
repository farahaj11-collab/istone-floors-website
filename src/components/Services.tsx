import { services } from '../data'

const icons: Record<string, JSX.Element> = {
  ruler: (
    <path d="M4 14 14 4l6 6L10 20zM8 8l2 2m1-5 2 2m-6 6 2 2" />
  ),
  hammer: (
    <path d="M14 4l6 6-3 3-6-6zM11 7 4 14a2 2 0 0 0 0 3l2 2a2 2 0 0 0 3 0l7-7" />
  ),
  shield: <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6zM9 12l2 2 4-4" />,
}

export default function Services() {
  return (
    <section className="section section--muted" id="services">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Why iStone</p>
          <h2>One accountable team, start to finish</h2>
          <p className="section__sub">
            No handoffs, no finger-pointing. The people who design your floor
            are the people who stand behind it.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-card__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icons[service.icon]}
                </svg>
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
