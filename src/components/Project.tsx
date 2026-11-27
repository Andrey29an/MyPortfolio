import { project } from '../data'

export default function Project() {
  const domain = project.url.replace(/^https?:\/\//, '')

  return (
    <section id="project" className="project">
      <p className="eyebrow eyebrow--flush">{project.eyebrow}</p>
      <h2 className="section-title project__title">
        {project.titleLines[0]}
        <br />
        {project.titleLines[1]}
      </h2>

      <div className="project__body">
        <div className="project__col">
          <p className="lead">{project.description}</p>
          <a href={project.url} target="_blank" rel="noreferrer" className="project__link">
            {domain} →
          </a>
        </div>

        <ul className="project__col project__list">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
