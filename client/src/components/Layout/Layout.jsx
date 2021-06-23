import "./Layout.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = (props) => {
  const {children, currentUser} = props
  return (
    <div className="layout">
      <Header className="layout-header" currentUser={currentUser}/>
      <div className="layout-children">{children}</div>
      <Footer className="layout-footer" />
    </div>
  )
}

export default Layout