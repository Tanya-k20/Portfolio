import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, Award, BookOpen, Briefcase, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [expandedId, setExpandedId] = useState<number | null>(null);
const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

<img
  src="/assets/Tatac.png"
  alt="test"
  className="w-40 h-40 border"
/>

  const education = [
    {
      id: 1,
      type: "education",
      year: "2023",
      title: "Higher Secondary Education",
      institution: "Sri Ramakrishna Vidyalaya Matric Higher Secondary School",
      location: "Tiruppur, Tamil Nadu",
      duration: "Completed in March 2023",
      description: "Computer Science specialization with strong foundation in technology and analytical thinking",
      details: [
        "Computer Science Group",
        "Passed with 86%",
        " State-Level Basketball Player (Under-18)",
        " Winner of District-Level Basketball Tournament",
      ],
      gallery: [],
      icon: BookOpen,
    },
    {
      id: 2,
      type: "education",
      year: "2023-2027",
      title: "Bachelor of Technology",
      institution: "Dr. N.G.P. Institute of Technology",
      location: "Coimbatore, Tamil Nadu",
      duration: "2023 – April 2027 (Expected)",
      description: "B.Tech in Computer Science and Business Systems with focus on AI and innovation",
      details: [
        "Current CGPA: 8.0 / 10.0",
        "Active participant in national-level hackathons",
        "Involved in AI, full-stack development, IoT, and innovation-driven projects",
        "Hands-on experience in emerging technologies",
      ],
      gallery: [],
      icon: Award,
    },
    {
      id: 3,
      type: "experience",
      year: "2025",
      title: "Tata Group Data Visualisation Virtual Internship",
      institution: "Tata Group | Forage",
      location: "Virtual",
      duration: "January 2025",
      description: "Transformed business data into actionable insights through data visualization",
      details: [
        "Created data visualizations for business analysis",
        "Prepared strategic questions for senior client leadership meetings",
        "Designed analytical dashboards to support executive decision-making",
        "Strengthened problem-solving and business communication skills",
      ],
      gallery: ["/assets/Tatac.png",
    "/assets/Tata1.jpeg"
],
      icon: Briefcase,
    },
    {
      id: 4,
      type: "experience",
      year: "2025",
      title: " Summer Internship – IoT & 5G Innovation",
      institution: "Coimbatore Institute of Technology (CIT)",
      location: "Coimbatore, Tamil Nadu",
      duration: "16 June 2025 – 27 June 2025",
      description: "Next-Gen System Design: Integrated Internship in Communication & IoT Technologies",
      details: [
        "Explored IoT architectures and communication systems",
        "Gained practical exposure to next-generation technologies and smart connected systems",
        "Worked with concepts related to IoT and 5G innovations",
        "Enhanced technical and problem-solving skills through hands-on learning",
      ],
      gallery: ["/assets/citc.png", "/assets/cit1.png","/assets/cit2.png"],
      icon: Briefcase,
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
            <motion.p variants={itemVariants} className="text-justify text-foreground/70 mb-6 leading-relaxed">
              Hello! I'm Tanya, a final-year Computer Science and Engineering student at Dr. N.G.P. Institute of Technology with a strong passion for software engineering, artificial intelligence, and modern web technologies.            </motion.p>

            <motion.p variants={itemVariants} className="text-justify text-foreground/70 mb-6 leading-relaxed">
             I enjoy transforming ideas into practical solutions by building scalable applications and intelligent systems. My experience includes developing full-stack applications, backend services, and AI-powered solutions using technologies such as Python, FastAPI, React, PostgreSQL, Docker, and cloud platforms.            </motion.p>

            <motion.p variants={itemVariants} className="text-justify text-foreground/70 mb-6 leading-relaxed">
              I am particularly interested in designing efficient software systems, exploring emerging AI technologies, and solving real-world problems through technology. I value clean code, continuous learning, and collaboration, and I am always eager to take on new challenges that help me grow as a developer.
            </motion.p>

            <motion.p variants={itemVariants} className="text-justify text-foreground/70 mb-6 leading-relaxed">
             Currently, I am seeking opportunities to contribute to innovative projects, gain industry experience, and work alongside talented teams while continuing to strengthen my technical and professional skills.
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
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-12 font-display"> Education &  Experience </h3>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent" />

                {/* Timeline items */}
                <div className="space-y-8">
                  {education.map((item, index) => {
                    const Icon = item.icon;
                    const isExpanded = expandedId === item.id;
                    const isPrimary = item.type === "education";

                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative pl-20"
                      >
                        {/* Timeline dot */}
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className={`absolute left-0 top-2 w-12 h-12 rounded-full flex items-center justify-center border-4 ${
                            isPrimary
                              ? "bg-gradient-to-br from-primary to-secondary border-primary/30 shadow-lg shadow-primary/30"
                              : "bg-gradient-to-br from-secondary to-accent border-secondary/30 shadow-lg shadow-secondary/30"
                          }`}
                        >
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </motion.div>

                        {/* Content card */}
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : item.id)}
                          className="w-full text-left"
                        >
                          <motion.div
                            whileHover={{ y: -4 }}
                            className={`glass-effect dark:glass-effect-dark p-6 rounded-xl hover:shadow-lg transition-all duration-300 ${
                              isExpanded ? "ring-2 ring-primary/50" : ""
                            }`}
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="text-sm font-bold px-3 py-1 rounded-full w-fit mb-2 bg-primary/20 text-primary">
                                  {item.year}
                                </div>
                                <h4 className="text-lg font-bold text-foreground mb-2">
                                  {item.title}
                                </h4>
                                <p className={`text-sm font-semibold mb-1 ${isPrimary ? "text-primary" : "text-secondary"}`}>
                                  {item.institution}
                                </p>
                                <p className="text-sm text-foreground/60">
                                   {item.location} • {item.duration}
                                </p>
                              </div>

                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className={`w-5 h-5 ${isPrimary ? "text-primary" : "text-secondary"}`} />
                              </motion.div>
                            </div>
                          </motion.div>
                        </button>

                        {/* Expanded content */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.3 }}
                              className="glass-effect dark:glass-effect-dark p-6 rounded-xl border-l-4 border-primary/50"
                            >
                              <p className="text-foreground/80 mb-4">{item.description}</p>

                              <div className="mb-6">
                                <h5 className="font-semibold text-foreground mb-3">
                                  {item.type === "education" ? "Highlights" : "Key Contributions"}
                                </h5>
                                <ul className="space-y-2">
                                  {item.details.map((detail, idx) => (
                                    <motion.li
                                      key={idx}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.05 }}
                                      className="flex gap-2 text-foreground/70 text-sm"
                                    >
                                      <span className={`font-bold min-w-fit ${isPrimary ? "text-primary" : "text-secondary"}`}>
                                        ✓
                                      </span>
                                      <span>{detail}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>

    {item.gallery.length > 0 && (
  <div>
    <h5 className="font-semibold text-foreground mb-3">
      Gallery
    </h5>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
      {item.gallery.map((galleryItem, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.05 }}
          whileHover={{ scale: 1.02 }}
          className="rounded-lg border border-primary/20 overflow-hidden cursor-pointer hover:shadow-lg transition-all"
          onClick={() => setSelectedImage(galleryItem)}
        >
          <img
            src={galleryItem}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      ))}
    </div>
  </div>
)}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
<AnimatePresence>
  {selectedImage && (
    <motion.div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImage(null)}
    >
      <motion.img
        src={selectedImage}
        alt="Preview"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
}
