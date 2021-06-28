import "./Nav.css"
import { Link } from "react-router-dom"
import { removeToken } from "../../services/auth"

const Nav = (props) => {
  const { currentUser, handleLogout} = props

  // const handleLogout = () => {
  //   setCurrentUser(null);
  //   localStorage.removeItem('authToken');
  //   removeToken();
  // };
  

  return (
    <nav>
      <Link to="/trips">Trips</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/" onClick={handleLogout}>Logout</Link>
    </nav>
  )
}

export default Nav