import { motion } from "framer-motion";

const formations = [
  {
    period: "2024 — Présent",
    title: "Master en Ingénierie des Systèmes d'Information",
    place: "ESMT, Dakar",
  },
  {
    period: "Fév. 2024 — Juil. 2024",
    title: "ERASMUS+",
    place: "IES EL RINCON, Las Palmas de Gran Canaria, Espagne",
  },
  {
    period: "2021 — 2024",
    title: "Licence en Télécommunications et Informatique spécialisée en developpement d'application répartie",
    place: "ESMT, Dakar",
  },
];

const experiences = [
  {
    period: "Mars 2025 — Avr. 2025",
    title: "Prestataire chargé du déploiement",
    place: "Cabinet d'ophtalmologie Keur Siloé, Dakar",
    description:
      "Déploiement de deux applications sur le réseau local via un serveur Apache : gestion des consultations/suivi médical et gestion de stocks/facturation.",
  },
  {
    period: "Avr. 2024 — Juil. 2024",
    title: "Développeur Full Stack",
    place: "Central Uniformes, Telde, Gran Canaria, Espagne",
    description:
      "Développement d'une application de gestion d'approvisionnement et d'un système de réservation de salle de réunion. Technologies : PHP, JavaScript, HTML, CSS, Bootstrap.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="parcours" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
          Expériences
        </p>
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-12">
          Expériences professionnelles
        </h2>

        <div className="border-t border-border mb-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12 py-6 border-b border-border"
            >
              <span className="text-xs font-mono text-muted-foreground w-44 shrink-0">
                {exp.period}
              </span>
              <div>
                <h3 className="text-sm font-medium text-foreground">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.place}</p>
                {exp.description && (
                  <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
          Formation
        </p>
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-12">
          Parcours académique
        </h2>

        <div className="border-t border-border">
          {formations.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 py-6 border-b border-border"
            >
              <span className="text-xs font-mono text-muted-foreground w-44 shrink-0">
                {exp.period}
              </span>
              <div>
                <h3 className="text-sm font-medium text-foreground">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.place}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
