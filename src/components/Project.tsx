import { project } from '../data'

export default function Project() {
  const domain = project.url.replace(/^https?:\/\//, '')

  return (
    <section id="project" className="project">
      <h2 className="section-title">Selected project</h2>

      <article className="project__card">
        <div className="project__info">
          <p className="project__meta">
            {project.period} · {project.role}
          </p>
          <h3 className="project__title">{project.title}</h3>
          <p className="project__text">{project.description}</p>
          <a href={project.url} target="_blank" rel="noreferrer" className="project__link">
            Visit {domain} →
          </a>
        </div>

        <ul className="project__list">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}
