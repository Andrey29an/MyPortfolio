import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <p className="skills__eyebrow">What I work with</p>
        <h2 className="section-title">Skills</h2>

        <ul className="skills__list">
          {skills.map((skill, i) => (
            <li key={skill.title} className="skills__row">
              <span className="skills__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="skills__name">{skill.title}</h3>
              <ul className="skills__tags">
                {skill.tags.map((tag) => {
                  const name = typeof tag === 'string' ? tag : tag.name
                  const accent = typeof tag !== 'string' && tag.accent
                  return (
                    <li
                      key={name}
                      className={accent ? 'skills__tag skills__tag--accent' : 'skills__tag'}
                    >
                      {name}
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
