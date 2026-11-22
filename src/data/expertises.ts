import {
  Compass,
  PenTool,
  Megaphone,
  CalendarRange,
  Search,
  Radio,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export type Expertise = {
  id: string;
  number: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  category: "Stratégie" | "Création" | "Digital" | "Terrain" | "Recherche" | "Formation";
  tags: string[];
  deliverables: string[];
  impact: { label: string; value: number; suffix: string };
  featured?: boolean;
};

export const CATEGORIES = ["Toutes", "Stratégie", "Création", "Digital", "Terrain", "Recherche", "Formation"] as const;

export const EXPERTISES: Expertise[] = [
  {
    id: "conseil-strategie",
    number: "01",
    title: "Conseil & Stratégie",
    short: "Positionnement de marque, stratégie de communication, conseil éditorial et accompagnement.",
    description:
      "Nous clarifions votre positionnement et construisons une stratégie de communication cohérente, lisible et orientée résultats. De l'audit à la feuille de route, chaque décision s'appuie sur vos enjeux réels.",
    icon: Compass,
    category: "Stratégie",
    tags: ["Positionnement", "Stratégie éditoriale", "Audit", "Feuille de route"],
    deliverables: ["Audit de marque & de communication", "Plateforme de marque", "Plan de communication annuel", "Recommandations actionnables"],
    impact: { label: "Clarté du positionnement", value: 94, suffix: "%" },
  },
  {
    id: "identite-creation",
    number: "02",
    title: "Presse & Media Training",
    short: "Relations presse, préparation aux interviews et accompagnement à la prise de parole médiatique.",
    description:
      "Une identité forte qui se reconnaît au premier coup d'œil. Nous concevons des univers visuels, des supports et des contenus qui racontent votre différence avec exigence et créativité.",
    icon: PenTool,
    category: "Création",
    tags: ["Relations presse", "Media training", "Prise de parole", "Gestion des interviews"],
    deliverables: ["Stratégie de relations presse", "Préparation aux interviews", "Coaching des porte-parole", "Éléments de langage"],
    impact: { label: "Reconnaissance de marque", value: 87, suffix: "%" },
  },
  {
    id: "communication-digitale",
    number: "03",
    title: "Communication Digitale",
    short: "Présence en ligne, réseaux sociaux, campagnes digitales et animation de communautés.",
    description:
      "Votre présence en ligne pensée comme un média à part entière. Stratégie social media, production de contenus et pilotage de campagnes pour engager, convertir et fidéliser vos audiences.",
    icon: Megaphone,
    category: "Digital",
    tags: ["Social media", "Contenu digital", "Campagnes en ligne", "Communautés"],
    deliverables: ["Stratégie social media", "Calendrier éditorial", "Production de contenus", "Reporting & optimisation"],
    impact: { label: "Engagement moyen", value: 3.2, suffix: "×" },
  },
  {
    id: "evenementiel-visibilite",
    number: "04",
    title: "Événementiel & Visibilité",
    short: "Conception d'événements, relations publiques, activations et communication terrain.",
    description:
      "Des moments qui comptent et des rencontres qui marquent. Nous concevons des événements, des activations et des dispositifs de relations publiques qui donnent de l'écho à votre marque sur le terrain.",
    icon: CalendarRange,
    category: "Terrain",
    tags: ["Événements", "Relations publiques", "Activations", "Terrain"],
    deliverables: ["Concept & production d'événements", "Relations presse & RP", "Activations de marque", "Communication terrain"],
    impact: { label: "Participants mobilisés", value: 1200, suffix: "+" },
  },
  {
    id: "etudes-enquetes",
    number: "05",
    title: "Études & Enquêtes",
    short: "Études de marché, enquêtes de terrain, collecte et analyse de données pour éclairer vos décisions.",
    description:
      "Décider sur des faits, pas sur des intuitions. Nous menons des études de marché et des enquêtes de terrain rigoureuses — collecte, analyse et restitution — pour éclairer vos choix stratégiques et mesurer l'impact de vos actions.",
    icon: Search,
    category: "Recherche",
    tags: ["Études de marché", "Enquêtes terrain", "Données & analyse", "Insights"],
    deliverables: ["Protocoles d'enquête & questionnaires", "Collecte de données terrain", "Analyse statistique & insights", "Rapports & recommandations"],
    impact: { label: "Répondants enquêtés / an", value: 8500, suffix: "+" },
    featured: true,
  },
  {
    id: "campagnes-influence",
    number: "06",
    title: "Campagnes & Influence",
    short: "Conception de campagnes de communication, stratégies d'influence et actions pour renforcer votre visibilité.",
    description:
      "Des campagnes qui font bouger les lignes. Nous imaginons des dispositifs 360° et des stratégies d'influence qui amplifient votre message, créent le débat et transforment la notoriété en adhésion.",
    icon: Radio,
    category: "Stratégie",
    tags: ["Campagnes 360°", "Influence", "Notoriété", "Amplification"],
    deliverables: ["Concept de campagne 360°", "Stratégie d'influence & ambassadeurs", "Déclinaisons médias", "Mesure d'impact"],
    impact: { label: "Portée média générée", value: 2.4, suffix: "M" },
    featured: true,
  },
  {
    id: "capacity-building",
    number: "07",
    title: "Capacity Building",
    short: "Formation professionnelle, renforcement des compétences et accompagnement des organisations.",
    description:
      "Monter en compétences pour durer. Nous formons et accompagnons vos équipes — ateliers, parcours de formation et coaching — pour renforcer vos capacités de communication et rendre votre organisation autonome.",
    icon: GraduationCap,
    category: "Formation",
    tags: ["Formation", "Montée en compétences", "Coaching", "Autonomie"],
    deliverables: ["Programmes de formation sur mesure", "Ateliers pratiques & coaching", "Guides & outils internes", "Évaluation des acquis"],
    impact: { label: "Apprenants formés", value: 640, suffix: "+" },
    featured: true,
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Échange",
    duration: "Semaine 1",
    description: "Nous prenons le temps de comprendre votre activité, vos publics et vos objectifs. Immersion, écoute et diagnostic partagé.",
    points: ["Réunion de cadrage", "Analyse de l'existant", "Définition des objectifs"],
  },
  {
    number: "02",
    title: "Recommandation",
    duration: "Semaine 2–3",
    description: "Nous définissons une direction claire et des actions adaptées à vos priorités, avec un plan d'action chiffré et réaliste.",
    points: ["Stratégie & positionnement", "Plan d'action priorisé", "Budget & calendrier"],
  },
  {
    number: "03",
    title: "Réalisation",
    duration: "Semaine 4+",
    description: "Nous donnons vie aux idées avec exigence, cohérence et créativité — production, déploiement et coordination des partenaires.",
    points: ["Production des contenus", "Déploiement multicanal", "Pilotage de projet"],
  },
  {
    number: "04",
    title: "Évolution",
    duration: "En continu",
    description: "Nous suivons les résultats, mesurons l'impact et faisons évoluer les actions selon vos besoins et les retours du terrain.",
    points: ["Indicateurs & reporting", "Optimisation continue", "Capitalisation des acquis"],
  },
];

export const TESTIMONIALS = [
  {
    quote: "Orognis a complètement repositionné notre marque. En six mois, notre notoriété a bondi et nos équipes ont enfin une voix commune.",
    name: "Directrice Communication",
    org: "Groupe agroalimentaire",
    metric: "+68% de notoriété",
  },
  {
    quote: "Leur enquête terrain nous a donné des réponses concrètes, exploitables immédiatement. Un travail d'une rigueur rare.",
    name: "Responsable Études",
    org: "ONG internationale",
    metric: "8 500 répondants",
  },
  {
    quote: "La campagne d'influence a dépassé tous nos objectifs de portée. Une équipe créative, réactive et profondément stratégique.",
    name: "Chef de projet marque",
    org: "Institution publique",
    metric: "2,4M de portée",
  },
  {
    quote: "Le programme de formation a transformé nos équipes : elles sont aujourd'hui autonomes sur leur communication quotidienne.",
    name: "DRH",
    org: "Réseau d'entreprises",
    metric: "640 apprenants formés",
  },
];
