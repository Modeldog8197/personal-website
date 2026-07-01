export default function Skills() {
  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Java', icon: '☕' },
    { name: 'HTML / CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Git', icon: '📦' },
    { name: 'Monte Carlo', icon: '🎲' },
    { name: 'Data Science', icon: '📊' },
    { name: 'Math', icon: '🧮' },
    { name: 'Research', icon: '🔬' },
    { name: 'Problem Solving', icon: '🧩' },
  ]

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section__header fade-in">
          <span className="section__label">Skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-subtitle">
            Languages, tools, and things I've picked up along the way.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((skill, index) => (
            <div
              className="skill-badge fade-in"
              key={skill.name}
              style={{ transitionDelay: `${index * 0.04}s` }}
            >
              <div className="skill-badge__icon">{skill.icon}</div>
              <span className="skill-badge__name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
