// These diagrams describe project themes, not measured project results.
export default function ProjectArt({ type }) {
  if (type === 'monte-carlo')
    return (
      <div className="project-art art-simulation" aria-hidden="true">
        <div className="art-topline">
          <span>MONTE CARLO / EXPLORER</span>
          <span>01</span>
        </div>
        <svg viewBox="0 0 560 290" fill="none">
          {[65, 120, 175, 230].map((y) => (
            <path key={y} d={`M40 ${y}H520`} className="art-grid" />
          ))}
          {Array.from({ length: 16 }, (_, i) => (
            <path
              key={i}
              d={Array.from(
                { length: 35 },
                (_, n) =>
                  `${n ? 'L' : 'M'}${40 + n * 14} ${225 - (n * (i + 3)) / 4 + Math.sin(n * 1.7 + i) * n * 0.6 + Math.cos(n * 0.5 + i) * n * 0.7}`,
              ).join(' ')}
              stroke={i % 3 === 0 ? '#d4d7a0' : '#82a699'}
              opacity={0.3 + i / 32}
              strokeWidth="1.4"
            />
          ))}
          <path d="M40 36V250H520" className="art-axis" />
          <text x="40" y="275">
            START
          </text>
          <text x="466" y="275">
            HORIZON
          </text>
        </svg>
        <div className="art-bottomline">
          <span>Many paths. A range of outcomes.</span>
          <span>Illustration</span>
        </div>
      </div>
    )
  if (type === 'basketball')
    return (
      <div className="project-art art-basketball" aria-hidden="true">
        <div className="art-topline">
          <span>SHOT LAB / COURT STUDY</span>
          <span>02</span>
        </div>
        <svg viewBox="0 0 560 290" fill="none">
          <g stroke="#96603c" strokeWidth="1.3">
            <path d="M75 32H485V259H75ZM218 32V147H342V32M254 54H306M101 32V82C101 271 459 271 459 82V32" />
            <circle cx="280" cy="69" r="10" />
            <circle cx="280" cy="147" r="44" />
            <path d="M235 259a45 45 0 0 1 90 0" />
          </g>
          {Array.from({ length: 55 }, (_, i) => (
            <circle
              key={i}
              cx={106 + ((i * 73) % 348)}
              cy={49 + ((i * 43) % 186)}
              r={3 + (i % 3)}
              fill={i % 4 === 0 ? '#83462c' : '#b8764e'}
              opacity={0.4 + (i % 4) * 0.15}
            />
          ))}
        </svg>
        <div className="art-bottomline">
          <span>Location. Probability. Expected points.</span>
          <span>Illustration</span>
        </div>
      </div>
    )
  return (
    <div className="project-art art-biofuel" aria-hidden="true">
      <div className="art-topline">
        <span>BIOFUELCIRCLE / FORECAST STUDY</span>
        <span>03</span>
      </div>
      <svg viewBox="0 0 560 290" fill="none">
        {[60, 115, 170, 225].map((y) => (
          <path key={y} d={`M40 ${y}H520`} className="art-grid" />
        ))}
        <path
          d="M282 150L330 118L380 88L430 65L480 38L520 25V218L480 215L430 206L380 197L330 177Z"
          fill="#8a9a75"
          opacity=".22"
        />
        <path
          d="M40 210L80 195L120 202L160 156L200 179L240 134L282 150"
          stroke="#505f42"
          strokeWidth="3"
        />
        <path
          d="M282 150L330 149L380 143L430 132L480 127L520 115"
          stroke="#505f42"
          strokeWidth="2.5"
          strokeDasharray="6 6"
        />
        <path d="M282 30V250" stroke="#8a9a75" strokeDasharray="4 5" />
        <text x="40" y="274">
          OBSERVATIONS
        </text>
        <text x="382" y="274">
          POSSIBLE OUTCOMES
        </text>
      </svg>
      <div className="art-bottomline">
        <span>Uncertainty belongs in the picture.</span>
        <span>Illustration</span>
      </div>
    </div>
  )
}
