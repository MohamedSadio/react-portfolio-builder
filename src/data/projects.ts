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
  screenshots?: string[];
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
      "Gestion de pass de transport rechargeable (BUS, BRT, TER)",
      "Enregistrement et historique des trajets par utilisateur",
      "Calcul de tarification dynamique avec remises de fidélité",
      "Notifications temps réel (débit, recharge, confirmation de trajet)",
      "Authentification JWT avec gestion des rôles (USER / ADMIN)",
      "Architecture microservices (8 services Spring Boot indépendants)",
      "Résilience avec Circuit Breakers Resilience4J + fallbacks automatiques",
      "Communication synchrone OpenFeign et asynchrone RabbitMQ",
      "Load balancing via Eureka + Spring Cloud Gateway",
      "Traçage distribué Zipkin + métriques Actuator/Prometheus",
    ],
    github: "https://github.com/MohamedSadio/Smart-mobility-pass",
    screenshots: [
    "/images/smart-mobility/smart-mobility-1.png",
    "/images/smart-mobility/smart-mobility-2.png",
    "/images/smart-mobility/smart-mobility-3.png",
    "/images/smart-mobility/smart-mobility-4.png",
    "/images/smart-mobility/smart-mobility-5.png",
    "/images/smart-mobility/smart-mobility-6.png",
    "/images/smart-mobility-5.png"
  ],
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
      "Interface responsive et moderne"
    ],
    github: "https://github.com/MohamedSadio/ShopeaseProject",
    screenshots: [
      "/images/shopease/shopease-1.png",
      "/images/shopease/shopease-2.png",
      "/images/shopease/shopease-3.png",
      "/images/shopease/shopease-4.png",
      "/images/shopease/shopease-5.png",
    ],
    live: "https://shopease-project-git-main-mohameds-projects-784cfab9.vercel.app/",
    category: "Frontend",
  },
  {
    id: "cartographie",
    title: "Plateforme de Cartographie",
    shortDescription: "Application web de cartographie interactive avec Spring Boot et React.",
    fullDescription:
      "Plateforme de gestion et de cartographie de projets de recherche développée dans le cadre du Master 2 Ingénierie des Systèmes d'Information à l'ESMT. Cette application web permet aux centres de recherche de centraliser leurs projets académiques, de gérer les équipes de chercheurs et d'analyser les données via des tableaux de bord statistiques. L'application propose une authentification sécurisée par JWT avec support OAuth 2.0 Google, un système de gestion multi-rôles (candidat, gestionnaire, administrateur), et des fonctionnalités avancées de suivi de projets incluant la gestion des participants, le calcul automatique des statistiques et l'import de données en masse via fichiers CSV.",
    stack: ["Spring Boot", "React", "MySQL"],
    features: [
      "Gestion complète des projets de recherche avec suivi d'avancement",
      "Système de gestion d'équipe et de participants",
      "Tableaux de bord statistiques avec 7 indicateurs clés",
      "Administration multi-niveaux avec gestion des utilisateurs et des domaines",
      "API REST documentée avec Swagger/OpenAPI",
      "Architecture en couches respectant les bonnes pratiques Spring Boot",
    ],
    github: "https://github.com/MohamedSadio/ShopeaseProject",
    screenshots: [
      "/images/cartographie/cartographie-recherche-1.png",
      "/images/cartographie/cartographie-recherche-2.png",
      "/images/cartographie/cartographie-recherche-3.png",
      "/images/cartographie/cartographie-recherche-4.png",
      "/images/cartographie/cartographie-recherche-5.png",
      "/images/cartographie/cartographie-recherche-6.png",
      "/images/cartographie/cartographie-recherche-7.png",
      "/images/cartographie/cartographie-recherche-8.png",
      "/images/cartographie/cartographie-recherche-9.png"
    ],
    category: "Full-Stack",
  },
  {
    id: "gestion-restaurant",
    title: "Gestion de Restaurant",
    shortDescription: "Application desktop et mobile de gestion des commandes d'un restaurant.",
    fullDescription:
      "Plateforme de gestion automatisée de la restauration scolaire développée dans le cadre de la Licence en Télécommunications et Informatique (LTI) - spécialité Développement d'Applications Réparties à l'ESMT. Ce projet vise à moderniser le service de restauration en digitalisant les commandes, les paiements et la gestion administrative.L'application desktop permet aux restaurateurs et administrateurs de gérer l'ensemble de la plateforme : suivi des commandes en temps réel, gestion du catalogue de produits, visualisation des statistiques, gestion des comptes utilisateurs et administration du portefeuille électronique des étudiants. Elle s'intègre avec une application mobile permettant aux étudiants de commander et payer via Orange Money ou Wave.Mon rôle : Développement de l'application desktop (interface administrateur et restaurateur).",
    stack: ["Electron", "React Native", "JavaScript"],
    features: [
      "Tableau de bord statistique avec graphiques (revenus, commandes, clients)",
      "Gestion des commandes en temps réel (nouvelles, en cours, livrées)",
      "Catalogue produits avec gestion des catégories et disponibilité",
      "Historique complet des transactions",
      "Interface d'authentification sécurisée pour restaurateurs",
      "Architecture en 3 couches (Présentation - Backend - Base de données)"
    ],
    screenshots: [
      "/images/restauration/restauration-1.png",
      "/images/restauration/restauration-2.png",
      "/images/restauration/restauration-3.png",
      "/images/restauration/restauration-4.png"
    ],
    category: "Desktop & Mobile",
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
    screenshots: [
      "/images/location/location-voiture-1.png",
      "/images/location/location-voiture-2.png",
      "/images/location/location-voiture-3.png",
      "/images/location/location-voiture-4.png",
      "/images/location/location-voiture-5.png"
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
