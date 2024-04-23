
import { Link, NavLink } from "react-router-dom"


export function Menu (){
    return (
        <>
        <nav className={'menu'}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/productos"}>Products</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/redirection"}>Redirection</Link>
            <Link to={"/notfound"}>Error 404</Link>   {/* Esto se queda asi?? */}
        </nav>
        <nav className={"menu"}>
            {/* isActive es una propiedad de NavLink */}
            <NavLink className={({isActive}) => (isActive ? "active-link" : null)} to={"/"}>Home</NavLink>
            <NavLink className={({isActive}) => (isActive ? "active-link" : null)} to={"/about"}>About</NavLink>
            <NavLink className={({isActive}) => (isActive ? "active-link" : null)} to={"/contact"}>Contact</NavLink>
        </nav>
        </>
    )
}
