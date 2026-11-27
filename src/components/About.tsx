import { about, profile } from '../data'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__photo">
          <div className="about__frame">
            <img src={profile.photo} alt={profile.name} />
          </div>
          <div className="about__circle" aria-hidden="true" />
        </div>

        <div className="about__info">
          <h2 className="section-title">About</h2>

          <div className="about__block">
            <h3 className="about__label about__label--pink">{about.education.title}</h3>
            <p className="lead">{about.education.main}</p>
            <p className="about__note">{about.education.note}</p>
          </div>

          <div className="about__block">
            <h3 className="about__label about__label--blue">Languages</h3>
            <ul className="about__langs">
              {about.languages.map((lang) => (
                <li key={lang.name} className="about__lang">
                  <span>{lang.name}</span>
                  <span className="about__level">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
