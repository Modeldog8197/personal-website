export default function Projects() {
  const projects = [
    {
      title: 'Biofuel Circle Monte Carlo',
      description:
        'Built a Monte Carlo simulation in Python to model biofuel production cycles. Uses randomized sampling to predict yields and test circular economy scenarios — basically letting math do the guesswork.',
      tags: ['Python', 'Monte Carlo', 'Research'],
      github: 'https://github.com/Modeldog8197/Biofuel-circle-monte-carlo',
      icon: '🔬',
    },
    {
      title: 'Basketball Shot Predictor',
      description:
        'Because why not combine my two favorite things? This Python tool uses physics and stats to predict whether a basketball shot goes in based on trajectory data.',
      tags: ['Python', 'ML', 'Physics'],
      github: 'https://github.com/Modeldog8197/basketball-short-predictor',
      icon: '🏀',
    },
    {
      title: 'Monte Carlo Sim (JS)',
      description:
        'An interactive browser visualization that shows Monte Carlo methods in action. Watch dots converge into Pi approximations and probability distributions in real-time.',
      tags: ['JavaScript', 'Math', 'Visualization'],
      github: 'https://github.com/Modeldog8197/Monte-Carlo-sim',
      icon: '🎲',
    },
    {
      title: 'Signal Bot',
      description:
        'A web-based bot that picks up on signal patterns and reacts to them. Think of it as a lightweight automation tool with a clean frontend for monitoring.',
      tags: ['HTML', 'JavaScript', 'Automation'],
      github: 'https://github.com/Modeldog8197/signal-bot',
      icon: '📡',
    },
    {
      title: 'Physics Simulation Engine',
      description:
        'A JavaScript simulation engine that models real-world physics — collisions, gravity, particle systems. Built to visualize concepts I was learning and just see what happens when you crank the numbers up.',
      tags: ['JavaScript', 'Physics', 'Canvas', 'Simulation'],
      github: 'https://github.com/Modeldog8197/simulation',
      icon: '⚙️',
    },
  ]

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section__header fade-in">
          <span className="section__label">Projects</span>
          <h2 className="section-title">Stuff I've built</h2>
          <p className="section-subtitle">
            A mix of research tools, simulations, and apps — basically whatever 
            sounded cool at the time.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <div
              className="project-card fade-in"
              key={project.title}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="project-card__header">
                <span className="project-card__icon">{project.icon}</span>
                <div className="project-card__links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={`Open ${project.title}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>

              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span className="project-card__tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
