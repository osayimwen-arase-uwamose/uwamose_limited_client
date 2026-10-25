import { useState } from "react";
import Container from "./Container.jsx";
import MaterialIcon from "../ui/MaterialIcon.jsx";
import { navigation } from "../../data/navigation.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Container className="header-inner">
        <a className="brand-lockup focus-ring" href="#home" onClick={closeMenu} aria-label="Theodore Limited home">
          <MaterialIcon name="package_2" size={30} className="brand-icon" />
          <span>Theodore Limited</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              className={`nav-link ${index === 0 ? "nav-link-active" : ""}`}
              href={item.href}
              aria-current={index === 0 ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="mobile-menu-toggle focus-ring"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MaterialIcon name={menuOpen ? "close" : "menu"} size={25} />
        </button>
      </Container>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
            <MaterialIcon name="chevron_right" size={18} />
          </a>
        ))}
      </nav>
    </header>
  );
}
