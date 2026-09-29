import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Trophy, ChevronDown } from "lucide-react";
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
      title: "TANCAM'S TNWISE 2025 Women's Hackathon - Finalist",
      organization: "Kumaraguru College of Technology, Coimbatore",
      bullets: [
        "Selected as a finalist in the TNWISE 2025 Women's Hackathon.",
        "Collaborated on innovative solutions addressing real-world challenges.",
        "Enhanced problem-solving, teamwork, and technical skills.",
      ],
      gallery: ["/assets/tn1.jpeg", "/assets/tn2.jpeg", "/assets/tn3.jpeg", "/assets/tn4.jpeg", "/assets/tn5.jpeg"],
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
      gallery: ["/assets/qud1.png", "/assets/qud2.png", "/assets/qud3.jpeg", "/assets/qud4.jpeg", "/assets/qud5.png", "/assets/qud6.png"],
      icon: Trophy,
    },
    {
      id: 4,
      title: "SUNHACKS'25 National Hackathon - Finalist",
      organization: "Sandip University, Nashik",
      bullets: [
        "Finalist in the 36-hour national hackathon.",
        'Built "City Pulse: Smart Urban Growth Platform."',
        "Strengthened innovation, teamwork, and technical problem-solving skills.",
      ],
      gallery: ["/assets/san1.jpeg", "/assets/san2.jpeg", "/assets/san3.jpeg", "/assets/san4.jpeg", "/assets/san5.jpeg", "/assets/san6.jpeg"],
      icon: Trophy,
    },
    {
      id: 5,
      title: "Google Developers Groups Agentathon - Finalist",
      organization: "Malla Reddy University, Hyderabad",
      bullets: [
        "Shortlisted among 1,000 teams and advanced to the Top 500.",
        "Participated in the 36-hour Agentic AI Hackathon.",
        "Gained valuable experience in AI development and collaborative innovation.",
      ],
      gallery: ["/assets/h1.jpeg", "/assets/h2.jpeg", "/assets/h3.jpeg", "/assets/h4.jpeg", "/assets/h5.jpeg", "/assets/h6.jpeg", "/assets/h7.jpeg", "/assets/h9.jpeg"],
      icon: Award,
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
    <section
      id="achievements"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded" />
        </motion.div>

        {/* Cards list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            const isExpanded = expandedId === achievement.id;

            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className="bg-card dark:bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border/40"
              >
                {/* Clickable card header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : achievement.id)}
                  className="w-full text-left px-4 py-4 md:px-6 md:py-5 focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    {/* Square gradient icon */}
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-sm">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-foreground leading-snug mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm font-semibold text-primary leading-tight">
                        {achievement.organization}
                      </p>
                      {!isExpanded && (
                        <p className="text-xs text-foreground/45 mt-1.5">
                          Explore the highlights and gallery
                        </p>
                      )}
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-0.5"
                    >
                      <ChevronDown className="w-5 h-5 text-foreground/40" />
                    </motion.div>
                  </div>
                </button>

                {/* Expanded panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border/40 px-4 py-5 md:px-6 md:py-6 bg-muted/20 space-y-5">
                        {/* Highlights */}
                        <div>
                          <h4 className="text-xs font-bold text-foreground/60 mb-3 uppercase tracking-widest">
                            Highlights
                          </h4>
                          <ul className="space-y-2">
                            {achievement.bullets.map((bullet, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.07 }}
                                className="flex gap-2 text-foreground/75 text-sm leading-relaxed"
                              >
                                <span className="text-primary font-bold flex-shrink-0 mt-0.5">✓</span>
                                <span>{bullet}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Gallery */}
                        <div>
                          <h4 className="text-xs font-bold text-foreground/60 mb-3 uppercase tracking-widest">
                            Gallery
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {achievement.gallery.map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-md transition-all group"
                              >
                                <img
                                  src={item}
                                  alt={`Gallery ${idx + 1}`}
                                  className="w-full h-32 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
