import { gallery } from '../data'

export function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <span className="eyebrow">Recent projects</span>
        <h2 className="section-title">Textures and tones for every space</h2>
        <p className="section-lead">
          A glimpse of the finishes our clients love. Every sample can be viewed
          in person at our design studio.
        </p>

        <div className="gallery__grid">
          {gallery.map((item) => (
            <div
              className="tile"
              key={item.label}
              style={{ background: item.gradient }}
            >
              <span className="tile__label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
