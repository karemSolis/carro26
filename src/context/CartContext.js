import React, { createContext, useState } from 'react';





export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])
    
    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart (item.id)) {
            setCart(prev => [...prev, {...item, quantity}])

        }else{
            console.error("El producto ya está en carrito")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart (cartUpdated)
    }

    const clearCart =() =>{
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <div className='cart-container'>
        <CartContext.Provider className="Provider" value={
            { 
            cart, 
            addItem, 
            removeItem, 
            clearCart
            }}>
            {children}
        </CartContext.Provider>
        </div>
    )

}

export default CartContext;