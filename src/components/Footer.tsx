import { Logo } from "./Logo";
import { contact } from "../data";
import evoswissMark from "../assets/evoswiss-mark.png";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Logo />
        <p className="footer-sign">Mateo Aresu, coach sportif certifié</p>
        <div className="footer-links">
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href={contact.phoneHref}>Téléphone</a>
          <a href="#programmes">Programmes</a>
        </div>
      </div>
      <div className="footer-meta">
        <p className="footer-copy">© 2026 Mateo Aresu Coaching</p>
        <nav className="footer-legal" aria-label="Informations légales">
          <a href="#mentions">Mentions légales</a>
          <a href="#confidentialite">Confidentialité</a>
          <a href="#cookies">Cookies</a>
        </nav>
      </div>
      <div className="footer-partner">
        <a
          className="footer-partner-link"
          href="https://www.evoswiss.ch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="evo-badge">
            <img
              className="evo-mark"
              src={evoswissMark}
              alt=""
              width={51}
              height={51}
            />
            <span className="evo-copy">
              <span>Réalisé avec</span>
              <strong>Evoswiss</strong>
            </span>
          </span>
        </a>
      </div>
    </footer>
  );
}
