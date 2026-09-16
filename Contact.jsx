export default function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container contact-inner">
        <span className="eyebrow">03 / Get in touch</span>
        <h2 id="contact-title">
          Have a question
          <br />
          worth exploring?
        </h2>
        <p>I’d like to hear about it.</p>
        <a className="contact-email" href="mailto:avdhootgupta0@gmail.com">
          avdhootgupta0@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-socials">
          <a
            href="https://github.com/Modeldog8197"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗<span className="sr-only"> (new tab)</span>
          </a>
          <a
            href="https://www.linkedin.com/in/avdhoot-gupta-1841aa359/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗<span className="sr-only"> (new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
