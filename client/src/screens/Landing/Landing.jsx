import "./Landing.css"

import { faDraftingCompass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import wave from "../../Assets/wave.mp4"
// import coast from "../../Assets/coast.mp4"
// import bird from "../../Assets/bird.mp4"
import cove from "../../Assets/cove.mp4"
import { Link } from "react-router-dom"

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
        <source src={cove} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h2>Every Explorer Needs A <span className="landing-span">Compass</span></h2>
        <h3>Sign In below to start planning your next adventure.</h3>
        <Link to='/login'>
          <button>Sign In</button>
          </Link>
      </div>
    </div>
  )
}

export default Landing