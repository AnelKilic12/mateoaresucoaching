import { benefits } from "../data";
import { Watermark } from "./Watermark";

export function Benefits() {
  return (
    <section id="resultats" className="section">
      <Watermark word="Progression" className="word-progression" />
      <Watermark word="Constance" className="word-constance" />
      <div className="section-intro">
        <p className="eyebrow">Résultats</p>
        <h2>
          Ce que vous allez <em>obtenir.</em>
        </h2>
      </div>
      <div className="benefit-grid">
        {benefits.map((item) => (
          <article key={item.title} className="benefit-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
