 import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartProvider  ({ children }){

const [cart, setCart] = useState([]);

console.log('carrito', cart);

    function addProduct(item, count) {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, count: product.count + count } : product;
            }));
        } else {
            setCart([...cart, { ...item, count }]);
        }
    }

const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.count * act.price, 0 ); 
}

const totalProducts = () => { return cart.reduce ((acumulador, productoActual) => acumulador + productoActual.count, 0);}

const clearCart = () => setCart([]);

const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));



    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}  
export default CartProvider; 

