import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const skills = ["Python", "FastAPI", "React", "SQL", "Docker", "LLMs & RAG"];

export default function HeroSection() {
  const [displayedSkill, setDisplayedSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-mesh -z-10" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight font-display"
          >
            Hi, I'm <span className="gradient-text">Tanya K</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground/80 mb-8 font-medium"
          >
            AI Enthusiast | Software Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/60 mb-8 max-w-lg leading-relaxed"
          >
            Passionate about building scalable software, AI-powered applications, and solving real-world problems through technology.
            </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-8 flex items-center gap-2"
          >
            <span className="text-foreground/70">Currently coding in:</span>
            <motion.span
              key={displayedSkill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="font-semibold text-primary"
            >
              {skills[displayedSkill]}
            </motion.span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 flex-wrap"
          >
            <a
              href="https://drive.google.com/file/d/1dOZK0M8TavGrbEaFuX5inYems06BH5vz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-4-2m4 2l4-2" />
              </svg>
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl" />

          <motion.div
            animate={{ float: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl shadow-primary/20 glass-effect"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fdab03a5c9969445fbdbe0f83e505ec9c%2Fdfdf32f5da6a405db2826c9aa070d28a?format=webp&width=800&height=1200"
                alt="Tanya K Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-secondary"
            style={{ width: "340px", height: "340px", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
          />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-foreground/40" />
      </motion.div>
    </section>
  );
}
