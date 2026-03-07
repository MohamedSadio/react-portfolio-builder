import { motion } from "framer-motion";

const experiences = [
  {
    period: "2023 — Présent",
    title: "Master Ingénierie du Logiciel et des Systèmes Intelligents",
    place: "ESMT, Dakar",
  },
  {
    period: "2023",
    title: "Semestre Erasmus+",
    place: "Espagne",
  },
  {
    period: "2020 — 2023",
    title: "Licence en Informatique",
    place: "ESMT, Dakar",
  },
];

const ExperienceSection = () => {
  return (
    <section id="parcours" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
          Formation
        </p>
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-12">
          Parcours
        </h2>

        <div className="border-t border-border">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 py-6 border-b border-border"
            >
              <span className="text-xs font-mono text-muted-foreground w-36 shrink-0">
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
