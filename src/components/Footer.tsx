import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a className="brand" href="#top" style={{ color: '#fff' }}>
              <span className="brand__mark">
                <Logo />
              </span>
              iStone Floors
            </a>
            <p style={{ marginTop: 14, color: 'rgba(242,235,224,0.7)' }}>
              Premium stone, tile and hardwood flooring — designed, supplied and
              installed with lasting craftsmanship.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Natural Stone</a>
              </li>
              <li>
                <a href="#services">Porcelain &amp; Tile</a>
              </li>
              <li>
                <a href="#services">Hardwood</a>
              </li>
              <li>
                <a href="#services">Restoration</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#process">Our Process</a>
              </li>
              <li>
                <a href="#testimonials">Reviews</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#quote">Get a Quote</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>214 Quarry Lane, Riverside</li>
              <li>(555) 018-2200</li>
              <li>hello@istonefloors.com</li>
              <li>Mon–Sat, 8am–6pm</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} iStone Floors. All rights reserved.</span>
          <span>Licensed &amp; insured · 10-year workmanship warranty</span>
        </div>
      </div>
    </footer>
  )
}
