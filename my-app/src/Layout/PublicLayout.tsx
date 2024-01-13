import { Outlet } from "react-router-dom"
import NavBar from "../Component/NavBar"
import  './style-publiclayout.css'
import Footer from "../Component/Footer/Footer"

const PublicLayout = () => {

    return (
        <>
          <NavBar />
          <Outlet />
          <div className="title">
            <h1 >See Our Latest News</h1>


          <Footer />
          </div>
        </>
      );
      
}

export default PublicLayout