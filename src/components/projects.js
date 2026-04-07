function Projects() {

  const projectList = [
    {
      title: "FarmStand App",
      desc: "CRUD app using Node.js, Express, MongoDB"
    },
    {
      title: "Smoke Detector IoT",
      desc: "Detects smoke and sends alerts"
    }
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>

      {projectList.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
        </div>
      ))}

    </section>
  );
}

export default Projects;