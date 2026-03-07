import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-14 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-mono font-bold text-foreground mb-4">
              Projet introuvable
            </h1>
            <Link
              to="/"
              className="text-xs uppercase tracking-widest text-primary hover:text-foreground transition-colors"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const images = project.screenshots || (project.screenshot ? [project.screenshot] : []);
  const hasImages = images.length > 0;

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-14 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-mono font-bold text-foreground mb-4">
              Projet introuvable
            </h1>
            <Link
              to="/"
              className="text-xs uppercase tracking-widest text-primary hover:text-foreground transition-colors"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-14">
        {/* Header */}
        <section className="py-16 border-b border-border">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft size={14} />
                Tous les projets
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
                  {project.title}
                </h1>
                {project.architecture && (
                  <span className="text-[10px] uppercase tracking-widest border border-primary text-primary px-2 py-0.5">
                    {project.architecture}
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                {project.category}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Screenshot slider */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="w-full aspect-video border border-border bg-muted/30 flex items-center justify-center overflow-hidden">
                {hasImages ? (
                  <img
                    src={images[currentImageIndex]}
                    alt={`Capture d'écran ${currentImageIndex + 1} de ${project.title}`}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-muted-foreground">
                    <ImageIcon size={32} strokeWidth={1} />
                    <p className="text-xs uppercase tracking-widest">
                      Capture d'écran à venir
                    </p>
                  </div>
                )}
              </div>

              {/* Navigation buttons */}
              {images.length > 1 && (
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={handlePrevImage}
                    className="p-2 border border-border text-foreground hover:bg-muted transition-colors"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-primary" : "bg-border"
                        }`}
                        aria-label={`Aller à l'image ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNextImage}
                    className="p-2 border border-border text-foreground hover:bg-muted transition-colors"
                    aria-label="Image suivante"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}

              {/* Image counter */}
              {images.length > 1 && (
                <div className="absolute top-4 right-4 text-xs bg-black/50 text-white px-3 py-1 rounded">
                  {currentImageIndex + 1} / {images.length}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Description + Details */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Description */}
              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-mono">
                  À propos
                </h2>
                <p className="text-sm leading-relaxed text-foreground">
                  {project.fullDescription}
                </p>

                <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-mono mt-10">
                  Fonctionnalités
                </h2>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1 text-xs">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-mono">
                  Stack technique
                </h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm border border-border text-foreground px-3 py-1.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-mono">
                  Liens
                </h2>
                <div className="flex flex-col gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={14} />
                      Code source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={14} />
                      Site en ligne
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <p className="text-xs text-muted-foreground">
                      Liens à venir
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} />
              Retour aux projets
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;
