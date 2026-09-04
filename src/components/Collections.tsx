import { collections } from '../data'

export default function Collections() {
  return (
    <section className="section" id="collections">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Our collections</p>
          <h2>Curated surfaces for every space and budget</h2>
          <p className="section__sub">
            Hand-selected materials, held to a standard you can feel underfoot.
            Order free samples of any collection.
          </p>
        </div>

        <div className="collection-grid">
          {collections.map((collection) => (
            <article
              key={collection.id}
              className="collection-card"
              style={{ ['--accent' as string]: collection.accent }}
            >
              <div
                className="collection-card__swatch"
                style={{ backgroundImage: collection.swatch }}
              >
                <span className="collection-card__price">
                  from {collection.priceFrom}
                </span>
              </div>
              <div className="collection-card__body">
                <h3>{collection.name}</h3>
                <p>{collection.tagline}</p>
                <ul>
                  {collection.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className="link-arrow" href="#quote">
                  Order a sample
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
