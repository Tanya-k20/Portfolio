import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const socials = [
    { icon: Mail, link: "mailto:karupstanya@gmail.com", label: "Email" },
    { icon: Linkedin, link: "https://linkedin.com/in/tanyak20", label: "LinkedIn" },
    { icon: Github, link: "https://github.com/Tanya-k20", label: "GitHub" },
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
    <section id="contact" ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you. Get in touch and let's create something amazing.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="glass-effect dark:glass-effect-dark p-8 rounded-xl">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <a
                href="mailto:karupstanya@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                karupstanya@gmail.com
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-effect dark:glass-effect-dark p-8 rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      title={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-effect dark:glass-effect-dark p-8 rounded-xl"
          >
            <div className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  submitted
                    ? "bg-green-500 text-white"
                    : "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/40"
                }`}
              >
                {submitted ? "✓ Message Sent!" : "Send Message"}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
