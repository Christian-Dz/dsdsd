
import { Link, Outlet } from "react-router-dom"


export function Services (){
    return (
      <>
      <h1>SERVICES</h1>
      <nav className="menu">
        <Link to="/services">BEGING</Link>
        <Link to="/services/lists">LIST</Link>
        <Link to="/services/warranty">WARRANTY</Link>
        <Link to="/services/politics">POLITICS</Link>
      </nav>
      <Outlet/>
      </>
    )
  }