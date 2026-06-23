import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-lg font-bold gradient-text mb-4 font-display">Tanya K</h3>
            <p className="text-foreground/70 text-sm">
              Full-Stack Developer & AI Enthusiast. Building scalable solutions with Python, FastAPI, and cutting-edge AI technologies.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#about" className="text-foreground/70 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#skills" className="text-foreground/70 hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-foreground/70 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#achievements" className="text-foreground/70 hover:text-primary transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="/#certifications" className="text-foreground/70 hover:text-primary transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  API Design
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Full Stack
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/Tanya-k20" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all" title="GitHub">
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="https://linkedin.com/in/tanyak20" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="mailto:karupstanya@gmail.com" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all" title="Email">
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border/50 pt-8"
        >
          <p className="text-center text-foreground/60 text-sm">
            © {currentYear} Tanya K. All rights reserved. 
           
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
