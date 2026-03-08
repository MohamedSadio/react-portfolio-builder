import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center pt-14">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-mono font-bold leading-tight text-foreground mb-6">
            Mohamed
            <br />
            <span className="text-primary">SADIO</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            Développeur Full-Stack. Etudiant en Master Ingénierie des Systèmes d'Information à l'ESMT et futur architecte logiciel.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#projets"
              className="text-xs uppercase tracking-widest border border-foreground text-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              Voir les projets
            </a>
            <a
              href="#contact"
              className="text-xs uppercase tracking-widest text-muted-foreground px-6 py-3 hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
