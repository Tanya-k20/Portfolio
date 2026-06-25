import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Trophy, ChevronDown, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

export default function AchievementsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const achievements = [
    {
      id: 1,
      title: "UYIR Road Safety Hackathon - Finalist",
      organization: "Sri Krishna College of Engineering and Technology, Coimbatore",
      bullets: [
        "Finalist among 3,000+ participating teams, securing a position in the Top 145.",
        "Developed an intelligent road safety solution for pothole detection and driver alerts.",
        "Integrated air quality and temperature monitoring for enhanced driver awareness.",
        "Received valuable feedback from the jury to refine the solution further.",
      ],
      gallery: ["/assets/uyir1.jpeg", "/assets/uyir2.jpeg", "/assets/uyir3.jpeg", "/assets/uyir4.jpeg", "/assets/uyir5.jpeg"],
      icon: Trophy,
    },
    {
      id: 2,
      title: " TANCAM'S TNWISE 2025 Women's Hackathon - Finalist",
      organization: "Kumaraguru College of Technology, Coimbatore",
      bullets: [
        "Selected as a finalist in the TNWISE 2025 Women's Hackathon.",
        "Collaborated on innovative solutions addressing real-world challenges.",
        "Enhanced problem-solving, teamwork, and technical skills.",
      ],
      gallery: ["/assets/tn1.jpeg", "/assets/tn2.jpeg", "/assets/tn3.jpeg", "/assets/tn4.jpeg","/assets/tn5.jpeg"],
      icon: Award,
    },
    {
      id: 3,
      title: "AI Meets Campus – Award for Impressive Performance",
      organization: "Campus Initiative",
      bullets: [
        "Awarded for exceptional performance during the AI Meets Campus initiative.",
        "Participated in hands-on AI and UI design activities.",
        "Explored AI ethics, emerging technologies, and career opportunities.",
      ],
      gallery: ["/assets/qud1.png", "/assets/qud2.png", "/assets/qud3.jpeg", "/assets/qud4.jpeg", "/assets/qud5.png","/assets/qud6.png"],
      icon: Trophy,
    },
    {
      id: 4,
      title: " SUNHACKS'25 National Hackathon - Finalist",
      organization: "Sandip University, Nashik",
      bullets: [
        "Finalist in the 36-hour national hackathon.",
        'Built "City Pulse: Smart Urban Growth Platform."',
        "Strengthened innovation, teamwork, and technical problem-solving skills.",
      ],
      gallery: ["/assets/san1.jpeg", "/assets/san2.jpeg", "/assets/san3.jpeg", "/assets/san4.jpeg", "/assets/san5.jpeg" ,"/assets/san6.jpeg"],
      icon: Trophy,
    },
    {
      id: 5,
      title: " Google Developers Groups Agentathon - Finalist",
      organization: "Malla Reddy University, Hyderabad",
      bullets: [
        "Shortlisted among 1,000 teams and advanced to the Top 500.",
        "Participated in the 36-hour Agentic AI Hackathon.",
        "Gained valuable experience in AI development and collaborative innovation.",
      ],
      gallery: ["/assets/h1.jpeg", "/assets/h2.jpeg", "/assets/h3.jpeg", "/assets/h4.jpeg", "/assets/h5.jpeg", "/assets/h6.jpeg" ,"/assets/h7.jpeg", "/assets/h9.jpeg"],
      icon: Award,
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
      id="achievements"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            const isExpanded = expandedId === achievement.id;

            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className="glass-effect dark:glass-effect-dark rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : achievement.id)}
                  className="w-full text-left p-8 border-l-4 border-primary hover:border-secondary transition-colors duration-300"
                >
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-primary to-secondary">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {achievement.title}
                      </h3>

                      <p className="text-sm font-semibold text-primary mb-2">
                        {achievement.organization}
                      </p>

                
                    </div>

                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border/50 p-8 bg-foreground/2"
                    >
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-4">
                            Highlights
                          </h4>
                          <ul className="space-y-3">
                            {achievement.bullets.map((bullet, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-3 text-foreground/80"
                              >
                                <span className="text-primary font-bold mt-1">
                                  ✓
                                </span>
                                <span>{bullet}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-4">
                            Gallery
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {achievement.gallery.map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="rounded-lg border border-primary/30 cursor-pointer hover:border-primary transition-all hover:shadow-lg group overflow-hidden"  >
                              <img
                                 src={item}
                                 alt={`Gallery ${idx + 1}`}
                                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
/>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
