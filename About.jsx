export default function About() {
  const stats = [
    { number: '37+', label: 'Repos' },
    { number: '5+', label: 'Languages' },
    { number: '3+', label: 'Years' },
    { number: '∞', label: 'Curiosity' },
  ]

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section__header fade-in">
          <span className="section__label">About</span>
          <h2 className="section-title">A bit about me</h2>
        </div>

        <div className="about__content">
          <div className="about__text slide-in-left">
            <p>
              Hey! I'm <strong>Avdhoot</strong>, originally from Bangalore and currently 
              a senior at <strong>NPS HSR, Bangalore</strong>. I've been into coding and 
              tech for as long as I can remember, and high school has been where I've really 
              gotten to explore that seriously.
            </p>
            <p>
              On the academic side, I work a lot with Python, JavaScript, and Java — building 
              everything from Monte Carlo simulations and research tools to full-stack web 
              apps. I'm especially drawn to the intersection of math and programming, 
              whether that's probability models, data science, or just finding elegant 
              ways to solve hard problems.
            </p>
            <p>
              When I'm not coding, you'll find me watching basketball or playing pickup 
              games, grinding video games late at night, or listening to hip-hop and 
              upbeat music. I'm also a bit of a sports news enthusiast — always keeping 
              up with what's happening in the NBA, football, and cricket.
            </p>
          </div>

          <div className="about__stats slide-in-right">
            {stats.map((stat, index) => (
              <div
                className="stat-card"
                key={stat.label}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="stat-card__number">{stat.number}</div>
                <div className="stat-card__label">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="about__banner fade-in">
            <img src="/banner.png" alt="Desk setup with laptop and sunset city view" className="about__banner-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
