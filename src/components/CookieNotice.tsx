import { useEffect, useState } from "react";

const STORAGE_KEY = "mateo-cookie-notice";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(localStorage.getItem(STORAGE_KEY) !== "1");
    } catch {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("has-cookie-notice", visible);
    return () => document.body.classList.remove("has-cookie-notice");
  }, [visible]);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* le bandeau se ferme quand même pour cette visite */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-notice" role="dialog" aria-label="Cookies et données">
      <div className="cookie-notice-inner">
        <p>
          Ce site ne dépose pas de cookie de suivi ni de publicité. Le
          formulaire sert uniquement à répondre à une demande de contact.{" "}
          <a href="#cookies">Cookies</a>
          {" · "}
          <a href="#confidentialite">Confidentialité</a>
        </p>
        <button type="button" onClick={dismiss}>
          J’ai compris
        </button>
      </div>
    </div>
  );
}
