const certifications = [
  {
    title: "Data Analytics with AI",
    issuer: "SoloLearn",
    year: "2025",
    description:
      "Completed a certification focused on data analytics concepts and the use of AI in working with data.",
    certificate:
      "https://www.sololearn.com/certificates/CC-EPO6OELB",
  },
  {
    title: "Introduction to JavaScript",
    issuer: "SoloLearn",
    year: "2024",
    description:
      "Built a foundation in JavaScript fundamentals, programming concepts, and interactive web development.",
    certificate:
      "https://www.sololearn.com/certificates/CC-IXV2BOG7",
  },
  {
    title: "Introduction to CSS",
    issuer: "SoloLearn",
    year: "2024",
    description:
      "Learned the fundamentals of CSS for creating structured, styled, and responsive web interfaces.",
    certificate:
      "https://www.sololearn.com/certificates/CC-VYXHPFIP",
  },
  {
    title: "Introduction to HTML",
    issuer: "SoloLearn",
    year: "2024",
    description:
      "Learned the fundamentals of HTML and the structure of modern web pages.",
    certificate:
      "https://www.sololearn.com/certificates/CC-0MMKDVOQ",
  },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="certifications-heading">
        <span className="certifications-eyebrow">
          Continuous Learning
        </span>

        <h2 className="section-title">Certifications</h2>

        <p className="certifications-intro">
          A collection of certifications that reflect my commitment to
          continuously learning and expanding my technical knowledge.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((certificate, index) => (
          <article
            className="certificate-card"
            key={certificate.title}
          >
            <div className="certificate-top">
              <span className="certificate-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="certificate-year">
                {certificate.year}
              </span>
            </div>

            <div className="certificate-icon">
              ✓
            </div>

            <div className="certificate-content">
              <span className="certificate-issuer">
                {certificate.issuer}
              </span>

              <h3>{certificate.title}</h3>

              <p>{certificate.description}</p>
            </div>

            <div className="certificate-footer">
              <span className="certificate-label">
                Verified Certificate
              </span>

              <a
                href={certificate.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate
                <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}