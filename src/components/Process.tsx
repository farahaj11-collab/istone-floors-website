import { steps } from '../data'

export function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <span className="eyebrow">How it works</span>
        <h2 className="section-title">Four simple steps to your new floor</h2>

        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={step.title}>
              <div className="step__num">{String(index + 1).padStart(2, '0')}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
