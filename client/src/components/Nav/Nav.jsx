import "./Nav.css"
import { Link } from "react-router-dom"

const Nav = () => {  
  return (
    <nav>
      <Link to="/trips">Trips</Link>
      <Link to="/resources">Resources</Link>
      <h3>Logout</h3>
    </nav>
  )
}

export default Nav