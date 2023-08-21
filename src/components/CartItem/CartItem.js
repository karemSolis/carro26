/*import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { HiOutlineTrash } from "react-icons/hi";
import "./CartItem.css";

const CartItem = ({ ...p }, index) => {
  const { removeItem } = useContext(CartContext);
  const subtotal = p.quantity * p.total; 
 

  return (
    <tr>
      <td>{p.name}</td>
      <td>{p.quantity}</td>
      <td>${p.total}</td>
      <td>
        ${subtotal}
        <HiOutlineTrash onClick={() => removeItem(p.id)} size={24} />
      </td>
    </tr>
  );
};

export default CartItem;*/

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./CartItem.css"

const CartItem = ({id, name, img, price, quantity}) => {

    const { removeItem } = useContext(CartContext)
    return (
        <Card className='cardItem'>
            <header className='header'>
                <h2 className='title'>
                    {name} 
                </h2>
            </header>
            <section>
                <p className='info'>
                    Cantidad {quantity}
                </p>
                <p className='info'>
                    Precio Unidad: ${price}
                </p>
                <p className='info'>
                    Subtotal: ${price * quantity}
                </p>
            </section>
            <footer className='itemFooter'>
                <Button variant="dark" onClick={() => removeItem(id)}>
                    <Link to={`/cart`} className='OptionItem'>Eliminar</Link>
                </Button>
            </footer>
        </Card>
    )
}

export default CartItem

