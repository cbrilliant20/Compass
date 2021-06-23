import "./Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faDraftingCompass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Nav = (props) => {
  const [showMenu, setShowMenu] = useState(false)
  
  if (showMenu) {
    return className="nav-links"
  }


  return (
    <nav>
      <div className="logo">
        <FontAwesomeIcon className="logo-icon" icon={faDraftingCompass} />
        <h1>COMPASS</h1>
      </div>
      <div className="burger">
        <FontAwesomeIcon
          className="svg-inline--fa fa-bars fa-w-20 burger-icon"
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
        />
        <div className="nav-links">
          <h1>Hi</h1>
        </div>
      </div>
    </nav>
  )
}

export default Nav