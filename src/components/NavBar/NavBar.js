import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h3>Ferretería Carro 26</h3>
            </Link>
            
            <div className="Categories" >
                <NavLink to={'/category/Pinturas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Pinturas</NavLink>
                <NavLink to={'/category/Solventes'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Solventes</NavLink>
                <NavLink to={'/category/Superficie'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Solventes</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
} 

export default NavBar

