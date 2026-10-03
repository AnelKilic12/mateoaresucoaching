import { Logo } from "./Logo";
import { contact } from "../data";
import evoswissLogo from "../assets/powered-by-evoswiss.png";

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
      <div className="footer-partner">
        <a
          className="footer-partner-link"
          href="https://www.evoswiss.ch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={evoswissLogo}
            alt="Powered by Evoswiss"
            width={724}
            height={249}
          />
        </a>
      </div>
    </footer>
  );
}
