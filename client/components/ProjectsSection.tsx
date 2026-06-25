import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export default function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Multi-Agent Conversational Chatbot",
      description: "Built a multi-agent LLM chatbot with collaborative task handling and memory-based context management for intelligent responses.",
      category: "ai",
      tech: ["LLMs", "Lang Chain", "Python", "FastAPI", "AI Agents"],
      github: "https://github.com/Tanya-k20",
      image: "/assets/ai1.png",
      live: "#",
      gradient: "from-amber-700 to-amber-600",
    },
    {
      id: 2,
      title: "Image Generator using GenAI",
      description: "Built a powerful image generation tool leveraging generative AI models with custom prompts and advanced filtering capabilities.",
      category: "ai",
      tech: ["GenAI", "Python", "FastAPI", "React", "DALL-E/Stable Diffusion"],
      github: "https://github.com/Tanya-k20",
      image: "/assets/ai2.png",
      live: "#",
      gradient: "from-orange-600 to-amber-500",
    },
    {
      id: 7,
      title: "AI OS for Students (Productivity Platform)",
      description: "Developed an AI-powered student platform with task management, AI agents, and intelligent productivity features.",
      category: "ai",
      tech: ["FastAPI", "PostgreSQL", "RAG", "Vector DB", "JWT", "Docker"],
      github: "https://github.com/Tanya-k20",
      image: "/assets/ai3.png",
      live: "#",
      gradient: "from-yellow-700 to-amber-700",
    },
    {
      id: 8,
      title: "Plant Disease Detection System",
      description: "Built EfficientNet-based deep learning model for crop disease classification with AI-generated treatment recommendations.",
      category: "ai",
      tech: ["Python", "EfficientNet", "Deep Learning", "TensorFlow", "AI/ML"],
      github: "https://github.com/Tanya-k20",
      image: "/assets/p8.png",
      live: "#",
      gradient: "from-yellow-700 to-amber-600",
    },
    {
      id: 9,
      title: "Community Road Damage Reporting System",
      description: "Platform for citizens to report road issues with images and location tagging, plus admin dashboard for monitoring.",
      category: "web",
      tech: ["React", "Python", "FastAPI", "PostgreSQL", "Geolocation"],
      github: "https://github.com/Tanya-k20",
      image: "/assets/p9.png",
      live: "#",
      gradient: "from-amber-600 to-orange-500",
    },
    {
      id: 10,
      title: "GenAI Financial Data Analysis",
      description: "Applied GenAI techniques for financial data analysis with Power BI dashboards for data visualization and decision support.",
      category: "ai",
      tech: ["GenAI", "Power BI", "Data Analysis", "Financial Systems", "Python"],
      github: "#",
      image: "/assets/ai5.png",
      live: "#",
      gradient: "from-amber-800 to-amber-700",
    },
  ];

  const filters = ["all", "web", "ai", "apps"];

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" ref={ref} className="relative py-20 md:py-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-6">

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="mb-12"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
      Featured <span className="gradient-text">Projects</span>
    </h2>

    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded" />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="flex gap-3 mb-12 flex-wrap"
  >
    {filters.map((f) => (
      <button
        key={f}
        onClick={() => setFilter(f)}
        className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
          filter === f
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground/70"
        }`}
      >
        {f}
      </button>
    ))}
  </motion.div>

  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    {filteredProjects.map((project) => (
      <motion.div
        key={project.id}
        variants={itemVariants}
        className="group glass-effect dark:glass-effect-dark rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
      >
        <div className="h-48 relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 hover:bg-white/30 rounded-lg text-white"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 hover:bg-white/30 rounded-lg text-white"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">
            {project.title}
          </h3>

          <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>

</div>
    </section>
  );
}
