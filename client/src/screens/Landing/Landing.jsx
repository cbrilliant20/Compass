import "./Landing.css"

import { faDraftingCompass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import wave from "../../Assets/wave.mp4"
import coast from "../../Assets/coast.mp4"
const Landing = () => {


  return (
    <div className="landing-page">
     <div className="landing-header">
      <div className="landing-logo">
        <FontAwesomeIcon className="logo-icon" icon={faDraftingCompass} />
        <h1>COMPASS</h1>
      </div>
      </div>
      <video className="video" muted loop autoPlay >
        <source src={coast} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, totam.</h3>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Landing