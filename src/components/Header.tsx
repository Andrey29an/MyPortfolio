import { navLinks } from '../data'

export default function Header() {
  return (
    <header className="header">
      <a href="#top" aria-label="Back to top" className="header__logo">
        AM<span>.</span>
      </a>

      <nav className="header__nav">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="header__link">
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn--primary btn--small">
          Contact
        </a>
      </nav>
    </header>
  )
}
