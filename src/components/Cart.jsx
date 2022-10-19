import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartCtx } from "../context/cartContext";
import ItemCart from "./ItemCart";
import "../button/button.css"

function Cart() {
    const { cart, totalPrice} = useContext(cartCtx);

    if (cart.length === 0) {
        return(
            <>
            <p className='text'>No hay elementos en el carrito</p>'
            <Link className='btnCart itemCart' to="/home">Hacer Compras</Link>
            </>
        );
    }

    return (
        <div>
            {
                cart.map(item => <ItemCart key={item.id} product={item} />)
            }
            <h3 className='itemCart, text'>
                Total: ${totalPrice()}
            </h3>
        </div>
    )
}

export default Cart