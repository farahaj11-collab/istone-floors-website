const stats = [
  { value: '20 yrs', label: 'Family-owned craftsmanship' },
  { value: '4,800+', label: 'Floors installed & counting' },
  { value: '14 day', label: 'Average project turnaround' },
  { value: '100%', label: 'In-house certified crews' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((stat) => (
          <div className="stats__item" key={stat.label}>
            <span className="stats__value">{stat.value}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
