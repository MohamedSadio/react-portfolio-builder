import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Langages",
    skills: ["C", "C++", "Java", "PHP", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
  },
  {
    label: "Frameworks & Librairies",
    skills: ["React", "Express", "Nest js","Electron", "Spring Boot","Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Modélisation & Design",
    skills: ["UML", "BPMN", "Figma", "UX/UI"],
  },
  {
    label: "Outils & Systèmes",
    skills: ["Git", "MySQL", "Apache", "Microservices", "API REST"],
  },
  {
    label: "Ingénierie & Méthodes",
    skills: ["Agile / Scrum", "Spécifications fonctionnelles", "User Stories", "Recueil des besoins", "Analyse métier"],
  }
];

const SkillsSection = () => {
  return (
    <section id="competences" className="py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
          Expertise
        </p>
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-12">
          Compétences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-mono">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm border border-border text-foreground px-3 py-1.5 hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
