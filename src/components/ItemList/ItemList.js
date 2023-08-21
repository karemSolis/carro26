// import "./ItemList.css"
// import Item from "../Item/Item"

// const ItemList = ({products}) => {
//     return(
//         <div className= 'ListGroup'>
//             {products.map(prod => <Item key={prod.id} {...prod}/>)}

//         </div>
//     )
// }

// export default ItemList

import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'; 

const ItemList = ({ products }) => {
  return (
    <div className="ListGroup"> 
      {products.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          img={product.img}
          price={product.price}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

export default ItemList;
