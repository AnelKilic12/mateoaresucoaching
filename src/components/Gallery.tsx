import { gallery } from "../data";
import { Watermark } from "./Watermark";

export function Gallery() {
  return (
    <section id="galerie" className="section">
      <Watermark word="Intensité" className="word-intensite" />
      <div className="section-intro">
        <p className="eyebrow">Studio &amp; séances</p>
        <h2>
          Le coaching, <em>en images.</em>
        </h2>
        <p>
          Technique, intensité, progression. L’ambiance de mes séances.
        </p>
      </div>
      <div className="gallery-grid">
        {gallery.map((item) => (
          <figure key={item.src} className="gallery-item">
            <img src={item.src} alt={item.alt} loading="lazy" />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
