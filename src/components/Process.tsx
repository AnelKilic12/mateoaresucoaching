import { steps } from "../data";
import { Watermark } from "./Watermark";

export function Process() {
  return (
    <section id="methode" className="section process">
      <Watermark word="Régularité" className="word-regularite" />
      <div className="section-intro">
        <p className="eyebrow">Fonctionnement</p>
        <h2>
          Comment ça <em>marche.</em>
        </h2>
      </div>
      <ol className="steps">
        {steps.map((step) => (
          <li key={step.n}>
            <span>{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <blockquote className="quote">
        <Watermark word="Mental" className="word-mental" />
        <p>
          « Je ne vous vends pas un programme. Je m’engage à vous accompagner
          vers une version plus forte, plus saine et plus durable de
          vous-même. »
        </p>
        <cite>Mateo Aresu, coach certifié</cite>
      </blockquote>
    </section>
  );
}
