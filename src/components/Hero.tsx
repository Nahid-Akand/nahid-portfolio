export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p>Hello, I'm</p>

        <h1>Nahid Akand</h1>

        <h2>Full Stack Web Developer</h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly web applications using
          HTML, CSS, JavaScript, Node.js and MongoDB.
        </p>

        <div className="hero-buttons">
          <a
            href="https://github.com/Nahid-Akand?tab=repositories"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Projects
          </a>

          <a href="#contact" className="btn-outline">
            Hire Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/nahid.jpg" alt="Nahid Akanda" />
      </div>
    </section>
  );
}