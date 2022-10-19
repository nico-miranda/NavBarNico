import React, { useContext } from 'react'; 
import '../styles/itemCart.css';
import '../button/button.css';
import { cartCtx } from '../context/cartContext';
import { Link } from "react-router-dom";

import CheckoutForm from './CheckoutForm';

function ItemCart({item}) {
    
    const { cart, deleteItem, emptyCart } = useContext(cartCtx)
    
    

    if (cart.length > 0) {
        return (
                <div>
                    {
                        cart.map((item, index) => {
                            return <div className='itemCart' key={index}>
                                <div>
                                    <img src={item.img} alt={item.title}></img>
                                </div>
                                <div>
                                    <h3>{item.title}</h3>
                                    <h2>Precio: ${item.price}</h2>
                                    <h3>Unidades: {item.count}</h3>
                                </div>
                                <div>
                                    <button onClick={() => deleteItem(item.id)} className='btn itemCart'>Delete</button>
                                </div>
                                <CheckoutForm/>
                            </div>
                        })
                    }
                    <div>
                    <button onClick={() => emptyCart()} className='btn itemCart '>Vaciar Carrito</button>
                    </div>
                </div>
        )
    }

    return (
        <div>
            <h1>Este es tu carrito</h1>
            <Link to={'/home'}><button className='btn'>Ir a la Home</button></Link>
        </div>
    )
}

export default ItemCart;