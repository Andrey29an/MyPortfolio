import { contacts, profile } from '../data'

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="contact__inner">
        <h2 className="contact__title">
          Let's
          <br />
          talk.
        </h2>

        <div className="contact__links">
          <a href={`mailto:${contacts.email}`} className="contact__btn contact__btn--dark">
            {contacts.email}
          </a>
          <a
            href={`https://t.me/${contacts.telegram}`}
            target="_blank"
            rel="noreferrer"
            className="contact__btn"
          >
            Telegram
          </a>
          <a href={`tel:${contacts.phone}`} className="contact__btn">
            Call
          </a>
        </div>

        <p className="contact__copy">© {profile.name} · Lutsk, UA</p>
      </div>
    </footer>
  )
}
