import "./Layout.css"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"

const Layout = (props) => {
  const {children, currentUser} = props
  return (
    <div className="layout">
      <Nav className="layout-nav" currentUser={currentUser}/>
      <div className="layout-children">{children}</div>
      <Footer className="layout-footer" />
    </div>
  )
}

export default Layout