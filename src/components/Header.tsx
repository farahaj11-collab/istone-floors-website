import { Logo } from './Logo'

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top">
          <span className="brand__mark">
            <Logo />
          </span>
          iStone Floors
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#process">Process</a>
          <a href="#testimonials">Reviews</a>
          <a className="btn btn-primary nav__cta" href="#quote">
            Get a Free Quote
          </a>
        </nav>
      </div>
    </header>
  )
}
