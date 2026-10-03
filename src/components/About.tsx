import { images } from "../data";
import { Watermark } from "./Watermark";

export function About() {
  return (
    <section id="a-propos" className="section about">
      <Watermark word="Posture" className="word-posture" />
      <div className="about-media">
        <img
          src={images.portrait}
          alt="Coach en séance, focus et technique"
          width={720}
          height={900}
        />
      </div>
      <div>
        <p className="eyebrow">À propos</p>
        <h2>
          Un coaching exigeant, <em>humain</em> et durable.
        </h2>
        <p>
          J’accompagne celles et ceux qui veulent un corps plus fort, plus mobile
          et plus fiable. Pas de programme copié-collé, pas de promesses
          irréalistes.
        </p>
        <p>
          Je pars d’un bilan précis, puis je construis un programme
          personnalisé avec un suivi régulier. L’objectif : des résultats que
          vous mesurez, et que vous conservez.
        </p>
        <div className="pillars">
          <article>
            <span>01</span>
            <h3>Longévité</h3>
            <p>
              Construire un corps qui dure dans le temps. Une forme que vous
              gardez, pas un coup d’éclat de quelques semaines.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Santé</h3>
            <p>
              Bouger sans douleur, récupérer mieux. La performance commence par
              le bien-être physique.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Esthétique</h3>
            <p>
              Un physique qui reflète vos efforts. Je construis de la masse et
              je définis la silhouette, avec une méthode claire.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
