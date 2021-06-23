import "./Header.css"
import Nav from "../Nav/Nav"
import { faDraftingCompass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"


const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  let nav
  if (showMenu) {
    nav = <Nav />
  }

  return (
    <header>
      <Link to="/">
      <div className="logo">
        <FontAwesomeIcon className="logo-icon" icon={faDraftingCompass} />
        <h1>COMPASS</h1>
        </div>
      </Link>
      <div className="burger">
        <FontAwesomeIcon
          className="burger-icon"
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      {nav}
    </header>
  )
}

export default Header