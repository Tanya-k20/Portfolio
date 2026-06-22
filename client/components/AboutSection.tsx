import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const education = [
    {
      year: "2025",
      title: "GenAI Data Analytics Intern",
      institution: "Tata Group (Forage)",
      description: "Applied GenAI techniques for financial data analysis and built Power BI dashboards",
    },
    {
      year: "2027",
      title: "B.Tech in Computer Science",
      institution: "Dr. N.G.P. Institute of Technology",
      description: "Focus on full-stack engineering, AI applications, and scalable backend development",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p variants={itemVariants} className="text-lg text-foreground/70 mb-6 leading-relaxed">
              I'm a Computer Science student with a strong foundation in software development and data-driven systems. I'm passionate about building AI-powered applications and scalable backend systems.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-foreground/70 mb-6 leading-relaxed">
              My expertise spans full-stack development, GenAI techniques, and cloud technologies. I'm driven by creating impactful solutions through continuous learning and hands-on problem-solving.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex gap-3">
                <span className="text-primary font-semibold min-w-fit">Location:</span>
                <span className="text-foreground/70">Coimbatore, India</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-semibold min-w-fit">Email:</span>
                <span className="text-foreground/70">karupstanya@gmail.com</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-semibold min-w-fit">Status:</span>
                <span className="text-foreground/70">Open to internships & collaborations</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 font-display">Education & Experience</h3>

            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-effect dark:glass-effect-dark p-6 rounded-lg border-l-4 border-primary hover:border-secondary transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-primary mb-2">{item.year}</div>
                <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                <p className="text-foreground/60 mb-2">{item.institution}</p>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
