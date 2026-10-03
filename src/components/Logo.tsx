import mark from "../assets/mateo-logo.png";

export function Logo() {
  return (
    <a href="#accueil" className="logo" aria-label="Mateo Aresu Coaching">
      <img src={mark} alt="" width={215} height={168} />
    </a>
  );
}
