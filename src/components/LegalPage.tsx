import { contact } from "../data";

export type LegalId = "mentions" | "confidentialite" | "cookies";

const pages: { id: LegalId; href: string; label: string }[] = [
  { id: "mentions", href: "#mentions", label: "Mentions légales" },
  { id: "confidentialite", href: "#confidentialite", label: "Confidentialité" },
  { id: "cookies", href: "#cookies", label: "Cookies" },
];

export function LegalPage({ page }: { page: LegalId }) {
  return (
    <article className="legal-page">
      <nav className="legal-switch" aria-label="Informations légales">
        {pages.map((item) => (
          <a
            key={item.id}
            href={item.href}
            aria-current={item.id === page ? "page" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      {page === "mentions" && <Mentions />}
      {page === "confidentialite" && <Confidentialite />}
      {page === "cookies" && <Cookies />}
    </article>
  );
}

function Mentions() {
  return (
    <>
      <p className="eyebrow">Informations</p>
      <h1>Mentions légales.</h1>
      <p className="legal-updated">Dernière mise à jour : 4 octobre 2026.</p>
      <h2>Éditeur</h2>
      <p>
        Ce site présente l’activité de Mateo Aresu, coach sportif certifié,
        exercée à Genève, en Suisse.
      </p>
      <p>
        Email : <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <br />
        Téléphone : <a href={contact.phoneHref}>{contact.phone}</a>
      </p>
      <h2>Activité</h2>
      <p>
        Coaching sportif en présentiel à Genève et à distance. Les programmes
        et les prix indiquent l’offre proposée au moment où vous consultez le
        site. Un accompagnement commence après un échange, pas à la simple
        lecture de la page.
      </p>
      <h2>Hébergement</h2>
      <p>
        Les pages sont publiées par l’hébergeur technique du site. Cet
        hébergeur peut conserver, pour la sécurité du service, des journaux de
        connexion : adresse IP, date et page consultée. Pour savoir quel
        prestataire sert le site au moment de la visite, une demande peut être
        envoyée à l’adresse indiquée ci-dessus.
      </p>
      <h2>Contenus</h2>
      <p>
        Les textes du site appartiennent à Mateo Aresu Coaching. Leur reprise,
        même partielle, demande un accord écrit. Le logo Mateo Aresu Coaching
        appartient au même titulaire. Le
        logo Evoswiss appartient à son titulaire et mène vers{" "}
        <a href="https://www.evoswiss.ch/" target="_blank" rel="noopener noreferrer">
          evoswiss.ch
        </a>
        .
      </p>
      <p>
        Certaines photographies proviennent d’Unsplash et restent soumises à
        la licence de leurs auteurs.
      </p>
      <h2>Responsabilité</h2>
      <p>
        Les informations sont données pour présenter le coaching. Elles ne
        remplacent pas un bilan. Le même résultat n’est pas garanti à chaque
        personne : la progression dépend du point de départ, de la régularité
        et de la santé de chacun.
      </p>
    </>
  );
}

function Confidentialite() {
  return (
    <>
      <p className="eyebrow">Données personnelles</p>
      <h1>Politique de confidentialité.</h1>
      <p className="legal-updated">Dernière mise à jour : 4 octobre 2026.</p>
      <p>
        Cette page explique quelles données le site collecte, pourquoi, et
        comment les demander ou les faire effacer. Elle s’applique au site et
        au formulaire de contact. Elle tient compte de la loi fédérale suisse
        sur la protection des données. Pour une demande envoyée depuis l’Union
        européenne, les droits prévus par le règlement général sur la
        protection des données s’appliquent aussi.
      </p>
      <h2>Responsable</h2>
      <p>
        Mateo Aresu, coach sportif, Genève, Suisse.
        <br />
        Email : <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <br />
        Téléphone : <a href={contact.phoneHref}>{contact.phone}</a>
      </p>
      <h2>Données envoyées via le site</h2>
      <p>Le formulaire de contact demande :</p>
      <ul>
        <li>votre nom</li>
        <li>votre email</li>
        <li>votre téléphone, si vous le renseignez</li>
        <li>le programme qui vous intéresse</li>
        <li>votre message</li>
      </ul>
      <p>
        Ces informations servent à répondre à la demande, à proposer le cas
        échéant l’échange découverte de 30 minutes, puis à assurer le suivi si
        un coaching démarre.
      </p>
      <p>
        Un message envoyé directement par email, par téléphone ou par WhatsApp
        transmet les coordonnées et le contenu choisis par la personne qui
        écrit.
      </p>
      <h2>Données techniques</h2>
      <p>
        La consultation du site peut produire des journaux techniques chez
        l’hébergeur : adresse IP, date, heure et page demandée. Ils servent à
        faire fonctionner le site et à limiter les abus. Ils ne servent pas à
        de la publicité.
      </p>
      <p>
        Les polices sont chargées depuis Google Fonts et certaines photos
        depuis Unsplash. Votre navigateur envoie alors une requête à ces
        services, qui peuvent voir votre adresse IP. Le contenu du formulaire
        ne leur est pas transmis.
      </p>
      <h2>Qui reçoit les données</h2>
      <p>
        Le formulaire est transmis par FormSubmit (formsubmit.co), uniquement
        pour déposer le message dans la boîte {contact.email}. Le message est
        ensuite lu depuis cette boîte.
      </p>
      <p>
        WhatsApp, si vous ouvrez le lien, est un service de Meta. La
        conversation se poursuit alors chez eux, selon leurs règles, en dehors
        de ce site.
      </p>
      <p>
        Les données ne sont pas vendues et ne sont pas confiées à une régie
        publicitaire.
      </p>
      <h2>Durée</h2>
      <p>
        Les messages sont conservés le temps de traiter la demande. Si un
        coaching démarre, les échanges utiles au suivi sont conservés pendant
        la durée de l’accompagnement, puis supprimés quand ils ne sont plus
        nécessaires, sauf obligation légale de les conserver plus longtemps.
      </p>
      <h2>Vos droits</h2>
      <p>Il est possible de demander :</p>
      <ul>
        <li>l’accès aux données détenues</li>
        <li>leur correction</li>
        <li>leur effacement</li>
        <li>la limitation de leur utilisation</li>
        <li>l’opposition à un usage qui ne serait plus nécessaire</li>
        <li>une copie dans un format courant</li>
      </ul>
      <p>
        La demande s’envoie à{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>. Une réponse
        est apportée dans un délai raisonnable. Pour vérifier l’identité de la
        personne, une précision peut être demandée.
      </p>
      <p>
        Vous pouvez aussi saisir le Préposé fédéral à la protection des
        données et à la transparence (PFPDT), Feldeggweg 1, 3003 Berne,{" "}
        <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer">
          edoeb.admin.ch
        </a>
        . Depuis l’Union européenne, vous pouvez saisir l’autorité de
        protection des données de votre pays.
      </p>
      <h2>Sécurité</h2>
      <p>
        L’envoi du formulaire passe par une connexion chiffrée. Aucun site
        n’est exempt de risque : n’envoyez pas d’information médicale détaillée
        dans le premier message. Le bilan, s’il a lieu, se fait dans un cadre
        plus direct.
      </p>
    </>
  );
}

function Cookies() {
  return (
    <>
      <p className="eyebrow">Traceurs</p>
      <h1>Politique de cookies.</h1>
      <p className="legal-updated">Dernière mise à jour : 4 octobre 2026.</p>
      <p>
        Un cookie est un petit fichier déposé sur votre appareil par un site.
        Ce site n’en dépose pas. Il n’y a pas de mesure d’audience, pas de
        publicité, et pas de cookie qui vous suit d’un site à l’autre.
      </p>
      <h2>Ce que le site dépose</h2>
      <p>
        Aucun cookie nécessaire, statistique ou publicitaire n’est écrit par
        ce site. Le bandeau en bas de page, une fois fermé, est retenu dans le
        stockage local de votre navigateur. Ce n’est pas un cookie. Il sert
        seulement à ne plus réafficher le message sur cet appareil.
      </p>
      <h2>Services appelés au chargement</h2>
      <p>
        Deux services extérieurs sont contactés quand la page s’affiche, sans
        que le contenu du formulaire leur soit envoyé :
      </p>
      <ul>
        <li>
          Google Fonts, pour afficher les polices de caractères. La requête
          peut inclure votre adresse IP.
        </li>
        <li>
          Unsplash, pour afficher certaines photographies. La requête peut
          aussi inclure votre adresse IP.
        </li>
      </ul>
      <p>
        Ces requêtes ne servent pas à constituer un profil publicitaire pour
        le site.
      </p>
      <h2>Votre navigateur</h2>
      <p>
        Vous pouvez bloquer ou effacer les cookies et le stockage local dans
        les réglages de votre navigateur. Comme ce site n’utilise pas de
        cookie pour fonctionner, le bloquer ne retire pas l’accès aux pages.
        Si vous effacez le stockage local, le bandeau d’information peut
        réapparaître.
      </p>
      <p>
        Le détail des données du formulaire est dans la{" "}
        <a href="#confidentialite">politique de confidentialité</a>.
      </p>
    </>
  );
}
