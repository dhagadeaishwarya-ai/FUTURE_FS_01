import { motion } from "framer-motion";
export default function Hero() {
    return (
        <motion.section
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
    >
        <motion.h1>
            Hi, I'm Aishwarya 👋
      </motion.h1>
      <motion.h2>Frontend Developer</motion.h2>
      <motion.p>I build responsive and interactive web apps.</motion.p>

      <div className="buttons">
        <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          View Projects
        </motion.a>
        <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Contact Me
        </motion.a>
      </div>
    </motion.section>
  );
}