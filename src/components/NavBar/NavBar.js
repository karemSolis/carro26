import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="NavBar flex-container">
            <Link style={{color: 'inherit', paddingLeft: 13, textDecoration: 'none'}} to='/'>
            <h3 className="FerreteríaCarro26" >Ferretería Carro 26</h3>
            </Link>
            
            <div className="Categories" >
                <NavLink style={{color: 'inherit', paddingLeft: 13, textDecoration: 'none'}} to={'/category/Pinturas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Pinturas</NavLink>
                <NavLink style={{color: 'inherit', paddingLeft: 13, textDecoration: 'none'}} to={'/category/Solventes'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Solventes</NavLink>
                <NavLink style={{color: 'inherit', paddingLeft: 13, textDecoration: 'none'}} to={'/category/Superficie'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Solventes</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
} 

export default NavBar

