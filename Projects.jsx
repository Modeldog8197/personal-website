import { useState } from 'react'
import { categories, matchesProject, moreProjects, projects } from './portfolio'
import repositories from './repositories.json'
import ProjectArt from './ProjectArt'

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.live && (
        <a
          className="text-link"
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.liveLabel || 'Open project'}{' '}
          <span aria-hidden="true">↗</span>
          <span className="sr-only">: {project.title} (new tab)</span>
        </a>
      )}
      {project.source && (
        <a
          className="source-link"
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code <span aria-hidden="true">↗</span>
          <span className="sr-only">: {project.title} (new tab)</span>
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [repoQuery, setRepoQuery] = useState('')
  const featured = projects.filter((p) => matchesProject(p, category, query))
  const additional = moreProjects.filter((p) =>
    matchesProject(p, category, query),
  )
  const count = featured.length + additional.length
  const archive = repositories
    .filter((p) =>
      p.name.toLowerCase().includes(repoQuery.trim().toLowerCase()),
    )
    .sort((a, b) => a.name.localeCompare(b.name))
  return (
    <section
      className="work-section"
      id="projects"
      aria-labelledby="work-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / The work</span>
            <h2 id="work-title">
              Built to figure
              <br />
              something out.
            </h2>
          </div>
          <p>
            Experiments, useful tools, and a few questions
            <br className="desktop-break" /> that became much bigger projects.
          </p>
        </div>
        <div className="work-tools">
          <div
            className="filters"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((c) => (
              <button
                key={c}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="search-label">
            <span className="sr-only">Search projects</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              width="17"
              height="17"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="8" cy="8" r="5.5" />
              <path d="m12 12 5 5" />
            </svg>
            <input
              type="search"
              placeholder="Find a project"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
        <p className="results-count" role="status">
          {category === 'All' && !query
            ? 'Selected projects & ongoing explorations'
            : `${count} ${count === 1 ? 'project' : 'projects'} found`}
        </p>
        <div className="featured-projects">
          {featured.map((project) => (
            <article
              className="featured-project"
              key={project.id}
              id={project.id}
            >
              <ProjectArt type={project.id} />
              <div className="project-copy">
                <div className="project-meta">
                  <span>
                    {project.number} / {project.category}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <ul className="project-facts">
                  {project.facts.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <p className="tech-list">{project.tags.join(' / ')}</p>
                <ProjectLinks project={project} />
              </div>
              <details className="project-details">
                <summary>
                  Project notes{' '}
                  <span className="sr-only">for {project.title}</span>
                  <span className="details-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="details-grid">
                  {project.details.map(([heading, text]) => (
                    <div key={heading}>
                      <h4>{heading}</h4>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </details>
            </article>
          ))}
        </div>
        {!!additional.length && (
          <div className="more-work">
            <h3 className="subsection-title">
              More from the workbench{' '}
              <span>{String(additional.length).padStart(2, '0')}</span>
            </h3>
            <div className="more-grid">
              {additional.map((project) => (
                <article className="small-project" key={project.title}>
                  <span className="eyebrow">{project.category}</span>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <p className="tech-list">{project.tags.join(' / ')}</p>
                  <ProjectLinks project={project} />
                  {project.note && (
                    <p className="project-note">{project.note}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}
        {!count && (
          <div className="empty-state">
            <h3>No projects match that search.</h3>
            <p>Try a subject like Python, basketball, or simulation.</p>
            <button
              className="text-link"
              onClick={() => {
                setQuery('')
                setCategory('All')
              }}
            >
              Clear filters <span aria-hidden="true">↗</span>
            </button>
          </div>
        )}
        <details className="repo-archive">
          <summary>
            <span>
              Earlier builds & repository archive{' '}
              <small>{repositories.length} repositories</small>
            </span>
            <span className="details-plus" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="archive-inner">
            <p>
              The full trail: current projects, earlier versions, small tools,
              and coding exercises.
            </p>
            <label className="archive-search">
              Find a repository
              <input
                type="search"
                value={repoQuery}
                onChange={(e) => setRepoQuery(e.target.value)}
                placeholder="Search repository names"
              />
            </label>
            <p className="results-count" role="status">
              {archive.length} repositories
            </p>
            <ul className="repo-list">
              {archive.map((repo) => (
                <li key={repo.name}>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            {!archive.length && (
              <p>No matching repositories. Try another name.</p>
            )}
          </div>
        </details>
      </div>
    </section>
  )
}
