import { contacts, profile } from '../data'

const items = [
  { label: 'Email', value: contacts.email, href: `mailto:${contacts.email}` },
  { label: 'Telegram', value: `@${contacts.telegram}`, href: `https://t.me/${contacts.telegram}` },
  { label: 'Phone', value: contacts.phone, href: `tel:${contacts.phone.replace(/\s/g, '')}` },
  { label: 'GitHub', value: `github.com/${contacts.github}`, href: `https://github.com/${contacts.github}` },
]

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="contact__inner">
        <h2 className="contact__title">Let's work together</h2>
        <p className="contact__text">
          I am looking for a trainee or junior front-end role. Get in touch by email or Telegram.
        </p>

        <div className="contact__list">
          {items.map((item) => (
            <div key={item.label}>
              <p className="contact__label">{item.label}</p>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="contact__link"
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>

        <p className="contact__copy">
          © {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  )
}
