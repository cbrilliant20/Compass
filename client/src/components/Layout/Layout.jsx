import "./Layout.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = (props) => {
  const {children, currentUser, handleLogout} = props
  return (
    <div className="layout">
      <Header className="layout-header" currentUser={currentUser} handleLogout={handleLogout}/>
      <div className="layout-children">{children}</div>
      <Footer className="layout-footer" />
    </div>
  )
}

export default Layout