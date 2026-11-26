import { contacts, profile } from '../data'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">
          {profile.role} · {profile.location}
        </p>
        <h1 className="hero__title">{profile.name}</h1>
        <p className="hero__subtitle">{profile.tagline}</p>
        <p className="hero__text">{profile.about}</p>

        <div className="hero__actions">
          <a href={`mailto:${contacts.email}`} className="btn btn--primary">
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

      {profile.photo ? (
        <img src={profile.photo} alt={profile.name} className="hero__photo" />
      ) : (
        <div role="img" aria-label="Photo placeholder" className="hero__photo hero__photo--empty">
          Photo placeholder
        </div>
      )}
    </section>
  )
}
