export default function Hobbies() {
  const hobbies = [
    {
      icon: '🎮',
      name: 'Video Games',
      desc: 'Late-night gaming sessions are non-negotiable. Shooters, RPGs, you name it.',
    },
    {
      icon: '🏀',
      name: 'Basketball',
      desc: 'Pickup games, watching NBA highlights, and working on my jumpshot whenever I can.',
    },
    {
      icon: '🎵',
      name: 'Hip-Hop & Music',
      desc: 'Always got something playing — hip-hop, upbeat tracks, whatever matches the vibe.',
    },
    {
      icon: '📰',
      name: 'Sports News',
      desc: 'NBA trades, football transfers, cricket scores — I stay on top of all of it.',
    },
    {
      icon: '🧮',
      name: 'Math',
      desc: 'Number theory, probability, proofs — the kind of stuff most people run from.',
    },
    {
      icon: '💻',
      name: 'Coding',
      desc: 'Side projects, random scripts at 2am. If it can be built, I\'ll try.',
    },
    {
      icon: '🔬',
      name: 'Research',
      desc: 'Reading papers, running simulations, and asking "what if" a lot.',
    },
    {
      icon: '🌍',
      name: 'Exploring',
      desc: 'Trying new food spots around Bangalore and saying yes to random plans.',
    },
  ]

  return (
    <section className="section" id="hobbies">
      <div className="container">
        <div className="section__header fade-in">
          <span className="section__label">Life outside code</span>
          <h2 className="section-title">Things I'm into</h2>
          <p className="section-subtitle">
            Not everything revolves around a terminal. Here's what keeps me going.
          </p>
        </div>

        <div className="hobbies__grid">
          {hobbies.map((hobby, index) => (
            <div
              className="hobby-card fade-in"
              key={hobby.name}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <span className="hobby-card__icon">{hobby.icon}</span>
              <h3 className="hobby-card__name">{hobby.name}</h3>
              <p className="hobby-card__desc">{hobby.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
