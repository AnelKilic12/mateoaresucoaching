import { specialties } from "../data";
import { Watermark } from "./Watermark";

export function Expertise() {
  return (
    <section id="expertise" className="section expertise">
      <Watermark word="Charge" className="word-charge" />
      <div className="section-intro">
        <p className="eyebrow">Spécialisation</p>
        <h2>
          Une expertise <em>ciblée.</em>
        </h2>
        <p>
          J’entraîne avec des charges : musculation, développement de la
          force, esthétique corporelle et réhabilitation après blessure.
        </p>
      </div>
      <ul className="specialty-list">
        {specialties.map((item) => (
          <li key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <span className="chip">Spécialité</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
