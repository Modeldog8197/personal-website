import portrait from './pfp.png'

export default function About() {
  return (
    <section
      className="about-section container"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">02 / Away from the editor</span>
          <h2 id="about-title">
            The person
            <br />
            behind the projects.
          </h2>
        </div>
      </div>
      <div className="about-layout">
        <figure className="portrait">
          <img
            src={portrait}
            alt="Avdhoot Gupta"
            width="472"
            height="1024"
            loading="lazy"
          />
          <figcaption>
            Avdhoot Gupta <span>Bengaluru, India</span>
          </figcaption>
        </figure>
        <div className="about-copy">
          <p className="about-lead">
            I like understanding how things work.
            <br />
            Then seeing what I can do with them.
          </p>
          <p>
            I’m a student at NPS HSR in Bengaluru, interested in computer
            science and mathematics. A new iOS feature, the technology inside a
            car, or a probability problem can keep me occupied for a while. I
            want to try it myself and understand the decisions behind it.
          </p>
          <p>
            That curiosity has taken me from small web experiments to simulation
            tools and work with BiofuelCircle’s trade data. I enjoy the part
            where a broad idea becomes a specific question I can test.
          </p>
          <div className="about-note">
            <span className="eyebrow">On the court</span>
            <h3>Basketball has been a constant.</h3>
            <p>
              I’ve played for my school since Grade 3, captained the team, and
              represented NPS HSR at the 2023 Jr. NBA 3×3 National Tournament in
              Noida. I’ve also travelled to Kolar to teach basketball in rural
              schools.
            </p>
          </div>
          <div className="about-note">
            <span className="eyebrow">In the community</span>
            <p>
              My work beyond school includes environmental awareness workshops
              for children and technical support for menstrual-awareness
              initiatives.
            </p>
          </div>
        </div>
      </div>
      <div className="toolbox">
        <span className="eyebrow">Tools I build with</span>
        <p>
          Python <span>/</span> JavaScript <span>/</span> SQL <span>/</span>{' '}
          React <span>/</span> FastAPI <span>/</span> pandas <span>/</span>{' '}
          NumPy <span>/</span> XGBoost
        </p>
      </div>
    </section>
  )
}
