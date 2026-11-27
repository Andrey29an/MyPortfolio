import { navLinks, profile } from '../data'

export default function Header() {
  return (
    <header className="header">
      <a href="#top" aria-label="Back to top" className="header__logo">
        {profile.logo}
      </a>

      <nav className="header__nav">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="header__link">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
