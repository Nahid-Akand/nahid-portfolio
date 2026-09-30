export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <h2 className="logo">Nahid</h2>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#education">Education</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

       <a
  href="/images/nahid-portf.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn"
>
  Download CV
</a>
      </nav>
    </header>
  );
}