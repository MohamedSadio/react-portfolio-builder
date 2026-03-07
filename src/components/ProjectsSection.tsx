import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projets" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
          Travaux
        </p>
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-12">
          Projets
        </h2>

        <div className="space-y-0 border-t border-border">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/projet/${project.id}`}
                className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border hover:bg-muted/50 transition-colors px-4 -mx-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.architecture && (
                      <span className="text-[10px] uppercase tracking-widest border border-primary text-primary px-2 py-0.5">
                        {project.architecture}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] text-muted-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-3 md:mt-0"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
