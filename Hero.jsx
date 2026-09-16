import { useState } from 'react'
import { makeSamples, summarizeSamples } from './sampling'

export default function Hero() {
  const [count, setCount] = useState(1000)
  const [seed, setSeed] = useState(42)
  const { bins, mean } = summarizeSamples(makeSamples(count, seed))
  const maximum = Math.max(...bins)
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-topline">
        <span className="eyebrow">Avdhoot Gupta / Personal portfolio</span>
        <span className="location">Bengaluru, India</span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <h1 id="hero-title">
            Curiosity,
            <br />
            put to <em>work.</em>
          </h1>
          <p className="hero-intro">
            I’m Avdhoot. I build software to explore the questions I keep coming
            back to – in mathematics, data, and basketball.
          </p>
          <a className="text-link hero-link" href="#projects">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
        </div>
        <figure className="experiment">
          <div className="experiment-heading">
            <span className="eyebrow">A small experiment</span>
            <span className="experiment-symbol" aria-hidden="true">
              ∑
            </span>
          </div>
          <h2>Order from randomness.</h2>
          <p>Draw samples. Watch a distribution take shape.</p>
          <svg
            className="histogram"
            viewBox="0 0 420 208"
            role="img"
            aria-label={`Histogram of ${count} standard normal samples; sample mean ${mean.toFixed(3)}.`}
          >
            {[40, 95, 150].map((y) => (
              <line
                key={y}
                x1="10"
                x2="410"
                y1={y}
                y2={y}
                className="chart-grid"
              />
            ))}
            {bins.map((n, i) => (
              <rect
                key={i}
                x={12 + i * 16.5}
                y={174 - (n / maximum) * 146}
                width="12"
                height={(n / maximum) * 146}
                className={i > 7 && i < 16 ? 'bar bar-middle' : 'bar'}
              />
            ))}
            <line x1="10" x2="410" y1="175" y2="175" className="chart-axis" />
            <text x="10" y="200">
              −4σ
            </text>
            <text x="204" y="200">
              0
            </text>
            <text x="387" y="200">
              +4σ
            </text>
          </svg>
          <div className="experiment-controls">
            <label>
              Samples
              <select
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
              >
                <option value="100">100</option>
                <option value="1000">1,000</option>
                <option value="10000">10,000</option>
              </select>
            </label>
            <button
              className="sample-button"
              onClick={() => setSeed((s) => s + 1)}
            >
              Resample <span aria-hidden="true">↻</span>
            </button>
          </div>
          <figcaption>
            <span>Normal distribution · μ = 0, σ = 1</span>
            <span role="status">Sample mean: {mean.toFixed(3)}</span>
          </figcaption>
        </figure>
      </div>
      <div className="hero-bottom">
        <span>Student at NPS HSR</span>
        <span>Code. Mathematics. A basketball court.</span>
        <a href="#projects" aria-label="Scroll to selected work">
          ↓
        </a>
      </div>
    </section>
  )
}
