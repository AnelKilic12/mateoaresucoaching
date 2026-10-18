import { FormEvent, useState } from "react";
import { contact } from "../data";

type Status = "idle" | "sending" | "success" | "error";

export function Questionnaire() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "Questionnaire & Profiling, Mateo Aresu Coaching");
    data.append("_template", "table");
    data.append("_captcha", "false");

    setStatus("sending");
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${contact.formSubmitId}`,
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        }
      );
      if (!response.ok) throw new Error("send-failed");
      form.reset();
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <article className="questionnaire-page">
      <p className="eyebrow">Étape 02</p>
      <h1>
        Questionnaire &amp; <em>Profiling.</em>
      </h1>
      <p className="questionnaire-lead">
        Ces informations ciblent précisément votre besoin et permettent une
        pratique en toute sécurité. Répondez le plus précisément possible ;
        les champs marqués d’un astérisque sont obligatoires.
      </p>

      <form className="questionnaire-form" onSubmit={onSubmit}>
        <fieldset>
          <legend>Coordonnées</legend>
          <div className="questionnaire-grid">
            <label>
              Nom complet *
              <input name="nom" type="text" autoComplete="name" required />
            </label>
            <label>
              Email *
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Téléphone
              <input name="telephone" type="tel" autoComplete="tel" />
            </label>
            <label>
              Âge *
              <input name="age" type="number" min={14} max={100} required />
            </label>
            <label>
              Sexe *
              <select name="sexe" required defaultValue="">
                <option value="" disabled>
                  Choisir
                </option>
                <option value="femme">Femme</option>
                <option value="homme">Homme</option>
                <option value="autre">Autre / préfère ne pas dire</option>
              </select>
            </label>
            <label>
              Modalité souhaitée *
              <select name="modalite" required defaultValue="">
                <option value="" disabled>
                  Choisir
                </option>
                <option value="geneve">Présentiel à Genève</option>
                <option value="ligne">En ligne / à distance</option>
                <option value="mixte">Les deux</option>
              </select>
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Objectifs</legend>
          <div className="questionnaire-grid">
            <label className="full">
              Objectif principal *
              <select name="objectif" required defaultValue="">
                <option value="" disabled>
                  Choisir
                </option>
                <option value="force">Développer la force</option>
                <option value="masse">Prendre de la masse</option>
                <option value="esthetique">Esthétique / silhouette</option>
                <option value="sante">Santé / se sentir mieux</option>
                <option value="rehab">Réhabilitation / reprise après blessure</option>
                <option value="autre">Autre</option>
              </select>
            </label>
            <label className="full">
              Décrivez votre objectif *
              <textarea
                name="objectif_detail"
                rows={4}
                required
                placeholder="Ce que vous voulez changer, en combien de temps, et ce qui compte le plus pour vous…"
              />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Antécédents de santé</legend>
          <div className="questionnaire-grid">
            <label className="full">
              Blessures ou douleurs actuelles *
              <textarea
                name="blessures"
                rows={3}
                required
                placeholder="Localisation, depuis quand, intensité… Indiquez « aucune » si besoin."
              />
            </label>
            <label className="full">
              Opérations ou traumatismes passés
              <textarea
                name="operations"
                rows={3}
                placeholder="Date approximative et nature de l’intervention…"
              />
            </label>
            <label className="full">
              Pathologies, maladies chroniques ou diagnostics connus
              <textarea
                name="pathologies"
                rows={3}
                placeholder="Cardiaque, métabolique, articulaire, etc."
              />
            </label>
            <label className="full">
              Médicaments ou traitements en cours
              <textarea
                name="medicaments"
                rows={2}
                placeholder="Nom et raison, si vous le souhaitez."
              />
            </label>
            <label className="full">
              Contre-indications ou avis médical à respecter
              <textarea
                name="contre_indications"
                rows={2}
                placeholder="Restrictions données par un médecin ou un thérapeute…"
              />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Rythme de vie</legend>
          <div className="questionnaire-grid">
            <label>
              Activité professionnelle *
              <select name="activite_pro" required defaultValue="">
                <option value="" disabled>
                  Choisir
                </option>
                <option value="sedentaire">Sédentaire (bureau)</option>
                <option value="mixte">Mixte</option>
                <option value="physique">Physique / sur pieds</option>
                <option value="autre">Autre</option>
              </select>
            </label>
            <label>
              Niveau d’activité actuel *
              <select name="activite_actuelle" required defaultValue="">
                <option value="" disabled>
                  Choisir
                </option>
                <option value="debutant">Débutant / reprise</option>
                <option value="occasionnel">Occasionnel</option>
                <option value="regulier">Régulier (2–3× / semaine)</option>
                <option value="intensif">Intensif (4× ou plus)</option>
              </select>
            </label>
            <label>
              Expérience musculation *
              <select name="experience" required defaultValue="">
                <option value="" disabled>
                  Choisir
                </option>
                <option value="aucune">Aucune</option>
                <option value="moins1">Moins d’un an</option>
                <option value="1a3">1 à 3 ans</option>
                <option value="plus3">Plus de 3 ans</option>
              </select>
            </label>
            <label>
              Sommeil (nuits typiques) *
              <select name="sommeil" required defaultValue="">
                <option value="" disabled>
                  Choisir
                </option>
                <option value="moins6">Moins de 6 h</option>
                <option value="6a7">6–7 h</option>
                <option value="7a8">7–8 h</option>
                <option value="plus8">Plus de 8 h</option>
              </select>
            </label>
            <label>
              Niveau de stress *
              <select name="stress" required defaultValue="">
                <option value="" disabled>
                  Choisir
                </option>
                <option value="faible">Faible</option>
                <option value="modere">Modéré</option>
                <option value="eleve">Élevé</option>
              </select>
            </label>
            <label>
              Disponibilité entraînement *
              <select name="disponibilite" required defaultValue="">
                <option value="" disabled>
                  Choisir
                </option>
                <option value="2">2 séances / semaine</option>
                <option value="3">3 séances / semaine</option>
                <option value="4">4 séances / semaine</option>
                <option value="5plus">5 séances ou plus</option>
              </select>
            </label>
            <label className="full">
              Alimentation et habitudes du quotidien
              <textarea
                name="alimentation"
                rows={3}
                placeholder="Repas, horaires, contraintes (végétarien, allergies, etc.)…"
              />
            </label>
            <label className="full">
              Autre élément utile pour votre profil
              <textarea
                name="autre"
                rows={3}
                placeholder="Contraintes d’emploi du temps, matériel disponible, préférences…"
              />
            </label>
          </div>
        </fieldset>

        <label className="questionnaire-consent">
          <input name="consentement" type="checkbox" value="oui" required />
          <span>
            J’accepte que ces informations, y compris des données de santé,
            soient transmises à Mateo Aresu Coaching uniquement pour évaluer
            mon besoin et assurer un suivi sécurisé. Détail dans la{" "}
            <a href="#confidentialite">politique de confidentialité</a>.
          </span>
        </label>

        <button
          className="btn btn-primary"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer le questionnaire"}
        </button>

        {status === "success" && (
          <p className="form-note success" role="status">
            Questionnaire envoyé. Je le lis attentivement et je vous
            recontacte rapidement.
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

      <p className="questionnaire-back">
        <a href="#methode">← Retour au fonctionnement</a>
      </p>
    </article>
  );
}
