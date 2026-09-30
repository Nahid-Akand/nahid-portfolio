import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="about-image-glow"></div>

          <div className="about-image">
            <Image
              src="/images/my my.jpg"
              alt="Nahid Akand"
              width={500}
              height={600}
            />
          </div>
        </div>

        <div className="about-content">
          <span className="about-label">A little about me</span>

          <h3>
            Turning ideas into
            <span> useful digital experiences.</span>
          </h3>

          <p>
            I’m Nahid Akand, a Computer Science graduate and aspiring
            Full Stack Web Developer who enjoys building modern and
            practical web applications.
          </p>

          <p>
            My journey in web development has led me to work with
            technologies such as React, Next.js, TypeScript, Node.js,
            Express.js, MongoDB, and MySQL. I enjoy learning new
            technologies and improving the way I build and structure
            applications.
          </p>

          <p>
            I’m particularly interested in creating responsive interfaces,
            writing clean and maintainable code, and turning ideas into
            products that are simple and enjoyable to use.
          </p>

          <div className="about-info">
            <div className="about-info-item">
              <span className="info-label">Name</span>
              <span className="info-value">Nahid Akand</span>
            </div>

            <div className="about-info-item">
              <span className="info-label">Email</span>
              <span className="info-value">
                jahidnahid19@gmail.com
              </span>
            </div>

            <div className="about-info-item">
              <span className="info-label">Location</span>
              <span className="info-value">
                Dhaka, Bangladesh
              </span>
            </div>

            <div className="about-info-item">
              <span className="info-label">Availability</span>

              <span className="info-value available">
                <span></span>
                Open to Work
              </span>
            </div>
          </div>

          {/* Download CV */}
          <a
            href="/images/nahid-portf.pdf"
            download="Nahid-Akanda-CV.pdf"
            className="btn about-cv-btn"
          >
            Download CV
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}