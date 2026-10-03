import { images } from "../data";
import { Watermark } from "./Watermark";

export function Hero() {
  return (
    <section id="accueil" className="hero">
      <Watermark word="Force" className="word-force" />
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="line" />
          Coach certifié à Genève
        </p>
        <h1>
          Devenez
          <em>plus fort.</em>
          <span className="hero-sub">Durablement.</span>
        </h1>
        <p className="lead">
          J’entraîne des personnes ordinaires comme si elles étaient des
          athlètes. Musculation, force, esthétique et réhabilitation, en salle
          à Genève ou entièrement à distance.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Échange découverte gratuit
          </a>
          <a className="btn btn-secondary" href="#programmes">
            Voir les offres
          </a>
        </div>
        <ul className="hero-facts">
          <li>
            <strong>Genève</strong>
            <span>Séances en salle</span>
          </li>
          <li>
            <strong>Distance</strong>
            <span>Suivi chez vous</span>
          </li>
          <li>
            <strong>Places</strong>
            <span>Nombre limité</span>
          </li>
        </ul>
      </div>
      <div className="hero-visual">
        <img
          src={images.hero}
          alt="Entraînement de force en salle"
          width={900}
          height={1100}
        />
        <div className="hero-badge">
          <strong>Mateo Aresu</strong>
          <span>Coach sportif certifié</span>
        </div>
      </div>
    </section>
  );
}
