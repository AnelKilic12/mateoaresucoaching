import { FormEvent, useState } from "react";
import { contact } from "../data";
import { Watermark } from "./Watermark";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "Nouveau message, Mateo Aresu Coaching");
    data.append("_template", "table");
    data.append("_captcha", "false");

    setStatus("sending");
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${contact.email}`,
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        }
      );
      if (!response.ok) throw new Error("send-failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section contact">
      <Watermark word="Habitude" className="word-habitude" />
      <div>
        <p className="eyebrow">Contact</p>
        <h2>
          Prêt à <em>commencer ?</em>
        </h2>
        <p>
          Je limite les places pour garder un suivi de qualité. Un premier
          échange gratuit de 30 minutes est proposé avant tout engagement.
        </p>
        <ul className="contact-details">
          <li>
            <span>Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <span>Téléphone</span>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </li>
          <li>
            <span>Localisation</span>
            <strong>{contact.city}</strong>
          </li>
          <li>
            <span>Disponibilité</span>
            <strong>En ligne &amp; présentiel</strong>
          </li>
        </ul>
        <a className="btn btn-secondary" href={contact.whatsapp} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
      <form className="contact-form" onSubmit={onSubmit}>
        <label>
          Nom
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Téléphone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          Programme
          <select name="programme" defaultValue="echange">
            <option value="echange">Échange découverte (30 min)</option>
            <option value="transformation">Transformation, 3 mois</option>
            <option value="longevite">Longévité, 6 mois</option>
          </select>
        </label>
        <label className="full">
          Message
          <textarea name="message" rows={5} required placeholder="Vos objectifs, votre disponibilité, vos questions…" />
        </label>
        <button className="btn btn-primary full" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Envoi en cours…" : "Envoyer un message"}
        </button>
        {status === "success" && (
          <p className="form-note success" role="status">
            Message envoyé. Je vous réponds dans les plus brefs délais.
          </p>
        )}
        {status === "error" && (
          <p className="form-note error" role="alert">
            L’envoi n’a pas abouti. Écrivez directement à{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a> ou
            appelez le {contact.phone}.
          </p>
        )}
      </form>
    </section>
  );
}
