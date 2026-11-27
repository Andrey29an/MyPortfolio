import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <h2 className="section-title">Skills</h2>

        <div className="skills__groups">
          {skills.map((group) => (
            <div key={group.title}>
              <h3 className={`skills__title skills__title--${group.color}`}>{group.title}</h3>
              <ul className="skills__tags">
                {group.tags.map((tag) => {
                  const name = typeof tag === 'string' ? tag : tag.name
                  const outline = typeof tag !== 'string'
                  return (
                    <li
                      key={name}
                      className={`pill pill--${group.color}${outline ? ' pill--outline' : ''}`}
                    >
                      {name}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
