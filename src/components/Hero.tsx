import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I’m</p>

        <h1>
          Nahid Akand
        </h1>

        <h2>
          Full Stack Web Developer
        </h2>

        <p className="hero-description">
          I build modern, responsive, and user-friendly web applications
          with React, Next.js, TypeScript, Node.js, and MongoDB. I enjoy
          turning ideas into clean, practical, and engaging digital
          experiences.
        </p>

        <div className="hero-buttons">
          <Link href="#projects" className="btn">
            View My Work
            <span>↗</span>
          </Link>

          <Link href="#contact" className="btn btn-outline">
            Let’s Connect
          </Link>
        </div>

        <div className="hero-stack">
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image-glow"></div>

        <div className="hero-image">
          <Image
            src="/images/nahid.jpg"
            alt="Nahid Akanda"
            width={420}
            height={420}
            priority
          />
        </div>

        <div className="hero-badge">
          <span>✦</span>
          Open to Work
        </div>
      </div>
    </section>
  );
}