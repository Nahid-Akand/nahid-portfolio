import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="#home" className="footer-logo">
              Nahid
            </Link>

            <p>
              Full Stack Web Developer focused on building modern,
              responsive, and user-friendly web experiences.
            </p>

            <div className="footer-status">
              <span></span>
              Open to Work
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Explore</h3>

              <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#projects">Projects</Link>
            </div>

            <div className="footer-column">
              <h3>More</h3>

              <Link href="#education">Education</Link>

              <Link href="#certifications">
                Certifications
              </Link>

              <Link href="#contact">Contact</Link>

              {/* Download CV */}
              <a
                href="/images/nahid-portf.pdf"
                download="Nahid-Akanda-CV.pdf"
              >
                Download CV
              </a>
            </div>

            <div className="footer-column">
              <h3>Connect</h3>

              <a
                href="https://github.com/Nahid-Akand"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nahid-akand-9b9847226/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://www.facebook.com/nahid.akand.33"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Nahid Akanda. All Rights Reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to top
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}