// Projects.jsx
import { projects } from "../data/data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects">
      {projects.map((p, index) => (
        <motion.div key={index} className="project-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.4 }}
        >
          <img src={p.image} alt={p.title} />
          <h3>{p.title}</h3>
          <p>{p.tech}</p>

          <div className="project-buttons">
            <a href={p.live} target="_blank" rel="noreferrer" className="project-button">Live</a>
            <a href={p.github} target="_blank" rel="noreferrer" className="project-button">Code</a>
          </div>
        </motion.div>
      ))}
    </section>
  );
}