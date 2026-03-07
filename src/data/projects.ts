export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  stack: string[];
  features: string[];
  github?: string;
  live?: string;
  screenshot?: string;
  category: string;
  architecture?: string;
}

export const projects: Project[] = [
  {
    id: "smart-mobility-pass",
    title: "Smart Mobility Pass",
    shortDescription: "Application de mobilité intelligente basée sur une architecture microservices.",
    fullDescription:
      "Smart Mobility Pass est une application complète de gestion de la mobilité urbaine. Le projet repose sur une architecture microservices permettant une scalabilité et une maintenance optimales. Chaque service est indépendant et communique via des API REST, offrant une grande flexibilité dans le déploiement et l'évolution de chaque module.",
    stack: ["Spring Boot", "React", "Microservices", "MySQL", "API REST"],
    features: [
      "Architecture microservices complète",
      "Gestion des utilisateurs et authentification",
      "Services indépendants et scalables",
      "Communication inter-services via API REST",
      "Interface utilisateur React moderne",
    ],
    github: "https://github.com/MohamedSadio/Smart-mobility-pass",
    category: "Full-Stack",
    architecture: "Microservices",
  },
  {
    id: "shopease",
    title: "ShopEase",
    shortDescription: "Frontend d'un site e-commerce moderne — en cours de développement.",
    fullDescription:
      "ShopEase est la partie frontend d'un site e-commerce complet. Le projet met l'accent sur une expérience utilisateur fluide et intuitive pour la navigation des produits, la gestion du panier et le processus d'achat. Le projet est encore en cours de développement avec de nouvelles fonctionnalités à venir.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Catalogue de produits avec filtres",
      "Panier d'achat interactif",
      "Interface responsive et moderne",
      "En cours de développement",
    ],
    github: "https://github.com/MohamedSadio/ShopeaseProject",
    category: "Frontend",
  },
  {
    id: "cartographie",
    title: "Plateforme de Cartographie",
    shortDescription: "Application web de cartographie interactive avec Spring Boot et React.",
    fullDescription:
      "Plateforme de cartographie permettant la visualisation et la gestion de données géographiques. L'application combine un backend robuste en Spring Boot avec une interface React interactive pour offrir une expérience de cartographie complète. Les données sont stockées dans MySQL pour une gestion efficace des informations géospatiales.",
    stack: ["Spring Boot", "React", "MySQL"],
    features: [
      "Visualisation de cartes interactives",
      "Gestion des données géographiques",
      "API REST pour les données cartographiques",
      "Interface utilisateur intuitive",
    ],
    category: "Full-Stack",
  },
  {
    id: "location-javafx",
    title: "Gestion de Location",
    shortDescription: "Application desktop de gestion de locations développée en JavaFX.",
    fullDescription:
      "Application de bureau pour la gestion de locations de véhicules ou d'équipements. Développée avec JavaFX pour une interface graphique riche et MySQL pour la persistance des données. L'application permet la gestion complète du cycle de location : réservation, suivi et facturation.",
    stack: ["Java", "JavaFX", "MySQL"],
    features: [
      "Interface graphique JavaFX",
      "Gestion des réservations",
      "Suivi des locations en cours",
      "Base de données MySQL",
    ],
    category: "Desktop",
  },
  {
    id: "app-bancaire",
    title: "Application Bancaire",
    shortDescription: "Simulation d'application bancaire développée en C++.",
    fullDescription:
      "Application console simulant les opérations bancaires de base : création de comptes, dépôts, retraits et transferts. Le projet met en pratique les concepts de la programmation orientée objet en C++ avec une gestion rigoureuse de la mémoire et des structures de données.",
    stack: ["C++", "POO"],
    features: [
      "Gestion de comptes bancaires",
      "Opérations de dépôt et retrait",
      "Transferts entre comptes",
      "Programmation orientée objet",
    ],
    category: "Console",
  },
];
