import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
          Me contacter
        </p>
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-8">
          Contact
        </h2>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:Mohamed.sadio.14@gmail.com"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={16} />
            Mohamed.sadio.14@gmail.com
          </a>
          <a
            href="tel:+22178018991"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone size={16} />
            +221 78 018 99 81
          </a>
          <a
            href="https://github.com/MohamedSadio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={16} />
            github.com/MohamedSadio
          </a>
          <a
            href="https://linkedin.com/in/mohamed-sadio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground font-mono">
            © 2025 Mohamed SADIO — Tous droits réservés
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
