const partners = [
  'ATELIER HOMES',
  'RIVERSIDE HOTELS',
  'NORTHWIND STUDIOS',
  'MEADOW & CO.',
  'HARBOUR RETAIL',
]

export function LogoStrip() {
  return (
    <div className="logos">
      <div className="container logos__row">
        {partners.map((partner) => (
          <span key={partner}>{partner}</span>
        ))}
      </div>
    </div>
  )
}
