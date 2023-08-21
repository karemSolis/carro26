import { Card } from "react-bootstrap";
import "./Item.css"
import { Link } from 'react-router-dom';


const Item = ({id, name, img, price, stock}) => {
    
    return (

    
        <Card className= "CardItem" > 
        
            <header className="Header"> 
                <h4 className= "ItemHeader">
                    {name}
                    </h4>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info" >
                    Precio: ${price}
                </p>
                <p className="Info" >
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>

            </Card>
    )



}

export default Item
