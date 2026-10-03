import { programs } from "../data";
import { Watermark } from "./Watermark";

export function Programs() {
  return (
    <section id="programmes" className="section">
      <Watermark word="Volume" className="word-volume" />
      <div className="section-intro">
        <p className="eyebrow">Accompagnements</p>
        <h2>
          Choisissez votre <em>programme.</em>
        </h2>
        <p>
          Deux formats clairs, pensés pour un vrai suivi. Je limite les places
          pour rester présent avec chaque personne.
        </p>
      </div>
      <div className="program-grid">
        {programs.map((program) => (
          <article
            key={program.id}
            className={`program-card ${program.featured ? "is-featured" : ""}`}
          >
            <header>
              <p className="program-meta">
                {program.duration}
                {program.featured && <span className="chip">Recommandé</span>}
              </p>
              <h3>{program.title}</h3>
              <p>{program.subtitle}</p>
            </header>
            <ul>
              {program.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <footer>
              <p className="price">
                {program.price} <small>CHF</small>
              </p>
              <p className="payment">{program.payment}</p>
              <a className="btn btn-primary" href={`#contact`}>
                Réserver un échange
              </a>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
