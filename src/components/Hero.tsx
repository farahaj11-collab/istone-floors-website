export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Premium flooring · Design to installation</p>
          <h1 className="hero__title">
            Floors that ground
            <span className="hero__title-accent"> every room</span> in
            lasting beauty.
          </h1>
          <p className="hero__lead">
            iStone Floors sources world-class hardwood, luxury vinyl, tile, and
            natural stone — then installs it with our own certified crews. One
            partner, from first sample to final board.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href="#quote">
              Book a free design visit
            </a>
            <a className="btn btn--ghost btn--lg" href="#collections">
              Explore collections
            </a>
          </div>
          <dl className="hero__trust">
            <div>
              <dt>4,800+</dt>
              <dd>Rooms installed</dd>
            </div>
            <div>
              <dt>4.9★</dt>
              <dd>Average rating</dd>
            </div>
            <div>
              <dt>Lifetime</dt>
              <dd>Workmanship warranty</dd>
            </div>
          </dl>
        </div>

        <div className="hero__panel" aria-hidden="true">
          <div className="hero__card hero__card--float">
            <span className="hero__swatch hero__swatch--oak" />
            <div>
              <strong>European Oak</strong>
              <span>Wide-plank · Wire-brushed</span>
            </div>
          </div>
          <div className="hero__card hero__card--float2">
            <span className="hero__swatch hero__swatch--stone" />
            <div>
              <strong>Travertine</strong>
              <span>Honed &amp; sealed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
