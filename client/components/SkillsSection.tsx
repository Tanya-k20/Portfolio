import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Database, Wrench, Zap } from "lucide-react";

export default function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const skillCategories = [
    {
      title: "Frontend",
      icon: Zap,
      skills: ["React", "TailwindCSS", "HTML/CSS", "JavaScript", "Responsive Design"],
      color: "from-amber-600 to-orange-500",
    },
    {
      title: "Backend & AI",
      icon: Code2,
      skills: ["Python", "FastAPI", "LLMs & RAG", "Prompt Engineering", "Lang Chain"],
      color: "from-orange-600 to-amber-600",
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: ["SQL", "Vector DB", "PostgreSQL", "Docker", "Cloud Computing"],
      color: "from-yellow-700 to-amber-600",
    },
    {
      title: "Tools & Analytics",
      icon: Wrench,
      skills: ["Git/GitHub", "Power BI", "Jupyter Notebook", "Linux", "API Development"],
      color: "from-amber-700 to-orange-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-effect dark:glass-effect-dark p-8 rounded-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-6 font-display">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground text-foreground/80 text-sm font-medium transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass-effect dark:glass-effect-dark p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 font-display">Technical Proficiency</h3>
          <div className="space-y-6">
            {[
              { name: "Python & Backend Development", level: 85 },
              { name: "FastAPI & REST APIs", level: 80 },
              { name: "AI/ML & LLMs", level: 75 },
              { name: "Full-Stack Development", level: 80 },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 1 + idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
