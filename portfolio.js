export const projects = [
  {
    id: 'monte-carlo',
    number: '01',
    title: 'Monte Carlo Simulator',
    category: 'Simulation',
    subtitle: 'What happens when you run the question 10,000 times?',
    description:
      'A browser-based playground for uncertainty. Explore possible outcomes across retirement, stock paths, project timelines, revenue, risk, real estate, product costs, drug trials, football, and estimating π.',
    tags: ['JavaScript', 'Web Workers', 'Chart.js'],
    facts: ['10 scenarios', '6 distributions', 'Runs in the browser'],
    source: 'https://github.com/Modeldog8197/simulation',
    live: 'https://montecarlo-simulator.vercel.app',
    details: [
      [
        'The question',
        'A single prediction hides how much could change. I wanted to make the range of possible outcomes something you could explore directly.',
      ],
      [
        'The build',
        'Adjust inputs, run repeated samples, and inspect histograms, cumulative distributions, paths, sensitivity, and convergence. A Web Worker keeps simulation work off the interface thread.',
      ],
      [
        'The boundary',
        'The outputs depend on the scenario and distribution assumptions. This is an exploratory model, not a promise about what will happen.',
      ],
    ],
  },
  {
    id: 'basketball',
    number: '02',
    title: 'Basketball Shot Predictor',
    category: 'Machine learning',
    subtitle: 'A question that followed me off the court.',
    description:
      'Explore NBA shot locations, make probabilities, and expected points for a specific player and season. A Python API connects the court interface to versioned XGBoost models.',
    tags: ['Python', 'XGBoost', 'FastAPI'],
    facts: [
      'Player + season selection',
      'Versioned models',
      'Held-out evaluation',
    ],
    source: 'https://github.com/Modeldog8197/NBA-API',
    live: 'https://modeldog8197.github.io/NBA-API/',
    liveLabel: 'Open dashboard',
    details: [
      [
        'The question',
        'I have spent years playing basketball. This project gives me another way to investigate shot selection, using historical NBA attempts.',
      ],
      [
        'The build',
        'Select a player and season, inspect shot locations and observed shooting percentages, and request predictions from an identified model version. The repository includes saved models, calibration plots, and evaluation records.',
      ],
      [
        'What the evaluation says',
        'On 299 held-out Curry 2023–24 shots, the selected model scored 0.7011 log loss; a constant baseline scored 0.6871 (lower is better). That result does not establish an advantage over the baseline. The project makes these limits visible.',
      ],
    ],
  },
  {
    id: 'biofuel',
    number: '03',
    title: 'BiofuelCircle Analytics',
    category: 'Data analysis',
    subtitle: 'From trade records to questions worth testing.',
    description:
      'Monte Carlo forecasting and driver analysis for trade volumes and manual responses. Compare delivery patterns, lagged relationships, and alternative scenarios in an interactive dashboard.',
    tags: ['Python', 'pandas', 'NumPy', 'scikit-learn'],
    facts: [
      '10,000 simulations',
      '4 forecasting methods',
      '1–12 month horizons',
    ],
    source: 'https://github.com/Modeldog8197/Biofuel-circle-monte-carlo',
    details: [
      [
        'The question',
        'How do delivered volumes relate to future trade activity? Working with BiofuelCircle data gave me a concrete business question to investigate.',
      ],
      [
        'The build',
        'I built and iterated simulations for sell trades and manual responses, comparing bootstrap, parametric, trend-adjusted, and seasonal-adjusted forecasts. The analysis explores delivery drivers and time lags.',
      ],
      [
        'The boundary',
        'These are modeled scenarios and historical associations. They do not establish causation or verified commercial gains.',
      ],
    ],
  },
]

export const moreProjects = [
  {
    title: 'Data-Maximizer',
    category: 'Data analysis',
    description:
      'An early BiofuelCircle trade-log tool for exploring historical patterns, forecasts, and performance trends.',
    tags: ['Trade analytics', 'Prototype'],
    note: 'Prototype; public demo currently unavailable.',
  },
  {
    title: 'NIFTY50 Signal Bot',
    category: 'Applications',
    description:
      'A strategy and backtesting interface with a FastAPI backend that stores configurations, backtest results, and trades in SQLite.',
    tags: ['FastAPI', 'SQLite', 'JavaScript'],
    source: 'https://github.com/Modeldog8197/signal-bot',
    note: 'Run the backend locally.',
  },
  {
    title: 'AI Sports / Vivriti',
    category: 'Applications',
    description:
      'A team-built sports learning website covering basketball, cricket, and football, with training resources and embedded coaching chatbots.',
    tags: ['Team project', 'HTML / CSS / JS'],
    source: 'https://github.com/Modeldog8197/VIVRITI-FINAL',
    live: 'https://modeldog8197.github.io/VIVRITI-FINAL/',
    note: 'Chatbot integration; not a custom-trained model.',
  },
  {
    title: 'Everyday Desktop Suite',
    category: 'Applications',
    description:
      'A Python desktop project bringing together profiles, expense tracking, calendar reminders, and health modules.',
    tags: ['Python', 'Tkinter', 'Matplotlib'],
    source: 'https://github.com/Modeldog8197/Accounting-project',
    note: 'Work in progress.',
  },
  {
    title: 'CS Practical Simulator',
    category: 'Learning tools',
    description:
      'A three-hour practice interface for Python file handling, stacks, and SQL, with harder questions and rubric-based feedback.',
    tags: ['Python practice', 'SQL', 'HTML'],
    note: 'Local project. Rubric checks, not Python execution.',
  },
  {
    title: 'Diffraction Grating Study',
    category: 'Learning tools',
    description:
      'A Class 12 physics practical project on measuring the wavelength of light, with observations, calculations, and a written report.',
    tags: ['Physics', 'Experimental work'],
    note: 'School practical project.',
  },
]

export const categories = [
  'All',
  'Simulation',
  'Machine learning',
  'Data analysis',
  'Applications',
  'Learning tools',
]
export function matchesProject(project, category, query) {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  const searchable = [
    project.title,
    project.category,
    project.description,
    ...(project.tags || []),
  ]
    .join(' ')
    .toLowerCase()
  return (
    (category === 'All' || project.category === category) &&
    words.every((word) => searchable.includes(word))
  )
}
