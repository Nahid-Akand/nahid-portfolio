const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend & Database",
    description: "Developing server-side applications and working with data.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Firebase",
    ],
  },
  {
    title: "Tools & Languages",
    description: "Tools and programming languages I use in development.",
    skills: [
      "Git",
      "GitHub",
      "Java",
      "C++",
      "C#",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills & Technologies</h2>

      <p className="skills-intro">
        I work with modern web technologies to build responsive,
        user-friendly, and maintainable applications.
      </p>

      <div className="skills-container">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <div className="skill-group-header">
              <span className="skill-icon">✦</span>

              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </div>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-badge" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}