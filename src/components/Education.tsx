export default function Education() {
  return (
    <section id="education">
      <div className="education-heading">
        <span className="education-eyebrow">Academic Journey</span>
        <h2 className="section-title">Education</h2>

        <p className="education-intro">
          My academic journey gave me a strong foundation in computer
          science and shaped my interest in building software and web
          applications.
        </p>
      </div>

      <div className="education-showcase">
        <div className="education-decoration education-decoration-one"></div>
        <div className="education-decoration education-decoration-two"></div>

        <div className="education-main-card">
          <div className="education-card-top">
            <div className="education-degree-icon">
              🎓
            </div>

            <div className="education-status">
              <span className="status-dot"></span>
              Completed
            </div>
          </div>

          <div className="education-main-content">
            <span className="education-year">
              2019 — 2024
            </span>

            <h3>North South University</h3>

            <h4>
              Bachelor of Science in Computer Science & Engineering
            </h4>

            <p>
              Completed my B.Sc. in Computer Science & Engineering,
              developing a strong understanding of programming, software
              development, databases, and core computer science concepts.
            </p>
          </div>

          <div className="education-bottom">
            <div className="education-detail">
              <span>Degree</span>
              <strong>B.Sc.</strong>
            </div>

            <div className="education-divider"></div>

            <div className="education-detail">
              <span>Field</span>
              <strong>Computer Science</strong>
            </div>

            <div className="education-divider"></div>

            <div className="education-detail">
              <span>Graduated</span>
              <strong>Dec 2024</strong>
            </div>
          </div>
        </div>

        <div className="education-side-card">
          <span className="education-side-icon">⌘</span>

          <h4>What I Built Along the Way</h4>

          <p>
            My academic experience helped me develop an interest in
            software engineering, web development, and solving practical
            problems through technology.
          </p>

          <div className="education-focus-list">
            <span>Programming</span>
            <span>Web Development</span>
            <span>Software Engineering</span>
            <span>Database Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
}