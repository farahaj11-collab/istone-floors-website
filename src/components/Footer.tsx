export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="brand" href="#top" aria-label="iStone Floors home">
            <span className="brand__mark" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
            <span className="brand__text">
              iStone<strong>Floors</strong>
            </span>
          </a>
          <p>
            Premium flooring, designed, supplied, and installed by one
            accountable team.
          </p>
        </div>

        <div className="footer__cols">
          <div>
            <h4>Visit</h4>
            <p>
              1420 Kiln Avenue
              <br />
              Riverside Heights
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>
              <a href="tel:+15550172340">(555) 017-2340</a>
              <br />
              <a href="mailto:hello@istonefloors.com">hello@istonefloors.com</a>
            </p>
          </div>
          <div>
            <h4>Hours</h4>
            <p>
              Mon–Fri · 8a–6p
              <br />
              Sat · 9a–3p
            </p>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} iStone Floors. All rights reserved.</span>
        <span>Built with care in the region we serve.</span>
      </div>
    </footer>
  )
}
