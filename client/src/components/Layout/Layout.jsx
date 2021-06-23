import "./Layout.css"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"

const Layout = (props) => {
  const {children} = props
  return (
    <div className="layout">
      <Nav className="layout-nav"/>
      <div className="layout-children">{children}</div>
      <Footer className="layout-footer" />
    </div>
  )
}

export default Layout