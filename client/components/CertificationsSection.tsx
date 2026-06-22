import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, BookOpen } from "lucide-react";

export default function CertificationsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const certifications = [
    {
      id: 1,
      title: "Cloud Computing",
      issuer: "NPTEL",
      description: "Comprehensive certification in cloud computing fundamentals and deployment strategies.",
      icon: BookOpen,
      color: "from-amber-600 to-orange-500",
    },
    {
      id: 2,
      title: "Prompt Engineering for Generative AI",
      issuer: "LinkedIn Learning",
      description: "Advanced techniques for crafting effective prompts and leveraging generative AI models.",
      icon: Award,
      color: "from-orange-600 to-amber-600",
    },
  ];

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

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 gradient-mesh -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative glass-effect dark:glass-effect-dark p-8 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${cert.color} transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${cert.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-primary font-semibold mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-foreground/70 leading-relaxed">
                    {cert.description}
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-6 flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100"
                  >
                    <span>Verified Credential</span>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
