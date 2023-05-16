import Nav from '../Nav'
import Footer from '../Footer'

const Layout = ({hasHero, children}) => {
  return(
    <>
      <Nav/>
        <div className="page-body">
          {children}
        </div>
      <Footer/>
    </>
  )
}

export default Layout
