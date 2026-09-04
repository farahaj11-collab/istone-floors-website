const planks = [
  { top: '0%', color: '#c8a06a' },
  { top: '20%', color: '#b48645' },
  { top: '40%', color: '#a9753a' },
  { top: '60%', color: '#95632f' },
  { top: '80%', color: '#7d4f24' },
]

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div>
          <span className="eyebrow">Premium flooring, expertly installed</span>
          <h1>Floors that ground every great space.</h1>
          <p className="hero__lead">
            iStone Floors designs, supplies and installs natural stone, tile and
            hardwood for homes and businesses — with craftsmanship you can stand
            on for decades.
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="#quote">
              Get a Free Quote
            </a>
            <a className="btn btn-ghost" href="#gallery">
              Explore our work
            </a>
          </div>
          <div className="hero__stats">
            <div className="stat">
              <div className="stat__num">1,200+</div>
              <div className="stat__label">Floors installed</div>
            </div>
            <div className="stat">
              <div className="stat__num">18 yrs</div>
              <div className="stat__label">Of craftsmanship</div>
            </div>
            <div className="stat">
              <div className="stat__num">10-yr</div>
              <div className="stat__label">Workmanship warranty</div>
            </div>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          {planks.map((plank) => (
            <div
              key={plank.top}
              className="plank"
              style={{ top: plank.top, background: plank.color }}
            />
          ))}
          <div className="hero__badge">
            <span className="dot">★</span>
            <div>
              <strong>4.9 / 5</strong>
              <div className="stat__label">from 340+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
