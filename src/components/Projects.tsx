const projects = [
  {
    title: "FitLog – Workout Library",
    description:
      "A responsive workout library that helps users discover exercises, explore detailed workout information, save their favorite exercises, and create personalized daily workout plans. Built with reusable React components, client-side state management, and REST API integration.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "REST API",
      "Vercel",
    ],
    liveDemo:
      "https://workout-assignment-6-ldufg8q9s-nahid13.vercel.app/",
    github: "https://github.com/Nahid-Akand/workout-assignment-6",
  },
  {
    title: "DevConf – Conference & Event Management",
    description:
      "A modern conference and event management website created to showcase speakers, schedules, event information, registration details, and contact information. The interface focuses on clean layouts, accessibility, and responsive behavior across different screen sizes.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveDemo:
      "https://nahid-akand.github.io/B14-A01-DevConf-2026/",
    github:
      "https://github.com/Nahid-Akand/B14-A01-DevConf-2026",
  },
  {
    title: "Scrum Methodology Thesis",
    description:
      "A systematic literature review exploring Scrum methodology and Agile software development, covering key practices, principles, and their application within modern software development teams.",
    technologies: ["Scrum", "Agile", "Research"],
    liveDemo: "",
    github:
      "https://github.com/Nahid-Akand/My-thesis--of-scrum-mathodology/blob/main/498r_Scrum_methodology_2.pdf",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <span>↗</span>
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}