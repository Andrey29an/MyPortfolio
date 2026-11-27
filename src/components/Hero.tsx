import { contacts, profile } from '../data'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__circle hero__circle--pink overprint" aria-hidden="true" />
      <div className="hero__circle hero__circle--blue overprint" aria-hidden="true" />

      <div className="hero__content">
        <p className="eyebrow">{profile.eyebrow}</p>
        <h1 className="hero__title">
          {profile.nameLines.map((line, i) => (
            <span key={line}>
              {line}
              {i < profile.nameLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="lead hero__text">{profile.tagline}</p>

        <div className="hero__actions">
          <a href={`mailto:${contacts.email}`} className="btn btn--dark">
            Email me
          </a>
          <a
            href={`https://github.com/${contacts.github}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn--outline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
