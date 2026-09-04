import { useEffect, useState } from 'react'

const links = [
  { label: 'Collections', href: '#collections' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
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

        <nav className="navbar__links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary navbar__cta" href="#quote">
          Get a Free Quote
        </a>
      </div>
    </header>
  )
}
