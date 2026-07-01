export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">
          © {year} Avdhoot Gupta. Built with React & ☕
        </p>
        <div className="footer__links">
          <a
            href="https://github.com/Modeldog8197"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/avdhoot-gupta-1841aa359/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
