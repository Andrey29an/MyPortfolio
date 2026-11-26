import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__grid">
        {skills.map((skill) => (
          <div key={skill.title} className="skills__card">
            <h3 className="skills__name">{skill.title}</h3>
            <p className="skills__text">{skill.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
