import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Ferretería Carro 26</h3>
            <div>
                <button>Pinturas</button>
                <button>Solventes</button>
                <button>Superficie</button>
            </div>
            <CartWidget/>
        </nav>
    )
} 

export default NavBar