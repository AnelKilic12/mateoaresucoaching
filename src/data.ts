import heroPhoto from "./assets/mateo-hero.jpg";

export const images = {
  hero: heroPhoto,
  portrait:
    "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=80",
  session:
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
  gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
  strength:
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=80",
  mobility:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
  bars: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=80",
};

export const contact = {
  email: "mateo.aresu@gmail.com",
  phone: "+41 78 900 99 03",
  phoneHref: "tel:+41789009903",
  whatsapp: "https://wa.me/41789009903",
  city: "Genève, Suisse",
};

export const specialties = [
  {
    title: "Musculation",
    text: "Construction de masse, technique d’exécution et progression mesurable.",
  },
  {
    title: "Développement de la force",
    text: "Des chiffres qui avancent semaine après semaine, sans sacrifier les articulations.",
  },
  {
    title: "Esthétique corporelle",
    text: "Silhouette, composition corporelle et un physique qui reflète le travail fourni.",
  },
  {
    title: "Réhabilitation",
    text: "Reprise après blessure, mobilité et un corps qui tient dans le temps.",
  },
];

export const benefits = [
  {
    title: "Un corps sans douleur",
    text: "Vous lever chaque matin mobile, léger et plein d’énergie.",
  },
  {
    title: "Une force mesurable",
    text: "Des chiffres qui progressent semaine après semaine, visibles et concrets.",
  },
  {
    title: "Plus d’énergie",
    text: "Au quotidien, y compris en fin de journée de travail.",
  },
  {
    title: "Une posture transformée",
    text: "Une maîtrise de votre corps qui change la façon dont vous vous présentez.",
  },
  {
    title: "Une méthode adaptée",
    text: "Qui s’intègre dans votre vie sans la remplacer.",
  },
  {
    title: "Des résultats durables",
    text: "Sans effet de rechute. Une transformation réelle, pas temporaire.",
  },
];

export const programs = [
  {
    id: "transformation",
    duration: "Sur 3 mois",
    title: "Transformation",
    subtitle: "Premier élan solide, résultats concrets et mesurables.",
    price: "900",
    payment: "Paiement en 3 fois ou 300 CHF / mois",
    featured: false,
    items: [
      "Bilan complet en présentiel à Genève ou en ligne",
      "Programme personnalisé et évolutif",
      "Suivi hebdomadaire par message",
      "Accès à l’application de suivi en ligne",
      "Bilan final en présentiel ou en ligne",
    ],
  },
  {
    id: "longevite",
    duration: "Sur 6 mois",
    title: "Longévité",
    subtitle: "Transformation durable des habitudes et du corps.",
    price: "1 500",
    payment: "Paiement en 6 fois ou 250 CHF / mois",
    featured: true,
    items: [
      "Bilan complet en présentiel à Genève ou en ligne",
      "Programme personnalisé et évolutif",
      "Suivi hebdomadaire prioritaire + appel mensuel",
      "Accès à l’application de suivi en ligne",
      "Point intermédiaire en présentiel ou en ligne",
      "Accompagnement sur les habitudes de vie",
      "Bilan final en présentiel ou en ligne",
    ],
  },
];

export const steps = [
  {
    n: "01",
    title: "Échange découverte",
    text: "30 minutes gratuites pour comprendre vos objectifs et voir ensemble si je suis la bonne personne.",
  },
  {
    n: "02",
    title: "Bilan en présentiel ou en ligne",
    text: "Je vous évalue à Genève ou en ligne : mobilité, posture, force et objectifs détaillés.",
  },
  {
    n: "03",
    title: "Programme sur mesure",
    text: "Je prépare un programme 100 % personnalisé sur application, ajusté toutes les 2 à 4 semaines selon vos retours.",
  },
  {
    n: "04",
    title: "Suivi continu",
    text: "Je réponds par message sous 24 h. Les appels visio sont inclus dans le programme 6 mois.",
  },
];

export const gallery = [
  { src: images.session, alt: "Séance de musculation encadrée", label: "Séance" },
  { src: images.strength, alt: "Travail de force", label: "Force" },
  { src: images.gym, alt: "Salle de sport", label: "Salle" },
  { src: images.mobility, alt: "Travail de mobilité", label: "Mobilité" },
  { src: images.bars, alt: "Entraînement avec barres", label: "Technique" },
];
