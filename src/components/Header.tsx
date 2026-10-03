import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#a-propos", label: "À propos" },
  { href: "#expertise", label: "Expertise" },
  { href: "#resultats", label: "Résultats" },
  { href: "#programmes", label: "Programmes" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Logo />
        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Navigation principale">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-ghost header-cta" href="#contact">
          Échange gratuit
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
