import "./Footer.css"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <FontAwesomeIcon className="copyright-icon" icon={faCopyright} />
        <p>Cameron Brilliant</p>
      </div>
      <div className="socials">
        <a href="https://github.com/cbrilliant20" target="_blank">
          <FontAwesomeIcon className="social-icon" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/cameron-brilliant/"
          target="_blank"
        >
          <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
        </a>
      </div>
    </footer>
  )
}

export default Footer